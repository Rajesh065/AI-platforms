import React from 'react';
import { useTokens } from '../context/TokenContext';
import {
  Boxes,
  Users,
  Send,
  TrendingUp,
  Coins,
  DollarSign,
  ChevronRight,
  CheckCircle2,
  Clock
} from 'lucide-react';

interface AdminDashboardProps {
  onNavigateTab: (tab: string) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onNavigateTab }) => {
  const { inventory, employees, requests, transactions } = useTokens();

  const pendingRequests = requests.filter(r => r.status === 'PENDING');
  const allocationPercent = Number(((inventory.totalAllocatedTokens / inventory.totalPurchasedTokens) * 100).toFixed(1));
  const consumptionPercent = Number(((inventory.totalUsedTokens / inventory.totalPurchasedTokens) * 100).toFixed(1));
  const topConsumers = [...employees].sort((a, b) => b.usedTokens - a.usedTokens).slice(0, 5);

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
        <div>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">Enterprise Token Management Console</h1>
          <p className="text-xs text-slate-500 mt-1">
            Real-time multi-LLM quota distribution, departmental budgets, and token approval orchestration.
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => onNavigateTab('token-inventory')}
            className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-sm transition-all"
          >
            + Purchase Tokens
          </button>
          <button
            onClick={() => onNavigateTab('token-requests')}
            className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold border border-slate-200 transition-all"
          >
            Review Requests ({pendingRequests.length})
          </button>
        </div>
      </div>

      {/* 4 Main KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm">
          <span className="text-xs font-semibold text-slate-500">Total Purchased Tokens</span>
          <p className="text-2xl font-extrabold text-slate-900 mt-1.5">{inventory.totalPurchasedTokens.toLocaleString()}</p>
          <p className="text-[11px] text-slate-500 mt-1">Total enterprise pool acquired</p>
        </div>

        <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm">
          <span className="text-xs font-semibold text-slate-500">Tokens Allocated to Staff</span>
          <p className="text-2xl font-extrabold text-blue-600 mt-1.5">{inventory.totalAllocatedTokens.toLocaleString()}</p>
          <p className="text-[11px] text-slate-500 mt-1">{allocationPercent}% of total pool</p>
        </div>

        <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm">
          <span className="text-xs font-semibold text-slate-500">Total Tokens Consumed</span>
          <p className="text-2xl font-extrabold text-amber-600 mt-1.5">{inventory.totalUsedTokens.toLocaleString()}</p>
          <p className="text-[11px] text-slate-500 mt-1">{consumptionPercent}% actual consumption rate</p>
        </div>

        <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm">
          <span className="text-xs font-semibold text-slate-500">Remaining Available Reserve</span>
          <p className="text-2xl font-extrabold text-emerald-600 mt-1.5">{inventory.remainingAvailableTokens.toLocaleString()}</p>
          <p className="text-[11px] text-slate-500 mt-1">Ready for employee allocation</p>
        </div>
      </div>

      {/* Second Row Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-500">Total Active Employees</p>
            <p className="text-xl font-bold text-slate-900 mt-1">{employees.length} Engineers & Staff</p>
            <p className="text-[11px] text-slate-500 mt-0.5">Across 6 departments</p>
          </div>
          <button
            onClick={() => onNavigateTab('employee-management')}
            className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-500">Pending Token Requests</p>
            <p className="text-xl font-bold text-rose-600 mt-1">{pendingRequests.length} Pending</p>
            <p className="text-[11px] text-slate-500 mt-0.5">Awaiting Admin review</p>
          </div>
          <button
            onClick={() => onNavigateTab('token-requests')}
            className="px-3 py-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-semibold transition-colors border border-rose-200"
          >
            Review
          </button>
        </div>

        <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-500">Total Token Spend (USD)</p>
            <p className="text-xl font-bold text-emerald-700 mt-1">${inventory.totalPurchaseCostUsd.toLocaleString()}</p>
            <p className="text-[11px] text-slate-500 mt-0.5">4 Provider commitments</p>
          </div>
          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs">
            $
          </div>
        </div>
      </div>

      {/* Visual Token Utilization Progress Bar */}
      <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="text-sm font-bold text-slate-900">Company Token Pool Utilization</h2>
            <p className="text-xs text-slate-500">Breakdown of purchased, allocated, and consumed LLM token reserves</p>
          </div>
          <span className="text-xs font-mono font-semibold text-slate-700">
            {inventory.totalUsedTokens.toLocaleString()} used / {inventory.totalPurchasedTokens.toLocaleString()} total
          </span>
        </div>

        <div className="w-full h-3.5 bg-slate-100 rounded-full overflow-hidden flex">
          <div
            style={{ width: `${(inventory.totalUsedTokens / inventory.totalPurchasedTokens) * 100}%` }}
            className="bg-amber-500 h-full transition-all duration-500"
          />
          <div
            style={{ width: `${((inventory.totalAllocatedTokens - inventory.totalUsedTokens) / inventory.totalPurchasedTokens) * 100}%` }}
            className="bg-blue-600 h-full transition-all duration-500"
          />
          <div
            style={{ width: `${(inventory.remainingAvailableTokens / inventory.totalPurchasedTokens) * 100}%` }}
            className="bg-emerald-500 h-full transition-all duration-500"
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 mt-3 text-xs">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded bg-amber-500" />
            <span className="text-slate-700 font-medium">Consumed ({consumptionPercent}%)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded bg-blue-600" />
            <span className="text-slate-700 font-medium">Allocated in Quotas ({((inventory.totalAllocatedTokens - inventory.totalUsedTokens) / inventory.totalPurchasedTokens * 100).toFixed(1)}%)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded bg-emerald-500" />
            <span className="text-slate-700 font-medium">Available Reserve ({((inventory.remainingAvailableTokens / inventory.totalPurchasedTokens) * 100).toFixed(1)}%)</span>
          </div>
        </div>
      </div>

      {/* Grid: Pending Requests Queue & Top Token Consuming Employees */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-slate-900">Pending Token Requests</h3>
            <button
              onClick={() => onNavigateTab('token-requests')}
              className="text-xs text-blue-600 hover:text-blue-700 font-semibold"
            >
              View All ({requests.length}) →
            </button>
          </div>

          {pendingRequests.length === 0 ? (
            <div className="p-8 text-center border border-dashed border-slate-200 rounded-xl">
              <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
              <p className="text-xs text-slate-700 font-medium">All token requests have been reviewed!</p>
              <p className="text-[11px] text-slate-500">No pending employee requests in queue.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {pendingRequests.map(req => (
                <div key={req.id} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-xs text-slate-900">{req.employeeName}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-slate-200 text-slate-700 font-medium">
                          {req.department}
                        </span>
                      </div>
                      <p className="text-xs text-slate-700 font-medium mt-1">{req.projectName}</p>
                      <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">{req.reason}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold text-blue-700">+{req.requestedTokens.toLocaleString()}</span>
                      <p className="text-[10px] text-slate-400 mt-0.5">{req.requestedAt}</p>
                    </div>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-slate-200 flex items-center justify-end">
                    <button
                      onClick={() => onNavigateTab('token-requests')}
                      className="text-xs font-semibold px-3 py-1 rounded-md bg-slate-900 hover:bg-slate-800 text-white transition-colors"
                    >
                      Review & Decide
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Top Token Consumers */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-slate-900">Top Token Consuming Engineers</h3>
            <button
              onClick={() => onNavigateTab('employee-management')}
              className="text-xs text-blue-600 hover:text-blue-700 font-semibold"
            >
              Directory ({employees.length}) →
            </button>
          </div>

          <div className="space-y-3">
            {topConsumers.map(emp => (
              <div key={emp.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-xs border border-blue-200">
                    {emp.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-900">{emp.name}</p>
                    <p className="text-[10px] text-slate-500">{emp.department} • {emp.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-amber-600">{emp.usedTokens.toLocaleString()} used</p>
                  <p className="text-[10px] text-slate-500">{emp.remainingTokens.toLocaleString()} remaining ({emp.usagePercentage}%)</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Audit Feed */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-slate-900">Live Platform Audit Activity</h3>
          <button
            onClick={() => onNavigateTab('transactions')}
            className="text-xs text-slate-600 hover:text-slate-900 font-semibold"
          >
            Full Transaction Audit Ledger ({transactions.length}) →
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="pb-3 font-semibold">Timestamp</th>
                <th className="pb-3 font-semibold">Actor / Performer</th>
                <th className="pb-3 font-semibold">Action Type</th>
                <th className="pb-3 font-semibold text-right">Tokens</th>
                <th className="pb-3 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {transactions.slice(0, 5).map(tx => (
                <tr key={tx.id} className="hover:bg-slate-50">
                  <td className="py-2.5 font-mono text-slate-500">{tx.timestamp}</td>
                  <td className="py-2.5 font-medium text-slate-800">{tx.performedBy}</td>
                  <td className="py-2.5">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                      tx.actionType === 'PURCHASE' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                      tx.actionType.includes('APPROVED') ? 'bg-blue-50 text-blue-700 border border-blue-200' :
                      tx.actionType.includes('REVOKED') || tx.actionType.includes('REJECTED') ? 'bg-rose-50 text-rose-700 border border-rose-200' :
                      'bg-slate-100 text-slate-700 border border-slate-200'
                    }`}>
                      {tx.actionType}
                    </span>
                  </td>
                  <td className={`py-2.5 text-right font-mono font-bold ${tx.tokenAmount > 0 ? 'text-emerald-600' : 'text-slate-700'}`}>
                    {tx.tokenAmount > 0 ? `+${tx.tokenAmount.toLocaleString()}` : tx.tokenAmount.toLocaleString()}
                  </td>
                  <td className="py-2.5 text-slate-600 line-clamp-1 max-w-md">{tx.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
