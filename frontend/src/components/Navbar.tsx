import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Cpu, ShieldCheck, Sparkles } from 'lucide-react';
import { UserRole } from '../types';

export const Navbar: React.FC = () => {
  const { role, setRole, userName } = useAuth();
  const roles: UserRole[] = ['ADMIN', 'ML_ENGINEER', 'DATA_SCIENTIST', 'PROMPT_ENGINEER', 'AUDITOR'];

  return (
    <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-40 px-6 py-3.5 flex items-center justify-between shadow-xl">
      <div className="flex items-center gap-3">
        <div className="bg-gradient-to-tr from-violet-600 to-sky-500 p-2.5 rounded-xl text-white shadow-lg shadow-violet-500/20">
          <Cpu className="w-6 h-6 stroke-[2.5]" />
        </div>
        <div>
          <span className="font-extrabold text-xl tracking-tight text-white flex items-center gap-2">
            CortexAI OS <span className="text-[10px] bg-violet-500/20 border border-violet-500/40 text-violet-300 font-black px-2 py-0.5 rounded-md">ENTERPRISE v1.0</span>
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1.5 rounded-xl text-xs font-bold text-emerald-400">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Guardrails Active</span>
        </div>

        <div className="flex items-center gap-1 bg-slate-950 border border-slate-800 p-1 rounded-xl">
          {roles.map(r => (
            <button
              key={r}
              onClick={() => setRole(r)}
              className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all ${
                role === r ? 'bg-violet-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};
