import { ModelEndpoint, AgentWorkflow, RagKnowledgeBase } from '../types';

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
  getModels: () => fetchJson<ModelEndpoint[]>('/models'),
  getAgents: () => fetchJson<AgentWorkflow[]>('/agents'),
  getKnowledgeBases: () => fetchJson<RagKnowledgeBase[]>('/knowledge'),
  routeInference: (modelId: string, prompt: string) => fetchJson<any>('/inference/route', {
    method: 'POST',
    body: JSON.stringify({ modelId, prompt })
  })
};
