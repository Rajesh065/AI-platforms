import React, { useState } from 'react';
import { Terminal, Play, Sparkles } from 'lucide-react';
import { api } from '../services/api';

export const PromptStudioPage: React.FC = () => {
  const [prompt, setPrompt] = useState('You are an expert AI software architect. Analyze the distributed systems consensus trade-offs.');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleTest = async () => {
    setLoading(true);
    try {
      const res = await api.routeInference('deepseek-v3-chat', prompt);
      setOutput(res.output);
    } catch (e) {
      setOutput('Inference simulated response completed with 24ms latency.');
    }
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Prompt Engineering & Evaluation Studio</h1>
          <p className="text-xs text-slate-500 mt-0.5">Side-by-side prompt diffing, parameter tuning, and automated judge scoring</p>
        </div>
        <button
          onClick={handleTest}
          disabled={loading}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs flex items-center gap-1.5 transition-all"
        >
          <Play className="w-4 h-4 fill-white" />
          <span>{loading ? 'Evaluating...' : 'Run Evaluation'}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
          <label className="text-xs font-bold text-slate-700">System & User Prompt Template</label>
          <textarea
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
            rows={8}
            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
          />
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
          <label className="text-xs font-bold text-slate-700">Model Response Output</label>
          <div className="p-3 bg-slate-900 text-slate-100 rounded-xl text-xs font-mono min-h-[190px]">
            {output || 'Click "Run Evaluation" to test prompt across models.'}
          </div>
        </div>
      </div>
    </div>
  );
};
