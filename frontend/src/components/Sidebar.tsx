import React from 'react';
import {
  LayoutDashboard,
  Cpu,
  Bot,
  Terminal,
  Database,
  ShieldAlert,
  Sliders,
  FileText
} from 'lucide-react';

export const Sidebar: React.FC<{ currentTab: string; setCurrentTab: (t: string) => void }> = ({ currentTab, setCurrentTab }) => {
  const sections = [
    {
      title: 'FOUNDATION MODELS & GATEWAY',
      items: [
        { id: 'dashboard', label: 'AI Operations Command', icon: LayoutDashboard, badge: 'Live' },
        { id: 'models', label: 'Multi-LLM Router', icon: Cpu, badge: '4 Serving' },
        { id: 'agents', label: 'Autonomous Agent Swarms', icon: Bot }
      ]
    },
    {
      title: 'STUDIO & EVALUATION',
      items: [
        { id: 'prompt', label: 'Prompt Studio & Evals', icon: Terminal },
        { id: 'rag', label: 'Hybrid RAG & Vector DB', icon: Database },
        { id: 'guardrails', label: 'Guardrails & Safety Suite', icon: ShieldAlert }
      ]
    },
    {
      title: 'FINE-TUNING & GOVERNANCE',
      items: [
        { id: 'finetuning', label: 'LoRA Fine-Tuning Jobs', icon: Sliders },
        { id: 'governance', label: 'Model Cards & Audit Ledger', icon: FileText }
      ]
    }
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col justify-between py-4 px-3 shadow-xs select-none">
      <div className="space-y-6">
        {sections.map(sec => (
          <div key={sec.title} className="space-y-1">
            <p className="text-[10px] font-bold tracking-wider text-slate-400 uppercase px-3 mb-2 font-mono">
              {sec.title}
            </p>
            {sec.items.map(item => {
              const Icon = item.icon;
              const active = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentTab(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                    active
                      ? 'bg-indigo-50 text-indigo-800 font-bold border border-indigo-200/80 shadow-xs'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-4 h-4 ${active ? 'text-indigo-700' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded ${
                      active ? 'bg-indigo-200 text-indigo-900' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {/* GPU Cluster Telemetry */}
      <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 text-xs">
        <div className="flex items-center justify-between text-[11px] font-bold text-slate-700">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            NVIDIA H100 SXM5
          </span>
          <span className="text-slate-500 font-mono">4 GPUs Active</span>
        </div>
        <p className="text-[10px] text-slate-500 mt-1">VRAM: 72% | 142 tokens/sec</p>
      </div>
    </aside>
  );
};
