import { AIModel, Agent, EvaluationRun } from '../types';

const API_BASE = 'http://localhost:5000/api/v1';

async function fetchJson<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${url}`, {
    ...options,
    headers: { 'Content-Type': 'application/json', ...(options?.headers || {}) }
  });
  if (!res.ok) throw new Error(`API Error: ${res.statusText}`);
  const json = await res.json();
  return json.data;
}

export const api = {
  getModels: () => fetchJson<AIModel[]>('/models'),
  runPlaygroundPrompt: (modelId: string, prompt: string) => fetchJson<any>('/playground/run', {
    method: 'POST',
    body: JSON.stringify({ modelId, prompt })
  }),
  getAgents: () => fetchJson<Agent[]>('/agents'),
  getEvaluations: () => fetchJson<EvaluationRun[]>('/evaluations')
};
