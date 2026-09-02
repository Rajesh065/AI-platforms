import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  User,
  Employee,
  TokenPurchase,
  TokenRequest,
  TokenUsageRecord,
  TokenTransaction,
  CompanyInventory,
  UserRole
} from '../types';
import {
  storageService,
  INITIAL_ADMIN_USER,
  INITIAL_EMPLOYEE_USERS
} from '../services/storageService';

interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
}

interface TokenContextType {
  currentUser: User;
  role: UserRole;
  inventory: CompanyInventory;
  employees: Employee[];
  purchases: TokenPurchase[];
  requests: TokenRequest[];
  usageRecords: TokenUsageRecord[];
  transactions: TokenTransaction[];
  toasts: ToastMessage[];
  showToast: (message: string, type?: 'success' | 'error' | 'info' | 'warning') => void;
  removeToast: (id: string) => void;
  loginAs: (user: User) => void;
  switchRole: (role: UserRole) => void;
  demoUsers: { admin: User; employees: User[] };
  
  recordTokenPurchase: (purchase: Omit<TokenPurchase, 'id' | 'addedBy'>) => boolean;
  addEmployee: (employee: Omit<Employee, 'id' | 'usedTokens' | 'remainingTokens' | 'usagePercentage'>) => boolean;
  updateEmployee: (employee: Employee) => boolean;
  removeEmployee: (employeeId: string) => boolean;
  adjustEmployeeAllocation: (employeeId: string, newAllocatedTokens: number, reason: string) => boolean;
  revokeUnusedTokens: (employeeId: string, amountToRevoke: number, reason: string) => boolean;
  approveTokenRequest: (requestId: string, approvedAmount: number, remarks: string, isPartial: boolean) => boolean;
  rejectTokenRequest: (requestId: string, remarks: string) => boolean;
  
  submitTokenRequest: (request: Omit<TokenRequest, 'id' | 'status' | 'requestedAt'>) => boolean;
  consumeTokens: (employeeId: string, tokensToUse: number, projectName: string, taskName: string, modelUsed: string, description: string) => boolean;
  resetPlatformData: () => void;
}

const TokenContext = createContext<TokenContextType | undefined>(undefined);

export const TokenProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User>(() => storageService.getActiveUser());
  const [inventory, setInventory] = useState<CompanyInventory>(() => storageService.getInventory());
  const [employees, setEmployees] = useState<Employee[]>(() => storageService.getEmployees());
  const [purchases, setPurchases] = useState<TokenPurchase[]>(() => storageService.getPurchases());
  const [requests, setRequests] = useState<TokenRequest[]>(() => storageService.getRequests());
  const [usageRecords, setUsageRecords] = useState<TokenUsageRecord[]>(() => storageService.getUsageRecords());
  const [transactions, setTransactions] = useState<TokenTransaction[]>(() => storageService.getTransactions());
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = (message: string, type: 'success' | 'error' | 'info' | 'warning' = 'success') => {
    const id = `toast-${Date.now()}-${Math.random()}`;
    setToasts(prev => [...prev, { id, type, message }]);
    setTimeout(() => removeToast(id), 4000);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const refreshState = () => {
    const updatedInventory = storageService.recalculateAndSaveInventory();
    setInventory(updatedInventory);
    setEmployees(storageService.getEmployees());
    setPurchases(storageService.getPurchases());
    setRequests(storageService.getRequests());
    setUsageRecords(storageService.getUsageRecords());
    setTransactions(storageService.getTransactions());
  };

  const logTransaction = (
    employeeId: string,
    employeeName: string,
    actionType: TokenTransaction['actionType'],
    tokenAmount: number,
    description: string
  ) => {
    const newTx: TokenTransaction = {
      id: `tx-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      timestamp: new Date().toLocaleString('en-US', {
        year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit', hour12: true
      }),
      employeeId,
      employeeName,
      actionType,
      tokenAmount,
      description,
      performedBy: `${currentUser.name} (${currentUser.role})`
    };
    const currentTxs = storageService.getTransactions();
    const updated = [newTx, ...currentTxs];
    storageService.saveTransactions(updated);
    setTransactions(updated);
  };

  const loginAs = (user: User) => {
    storageService.saveActiveUser(user);
    setCurrentUser(user);
    showToast(`Signed in as ${user.name} (${user.role})`, 'info');
  };

  const switchRole = (newRole: UserRole) => {
    if (newRole === 'ADMIN') {
      loginAs(INITIAL_ADMIN_USER);
    } else {
      loginAs(INITIAL_EMPLOYEE_USERS[0]);
    }
  };

  const recordTokenPurchase = (purchaseData: Omit<TokenPurchase, 'id' | 'addedBy'>): boolean => {
    const newPurchase: TokenPurchase = {
      ...purchaseData,
      id: `pur-${Date.now()}`,
      addedBy: currentUser.name
    };
    const currentPurchases = storageService.getPurchases();
    storageService.savePurchases([newPurchase, ...currentPurchases]);

    logTransaction(
      'COMPANY',
      'Company Token Inventory Pool',
      'PURCHASE',
      newPurchase.tokensPurchased,
      `Purchased ${newPurchase.tokensPurchased.toLocaleString()} tokens from ${newPurchase.providerName} ($${newPurchase.costUsd.toLocaleString()} USD, Inv #${newPurchase.invoiceNumber})`
    );

    refreshState();
    showToast(`Successfully purchased ${newPurchase.tokensPurchased.toLocaleString()} tokens from ${newPurchase.providerName}!`, 'success');
    return true;
  };

  const addEmployee = (empData: Omit<Employee, 'id' | 'usedTokens' | 'remainingTokens' | 'usagePercentage'>): boolean => {
    if (empData.allocatedTokens > inventory.remainingAvailableTokens) {
      showToast(`Cannot allocate ${empData.allocatedTokens.toLocaleString()} tokens. Company only has ${inventory.remainingAvailableTokens.toLocaleString()} tokens available!`, 'error');
      return false;
    }

    const newEmp: Employee = {
      ...empData,
      id: `emp-${Date.now()}`,
      usedTokens: 0,
      remainingTokens: empData.allocatedTokens,
      usagePercentage: 0
    };

    const currentEmps = storageService.getEmployees();
    storageService.saveEmployees([...currentEmps, newEmp]);

    logTransaction(
      newEmp.employeeId,
      newEmp.name,
      'INITIAL_ALLOCATION',
      newEmp.allocatedTokens,
      `Added new employee ${newEmp.name} (${newEmp.department}) with initial allocation of ${newEmp.allocatedTokens.toLocaleString()} tokens.`
    );

    refreshState();
    showToast(`Employee ${newEmp.name} added with ${newEmp.allocatedTokens.toLocaleString()} tokens!`, 'success');
    return true;
  };

  const updateEmployee = (emp: Employee): boolean => {
    const currentEmps = storageService.getEmployees();
    const updated = currentEmps.map(e => (e.id === emp.id ? emp : e));
    storageService.saveEmployees(updated);
    refreshState();
    showToast(`Employee ${emp.name} details updated.`, 'info');
    return true;
  };

  const removeEmployee = (employeeId: string): boolean => {
    const currentEmps = storageService.getEmployees();
    const target = currentEmps.find(e => e.id === employeeId);
    if (!target) return false;

    const remainingToReclaim = target.remainingTokens;
    const updated = currentEmps.filter(e => e.id !== employeeId);
    storageService.saveEmployees(updated);

    logTransaction(
      target.employeeId,
      target.name,
      'TOKENS_REVOKED',
      -remainingToReclaim,
      `Employee ${target.name} removed. Reclaimed ${remainingToReclaim.toLocaleString()} unused tokens back to company reserve.`
    );

    refreshState();
    showToast(`Employee ${target.name} removed. Reclaimed ${remainingToReclaim.toLocaleString()} tokens.`, 'info');
    return true;
  };

  const adjustEmployeeAllocation = (employeeId: string, newAllocatedTokens: number, reason: string): boolean => {
    const currentEmps = storageService.getEmployees();
    const emp = currentEmps.find(e => e.id === employeeId);
    if (!emp) return false;

    if (newAllocatedTokens < emp.usedTokens) {
      showToast(`Cannot reduce allocation below ${emp.usedTokens.toLocaleString()} tokens because employee has already consumed them!`, 'error');
      return false;
    }

    const delta = newAllocatedTokens - emp.allocatedTokens;

    if (delta > 0 && delta > inventory.remainingAvailableTokens) {
      showToast(`Company has only ${inventory.remainingAvailableTokens.toLocaleString()} tokens available. Cannot increase by ${delta.toLocaleString()} tokens!`, 'error');
      return false;
    }

    const remainingTokens = newAllocatedTokens - emp.usedTokens;
    const usagePercentage = Number(((emp.usedTokens / newAllocatedTokens) * 100).toFixed(1));

    const updated = currentEmps.map(e =>
      e.id === employeeId
        ? {
            ...e,
            allocatedTokens: newAllocatedTokens,
            remainingTokens,
            usagePercentage
          }
        : e
    );
    storageService.saveEmployees(updated);

    logTransaction(
      emp.employeeId,
      emp.name,
      delta > 0 ? 'ALLOCATION_INCREASE' : 'ALLOCATION_DECREASE',
      delta,
      `Admin adjusted token allocation for ${emp.name} from ${emp.allocatedTokens.toLocaleString()} to ${newAllocatedTokens.toLocaleString()} tokens. Reason: ${reason}`
    );

    refreshState();
    showToast(`Token allocation for ${emp.name} updated to ${newAllocatedTokens.toLocaleString()} tokens.`, 'success');
    return true;
  };

  const revokeUnusedTokens = (employeeId: string, amountToRevoke: number, reason: string): boolean => {
    const currentEmps = storageService.getEmployees();
    const emp = currentEmps.find(e => e.id === employeeId);
    if (!emp) return false;

    if (amountToRevoke <= 0) {
      showToast('Revocation amount must be greater than 0.', 'error');
      return false;
    }

    if (amountToRevoke > emp.remainingTokens) {
      showToast(`Cannot revoke ${amountToRevoke.toLocaleString()} tokens. Employee only has ${emp.remainingTokens.toLocaleString()} unused tokens left! (Used: ${emp.usedTokens.toLocaleString()})`, 'error');
      return false;
    }

    const newAllocatedTokens = emp.allocatedTokens - amountToRevoke;
    const remainingTokens = emp.remainingTokens - amountToRevoke;
    const usagePercentage = Number(((emp.usedTokens / newAllocatedTokens) * 100).toFixed(1));

    const updated = currentEmps.map(e =>
      e.id === employeeId
        ? {
            ...e,
            allocatedTokens: newAllocatedTokens,
            remainingTokens,
            usagePercentage
          }
        : e
    );
    storageService.saveEmployees(updated);

    logTransaction(
      emp.employeeId,
      emp.name,
      'TOKENS_REVOKED',
      -amountToRevoke,
      `Revoked ${amountToRevoke.toLocaleString()} unused tokens from ${emp.name} back to company pool. Reason: ${reason}`
    );

    refreshState();
    showToast(`Revoked ${amountToRevoke.toLocaleString()} unused tokens from ${emp.name}. Tokens returned to company reserve.`, 'warning');
    return true;
  };

  const submitTokenRequest = (reqData: Omit<TokenRequest, 'id' | 'status' | 'requestedAt'>): boolean => {
    const newReq: TokenRequest = {
      ...reqData,
      id: `req-${Date.now()}`,
      status: 'PENDING',
      requestedAt: new Date().toLocaleString('en-US', {
        year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit', hour12: true
      })
    };

    const currentRequests = storageService.getRequests();
    storageService.saveRequests([newReq, ...currentRequests]);

    logTransaction(
      newReq.employeeId,
      newReq.employeeName,
      'REQUEST_SUBMITTED',
      newReq.requestedTokens,
      `Submitted request for +${newReq.requestedTokens.toLocaleString()} tokens for project "${newReq.projectName}".`
    );

    refreshState();
    showToast(`Token request for +${newReq.requestedTokens.toLocaleString()} tokens submitted for Admin review!`, 'info');
    return true;
  };

  const approveTokenRequest = (
    requestId: string,
    approvedAmount: number,
    remarks: string,
    isPartial: boolean
  ): boolean => {
    const currentRequests = storageService.getRequests();
    const req = currentRequests.find(r => r.id === requestId);
    if (!req) return false;

    if (approvedAmount > inventory.remainingAvailableTokens) {
      showToast(`Cannot approve ${approvedAmount.toLocaleString()} tokens. Company has only ${inventory.remainingAvailableTokens.toLocaleString()} tokens available!`, 'error');
      return false;
    }

    const currentEmps = storageService.getEmployees();
    const emp = currentEmps.find(e => e.id === req.employeeId || e.employeeId === req.employeeId);

    if (!emp) {
      showToast(`Employee record for ${req.employeeName} not found.`, 'error');
      return false;
    }

    const newAllocatedTokens = emp.allocatedTokens + approvedAmount;
    const remainingTokens = emp.remainingTokens + approvedAmount;
    const usagePercentage = Number(((emp.usedTokens / newAllocatedTokens) * 100).toFixed(1));

    const updatedEmps = currentEmps.map(e =>
      e.id === emp.id
        ? {
            ...e,
            allocatedTokens: newAllocatedTokens,
            remainingTokens,
            usagePercentage
          }
        : e
    );
    storageService.saveEmployees(updatedEmps);

    const decisionTime = new Date().toLocaleString('en-US', {
      year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit', hour12: true
    });

    const updatedRequests = currentRequests.map(r =>
      r.id === requestId
        ? {
            ...r,
            status: (isPartial ? 'PARTIALLY_APPROVED' : 'APPROVED') as any,
            approvedTokens: approvedAmount,
            adminRemarks: remarks,
            decidedAt: decisionTime,
            reviewedBy: currentUser.name
          }
        : r
    );
    storageService.saveRequests(updatedRequests);

    logTransaction(
      emp.employeeId,
      emp.name,
      isPartial ? 'REQUEST_PARTIALLY_APPROVED' : 'REQUEST_APPROVED',
      approvedAmount,
      `${isPartial ? 'Partially approved' : 'Approved'} +${approvedAmount.toLocaleString()} tokens for ${emp.name}. Remarks: ${remarks}`
    );

    refreshState();
    showToast(`Request ${isPartial ? 'partially approved' : 'approved'}! +${approvedAmount.toLocaleString()} tokens added to ${emp.name}.`, 'success');
    return true;
  };

  const rejectTokenRequest = (requestId: string, remarks: string): boolean => {
    const currentRequests = storageService.getRequests();
    const req = currentRequests.find(r => r.id === requestId);
    if (!req) return false;

    const decisionTime = new Date().toLocaleString('en-US', {
      year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit', hour12: true
    });

    const updatedRequests = currentRequests.map(r =>
      r.id === requestId
        ? {
            ...r,
            status: 'REJECTED' as const,
            adminRemarks: remarks,
            decidedAt: decisionTime,
            reviewedBy: currentUser.name
          }
        : r
    );
    storageService.saveRequests(updatedRequests);

    logTransaction(
      req.employeeId,
      req.employeeName,
      'REQUEST_REJECTED',
      0,
      `Rejected token request for ${req.requestedTokens.toLocaleString()} tokens from ${req.employeeName}. Reason: ${remarks}`
    );

    refreshState();
    showToast(`Request rejected with remarks. Reason is visible to ${req.employeeName}.`, 'warning');
    return true;
  };

  const consumeTokens = (
    employeeId: string,
    tokensToUse: number,
    projectName: string,
    taskName: string,
    modelUsed: string,
    description: string
  ): boolean => {
    const currentEmps = storageService.getEmployees();
    const emp = currentEmps.find(e => e.id === employeeId || e.employeeId === employeeId);
    if (!emp) return false;

    if (tokensToUse > emp.remainingTokens) {
      showToast(`Token limit exceeded! You requested ${tokensToUse.toLocaleString()} tokens but only have ${emp.remainingTokens.toLocaleString()} tokens remaining in your quota. Please request additional tokens.`, 'error');
      return false;
    }

    const newUsedTokens = emp.usedTokens + tokensToUse;
    const remainingTokens = emp.allocatedTokens - newUsedTokens;
    const usagePercentage = Number(((newUsedTokens / emp.allocatedTokens) * 100).toFixed(1));

    const updatedEmps = currentEmps.map(e =>
      e.id === emp.id
        ? {
            ...e,
            usedTokens: newUsedTokens,
            remainingTokens,
            usagePercentage
          }
        : e
    );
    storageService.saveEmployees(updatedEmps);

    const newUsage: TokenUsageRecord = {
      id: `usg-${Date.now()}`,
      employeeId: emp.id,
      employeeName: emp.name,
      projectName,
      taskName,
      modelUsed,
      tokensUsed: tokensToUse,
      description,
      timestamp: new Date().toLocaleString('en-US', {
        year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit', hour12: true
      }),
      remainingBalanceAfter: remainingTokens
    };
    const currentUsage = storageService.getUsageRecords();
    storageService.saveUsageRecords([newUsage, ...currentUsage]);

    logTransaction(
      emp.employeeId,
      emp.name,
      'TOKEN_USAGE',
      -tokensToUse,
      `Consumed ${tokensToUse.toLocaleString()} tokens on project "${projectName}" (${modelUsed}): ${description}`
    );

    refreshState();
    showToast(`Consumed ${tokensToUse.toLocaleString()} tokens on ${taskName}. Remaining balance: ${remainingTokens.toLocaleString()}`, 'info');
    return true;
  };

  const resetPlatformData = () => {
    storageService.resetAll();
    setCurrentUser(INITIAL_ADMIN_USER);
    refreshState();
    showToast('Platform data reset to initial baseline.', 'info');
  };

  return (
    <TokenContext.Provider
      value={{
        currentUser,
        role: currentUser.role,
        inventory,
        employees,
        purchases,
        requests,
        usageRecords,
        transactions,
        toasts,
        showToast,
        removeToast,
        loginAs,
        switchRole,
        demoUsers: {
          admin: INITIAL_ADMIN_USER,
          employees: INITIAL_EMPLOYEE_USERS
        },
        recordTokenPurchase,
        addEmployee,
        updateEmployee,
        removeEmployee,
        adjustEmployeeAllocation,
        revokeUnusedTokens,
        approveTokenRequest,
        rejectTokenRequest,
        submitTokenRequest,
        consumeTokens,
        resetPlatformData
      }}
    >
      {children}
    </TokenContext.Provider>
  );
};

export const useTokens = () => {
  const context = useContext(TokenContext);
  if (!context) throw new Error('useTokens must be used within TokenProvider');
  return context;
};
