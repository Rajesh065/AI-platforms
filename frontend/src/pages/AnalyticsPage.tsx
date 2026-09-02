import React, { useState } from 'react';
import { useTokens } from '../context/TokenContext';
import { Employee } from '../types';
import {
  Search,
  Filter,
  X,
  Send,
  ChevronRight,
  Sparkles,
  Bot,
  Briefcase
} from 'lucide-react';

export const AnalyticsPage: React.FC = () => {
  const { inventory, employees, requests, usageRecords } = useTokens();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('ALL');
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

  const departments = ['ALL', 'Engineering (Core LLM)', 'Product Engineering', 'Data Science', 'Healthcare AI', 'DevOps & SRE', 'QA & Verification', 'Growth & Marketing AI', 'Security & Safety'];

  const filteredEmployees = employees.filter(emp => {
    const matchesSearch =
      emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.employeeId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDept === 'ALL' || emp.department === selectedDept;
    return matchesSearch && matchesDept;
  });

  // Department rollup calculation
  const deptStats = employees.reduce((acc, emp) => {
    if (!acc[emp.department]) {
      acc[emp.department] = { allocated: 0, used: 0, count: 0 };
    }
    acc[emp.department].allocated += emp.allocatedTokens;
    acc[emp.department].used += emp.usedTokens;
    acc[emp.department].count += 1;
    return acc;
  }, {} as Record<string, { allocated: number; used: number; count: number }>);

  const deptList = Object.entries(deptStats).map(([name, stat]) => ({
    name,
    allocated: stat.allocated,
    used: stat.used,
    count: stat.count,
    usagePct: Number(((stat.used / stat.allocated) * 100).toFixed(1))
  })).sort((a, b) => b.used - a.used);

  // Helper for selected employee details
  const getEmployeeRequests = (emp: Employee) => {
    return requests.filter(r => r.employeeId === emp.id || r.employeeName === emp.name || r.employeeId === emp.employeeId);
  };

  const getEmployeeUsage = (emp: Employee) => {
    return usageRecords.filter(u => u.employeeId === emp.id || u.employeeName === emp.name || u.employeeId === emp.employeeId);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
        <h1 className="text-xl font-bold text-slate-900 tracking-tight">AI Token Usage & Employee Analytics</h1>
        <p className="text-xs text-slate-500 mt-1">
          Click on any employee to inspect their active projects, tokens used, remaining balance, and pending token requests.
        </p>
      </div>

      {/* 3 Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm">
          <span className="text-xs font-semibold text-slate-500">Total Enterprise Token Burn</span>
          <p className="text-2xl font-extrabold text-amber-600 mt-1">{inventory.totalUsedTokens.toLocaleString()}</p>
          <p className="text-[11px] text-slate-500 mt-1">{((inventory.totalUsedTokens / inventory.totalPurchasedTokens) * 100).toFixed(1)}% of total company pool burned</p>
        </div>
        <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm">
          <span className="text-xs font-semibold text-slate-500">Total Unused Reserve</span>
          <p className="text-2xl font-extrabold text-emerald-600 mt-1">{inventory.remainingAvailableTokens.toLocaleString()}</p>
          <p className="text-[11px] text-slate-500 mt-1">Available for new employee allocation</p>
        </div>
        <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm">
          <span className="text-xs font-semibold text-slate-500">Active Engineers Audited</span>
          <p className="text-2xl font-extrabold text-blue-600 mt-1">{employees.length} Staff</p>
          <p className="text-[11px] text-slate-500 mt-1">{usageRecords.length} recorded AI task workloads</p>
        </div>
      </div>

      {/* Main Section: Interactive Employee Explorer */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-sm font-bold text-slate-900">Employee Usage & Project Deep-Dive</h2>
            <p className="text-xs text-slate-500">Select any employee row to see their active projects, used/remaining tokens, and token requests.</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2">
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search by name or role..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500"
              />
            </div>

            <select
              value={selectedDept}
              onChange={e => setSelectedDept(e.target.value)}
              className="bg-slate-50 border border-slate-300 rounded-lg px-3 py-1.5 text-xs text-slate-900 focus:outline-none focus:border-blue-500"
            >
              {departments.map(d => (
                <option key={d} value={d}>{d === 'ALL' ? 'All Departments' : d}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Employee Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredEmployees.map(emp => {
            const empRequests = getEmployeeRequests(emp);
            const pendingReq = empRequests.find(r => r.status === 'PENDING');

            return (
              <div
                key={emp.id}
                onClick={() => setSelectedEmployee(emp)}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-blue-300 hover:shadow-md transition-all cursor-pointer space-y-3 group"
              >
                {/* Employee Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center border border-blue-200 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {emp.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors">{emp.name}</h3>
                      <p className="text-xs text-slate-600 font-medium">{emp.role}</p>
                      <p className="text-[10px] text-slate-400">{emp.department}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </div>

                {/* Current Active Projects */}
                <div className="pt-2 border-t border-slate-200/80">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center space-x-1 mb-1">
                    <Briefcase className="w-3 h-3" />
                    <span>Current Active Project:</span>
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {emp.activeProjects.map((p, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200 text-[11px] font-medium">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Token Stats Breakdown */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-200/80 text-xs">
                  <div className="bg-white p-2 rounded-lg border border-slate-200">
                    <span className="text-slate-500 text-[10px] block">Tokens Used</span>
                    <span className="font-mono font-bold text-amber-600">{emp.usedTokens.toLocaleString()}</span>
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-slate-200">
                    <span className="text-slate-500 text-[10px] block">Remaining Balance</span>
                    <span className="font-mono font-bold text-emerald-600">{emp.remainingTokens.toLocaleString()}</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div>
                  <div className="flex items-center justify-between text-[11px] mb-1">
                    <span className="text-slate-500">Quota Burned:</span>
                    <span className="font-mono font-bold text-slate-700">{emp.usagePercentage}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      style={{ width: `${Math.min(100, emp.usagePercentage)}%` }}
                      className={`h-full ${emp.usagePercentage > 90 ? 'bg-rose-500' : emp.usagePercentage > 75 ? 'bg-amber-500' : 'bg-emerald-500'}`}
                    />
                  </div>
                </div>

                {/* Token Request Badge if pending */}
                {pendingReq && (
                  <div className="p-2 rounded-lg bg-amber-50 border border-amber-200 text-[11px] text-amber-800 flex items-center justify-between">
                    <span className="font-semibold">Needs Extra Tokens:</span>
                    <span className="font-mono font-bold">+{pendingReq.requestedTokens.toLocaleString()}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Departmental Rollup Breakdown */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-sm">
        <h3 className="text-sm font-bold text-slate-900">Departmental Token Consumption Breakdown</h3>
        <div className="space-y-4">
          {deptList.map(d => (
            <div key={d.name} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <div>
                  <span className="font-semibold text-slate-900">{d.name}</span>
                  <span className="text-[10px] text-slate-500 ml-2">({d.count} Engineers)</span>
                </div>
                <div className="text-right">
                  <span className="font-mono font-bold text-amber-600">{d.used.toLocaleString()}</span>
                  <span className="text-slate-500 font-mono"> / {d.allocated.toLocaleString()} tokens ({d.usagePct}%)</span>
                </div>
              </div>
              <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                <div
                  style={{ width: `${Math.min(100, d.usagePct)}%` }}
                  className={`h-full ${d.usagePct > 85 ? 'bg-rose-500' : d.usagePct > 60 ? 'bg-amber-500' : 'bg-blue-600'}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal: Full Employee Deep-Dive Details */}
      {selectedEmployee && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-2xl w-full p-6 space-y-5 shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center space-x-3.5">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 font-bold text-base flex items-center justify-center border border-blue-200">
                  {selectedEmployee.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="text-base font-bold text-slate-900">{selectedEmployee.name}</h3>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-mono text-[10px]">
                      {selectedEmployee.employeeId}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium">{selectedEmployee.role} • {selectedEmployee.department}</p>
                  <p className="text-[11px] text-slate-400">{selectedEmployee.email}</p>
                </div>
              </div>
              <button onClick={() => setSelectedEmployee(null)} className="text-slate-400 hover:text-slate-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Current Active Projects */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
              <span className="font-bold text-slate-800 text-[11px] uppercase tracking-wider block">
                Current Active Project(s) Working On:
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedEmployee.activeProjects.map((proj, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-lg bg-white border border-slate-200 font-medium text-slate-900 shadow-sm">
                    {proj}
                  </span>
                ))}
              </div>
            </div>

            {/* Token Quota Matrix */}
            <div className="grid grid-cols-3 gap-3 text-xs">
              <div className="bg-blue-50/60 border border-blue-200 p-3.5 rounded-xl">
                <span className="text-slate-500 text-[11px]">Total Allocated Quota</span>
                <p className="text-lg font-bold text-blue-700 mt-1">{selectedEmployee.allocatedTokens.toLocaleString()}</p>
                <p className="text-[10px] text-slate-500 mt-0.5">Assigned by Admin</p>
              </div>

              <div className="bg-amber-50/60 border border-amber-200 p-3.5 rounded-xl">
                <span className="text-slate-500 text-[11px]">Tokens Used (Consumed)</span>
                <p className="text-lg font-bold text-amber-600 mt-1">{selectedEmployee.usedTokens.toLocaleString()}</p>
                <p className="text-[10px] text-slate-500 mt-0.5">{selectedEmployee.usagePercentage}% utilized</p>
              </div>

              <div className="bg-emerald-50/60 border border-emerald-200 p-3.5 rounded-xl">
                <span className="text-slate-500 text-[11px]">Remaining Balance</span>
                <p className="text-lg font-bold text-emerald-700 mt-1">{selectedEmployee.remainingTokens.toLocaleString()}</p>
                <p className="text-[10px] text-slate-500 mt-0.5">Ready to use</p>
              </div>
            </div>

            {/* Requested Tokens / Token Needs (Yenni Kavali) */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Token Requests & Quota Requirements
              </h4>

              {getEmployeeRequests(selectedEmployee).length === 0 ? (
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center text-xs text-slate-500">
                  No additional token requests submitted by this employee. Current quota is sufficient.
                </div>
              ) : (
                <div className="space-y-2">
                  {getEmployeeRequests(selectedEmployee).map(req => (
                    <div key={req.id} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-bold text-slate-900">{req.projectName}</span>
                          <span className="text-blue-700 font-mono font-bold ml-2">Requested: +{req.requestedTokens.toLocaleString()} tokens</span>
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

                      <div className="space-y-1 text-[11px] text-slate-600 bg-white p-2.5 rounded-lg border border-slate-200">
                        <p><strong className="text-slate-800">Reason:</strong> {req.reason}</p>
                        <p><strong className="text-slate-800">Why Prior Tokens Were Insufficient:</strong> {req.previousInsufficientReason}</p>
                        {req.adminRemarks && (
                          <p className="text-blue-700 font-medium"><strong>Admin Remarks:</strong> {req.adminRemarks}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* AI Task Consumption History */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Recent AI Task Executions
              </h4>

              {getEmployeeUsage(selectedEmployee).length === 0 ? (
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center text-xs text-slate-500">
                  No individual task inference records logged yet.
                </div>
              ) : (
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {getEmployeeUsage(selectedEmployee).map(rec => (
                    <div key={rec.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start justify-between text-xs">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold text-slate-900">{rec.projectName}</span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 font-medium">
                            {rec.modelUsed}
                          </span>
                        </div>
                        <p className="text-slate-700 mt-0.5">{rec.taskName}</p>
                        <p className="text-[10px] text-slate-400 mt-0.5">{rec.timestamp}</p>
                      </div>
                      <div className="text-right">
                        <span className="font-mono font-bold text-amber-600">-{rec.tokensUsed.toLocaleString()}</span>
                        <p className="text-[10px] text-slate-500 mt-0.5">Bal: {rec.remainingBalanceAfter.toLocaleString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Close Button */}
            <div className="flex justify-end pt-3 border-t border-slate-100">
              <button
                onClick={() => setSelectedEmployee(null)}
                className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
