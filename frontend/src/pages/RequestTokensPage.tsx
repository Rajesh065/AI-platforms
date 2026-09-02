import React, { useState } from 'react';
import { useTokens } from '../context/TokenContext';
import { Send, Coins } from 'lucide-react';

export const RequestTokensPage: React.FC = () => {
  const { currentUser, employees, submitTokenRequest, requests } = useTokens();

  const emp = employees.find(e => e.id === currentUser.id || e.employeeId === currentUser.employeeId) || employees[0];
  const myRequests = requests.filter(r => r.employeeId === emp.id || r.employeeName === emp.name);

  const [requestedTokens, setRequestedTokens] = useState<number>(1000000);
  const [projectName, setProjectName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [reason, setReason] = useState('');
  const [previousInsufficientReason, setPreviousInsufficientReason] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!requestedTokens || !projectName || !taskDescription || !reason || !previousInsufficientReason) return;

    const success = submitTokenRequest({
      employeeId: emp.id,
      employeeName: emp.name,
      department: emp.department,
      requestedTokens: Number(requestedTokens),
      projectName,
      taskDescription,
      reason,
      previousInsufficientReason
    });

    if (success) {
      setRequestedTokens(1000000);
      setProjectName('');
      setTaskDescription('');
      setReason('');
      setPreviousInsufficientReason('');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
        <div>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">Request Additional AI Tokens</h1>
          <p className="text-xs text-slate-500 mt-1">
            Submit an official request to the Admin for additional LLM token quota for your active projects.
          </p>
        </div>
        <div className="flex items-center space-x-3 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200 text-xs">
          <Coins className="w-4 h-4 text-emerald-600" />
          <span className="text-slate-600">Your Remaining Balance:</span>
          <span className="font-mono font-bold text-emerald-700">{emp.remainingTokens.toLocaleString()} tokens</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-sm">
          <h2 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3">New Token Quota Request Form</h2>

          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Number of Tokens Requested</label>
                <input
                  type="number"
                  min="50000"
                  step="50000"
                  value={requestedTokens}
                  onChange={e => setRequestedTokens(Number(e.target.value))}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 font-mono text-sm text-slate-900 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Project Name</label>
                <input
                  type="text"
                  placeholder="Customer Support Chatbot RAG v2"
                  value={projectName}
                  onChange={e => setProjectName(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Task or Work Description</label>
              <textarea
                rows={2}
                placeholder="Detailed description of what task this token quota will be used for..."
                value={taskDescription}
                onChange={e => setTaskDescription(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Reason for Requesting Additional Tokens</label>
              <textarea
                rows={2}
                placeholder="Why are additional tokens necessary at this stage?"
                value={reason}
                onChange={e => setReason(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Explanation of Why Previously Allocated Tokens Were Insufficient
              </label>
              <textarea
                rows={2}
                placeholder="High context window payload or larger synthetic dataset than initially budgeted..."
                value={previousInsufficientReason}
                onChange={e => setPreviousInsufficientReason(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="px-6 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs flex items-center space-x-2 shadow-sm transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Submit Request to Admin</span>
              </button>
            </div>
          </form>
        </div>

        <div className="space-y-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3 text-xs shadow-sm">
            <h3 className="font-bold text-slate-900 text-sm">Your Current Quota</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-500">Allocated Quota:</span>
                <span className="font-mono font-bold text-slate-900">{emp.allocatedTokens.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Tokens Used:</span>
                <span className="font-mono font-bold text-amber-600">{emp.usedTokens.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Remaining Balance:</span>
                <span className="font-mono font-bold text-emerald-600">{emp.remainingTokens.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-2 text-xs shadow-sm">
            <span className="font-semibold text-slate-800">Approval Guidelines</span>
            <ul className="space-y-1.5 text-[11px] text-slate-600 list-disc list-inside leading-relaxed">
              <li>Admins review all submitted justifications before approving.</li>
              <li>Requests can be fully approved, partially approved, or rejected with remarks.</li>
              <li>Ensure prompt caching is enabled on long inputs.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-sm">
        <h3 className="text-sm font-bold text-slate-900">My Request History & Live Decisions</h3>
        {myRequests.length === 0 ? (
          <div className="p-8 text-center text-slate-500 text-xs">
            No token requests submitted yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3">
            {myRequests.map(req => (
              <div key={req.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-semibold text-slate-900 text-sm">{req.projectName}</span>
                    <p className="text-slate-500 mt-0.5">{req.taskDescription}</p>
                  </div>
                  <span className={`px-2.5 py-1 rounded text-[10px] font-bold ${
                    req.status === 'PENDING' ? 'bg-amber-50 text-amber-800 border border-amber-200' :
                    req.status === 'APPROVED' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' :
                    req.status === 'PARTIALLY_APPROVED' ? 'bg-blue-50 text-blue-800 border border-blue-200' :
                    'bg-rose-50 text-rose-800 border border-rose-200'
                  }`}>
                    {req.status.replace('_', ' ')}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] pt-1 text-slate-600">
                  <div>
                    <span className="text-slate-500">Reason: </span>
                    <span>{req.reason}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Prior Quota Insufficiency: </span>
                    <span>{req.previousInsufficientReason}</span>
                  </div>
                </div>

                {req.adminRemarks && (
                  <div className="mt-2 p-2.5 rounded-lg bg-white border border-slate-200 text-[11px]">
                    <span className="font-semibold text-blue-800">Admin Remarks ({req.reviewedBy}): </span>
                    <span className="text-slate-700 italic">{req.adminRemarks}</span>
                    {req.approvedTokens && (
                      <p className="text-emerald-700 font-bold mt-0.5">Approved: +{req.approvedTokens.toLocaleString()} tokens</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
