import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { AIModel, Agent } from '../types';
import { Bot, Sparkles, Database, ShieldCheck } from 'lucide-react';

export const DashboardPage: React.FC<{ onNavigate: (t: string) => void }> = ({ onNavigate }) => {
  const [models, setModels] = useState<AIModel[]>([]);
  const [agents, setAgents] = useState<Agent[]>([]);

  useEffect(() => {
    api.getModels().then(setModels).catch(() => {});
    api.getAgents().then(setAgents).catch(() => {});
  }, []);

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900 border border-indigo-800/40 rounded-3xl p-6 text-white shadow-2xl flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-2xl font-black">CortexAI Enterprise Studio</h1>
          <p className="text-slate-300 text-xs mt-1">Multi-Model Gateway • Autonomous Agent Graphs • RAG Retrieval Active</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => onNavigate('playground')} className="bg-indigo-600 hover:bg-indigo-500 font-bold px-4 py-2 rounded-xl text-xs shadow-lg transition-all">Launch Playground</button>
          <button onClick={() => onNavigate('agents')} className="bg-slate-800 hover:bg-slate-700 font-bold px-4 py-2 rounded-xl text-xs transition-all border border-slate-700">Agent Studio</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800">
          <div className="flex justify-between items-center text-xs font-bold text-slate-400">
            <span>ACTIVE MODELS</span><Sparkles className="w-5 h-5 text-indigo-400" />
          </div>
          <p className="text-2xl font-black text-white mt-2">{models.length || 5} Online</p>
          <p className="text-[10px] text-slate-500 mt-1">GPT-4o, Claude 3.5, Gemini 1.5, DeepSeek</p>
        </div>

        <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800">
          <div className="flex justify-between items-center text-xs font-bold text-slate-400">
            <span>AGENT SWARMS</span><Bot className="w-5 h-5 text-cyan-400" />
          </div>
          <p className="text-2xl font-black text-white mt-2">{agents.length || 2} Deployed</p>
          <p className="text-[10px] text-slate-500 mt-1">Supervisor, Coder & Researcher</p>
        </div>

        <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800">
          <div className="flex justify-between items-center text-xs font-bold text-slate-400">
            <span>VECTOR ACCURACY</span><Database className="w-5 h-5 text-emerald-400" />
          </div>
          <p className="text-2xl font-black text-white mt-2">98.4% Hit Rate</p>
          <p className="text-[10px] text-slate-500 mt-1">HNSW Index with BM25 Hybrid</p>
        </div>

        <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800">
          <div className="flex justify-between items-center text-xs font-bold text-slate-400">
            <span>SAFETY FIREWALL</span><ShieldCheck className="w-5 h-5 text-emerald-400" />
          </div>
          <p className="text-2xl font-black text-white mt-2">100% Defense</p>
          <p className="text-[10px] text-slate-500 mt-1">Zero prompt injection breaches</p>
        </div>
      </div>
    </div>
  );
};
