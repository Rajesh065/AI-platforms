import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { AIModel } from '../types';
import { Send, Sparkles } from 'lucide-react';

export const PlaygroundPage: React.FC = () => {
  const [models, setModels] = useState<AIModel[]>([]);
  const [selectedModel, setSelectedModel] = useState('claude-3-5-sonnet');
  const [temp, setTemp] = useState(0.7);
  const [prompt, setPrompt] = useState('Explain the mathematical difference between Cosine Similarity and Dot Product in high-dimensional vector retrieval.');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => { api.getModels().then(setModels).catch(() => {}); }, []);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.executePrompt(selectedModel, [{ role: 'user', content: prompt }], temp);
      setOutput(res.response);
    } catch (err: any) {
      setOutput(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-black text-white">Multi-Model Playground & Arena</h1>
        <div className="flex gap-3 items-center text-xs">
          <select
            value={selectedModel}
            onChange={e => setSelectedModel(e.target.value)}
            className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white font-bold"
          >
            {models.map(m => <option key={m.id} value={m.id}>{m.name} ({m.provider})</option>)}
          </select>
          <span className="text-slate-400">Temp: {temp}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <form onSubmit={handleSend} className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-4 shadow-xl">
          <label className="text-xs font-bold text-slate-400">User Input Prompt</label>
          <textarea
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs text-slate-200 focus:outline-none focus:border-violet-500"
            rows={8}
          />
          <button type="submit" disabled={loading} className="w-full bg-violet-600 hover:bg-violet-500 text-white font-black py-3 rounded-xl text-xs flex justify-center items-center gap-2 shadow-lg">
            <Send className="w-4 h-4" /> {loading ? 'Inferencing...' : 'Run Completion'}
          </button>
        </form>

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-2">
          <p className="text-xs font-bold text-slate-400">Model Output Stream</p>
          <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs font-mono text-emerald-400 h-64 overflow-y-auto whitespace-pre-wrap">
            {output || 'Output response will appear here after execution...'}
          </div>
        </div>
      </div>
    </div>
  );
};
