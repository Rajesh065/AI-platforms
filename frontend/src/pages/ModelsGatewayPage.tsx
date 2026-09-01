import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { ModelEndpoint } from '../types';
import { Cpu, Plus } from 'lucide-react';

export const ModelsGatewayPage: React.FC = () => {
  const [models, setModels] = useState<ModelEndpoint[]>([]);

  useEffect(() => {
    api.getModels().then(setModels).catch(() => {});
  }, []);

  return (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Multi-LLM Dynamic Router & Gateway</h1>
          <p className="text-xs text-slate-500 mt-0.5">Automated fallback cascades, semantic caching, and token cost optimization</p>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs flex items-center gap-1.5 transition-all">
          <Plus className="w-4 h-4" />
          <span>Deploy New Model</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {models.map(m => (
          <div key={m.id} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <span className="font-bold text-sm text-slate-900">{m.name}</span>
                <p className="text-xs text-slate-500">{m.architecture}</p>
              </div>
              <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">Active</span>
            </div>
            <div className="pt-2 border-t border-slate-100 grid grid-cols-3 gap-2 text-xs text-slate-700 text-center font-mono">
              <div className="bg-slate-50 p-2 rounded-lg">
                <p className="text-[9px] text-slate-400 uppercase">CONTEXT</p>
                <p className="font-bold">{(m.contextWindowTokens/1000).toFixed(0)}k</p>
              </div>
              <div className="bg-slate-50 p-2 rounded-lg">
                <p className="text-[9px] text-slate-400 uppercase">COST / 1M</p>
                <p className="font-bold">${m.costPer1MTokensUsd.toFixed(2)}</p>
              </div>
              <div className="bg-slate-50 p-2 rounded-lg">
                <p className="text-[9px] text-slate-400 uppercase">LATENCY</p>
                <p className="font-bold">{m.averageLatencyMs}ms</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
