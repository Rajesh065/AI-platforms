import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { AgentWorkflow } from '../types';
import { Bot, Play } from 'lucide-react';

export const AgentSwarmPage: React.FC = () => {
  const [agents, setAgents] = useState<AgentWorkflow[]>([]);

  useEffect(() => {
    api.getAgents().then(setAgents).catch(() => {});
  }, []);

  return (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Autonomous Multi-Agent Swarm Studio</h1>
          <p className="text-xs text-slate-500 mt-0.5">Hierarchical multi-agent orchestration, tool calling, and episodic memory DAGs</p>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs flex items-center gap-1.5 transition-all">
          <Play className="w-4 h-4 fill-white" />
          <span>Launch Swarm Task</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {agents.map(a => (
          <div key={a.id} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
            <div className="flex justify-between items-start">
              <span className="font-bold text-sm text-slate-900">{a.name}</span>
              <span className="text-[10px] font-bold bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded">Online</span>
            </div>
            <p className="text-xs text-slate-500"><strong>Primary Model:</strong> {a.primaryModel}</p>
            <p className="text-xs text-slate-500"><strong>Memory Architecture:</strong> {a.memoryType}</p>
            <div className="pt-2 border-t border-slate-100 text-xs text-slate-700">
              <p className="font-semibold">Tools Enabled:</p>
              <p className="text-slate-500 mt-0.5">{a.toolsEnabled.join(', ')}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
