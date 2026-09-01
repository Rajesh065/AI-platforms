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

export const HorizontalNav: React.FC<{ currentTab: string; setCurrentTab: (t: string) => void }> = ({ currentTab, setCurrentTab }) => {
  const navItems = [
    { id: 'dashboard', label: 'AI Operations Command', icon: LayoutDashboard, badge: 'Live' },
    { id: 'models', label: 'Multi-LLM Router', icon: Cpu, badge: '4 Serving' },
    { id: 'agents', label: 'Autonomous Agent Swarms', icon: Bot },
    { id: 'prompt', label: 'Prompt Studio & Evals', icon: Terminal },
    { id: 'rag', label: 'Hybrid RAG & Vector DB', icon: Database },
    { id: 'guardrails', label: 'Guardrails & Safety Suite', icon: ShieldAlert },
    { id: 'finetuning', label: 'LoRA Fine-Tuning Jobs', icon: Sliders },
    { id: 'governance', label: 'Model Cards & Audit Ledger', icon: FileText }
  ];

  return (
    <nav className="bg-white border-b border-slate-200 px-6 overflow-x-auto shadow-xs sticky top-[57px] z-30">
      <div className="flex items-center gap-1.5 min-w-max py-2 max-w-7xl mx-auto">
        {navItems.map(item => {
          const Icon = item.icon;
          const active = currentTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentTab(item.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                active
                  ? 'bg-indigo-50 text-indigo-800 font-bold border border-indigo-200/80 shadow-xs'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 border border-transparent'
              }`}
            >
              <Icon className={`w-4 h-4 ${active ? 'text-indigo-700' : 'text-slate-400'}`} />
              <span>{item.label}</span>
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
    </nav>
  );
};
