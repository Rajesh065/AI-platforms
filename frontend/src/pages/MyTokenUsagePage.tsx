import React, { useState } from 'react';
import { useTokens } from '../context/TokenContext';
import { Play, Coins, AlertCircle } from 'lucide-react';

export const MyTokenUsagePage: React.FC = () => {
  const { currentUser, employees, consumeTokens, usageRecords } = useTokens();

  const emp = employees.find(e => e.id === currentUser.id || e.employeeId === currentUser.employeeId) || employees[0];
  const myUsage = usageRecords.filter(u => u.employeeId === emp.id || u.employeeName === emp.name);

  const [selectedProject, setSelectedProject] = useState('CodePilot Copilot AST Refactor');
  const [taskName, setTaskName] = useState('Generate Multi-file Architecture Refactor');
  const [modelUsed, setModelUsed] = useState('Claude 3.5 Sonnet (Anthropic)');
  const [tokensToConsume, setTokensToConsume] = useState<number>(35000);
  const [taskDescription, setTaskDescription] = useState('Executed repo-level context injection and refactored TypeScript models.');

  const sampleTasks = [
    { name: 'Multi-file TypeScript AST Refactor', project: 'CodePilot Copilot', model: 'Claude 3.5 Sonnet (Anthropic)', tokens: 42000 },
    { name: 'Batch Catalog Embedding Generation', project: 'Vector Embeddings', model: 'text-embedding-3-large (OpenAI)', tokens: 125000 },
    { name: 'RAG Retrieval Grounding Evaluation', project: 'Customer Support Bot', model: 'GPT-4o (OpenAI)', tokens: 28000 },
    { name: 'De-identification & ICD-10 Summarization', project: 'Healthcare AI', model: 'Gemini 1.5 Pro (Google)', tokens: 65000 },
    { name: 'Jailbreak Defense Fuzzing Experiment', project: 'Security & Safety', model: 'Llama 3 70B (AWS Bedrock)', tokens: 50000 }
  ];

  const handleExecuteTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (tokensToConsume <= 0) return;

    consumeTokens(
      emp.id,
      Number(tokensToConsume),
      selectedProject,
      taskName,
      modelUsed,
      taskDescription
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
        <div>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">AI Task Execution & Token Simulator</h1>
          <p className="text-xs text-slate-500 mt-1">
            Simulate real-time LLM inference requests, evaluate token consumption rates, and test quota boundaries.
          </p>
        </div>
        <div className="flex items-center space-x-3 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200 text-xs">
          <Coins className="w-4 h-4 text-emerald-600" />
          <span className="text-slate-600">Your Remaining Balance:</span>
          <span className="font-mono font-bold text-emerald-700">{emp.remainingTokens.toLocaleString()} tokens</span>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-5 shadow-sm">
        <h2 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3">Execute Simulated AI Workload</h2>

        <div>
          <span className="text-xs text-slate-600 font-semibold block mb-2">Select Quick Workload Preset:</span>
          <div className="flex flex-wrap gap-2">
            {sampleTasks.map((st, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setSelectedProject(st.project);
                  setTaskName(st.name);
                  setModelUsed(st.model);
                  setTokensToConsume(st.tokens);
                  setTaskDescription(`Executed ${st.name} utilizing ${st.model}.`);
                }}
                className="px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200 transition-all flex items-center space-x-1.5"
              >
                <span>{st.name}</span>
                <span className="font-mono text-amber-600 font-bold">({st.tokens.toLocaleString()} tokens)</span>
              </button>
            ))}
          </div>
        </div>

        <form onSubmit={handleExecuteTask} className="space-y-4 text-xs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Project Name</label>
              <input
                type="text"
                value={selectedProject}
                onChange={e => setSelectedProject(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block font-semibold text-slate-700 mb-1">AI Model Engine</label>
              <select
                value={modelUsed}
                onChange={e => setModelUsed(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:border-blue-500"
              >
                <option value="Claude 3.5 Sonnet (Anthropic)">Claude 3.5 Sonnet (Anthropic)</option>
                <option value="GPT-4o (OpenAI)">GPT-4o (OpenAI)</option>
                <option value="text-embedding-3-large (OpenAI)">text-embedding-3-large (OpenAI)</option>
                <option value="Gemini 1.5 Pro (Google)">Gemini 1.5 Pro (Google)</option>
                <option value="Llama 3 70B (AWS Bedrock)">Llama 3 70B (AWS Bedrock)</option>
                <option value="Mistral Large (Mistral AI)">Mistral Large (Mistral AI)</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Estimated Token Cost (Tokens to Consume)
              </label>
              <input
                type="number"
                min="100"
                step="1000"
                value={tokensToConsume}
                onChange={e => setTokensToConsume(Number(e.target.value))}
                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 font-mono text-slate-900 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">Task Name & Description</label>
            <input
              type="text"
              value={taskName}
              onChange={e => setTaskName(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:border-blue-500 mb-2"
              placeholder="Task name"
              required
            />
            <textarea
              rows={2}
              value={taskDescription}
              onChange={e => setTaskDescription(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500"
              placeholder="Task details..."
            />
          </div>

          {tokensToConsume > emp.remainingTokens ? (
            <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 flex items-center space-x-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0 text-rose-600" />
              <span>
                <strong>Quota Exceeded:</strong> You are attempting to consume {tokensToConsume.toLocaleString()} tokens, but you only have {emp.remainingTokens.toLocaleString()} tokens remaining.
              </span>
            </div>
          ) : (
            <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px]">
              Deducting <strong>{tokensToConsume.toLocaleString()} tokens</strong> will leave you with <strong>{(emp.remainingTokens - tokensToConsume).toLocaleString()} tokens</strong> remaining.
            </div>
          )}

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={tokensToConsume > emp.remainingTokens}
              className={`px-5 py-2.5 rounded-lg text-white font-semibold flex items-center space-x-2 transition-all ${
                tokensToConsume > emp.remainingTokens
                  ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                  : 'bg-emerald-600 hover:bg-emerald-700 shadow-sm'
              }`}
            >
              <Play className="w-4 h-4" />
              <span>Execute Task & Deduct Tokens</span>
            </button>
          </div>
        </form>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
        <div className="p-4 border-b border-slate-200 flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-900">My Detailed Task Usage History</h3>
          <span className="text-xs text-slate-500">{myUsage.length} total tasks executed</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-600">
                <th className="py-3 px-4 font-semibold">Timestamp</th>
                <th className="py-3 px-4 font-semibold">Project & Task</th>
                <th className="py-3 px-4 font-semibold">Model Used</th>
                <th className="py-3 px-4 font-semibold text-right">Tokens Consumed</th>
                <th className="py-3 px-4 font-semibold text-right">Remaining Balance</th>
                <th className="py-3 px-4 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {myUsage.map(rec => (
                <tr key={rec.id} className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-mono text-slate-500 whitespace-nowrap">{rec.timestamp}</td>
                  <td className="py-3 px-4">
                    <p className="font-semibold text-slate-900">{rec.projectName}</p>
                    <p className="text-[10px] text-slate-500">{rec.taskName}</p>
                  </td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 text-[10px] font-medium">
                      {rec.modelUsed}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right font-mono font-bold text-amber-600 whitespace-nowrap">
                    -{rec.tokensUsed.toLocaleString()}
                  </td>
                  <td className="py-3 px-4 text-right font-mono font-bold text-emerald-700 whitespace-nowrap">
                    {rec.remainingBalanceAfter.toLocaleString()}
                  </td>
                  <td className="py-3 px-4 text-slate-600 max-w-sm">{rec.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
