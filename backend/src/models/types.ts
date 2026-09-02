export type UserRole = 'ADMIN' | 'AI_ENGINEER' | 'MLOPS_ARCHITECT' | 'SAFETY_AUDITOR';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  team: string;
  accessTier: string;
  createdAt: string;
}

export interface ModelEndpoint {
  id: string;
  name: string;
  provider: 'OPENAI' | 'ANTHROPIC' | 'DEEPSEEK' | 'META_OPEN_WEIGHTS' | 'MISTRAL';
  architecture: string;
  contextWindowTokens: number;
  costPer1MTokensUsd: number;
  averageLatencyMs: number;
  quantization: 'FP16' | 'BF16' | 'AWQ_4BIT' | 'GPTQ_8BIT';
  status: 'ACTIVE_SERVING' | 'WARM_STANDBY' | 'DEGRADED';
}

export interface AgentWorkflow {
  id: string;
  name: string;
  agentRole: string;
  primaryModel: string;
  toolsEnabled: string[];
  maxIterations: number;
  memoryType: 'VECTOR_EPISODIC' | 'THREAD_WINDOW' | 'SUMMARIZED_SLIDING';
  status: 'ONLINE' | 'IDLE' | 'EXECUTING';
}

export interface RagKnowledgeBase {
  id: string;
  name: string;
  embeddingModel: string;
  vectorDimensions: number;
  totalDocuments: number;
  indexedChunksCount: number;
  similarityMetric: 'COSINE' | 'DOT_PRODUCT' | 'EUCLIDEAN';
  status: 'INDEXED_HEALTHY' | 'SYNCING';
}
