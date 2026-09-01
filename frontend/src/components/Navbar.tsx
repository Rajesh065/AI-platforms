import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Search, Bell, Activity, Sparkles, ChevronDown } from 'lucide-react';

export const Navbar: React.FC<{ onNewInference: () => void }> = ({ onNewInference }) => {
  const { engineerName, team, cluster } = useAuth();

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs">
      <div className="px-6 py-3 flex items-center justify-between gap-4">
        {/* CortexAI Branding without top badge icon */}
        <div className="flex items-center gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-base tracking-tight text-slate-900">CortexAI OS</span>
              <span className="text-[11px] font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200 px-2 py-0.5 rounded-md">LLM GATEWAY</span>
            </div>
            <p className="text-[11px] text-slate-500 font-mono font-medium">{cluster}</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md hidden md:block">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search foundation models, agent tools, prompts, vector collections... (⌘K)"
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all"
            />
          </div>
        </div>

        {/* Actions & Engineer Profile */}
        <div className="flex items-center gap-3">
          <button
            onClick={onNewInference}
            className="hidden sm:flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-3.5 py-2 rounded-xl shadow-xs transition-all"
          >
            <Sparkles className="w-4 h-4" />
            <span>Playground Test</span>
          </button>

          <div className="hidden lg:flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-700">
            <Activity className="w-4 h-4 text-indigo-600" />
            <span>24ms Gateway P99</span>
          </div>

          <button className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-xl relative transition-all">
            <Bell className="w-4 h-4" />
            <span className="w-2 h-2 bg-indigo-500 rounded-full absolute top-2 right-2 ring-2 ring-white"></span>
          </button>

          <div className="h-6 w-px bg-slate-200"></div>

          {/* Engineer Avatar */}
          <div className="flex items-center gap-2.5 pl-1 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-indigo-100 border border-indigo-200 flex items-center justify-center text-indigo-800 font-bold text-xs">
              ER
            </div>
            <div className="hidden lg:block text-left">
              <p className="text-xs font-bold text-slate-900 leading-tight">Elena Rostova</p>
              <p className="text-[10px] text-slate-500 font-medium leading-tight">{team}</p>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </div>
        </div>
      </div>
    </header>
  );
};
