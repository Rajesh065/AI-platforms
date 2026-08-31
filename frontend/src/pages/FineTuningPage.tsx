import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { FineTuningJob } from '../types';

export const FineTuningPage: React.FC = () => {
  const [jobs, setJobs] = useState<FineTuningJob[]>([]);
  useEffect(() => { api.getFineTuning().then(setJobs).catch(() => {}); }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-black text-white">LoRA & QLoRA Fine-Tuning Workbench</h1>
      <div className="space-y-4">
        {jobs.map(j => (
          <div key={j.id} className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-black text-sm text-white">{j.jobName}</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-violet-500/20 text-violet-300 border border-violet-500/40">{j.status}</span>
            </div>
            <p className="text-xs text-slate-400">Base: {j.baseModel} • Samples: {j.totalSamples.toLocaleString()} • Epochs: {j.epochs}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
