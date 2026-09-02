import React, { useState } from 'react';
import { useTokens } from '../context/TokenContext';
import { Employee } from '../types';
import {
  Search,
  Filter,
  Plus,
  Trash2,
  Sliders,
  History,
  X,
  ShieldAlert
} from 'lucide-react';

export const EmployeeManagementPage: React.FC = () => {
  const {
    employees,
    inventory,
    addEmployee,
    removeEmployee,
    adjustEmployeeAllocation,
    revokeUnusedTokens,
    usageRecords
  } = useTokens();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('ALL');

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedEmpForTokens, setSelectedEmpForTokens] = useState<Employee | null>(null);
  const [selectedEmpForHistory, setSelectedEmpForHistory] = useState<Employee | null>(null);

  const [newEmpName, setNewEmpName] = useState('');
  const [newEmpEmail, setNewEmpEmail] = useState('');
  const [newEmpId, setNewEmpId] = useState('');
  const [newEmpDept, setNewEmpDept] = useState('Engineering (Core LLM)');
  const [newEmpRole, setNewEmpRole] = useState('');
  const [newEmpTokens, setNewEmpTokens] = useState(1000000);

  const [adjustMode, setAdjustMode] = useState<'INCREASE' | 'DECREASE' | 'REVOKE'>('INCREASE');
  const [tokenAmountInput, setTokenAmountInput] = useState(500000);
  const [adjustmentReason, setAdjustmentReason] = useState('');

  const departments = ['ALL', 'Engineering (Core LLM)', 'Product Engineering', 'Data Science', 'Healthcare AI', 'DevOps & SRE', 'QA & Verification', 'Growth & Marketing AI', 'Security & Safety'];

  const filteredEmployees = employees.filter(emp => {
    const matchesSearch =
      emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.employeeId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDept === 'ALL' || emp.department === selectedDept;
    return matchesSearch && matchesDept;
  });

  const handleCreateEmployee = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEmpName || !newEmpEmail || !newEmpId || !newEmpRole) return;

    const success = addEmployee({
      employeeId: newEmpId,
      name: newEmpName,
      email: newEmpEmail,
      department: newEmpDept,
      role: newEmpRole,
      allocatedTokens: Number(newEmpTokens),
      joinedDate: new Date().toISOString().split('T')[0],
      status: 'Active',
      activeProjects: ['General AI Workspace']
    });

    if (success) {
      setIsAddModalOpen(false);
      setNewEmpName('');
      setNewEmpEmail('');
      setNewEmpId('');
      setNewEmpRole('');
      setNewEmpTokens(1000000);
    }
  };

  const handleTokenAdjustment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedEmpForTokens) return;

    const amount = Number(tokenAmountInput);
    if (amount <= 0) return;

    if (adjustMode === 'INCREASE') {
      const newAllocation = selectedEmpForTokens.allocatedTokens + amount;
      adjustEmployeeAllocation(selectedEmpForTokens.id, newAllocation, adjustmentReason || 'Admin manual quota increment');
    } else if (adjustMode === 'DECREASE') {
      const newAllocation = selectedEmpForTokens.allocatedTokens - amount;
      adjustEmployeeAllocation(selectedEmpForTokens.id, newAllocation, adjustmentReason || 'Admin quota reallocation');
    } else if (adjustMode === 'REVOKE') {
      revokeUnusedTokens(selectedEmpForTokens.id, amount, adjustmentReason || 'Unused token recall back to company reserve');
    }

    setSelectedEmpForTokens(null);
    setAdjustmentReason('');
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
        <div>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">Employee Directory & Token Allocations</h1>
          <p className="text-xs text-slate-500 mt-1">
            Manage employee profiles, allocate AI token quotas, monitor consumption %, and revoke unused reserves.
          </p>
        </div>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold flex items-center space-x-2 shadow-sm transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>+ Add New Employee</span>
        </button>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white border border-slate-200 p-4 rounded-xl shadow-sm">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search by name, ID, or email..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 rounded-lg pl-9 pr-4 py-1.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex items-center space-x-2 w-full md:w-auto overflow-x-auto">
          <Filter className="w-4 h-4 text-slate-400 flex-shrink-0" />
          <select
            value={selectedDept}
            onChange={e => setSelectedDept(e.target.value)}
            className="bg-slate-50 border border-slate-300 rounded-lg px-3 py-1.5 text-xs text-slate-900 focus:outline-none focus:border-blue-500"
          >
            {departments.map(d => (
              <option key={d} value={d}>
                {d === 'ALL' ? 'All Departments' : d}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Employee Data Table */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-600">
                <th className="py-3 px-4 font-semibold">Employee</th>
                <th className="py-3 px-4 font-semibold">Department & Role</th>
                <th className="py-3 px-4 font-semibold text-right">Allocated</th>
                <th className="py-3 px-4 font-semibold text-right">Used</th>
                <th className="py-3 px-4 font-semibold text-right">Remaining</th>
                <th className="py-3 px-4 font-semibold w-48">Usage %</th>
                <th className="py-3 px-4 font-semibold text-center">Status</th>
                <th className="py-3 px-4 font-semibold text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredEmployees.map(emp => (
                <tr key={emp.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 font-bold text-xs flex items-center justify-center border border-blue-200">
                        {emp.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">{emp.name}</p>
                        <p className="text-[10px] text-slate-500 font-mono">{emp.employeeId} • {emp.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <p className="font-medium text-slate-800">{emp.department}</p>
                    <p className="text-[10px] text-slate-500">{emp.role}</p>
                  </td>
                  <td className="py-3 px-4 text-right font-mono font-bold text-blue-700">
                    {emp.allocatedTokens.toLocaleString()}
                  </td>
                  <td className="py-3 px-4 text-right font-mono font-bold text-amber-600">
                    {emp.usedTokens.toLocaleString()}
                  </td>
                  <td className="py-3 px-4 text-right font-mono font-bold text-emerald-700">
                    {emp.remainingTokens.toLocaleString()}
                  </td>
                  <td className="py-3 px-4">
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-mono text-slate-700 font-medium">{emp.usagePercentage}%</span>
                        <span className="text-[10px] text-slate-500">{emp.remainingTokens > 0 ? `${emp.remainingTokens.toLocaleString()} left` : 'Exhausted'}</span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          style={{ width: `${Math.min(100, emp.usagePercentage)}%` }}
                          className={`h-full transition-all duration-300 ${
                            emp.usagePercentage > 90 ? 'bg-rose-500' :
                            emp.usagePercentage > 75 ? 'bg-amber-500' : 'bg-emerald-500'
                          }`}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {emp.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex items-center justify-center space-x-1.5">
                      <button
                        onClick={() => {
                          setSelectedEmpForTokens(emp);
                          setTokenAmountInput(500000);
                          setAdjustMode('INCREASE');
                        }}
                        className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-white font-semibold text-[11px] flex items-center space-x-1 transition-colors"
                      >
                        <Sliders className="w-3 h-3" />
                        <span>Manage</span>
                      </button>
                      <button
                        onClick={() => setSelectedEmpForHistory(emp)}
                        className="p-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                        title="View Usage History"
                      >
                        <History className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => removeEmployee(emp.id)}
                        className="p-1 rounded bg-slate-100 hover:bg-rose-50 text-slate-400 hover:text-rose-600 transition-colors"
                        title="Remove Employee"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal: Token Quota Management */}
      {selectedEmpForTokens && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-lg w-full p-6 space-y-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-base font-bold text-slate-900">Manage Token Quota</h3>
                <p className="text-xs text-slate-500">Employee: {selectedEmpForTokens.name} ({selectedEmpForTokens.employeeId})</p>
              </div>
              <button onClick={() => setSelectedEmpForTokens(null)} className="text-slate-400 hover:text-slate-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
              <div>
                <span className="text-slate-500">Allocated:</span>
                <p className="font-bold text-slate-900 mt-0.5">{selectedEmpForTokens.allocatedTokens.toLocaleString()}</p>
              </div>
              <div>
                <span className="text-slate-500">Used (Locked):</span>
                <p className="font-bold text-amber-600 mt-0.5">{selectedEmpForTokens.usedTokens.toLocaleString()}</p>
              </div>
              <div>
                <span className="text-slate-500">Unused (Revokable):</span>
                <p className="font-bold text-emerald-600 mt-0.5">{selectedEmpForTokens.remainingTokens.toLocaleString()}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setAdjustMode('INCREASE')}
                className={`py-2 rounded-lg text-xs font-semibold transition-all ${
                  adjustMode === 'INCREASE'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                + Increase
              </button>
              <button
                type="button"
                onClick={() => setAdjustMode('DECREASE')}
                className={`py-2 rounded-lg text-xs font-semibold transition-all ${
                  adjustMode === 'DECREASE'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                - Reduce
              </button>
              <button
                type="button"
                onClick={() => setAdjustMode('REVOKE')}
                className={`py-2 rounded-lg text-xs font-semibold transition-all ${
                  adjustMode === 'REVOKE'
                    ? 'bg-rose-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Revoke Unused
              </button>
            </div>

            {adjustMode === 'REVOKE' && (
              <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-[11px] text-rose-800 flex items-start space-x-2">
                <ShieldAlert className="w-4 h-4 flex-shrink-0 mt-0.5 text-rose-600" />
                <p>
                  <strong>Rule Enforcement:</strong> You can only revoke up to <strong>{selectedEmpForTokens.remainingTokens.toLocaleString()}</strong> unused tokens. The already consumed {selectedEmpForTokens.usedTokens.toLocaleString()} tokens cannot be revoked.
                </p>
              </div>
            )}

            {adjustMode === 'INCREASE' && (
              <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-[11px] text-emerald-800">
                Company has <strong>{inventory.remainingAvailableTokens.toLocaleString()}</strong> available unallocated tokens in reserve.
              </div>
            )}

            <form onSubmit={handleTokenAdjustment} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {adjustMode === 'INCREASE' ? 'Tokens to Add (+)' : adjustMode === 'DECREASE' ? 'Tokens to Deduct (-)' : 'Unused Tokens to Revoke'}
                </label>
                <input
                  type="number"
                  min="1"
                  max={adjustMode === 'REVOKE' ? selectedEmpForTokens.remainingTokens : undefined}
                  value={tokenAmountInput}
                  onChange={e => setTokenAmountInput(Math.max(1, Number(e.target.value)))}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 font-mono focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Reason / Justification</label>
                <textarea
                  rows={2}
                  value={adjustmentReason}
                  onChange={e => setAdjustmentReason(e.target.value)}
                  placeholder="E.g., Approved for Q4 LLM benchmark experiments..."
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div className="flex items-center justify-end space-x-3 pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedEmpForTokens(null)}
                  className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className={`px-4 py-2 rounded-lg text-white text-xs font-semibold ${
                    adjustMode === 'REVOKE' ? 'bg-rose-600 hover:bg-rose-700' : 'bg-slate-900 hover:bg-slate-800'
                  }`}
                >
                  Confirm {adjustMode === 'INCREASE' ? 'Increase' : adjustMode === 'DECREASE' ? 'Reduction' : 'Revocation'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Add Employee */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900">Add New Employee</h3>
              <button onClick={() => setIsAddModalOpen(false)} className="text-slate-400 hover:text-slate-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateEmployee} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Employee Full Name</label>
                <input
                  type="text"
                  placeholder="Jonathan Davis"
                  value={newEmpName}
                  onChange={e => setNewEmpName(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Employee ID</label>
                  <input
                    type="text"
                    placeholder="EMP-1015"
                    value={newEmpId}
                    onChange={e => setNewEmpId(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Work Email</label>
                  <input
                    type="email"
                    placeholder="jdavis@cortexai.enterprise"
                    value={newEmpEmail}
                    onChange={e => setNewEmpEmail(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Department</label>
                  <select
                    value={newEmpDept}
                    onChange={e => setNewEmpDept(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-500"
                  >
                    {departments.filter(d => d !== 'ALL').map(d => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Role / Title</label>
                  <input
                    type="text"
                    placeholder="Senior ML Researcher"
                    value={newEmpRole}
                    onChange={e => setNewEmpRole(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Initial Token Allocation ({inventory.remainingAvailableTokens.toLocaleString()} available)
                </label>
                <input
                  type="number"
                  min="0"
                  max={inventory.remainingAvailableTokens}
                  value={newEmpTokens}
                  onChange={e => setNewEmpTokens(Number(e.target.value))}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 font-mono focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div className="flex items-center justify-end space-x-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold"
                >
                  Create & Allocate
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: View Employee Usage History */}
      {selectedEmpForHistory && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-2xl w-full p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-base font-bold text-slate-900">Token Usage History</h3>
                <p className="text-xs text-slate-500">{selectedEmpForHistory.name} ({selectedEmpForHistory.employeeId}) • {selectedEmpForHistory.department}</p>
              </div>
              <button onClick={() => setSelectedEmpForHistory(null)} className="text-slate-400 hover:text-slate-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-96 overflow-y-auto space-y-2">
              {usageRecords.filter(u => u.employeeId === selectedEmpForHistory.id || u.employeeName === selectedEmpForHistory.name).length === 0 ? (
                <div className="p-8 text-center text-slate-500 text-xs">
                  No individual task usage records found for this employee yet.
                </div>
              ) : (
                usageRecords
                  .filter(u => u.employeeId === selectedEmpForHistory.id || u.employeeName === selectedEmpForHistory.name)
                  .map(rec => (
                    <div key={rec.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start justify-between text-xs">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold text-slate-900">{rec.projectName}</span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-medium border border-blue-200">
                            {rec.modelUsed}
                          </span>
                        </div>
                        <p className="text-slate-700 font-medium mt-1">{rec.taskName}</p>
                        <p className="text-[11px] text-slate-500 mt-0.5">{rec.description}</p>
                        <p className="text-[10px] text-slate-400 mt-1">{rec.timestamp}</p>
                      </div>
                      <div className="text-right">
                        <span className="font-mono font-bold text-amber-600">-{rec.tokensUsed.toLocaleString()} tokens</span>
                        <p className="text-[10px] text-slate-500 mt-0.5">Bal: {rec.remainingBalanceAfter.toLocaleString()}</p>
                      </div>
                    </div>
                  ))
              )}
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setSelectedEmpForHistory(null)}
                className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
