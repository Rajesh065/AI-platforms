import { mockDataStore } from '../models/mockData';
import { AIModel, Agent } from '../models/types';

export class AIService {
  static getModels(): AIModel[] { return mockDataStore.models; }
  static getAgents(): Agent[] { return mockDataStore.agents; }
  static getEvaluations() { return mockDataStore.evaluations; }

  static executePrompt(modelId: string, prompt: string, temperature = 0.7) {
    const model = mockDataStore.models.find(m => m.id === modelId) || mockDataStore.models[0];
    const tokens = Math.floor(prompt.length / 3) + 120;
    const latency = model.averageLatencyMs + Math.floor(Math.random() * 40);
    return {
      modelId: model.id,
      prompt,
      response: `[${model.name} Response] Computed reasoning output for prompt under temperature ${temperature}. High-fidelity response generated successfully.`,
      tokensConsumed: tokens,
      latencyMs: latency,
      timestamp: new Date().toISOString()
    };
  }
}
