import React from 'react';
import { ShieldAlert, CheckCircle2 } from 'lucide-react';

export const GuardrailsSafetyPage: React.FC = () => (
  <div className="space-y-6">
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
      <h1 className="text-xl font-bold text-slate-900">AI Safety & Guardrails Suite</h1>
      <p className="text-xs text-slate-500 mt-0.5">Prompt injection filters, PII redactors, and hallucination scoring</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
        <p className="text-xs font-bold text-slate-400 uppercase font-mono">PROMPT INJECTION</p>
        <p className="text-2xl font-bold text-emerald-600">0 Bypasses</p>
        <p className="text-xs text-slate-500">Strict delimiter token isolation</p>
      </div>
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
        <p className="text-xs font-bold text-slate-400 uppercase font-mono">PII MASKING</p>
        <p className="text-2xl font-bold text-indigo-600">100% Redacted</p>
        <p className="text-xs text-slate-500">HIPAA & GDPR compliance verified</p>
      </div>
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
        <p className="text-xs font-bold text-slate-400 uppercase font-mono">HALLUCINATION SCORE</p>
        <p className="text-2xl font-bold text-emerald-600">&lt; 0.2%</p>
        <p className="text-xs text-slate-500">Grounded in RAG verified context</p>
      </div>
    </div>
  </div>
);
