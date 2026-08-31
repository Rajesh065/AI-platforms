import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { SafetyRule } from '../types';

export const SafetyGuardrailsPage: React.FC = () => {
  const [rules, setRules] = useState<SafetyRule[]>([]);
  useEffect(() => { api.getSafetyRules().then(setRules).catch(() => {}); }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-black text-white">AI Safety & Prompt Injection Firewall</h1>
      <div className="space-y-3">
        {rules.map(r => (
          <div key={r.id} className="bg-slate-900 p-4 rounded-2xl border border-slate-800 flex justify-between items-center text-xs">
            <div>
              <p className="font-bold text-slate-200">{r.ruleName}</p>
              <p className="text-slate-500 text-[10px]">{r.category} • Action: {r.action}</p>
            </div>
            <span className="px-2 py-0.5 rounded font-black bg-rose-500/20 text-rose-300 border border-rose-500/40">{r.severity}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
