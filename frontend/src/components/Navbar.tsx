import React from 'react';
import { Bot, ShieldCheck, Activity } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-40 px-6 py-3.5 flex items-center justify-between shadow-xl">
      <div className="flex items-center gap-3">
        <div className="bg-gradient-to-tr from-indigo-600 to-cyan-500 p-2.5 rounded-xl text-white shadow-lg shadow-indigo-500/20">
          <Bot className="w-6 h-6 stroke-[2.5]" />
        </div>
        <span className="font-extrabold text-xl tracking-tight text-white flex items-center gap-2">
          CortexAI OS <span className="text-[10px] bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 font-black px-2 py-0.5 rounded-md">ENTERPRISE AI</span>
        </span>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 px-3 py-1.5 rounded-xl text-xs font-bold text-indigo-400">
          <Activity className="w-4 h-4 text-indigo-400" />
          <span>Gateway Active (5 Models)</span>
        </div>
      </div>
    </header>
  );
};
