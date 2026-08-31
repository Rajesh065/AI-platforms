import { AIModel, Agent, EvaluationRun, FineTuningJob, SafetyRule, AIAuditLog } from '../types';

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
  getAgents: () => fetchJson<Agent[]>('/agents'),
  getEvaluations: () => fetchJson<EvaluationRun[]>('/evaluations'),
  getFineTuning: () => fetchJson<FineTuningJob[]>('/finetuning'),
  getSafetyRules: () => fetchJson<SafetyRule[]>('/safety-rules'),
  getAuditLogs: () => fetchJson<AIAuditLog[]>('/audit-logs'),
  executePrompt: (modelId: string, messages: any[], temperature: number) => fetchJson<any>('/playground/execute', {
    method: 'POST',
    body: JSON.stringify({ modelId, messages, temperature })
  })
};
