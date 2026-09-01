import { User, ModelEndpoint, AgentWorkflow, RagKnowledgeBase } from './types';

export const mockDataStore: {
  users: User[];
  models: ModelEndpoint[];
  agents: AgentWorkflow[];
  knowledgeBases: RagKnowledgeBase[];
} = {
  users: [
    { id: 'usr-ai-1', name: 'Elena Rostova', email: 'elena.rostova@cortexai.enterprise', role: 'AI_ENGINEER', team: 'Foundation Models & Gateway', accessTier: 'SUPER_ADMIN_TIER', createdAt: '2025-01-10T08:00:00.000Z' },
    { id: 'usr-ai-2', name: 'Dr. Aaron Vance', email: 'aaron.vance@cortexai.enterprise', role: 'MLOPS_ARCHITECT', team: 'Agent Swarms & LoRA Infrastructure', accessTier: 'MLOPS_LEAD_TIER', createdAt: '2025-01-15T09:00:00.000Z' }
  ],

  models: [
    { id: 'deepseek-v3-chat', name: 'DeepSeek-V3 MoE (671B Params)', provider: 'DEEPSEEK', architecture: 'Mixture-of-Experts (64 Active)', contextWindowTokens: 128000, costPer1MTokensUsd: 0.14, averageLatencyMs: 24, quantization: 'BF16', status: 'ACTIVE_SERVING' },
    { id: 'claude-3-5-sonnet', name: 'Claude 3.5 Sonnet', provider: 'ANTHROPIC', architecture: 'Dense Transformer Reasoning', contextWindowTokens: 200000, costPer1MTokensUsd: 3.00, averageLatencyMs: 38, quantization: 'FP16', status: 'ACTIVE_SERVING' },
    { id: 'gpt-4o-omni', name: 'GPT-4o Multimodal Omni', provider: 'OPENAI', architecture: 'Cross-Attention Multimodal Transformer', contextWindowTokens: 128000, costPer1MTokensUsd: 2.50, averageLatencyMs: 32, quantization: 'FP16', status: 'ACTIVE_SERVING' },
    { id: 'llama-3-3-70b-instruct', name: 'Llama 3.3 70B Instruct', provider: 'META_OPEN_WEIGHTS', architecture: 'Dense Grouped-Query Attention', contextWindowTokens: 128000, costPer1MTokensUsd: 0.35, averageLatencyMs: 18, quantization: 'AWQ_4BIT', status: 'ACTIVE_SERVING' }
  ],

  agents: [
    { id: 'agent-swarm-orchestrator', name: 'Autonomous Research & Synthesis Swarm', agentRole: 'LEAD_SYNTHESIZER', primaryModel: 'deepseek-v3-chat', toolsEnabled: ['Tavily Web Search', 'Vector Knowledge DB', 'Python Code Interpreter', 'Artifact Generator'], maxIterations: 10, memoryType: 'VECTOR_EPISODIC', status: 'ONLINE' },
    { id: 'agent-code-refactor', name: 'Static Code Analysis & Security Auditor', agentRole: 'CODE_SECURITY_ENGINEER', primaryModel: 'claude-3-5-sonnet', toolsEnabled: ['AST Parser', 'Ripgrep Codebase Search', 'Semgrep Static Scanner'], maxIterations: 8, memoryType: 'THREAD_WINDOW', status: 'ONLINE' }
  ],

  knowledgeBases: [
    { id: 'kb-legal-contracts', name: 'Enterprise SaaS Legal & Regulatory Corpus', embeddingModel: 'text-embedding-3-large', vectorDimensions: 3072, totalDocuments: 1420, indexedChunksCount: 48200, similarityMetric: 'COSINE', status: 'INDEXED_HEALTHY' },
    { id: 'kb-engineering-docs', name: 'Distributed Systems & Architecture RFCs', embeddingModel: 'bge-large-en-v1.5', vectorDimensions: 1024, totalDocuments: 850, indexedChunksCount: 29400, similarityMetric: 'COSINE', status: 'INDEXED_HEALTHY' }
  ]
};
