import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { EvaluationRun } from '../types';

export const EvaluationsPage: React.FC = () => {
  const [evals, setEvals] = useState<EvaluationRun[]>([]);
  useEffect(() => { api.getEvaluations().then(setEvals).catch(() => {}); }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-black text-white">Model Evaluation & Benchmark Suite</h1>
      <div className="space-y-4">
        {evals.map(e => (
          <div key={e.id} className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-2 shadow-xl">
            <div className="flex justify-between items-center">
              <span className="font-black text-sm text-white">{e.benchmarkName}</span>
              <span className="text-xs font-bold text-emerald-400">{e.accuracyScore}% Accuracy</span>
            </div>
            <div className="grid grid-cols-3 gap-3 text-[11px] font-mono text-slate-400 pt-2">
              <div>ROUGE-L: {e.rougeLScore}%</div>
              <div>Faithfulness: {e.faithfulnessScore}%</div>
              <div>Hallucination: {e.hallucinationRate}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
