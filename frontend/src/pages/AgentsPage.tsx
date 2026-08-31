import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Agent } from '../types';

export const AgentsPage: React.FC = () => {
  const [agents, setAgents] = useState<Agent[]>([]);
  useEffect(() => { api.getAgents().then(setAgents).catch(() => {}); }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-black text-white">Autonomous Multi-Agent Workflow Studio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {agents.map(a => (
          <div key={a.id} className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-3 shadow-xl">
            <div className="flex justify-between items-center">
              <h2 className="text-base font-black text-white">{a.name}</h2>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">{a.status}</span>
            </div>
            <p className="text-xs text-slate-400">{a.roleDescription}</p>
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-[11px] font-mono text-violet-300">
              Tools: {a.tools.join(', ')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
