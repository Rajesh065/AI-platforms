import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { AIAuditLog } from '../types';

export const AuditLogsPage: React.FC = () => {
  const [logs, setLogs] = useState<AIAuditLog[]>([]);
  useEffect(() => { api.getAuditLogs().then(setLogs).catch(() => {}); }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-black text-white">AI Governance & Chronological Access Logs</h1>
      <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden text-xs">
        <table className="w-full text-left">
          <thead className="bg-slate-950 border-b border-slate-800 font-bold text-slate-400">
            <tr><th className="p-3">Timestamp</th><th className="p-3">User</th><th className="p-3">Action</th><th className="p-3">Tokens</th><th className="p-3">Status</th></tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {logs.map(l => (
              <tr key={l.id} className="hover:bg-slate-800/40">
                <td className="p-3 text-slate-500 font-mono">{new Date(l.timestamp).toLocaleTimeString()}</td>
                <td className="p-3 font-bold text-slate-300">{l.userName}</td>
                <td className="p-3 font-mono text-violet-400">{l.action}</td>
                <td className="p-3 text-slate-400">{l.inputTokens + l.outputTokens}</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded font-bold bg-emerald-500/20 text-emerald-300">{l.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
