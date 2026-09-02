import React, { useState } from 'react';
import { useTokens } from '../context/TokenContext';
import { TokenRequest } from '../types';
import {
  CheckCircle2,
  Coins,
  Check,
  X,
  Scale
} from 'lucide-react';

export const TokenRequestsPage: React.FC = () => {
  const { requests, inventory, employees, approveTokenRequest, rejectTokenRequest } = useTokens();

  const [activeTab, setActiveTab] = useState<'ALL' | 'PENDING' | 'APPROVED' | 'PARTIALLY_APPROVED' | 'REJECTED'>('ALL');
  const [selectedRequest, setSelectedRequest] = useState<TokenRequest | null>(null);

  const [decisionMode, setDecisionMode] = useState<'APPROVE' | 'PARTIAL' | 'REJECT'>('APPROVE');
  const [customApprovedTokens, setCustomApprovedTokens] = useState<number>(0);
  const [adminRemarks, setAdminRemarks] = useState('');

  const filteredRequests = requests.filter(req => {
    if (activeTab === 'ALL') return true;
    return req.status === activeTab;
  });

  const openDecisionModal = (req: TokenRequest, mode: 'APPROVE' | 'PARTIAL' | 'REJECT') => {
    setSelectedRequest(req);
    setDecisionMode(mode);
    setCustomApprovedTokens(mode === 'PARTIAL' ? Math.floor(req.requestedTokens / 2) : req.requestedTokens);
    setAdminRemarks(
      mode === 'APPROVE'
        ? 'Approved full quota allocation. Priority project demo confirmed.'
        : mode === 'PARTIAL'
        ? 'Partially approved. Please optimize prompt caching and batch sizes.'
        : 'Rejected. Please add token rate-limiters or utilize mini models before re-requesting.'
    );
  };

  const handleDecisionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedRequest) return;

    if (decisionMode === 'APPROVE') {
      approveTokenRequest(selectedRequest.id, selectedRequest.requestedTokens, adminRemarks, false);
    } else if (decisionMode === 'PARTIAL') {
      approveTokenRequest(selectedRequest.id, Number(customApprovedTokens), adminRemarks, true);
    } else if (decisionMode === 'REJECT') {
      rejectTokenRequest(selectedRequest.id, adminRemarks);
    }

    setSelectedRequest(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
        <div>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">Token Allocation Requests & Approvals</h1>
          <p className="text-xs text-slate-500 mt-1">
            Review employee quota requests, evaluate task justifications, and grant full, partial, or rejection decisions.
          </p>
        </div>
        <div className="flex items-center space-x-2 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200 text-xs">
          <Coins className="w-4 h-4 text-emerald-600" />
          <span className="text-slate-600">Company Available:</span>
          <span className="font-bold text-emerald-600">{inventory.remainingAvailableTokens.toLocaleString()} tokens</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center space-x-2 border-b border-slate-200 pb-2 overflow-x-auto">
        {(['ALL', 'PENDING', 'APPROVED', 'PARTIALLY_APPROVED', 'REJECTED'] as const).map(tab => {
          const count = tab === 'ALL' ? requests.length : requests.filter(r => r.status === tab).length;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-all ${
                activeTab === tab
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              <span>{tab.replace('_', ' ')}</span>
              <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                activeTab === tab ? 'bg-slate-700 text-white' : 'bg-slate-100 text-slate-600'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {filteredRequests.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center shadow-sm">
          <CheckCircle2 className="w-10 h-10 text-slate-400 mx-auto mb-3" />
          <h3 className="text-sm font-semibold text-slate-700">No requests in this category</h3>
          <p className="text-xs text-slate-500 mt-1">Select a different tab or wait for new employee submissions.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {filteredRequests.map(req => {
            const emp = employees.find(e => e.id === req.employeeId || e.employeeId === req.employeeId);
            return (
              <div
                key={req.id}
                className="bg-white border border-slate-200 hover:border-slate-300 rounded-2xl p-5 space-y-4 shadow-sm transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 font-bold text-sm flex items-center justify-center border border-blue-200">
                      {req.employeeName.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-sm text-slate-900">{req.employeeName}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-mono">
                          {req.employeeId}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500">{req.department} • Requested at {req.requestedAt}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="text-right">
                      <span className="text-xs font-semibold text-slate-500">Requested: </span>
                      <span className="text-sm font-mono font-bold text-blue-700">+{req.requestedTokens.toLocaleString()} tokens</span>
                    </div>

                    <span className={`px-2.5 py-1 rounded-lg text-xs font-bold uppercase tracking-wider ${
                      req.status === 'PENDING' ? 'bg-amber-50 text-amber-800 border border-amber-200' :
                      req.status === 'APPROVED' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' :
                      req.status === 'PARTIALLY_APPROVED' ? 'bg-blue-50 text-blue-800 border border-blue-200' :
                      'bg-rose-50 text-rose-800 border border-rose-200'
                    }`}>
                      {req.status.replace('_', ' ')}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-xs">
                  <div className="lg:col-span-2 space-y-2 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                    <div>
                      <span className="text-slate-500 font-semibold">Project & Task: </span>
                      <span className="text-slate-900 font-medium">{req.projectName}</span>
                      <p className="text-slate-700 mt-0.5">{req.taskDescription}</p>
                    </div>

                    <div className="pt-2 border-t border-slate-200">
                      <span className="text-slate-500 font-semibold">Why Additional Tokens are Needed: </span>
                      <p className="text-slate-700 mt-0.5">{req.reason}</p>
                    </div>

                    <div className="pt-2 border-t border-slate-200">
                      <span className="text-slate-500 font-semibold">Why Previous Quota Was Insufficient: </span>
                      <p className="text-slate-700 mt-0.5">{req.previousInsufficientReason}</p>
                    </div>

                    {req.adminRemarks && (
                      <div className="mt-3 p-2.5 rounded-lg bg-white border border-slate-200 text-[11px]">
                        <span className="font-semibold text-blue-800">Admin Remarks ({req.reviewedBy}): </span>
                        <p className="text-slate-700 mt-0.5 italic">"{req.adminRemarks}"</p>
                        {req.approvedTokens && (
                          <p className="text-emerald-700 font-bold mt-1">Approved Quota: +{req.approvedTokens.toLocaleString()} tokens</p>
                        )}
                      </div>
                    )}
                  </div>

                  {emp && (
                    <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-3">
                      <span className="font-semibold text-slate-700 uppercase tracking-wider text-[10px]">Current Quota Standing</span>
                      <div className="space-y-1.5 text-xs">
                        <div className="flex justify-between">
                          <span className="text-slate-500">Total Allocated:</span>
                          <span className="font-mono font-bold text-slate-900">{emp.allocatedTokens.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">Already Used:</span>
                          <span className="font-mono font-bold text-amber-600">{emp.usedTokens.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">Remaining Balance:</span>
                          <span className="font-mono font-bold text-emerald-600">{emp.remainingTokens.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">Usage %:</span>
                          <span className="font-mono font-bold text-slate-700">{emp.usagePercentage}%</span>
                        </div>
                      </div>

                      <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          style={{ width: `${Math.min(100, emp.usagePercentage)}%` }}
                          className={`h-full ${emp.usagePercentage > 90 ? 'bg-rose-500' : 'bg-amber-500'}`}
                        />
                      </div>
                    </div>
                  )}
                </div>

                {req.status === 'PENDING' && (
                  <div className="flex items-center justify-end space-x-2 pt-2 border-t border-slate-100">
                    <button
                      onClick={() => openDecisionModal(req, 'REJECT')}
                      className="px-3 py-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-semibold flex items-center space-x-1.5 border border-rose-200 transition-colors"
                    >
                      <X className="w-3.5 h-3.5" />
                      <span>Reject</span>
                    </button>
                    <button
                      onClick={() => openDecisionModal(req, 'PARTIAL')}
                      className="px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-semibold flex items-center space-x-1.5 border border-blue-200 transition-colors"
                    >
                      <Scale className="w-3.5 h-3.5" />
                      <span>Partially Approve</span>
                    </button>
                    <button
                      onClick={() => openDecisionModal(req, 'APPROVE')}
                      className="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center space-x-1.5 shadow-sm transition-colors"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>Approve Full (+{req.requestedTokens.toLocaleString()})</span>
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {selectedRequest && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  {decisionMode === 'APPROVE' ? 'Approve Token Request' : decisionMode === 'PARTIAL' ? 'Partially Approve Tokens' : 'Reject Token Request'}
                </h3>
                <p className="text-xs text-slate-500">{selectedRequest.employeeName} • {selectedRequest.projectName}</p>
              </div>
              <button onClick={() => setSelectedRequest(null)} className="text-slate-400 hover:text-slate-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleDecisionSubmit} className="space-y-4 text-xs">
              {decisionMode === 'PARTIAL' && (
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Custom Approved Tokens (Requested: {selectedRequest.requestedTokens.toLocaleString()})
                  </label>
                  <input
                    type="number"
                    min="1"
                    max={Math.min(selectedRequest.requestedTokens, inventory.remainingAvailableTokens)}
                    value={customApprovedTokens}
                    onChange={e => setCustomApprovedTokens(Number(e.target.value))}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 font-mono focus:outline-none focus:border-blue-500"
                    required
                  />
                  <p className="text-[11px] text-slate-500 mt-1">Company Available: {inventory.remainingAvailableTokens.toLocaleString()} tokens</p>
                </div>
              )}

              {decisionMode === 'APPROVE' && (
                <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800">
                  Approving <strong>+{selectedRequest.requestedTokens.toLocaleString()}</strong> tokens will automatically increase {selectedRequest.employeeName}'s quota and deduct from the company pool.
                </div>
              )}

              {decisionMode === 'REJECT' && (
                <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-800">
                  Rejecting this request will keep the employee's quota unchanged. Please explain the rejection reason clearly.
                </div>
              )}

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Admin Decision Remarks (Visible to Employee)
                </label>
                <textarea
                  rows={3}
                  value={adminRemarks}
                  onChange={e => setAdminRemarks(e.target.value)}
                  placeholder="Provide feedback or guidance for this decision..."
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div className="flex items-center justify-end space-x-3 pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedRequest(null)}
                  className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className={`px-4 py-2 rounded-lg text-white font-semibold ${
                    decisionMode === 'REJECT' ? 'bg-rose-600 hover:bg-rose-700' : 'bg-emerald-600 hover:bg-emerald-700'
                  }`}
                >
                  Confirm Decision
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
