import React from 'react';
import { LayoutDashboard, Terminal, Bot, Database, BarChart3, Wrench, ShieldAlert, CreditCard, ScrollText } from 'lucide-react';

export const Sidebar: React.FC<{ currentTab: string; setCurrentTab: (t: string) => void }> = ({ currentTab, setCurrentTab }) => {
  const items = [
    { id: 'dashboard', label: 'Platform Overview', icon: LayoutDashboard },
    { id: 'playground', label: 'Model Playground', icon: Terminal },
    { id: 'agents', label: 'Multi-Agent Studio', icon: Bot },
    { id: 'rag', label: 'RAG & Vector Hub', icon: Database },
    { id: 'evaluations', label: 'Model Evaluations', icon: BarChart3 },
    { id: 'finetuning', label: 'Fine-Tuning & LoRA', icon: Wrench },
    { id: 'safety', label: 'AI Safety Firewall', icon: ShieldAlert },
    { id: 'analytics', label: 'Token Billing & Cost', icon: CreditCard },
    { id: 'audit', label: 'Governance Logs', icon: ScrollText }
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
                active ? 'bg-violet-600/20 text-violet-300 font-bold border border-violet-500/40 shadow-inner' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              <Icon className={`w-4 h-4 ${active ? 'text-violet-400' : 'text-slate-500'}`} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </aside>
  );
};
