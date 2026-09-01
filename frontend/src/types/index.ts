export interface ModelEndpoint {
  id: string;
  name: string;
  provider: string;
  architecture: string;
  contextWindowTokens: number;
  costPer1MTokensUsd: number;
  averageLatencyMs: number;
  quantization: string;
  status: string;
}

export interface AgentWorkflow {
  id: string;
  name: string;
  agentRole: string;
  primaryModel: string;
  toolsEnabled: string[];
  maxIterations: number;
  memoryType: string;
  status: string;
}

export interface RagKnowledgeBase {
  id: string;
  name: string;
  embeddingModel: string;
  vectorDimensions: number;
  totalDocuments: number;
  indexedChunksCount: number;
  similarityMetric: string;
  status: string;
}
