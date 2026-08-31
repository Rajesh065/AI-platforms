import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Agent } from '../types';

export const AgentsPage: React.FC = () => {
  const [agents, setAgents] = useState<Agent[]>([]);
  useEffect(() => { api.getAgents().then(setAgents).catch(() => {}); }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-black text-white">Multi-Agent Orchestration Studio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {agents.map(a => (
          <div key={a.id} className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-2 shadow-xl">
            <span className="font-black text-sm text-white">{a.name}</span>
            <p className="text-xs font-mono text-indigo-400">Model: {a.modelId}</p>
            <p className="text-xs text-slate-400">{a.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
