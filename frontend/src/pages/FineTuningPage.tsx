import React from 'react';
import { Sliders, Play } from 'lucide-react';

export const FineTuningPage: React.FC = () => (
  <div className="space-y-6">
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex justify-between items-center">
      <div>
        <h1 className="text-xl font-bold text-slate-900">LoRA Fine-Tuning & Quantization Pipeline</h1>
        <p className="text-xs text-slate-500 mt-0.5">Multi-GPU distributed training, loss curve monitoring, and QLoRA adapters</p>
      </div>
      <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs flex items-center gap-1.5 transition-all">
        <Play className="w-4 h-4 fill-white" />
        <span>Start Training Job</span>
      </button>
    </div>

    <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-3 text-xs">
      <p className="font-bold text-slate-800">Active Job: Llama-3.3-70B-Domain-LoRA (Epoch 3/5)</p>
      <div className="w-full bg-slate-100 rounded-full h-2.5">
        <div className="bg-indigo-600 h-2.5 rounded-full w-3/5"></div>
      </div>
      <p className="text-slate-500">Training Loss: 0.124 • Learning Rate: 2e-5 • Target Modules: q_proj, v_proj</p>
    </div>
  </div>
);
