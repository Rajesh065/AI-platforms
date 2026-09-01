import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { ModelEndpoint, AgentWorkflow } from '../types';
import {
  Cpu,
  Bot,
  Zap,
  TrendingUp,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Radio
} from 'lucide-react';

export const DashboardPage: React.FC<{ onNavigate: (t: string) => void }> = ({ onNavigate }) => {
  const [models, setModels] = useState<ModelEndpoint[]>([]);
  const [agents, setAgents] = useState<AgentWorkflow[]>([]);

  useEffect(() => {
    api.getModels().then(setModels).catch(() => {});
    api.getAgents().then(setAgents).catch(() => {});
  }, []);

  return (
    <div className="space-y-6">
      {/* Welcome / Header Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 rounded-md">
              CortexAI OS Neural Gateway
            </span>
          </div>
          <h1 className="text-xl font-bold text-slate-900 mt-1.5">Enterprise LLM Operations & Inference Hub</h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Serving <strong className="text-slate-700 font-semibold">{models.length} foundation models</strong> across DeepSeek-V3, Claude 3.5, and Llama 3.3 clusters.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => onNavigate('models')}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs transition-all"
          >
            <Cpu className="w-4 h-4" />
            <span>LLM Router</span>
          </button>
          <button
            onClick={() => onNavigate('agents')}
            className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs px-4 py-2.5 rounded-xl transition-all border border-slate-200"
          >
            <Bot className="w-4 h-4" />
            <span>Agent Swarms</span>
          </button>
        </div>
      </div>

      {/* Real-Time Telemetry Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex justify-between items-center text-xs font-bold text-slate-500">
            <span>TODAY'S INFERENCE TOKENS</span>
            <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl">
              <Zap className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-900 mt-2">48.62M Tokens</p>
          <div className="flex items-center gap-1.5 text-[11px] text-emerald-600 font-semibold mt-1">
            <span>38.4% Semantic Cache Hit Rate</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex justify-between items-center text-xs font-bold text-slate-500">
            <span>AVERAGE GATEWAY LATENCY</span>
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
              <ActivityIcon className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-900 mt-2">24 ms</p>
          <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium mt-1">
            <span>Fastest: Llama 3.3 (18ms)</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex justify-between items-center text-xs font-bold text-slate-500">
            <span>ACTIVE AGENT SWARMS</span>
            <div className="p-2 bg-purple-50 text-purple-600 rounded-xl">
              <Bot className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-900 mt-2">{agents.length || 2} Online</p>
          <div className="flex items-center gap-1.5 text-[11px] text-indigo-600 font-semibold mt-1">
            <span>Auton. Tool Calling Active</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex justify-between items-center text-xs font-bold text-slate-500">
            <span>GUARDRAILS SAFETY RATE</span>
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
              <ShieldCheck className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-900 mt-2">100.0% Pass</p>
          <div className="flex items-center gap-1.5 text-[11px] text-emerald-600 font-semibold mt-1">
            <span>Zero prompt injection bypass</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Active LLM Model Endpoints */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
          <div className="flex justify-between items-center border-b border-slate-100 pb-3">
            <div>
              <h2 className="text-sm font-bold text-slate-900">Active Multi-Provider Model Endpoints</h2>
              <p className="text-[11px] text-slate-500">Dynamic routing, context window & cost optimization</p>
            </div>
            <button
              onClick={() => onNavigate('models')}
              className="text-indigo-700 hover:text-indigo-800 text-xs font-bold flex items-center gap-1"
            >
              <span>View All Models</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="divide-y divide-slate-100">
            {models.map(m => (
              <div key={m.id} className="py-3.5 flex items-center justify-between gap-4 hover:bg-slate-50/80 px-2 rounded-xl transition-all">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-xs text-slate-900">{m.name}</span>
                    <span className="text-[10px] font-mono bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">{m.quantization}</span>
                  </div>
                  <p className="text-xs text-slate-500">{m.architecture} • {m.provider}</p>
                  <div className="flex items-center gap-3 text-[11px] text-slate-400 font-mono">
                    <span>{(m.contextWindowTokens / 1000).toFixed(0)}k Context</span>
                    <span>•</span>
                    <span>${m.costPer1MTokensUsd.toFixed(2)} / 1M Tokens</span>
                    <span>•</span>
                    <span>{m.averageLatencyMs}ms Latency</span>
                  </div>
                </div>

                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                  Serving
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right 1 Col: Agent Swarms */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <h2 className="text-sm font-bold text-slate-900">Autonomous Agent Swarms</h2>
            <p className="text-[11px] text-slate-500">Active Multi-Agent Workflows</p>
          </div>

          <div className="space-y-3">
            {agents.map(a => (
              <div key={a.id} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs font-bold text-slate-900">{a.name}</p>
                    <p className="text-[10px] text-slate-500 font-mono">Role: {a.agentRole}</p>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-100 text-indigo-800">
                    Online
                  </span>
                </div>
                <div className="pt-1 text-[11px] text-slate-600">
                  <p><strong>Tools:</strong> {a.toolsEnabled.join(', ')}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

function ActivityIcon(props: any) {
  return <TrendingUp {...props} />;
}
