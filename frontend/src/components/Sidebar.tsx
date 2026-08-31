import React from 'react';
import { LayoutDashboard, Sparkles, Bot, Database, BarChart3, Sliders, Shield, CreditCard, FileText } from 'lucide-react';

export const Sidebar: React.FC<{ currentTab: string; setCurrentTab: (t: string) => void }> = ({ currentTab, setCurrentTab }) => {
  const items = [
    { id: 'dashboard', label: 'AI Overview', icon: LayoutDashboard },
    { id: 'playground', label: 'Model Playground', icon: Sparkles },
    { id: 'agents', label: 'Multi-Agent Studio', icon: Bot },
    { id: 'rag', label: 'RAG Knowledge Hub', icon: Database },
    { id: 'evaluations', label: 'Evaluation Benchmarks', icon: BarChart3 },
    { id: 'finetuning', label: 'LoRA Fine-Tuning', icon: Sliders },
    { id: 'safety', label: 'Safety Guardrails', icon: Shield },
    { id: 'analytics', label: 'Token Analytics & Billing', icon: CreditCard },
    { id: 'audit', label: 'Governance Audit Ledger', icon: FileText }
  ];

  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 p-4 flex flex-col justify-between">
      <div className="space-y-1.5">
        {items.map(item => {
          const Icon = item.icon;
          const active = currentTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentTab(item.id)}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-xs transition-all ${
                active ? 'bg-indigo-600/20 text-indigo-300 font-bold border border-indigo-500/40 shadow-inner' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              <Icon className={`w-4 h-4 ${active ? 'text-indigo-400' : 'text-slate-500'}`} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </aside>
  );
};
