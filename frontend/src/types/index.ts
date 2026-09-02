export type UserRole = 'ADMIN' | 'EMPLOYEE';

export type RequestStatus = 'PENDING' | 'APPROVED' | 'PARTIALLY_APPROVED' | 'REJECTED';

export type ActionType =
  | 'PURCHASE'
  | 'INITIAL_ALLOCATION'
  | 'ALLOCATION_INCREASE'
  | 'ALLOCATION_DECREASE'
  | 'TOKENS_REVOKED'
  | 'TOKEN_USAGE'
  | 'REQUEST_SUBMITTED'
  | 'REQUEST_APPROVED'
  | 'REQUEST_PARTIALLY_APPROVED'
  | 'REQUEST_REJECTED';

export type ProviderName =
  | 'OpenAI'
  | 'Anthropic'
  | 'Google Cloud'
  | 'AWS Bedrock'
  | 'Azure OpenAI'
  | 'Mistral AI';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  department: string;
  employeeId: string;
  title: string;
  avatarInitials: string;
}

export interface Employee {
  id: string;
  employeeId: string;
  name: string;
  email: string;
  department: string;
  role: string;
  allocatedTokens: number;
  usedTokens: number;
  remainingTokens: number;
  usagePercentage: number;
  joinedDate: string;
  status: 'Active' | 'On Leave' | 'Suspended';
  activeProjects: string[];
}

export interface TokenPurchase {
  id: string;
  providerName: ProviderName;
  tokensPurchased: number;
  costUsd: number;
  purchaseDate: string;
  invoiceNumber: string;
  notes: string;
  addedBy: string;
}

export interface TokenRequest {
  id: string;
  employeeId: string;
  employeeName: string;
  department: string;
  requestedTokens: number;
  projectName: string;
  taskDescription: string;
  reason: string;
  previousInsufficientReason: string;
  status: RequestStatus;
  approvedTokens?: number;
  adminRemarks?: string;
  requestedAt: string;
  decidedAt?: string;
  reviewedBy?: string;
}

export interface TokenUsageRecord {
  id: string;
  employeeId: string;
  employeeName: string;
  projectName: string;
  taskName: string;
  modelUsed: string;
  tokensUsed: number;
  description: string;
  timestamp: string;
  remainingBalanceAfter: number;
}

export interface TokenTransaction {
  id: string;
  timestamp: string;
  employeeId: string;
  employeeName: string;
  actionType: ActionType;
  tokenAmount: number;
  description: string;
  performedBy: string;
}

export interface CompanyInventory {
  totalPurchasedTokens: number;
  totalAllocatedTokens: number;
  totalUsedTokens: number;
  remainingAvailableTokens: number;
  totalPurchaseCostUsd: number;
}
