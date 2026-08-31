import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { AIModel } from '../types';
import { Send, Sparkles } from 'lucide-react';

export const PlaygroundPage: React.FC = () => {
  const [models, setModels] = useState<AIModel[]>([]);
  const [selectedModel, setSelectedModel] = useState('gpt-4o');
  const [prompt, setPrompt] = useState('Explain how MoE (Mixture of Experts) architectures scale efficiently.');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api.getModels().then(setModels).catch(() => {});
  }, []);

  const handleRun = async () => {
    setLoading(true);
    try {
      const res = await api.runPlaygroundPrompt(selectedModel, prompt);
      setResponse(res.response);
    } catch {
      setResponse('Error generating response.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-black text-white">Multi-Model Playground & Arena</h1>
      <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-4 shadow-xl">
        <div className="flex gap-4">
          <select
            value={selectedModel}
            onChange={e => setSelectedModel(e.target.value)}
            className="bg-slate-950 border border-slate-800 p-2.5 rounded-xl text-xs font-bold text-indigo-400"
          >
            {models.map(m => (
              <option key={m.id} value={m.id}>{m.name} ({m.provider})</option>
            ))}
          </select>
          <button
            onClick={handleRun}
            disabled={loading}
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-2 shadow-lg transition-all"
          >
            <Send className="w-4 h-4" /> {loading ? 'Generating...' : 'Run Generation'}
          </button>
        </div>

        <textarea
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          rows={4}
          className="w-full p-4 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 font-mono focus:outline-none focus:border-indigo-500"
        />

        {response && (
          <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl text-xs font-mono text-slate-300 whitespace-pre-wrap">
            {response}
          </div>
        )}
      </div>
    </div>
  );
};
