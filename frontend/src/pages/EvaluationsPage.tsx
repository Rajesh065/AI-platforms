import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { EvaluationRun } from '../types';

export const EvaluationsPage: React.FC = () => {
  const [evals, setEvals] = useState<EvaluationRun[]>([]);
  useEffect(() => { api.getEvaluations().then(setEvals).catch(() => {}); }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-black text-white">Model Evaluation Benchmarks (GSM8K, HumanEval, MMLU)</h1>
      <div className="space-y-3">
        {evals.map(e => (
          <div key={e.id} className="bg-slate-900 p-4 rounded-2xl border border-slate-800 flex justify-between items-center text-xs">
            <div>
              <p className="font-bold text-slate-200">{e.benchmarkName}</p>
              <p className="text-slate-500 font-mono text-[10px]">Model: {e.modelId}</p>
            </div>
            <span className="px-2.5 py-0.5 rounded font-black bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">Accuracy: {e.accuracyScore}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};
