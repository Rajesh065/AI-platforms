import React from 'react';
import { useTokens } from '../context/TokenContext';
import { Send, Bot, AlertTriangle } from 'lucide-react';

interface EmployeeDashboardProps {
  onNavigateTab: (tab: string) => void;
}

export const EmployeeDashboard: React.FC<EmployeeDashboardProps> = ({ onNavigateTab }) => {
  const { currentUser, employees, requests, usageRecords } = useTokens();

  const emp = employees.find(e => e.id === currentUser.id || e.employeeId === currentUser.employeeId) || employees[0];
  const myRequests = requests.filter(r => r.employeeId === emp.id || r.employeeName === emp.name);
  const myUsageRecords = usageRecords.filter(u => u.employeeId === emp.id || u.employeeName === emp.name);

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 font-bold text-base flex items-center justify-center border border-emerald-200">
            {emp.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">Welcome back, {emp.name}!</h1>
            <p className="text-xs text-slate-500 mt-0.5">
              {emp.role} • {emp.department} • <span className="font-mono text-slate-600">{emp.employeeId}</span>
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => onNavigateTab('request-tokens')}
            className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold flex items-center space-x-2 shadow-sm transition-all"
          >
            <Send className="w-4 h-4" />
            <span>+ Request Additional Tokens</span>
          </button>
          <button
            onClick={() => onNavigateTab('my-token-usage')}
            className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center space-x-2 shadow-sm transition-all"
          >
            <Bot className="w-4 h-4" />
            <span>AI Token Simulator</span>
          </button>
        </div>
      </div>

      {/* 4 Personal Quota Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm">
          <span className="text-xs font-semibold text-slate-500">Total Allocated Quota</span>
          <p className="text-2xl font-extrabold text-blue-700 mt-1.5">{emp.allocatedTokens.toLocaleString()}</p>
          <p className="text-[11px] text-slate-500 mt-1">Assigned for work projects</p>
        </div>

        <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm">
          <span className="text-xs font-semibold text-slate-500">Tokens Consumed</span>
          <p className="text-2xl font-extrabold text-amber-600 mt-1.5">{emp.usedTokens.toLocaleString()}</p>
          <p className="text-[11px] text-slate-500 mt-1">{emp.usagePercentage}% of assigned quota</p>
        </div>

        <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm">
          <span className="text-xs font-semibold text-slate-500">Remaining Balance</span>
          <p className="text-2xl font-extrabold text-emerald-700 mt-1.5">{emp.remainingTokens.toLocaleString()}</p>
          <p className="text-[11px] text-slate-500 mt-1">Available for immediate tasks</p>
        </div>

        <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm">
          <span className="text-xs font-semibold text-slate-500">My Token Requests</span>
          <p className="text-2xl font-extrabold text-slate-900 mt-1.5">{myRequests.length} Submitted</p>
          <p className="text-[11px] text-slate-500 mt-1">{myRequests.filter(r => r.status === 'PENDING').length} currently pending</p>
        </div>
      </div>

      {/* Visual Quota Progress Bar Card */}
      <div className="bg-white border border-slate-200 p-6 rounded-2xl space-y-3 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-sm font-bold text-slate-900">Your Personal AI Token Usage Quota</h2>
            <p className="text-xs text-slate-500">Real-time status of your LLM token consumption</p>
          </div>
          <span className="text-xs font-mono font-bold text-slate-900">
            {emp.usedTokens.toLocaleString()} / {emp.allocatedTokens.toLocaleString()} tokens ({emp.usagePercentage}%)
          </span>
        </div>

        <div className="w-full h-3.5 bg-slate-100 rounded-full overflow-hidden">
          <div
            style={{ width: `${Math.min(100, emp.usagePercentage)}%` }}
            className={`h-full transition-all duration-500 ${
              emp.usagePercentage > 90 ? 'bg-rose-500' : emp.usagePercentage > 75 ? 'bg-amber-500' : 'bg-emerald-500'
            }`}
          />
        </div>

        {emp.usagePercentage > 85 && (
          <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-800 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="w-4 h-4 flex-shrink-0 text-amber-600" />
              <span>You have utilized over 85% of your token quota. Submit a request early to prevent task interruption.</span>
            </div>
            <button
              onClick={() => onNavigateTab('request-tokens')}
              className="px-3 py-1 rounded bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs whitespace-nowrap ml-3"
            >
              Request Tokens
            </button>
          </div>
        )}
      </div>

      {/* Grid: Requests & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-4 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900">My Quota Requests & Admin Decisions</h3>
            <button
              onClick={() => onNavigateTab('request-tokens')}
              className="text-xs text-blue-600 hover:text-blue-700 font-semibold"
            >
              Request More →
            </button>
          </div>

          {myRequests.length === 0 ? (
            <div className="p-8 text-center text-slate-500 text-xs border border-dashed border-slate-200 rounded-xl">
              No token requests submitted yet.
            </div>
          ) : (
            <div className="space-y-3">
              {myRequests.map(req => (
                <div key={req.id} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-semibold text-slate-900">{req.projectName}</p>
                      <p className="text-[11px] text-slate-500 line-clamp-1">{req.taskDescription}</p>
                    </div>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      req.status === 'PENDING' ? 'bg-amber-50 text-amber-800 border border-amber-200' :
                      req.status === 'APPROVED' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' :
                      req.status === 'PARTIALLY_APPROVED' ? 'bg-blue-50 text-blue-800 border border-blue-200' :
                      'bg-rose-50 text-rose-800 border border-rose-200'
                    }`}>
                      {req.status.replace('_', ' ')}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-1 border-t border-slate-200 text-[11px]">
                    <span className="text-slate-500">Requested: +{req.requestedTokens.toLocaleString()} tokens</span>
                    {req.approvedTokens && (
                      <span className="font-bold text-emerald-700">Approved: +{req.approvedTokens.toLocaleString()}</span>
                    )}
                  </div>

                  {req.adminRemarks && (
                    <div className="p-2 rounded bg-white border border-slate-200 text-[11px]">
                      <span className="font-semibold text-blue-800">Admin Remarks: </span>
                      <span className="text-slate-700 italic">{req.adminRemarks}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Recent Activity */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-4 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900">Recent AI Task Token Consumption</h3>
            <button
              onClick={() => onNavigateTab('my-token-usage')}
              className="text-xs text-emerald-700 hover:text-emerald-800 font-semibold"
            >
              Run Task →
            </button>
          </div>

          {myUsageRecords.length === 0 ? (
            <div className="p-8 text-center text-slate-500 text-xs border border-dashed border-slate-200 rounded-xl">
              No tasks executed yet. Open the AI Token Simulator to test real LLM token deductions!
            </div>
          ) : (
            <div className="space-y-3">
              {myUsageRecords.slice(0, 4).map(rec => (
                <div key={rec.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start justify-between text-xs">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-slate-900">{rec.projectName}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                        {rec.modelUsed}
                      </span>
                    </div>
                    <p className="text-slate-700 mt-1">{rec.taskName}</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">{rec.timestamp}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-mono font-bold text-amber-600">-{rec.tokensUsed.toLocaleString()} tokens</span>
                    <p className="text-[10px] text-slate-500 mt-0.5">Bal: {rec.remainingBalanceAfter.toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
