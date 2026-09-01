import { mockDataStore } from '../models/mockData';
import { ModelEndpoint, AgentWorkflow, RagKnowledgeBase } from '../models/types';

export class AiService {
  static getModels(): ModelEndpoint[] { return mockDataStore.models; }
  static getModelById(id: string): ModelEndpoint | undefined { return mockDataStore.models.find(m => m.id === id); }
  static getAgents(): AgentWorkflow[] { return mockDataStore.agents; }
  static getKnowledgeBases(): RagKnowledgeBase[] { return mockDataStore.knowledgeBases; }
  static routeInference(modelId: string, prompt: string) {
    return {
      success: true,
      selectedModel: modelId,
      promptTokens: Math.round(prompt.length / 4),
      completionTokens: 256,
      latencyMs: 32,
      output: 'Inference response processed successfully by CortexAI Dynamic Model Gateway with semantic caching.'
    };
  }
}
