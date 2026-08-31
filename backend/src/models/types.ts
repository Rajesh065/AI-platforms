export type UserRole = 'ADMIN' | 'ML_ENGINEER' | 'DATA_SCIENTIST' | 'PROMPT_ENGINEER' | 'AUDITOR' | 'DEVELOPER';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  team: string;
  accessTier: string;
  rateLimitRpm: number;
  monthlyTokenQuota: number;
  tokensConsumedThisMonth: number;
  createdAt: string;
}

export type ModelProvider = 'OpenAI' | 'Anthropic' | 'Google' | 'Meta' | 'Mistral' | 'DeepSeek' | 'Custom';
export type ModelType = 'CHAT' | 'COMPLETION' | 'EMBEDDING' | 'VISION' | 'REASONING' | 'CODE';

export interface AIModel {
  id: string;
  name: string;
  provider: ModelProvider;
  modelType: ModelType;
  contextWindow: number;
  maxOutputTokens: number;
  inputCostPer1M: number;
  outputCostPer1M: number;
  supportsStreaming: boolean;
  supportsFunctionCalling: boolean;
  supportsVision: boolean;
  averageLatencyMs: number;
  status: 'ACTIVE' | 'DEGRADED' | 'MAINTENANCE';
}

export interface ChatMessage {
  id: string;
  role: 'system' | 'user' | 'assistant' | 'tool';
  content: string;
  timestamp: string;
  tokenCount?: number;
  toolCalls?: Array<{ id: string; name: string; arguments: any }>;
}

export interface PromptTemplate {
  id: string;
  title: string;
  category: string;
  systemPrompt: string;
  userPromptTemplate: string;
  variables: string[];
  recommendedModel: string;
  temperature: number;
  tags: string[];
  version: number;
}

export interface AgentTool {
  id: string;
  name: string;
  description: string;
  category: 'CODE_EXECUTION' | 'DATA_QUERY' | 'WEB_SEARCH' | 'VECTOR_SEARCH' | 'API_INTEGRATION';
  parametersSchema: Record<string, any>;
  isSandboxed: boolean;
}

export interface Agent {
  id: string;
  name: string;
  roleDescription: string;
  systemPrompt: string;
  modelId: string;
  temperature: number;
  tools: string[];
  maxIterations: number;
  memoryType: 'CONVERSATIONAL' | 'VECTOR_LONG_TERM' | 'SUMMARY_BUFFER';
  status: 'IDLE' | 'EXECUTING' | 'WAITING_FOR_TOOL' | 'COMPLETED' | 'FAILED';
}

export interface DocumentChunk {
  id: string;
  documentId: string;
  documentTitle: string;
  content: string;
  chunkIndex: number;
  tokenCount: number;
  embeddingVector?: number[];
  similarityScore?: number;
  metadata: Record<string, any>;
}

export interface KnowledgeCollection {
  id: string;
  name: string;
  description: string;
  embeddingModel: string;
  vectorDimension: number;
  chunkSizeTokens: number;
  chunkOverlapTokens: number;
  totalDocuments: number;
  totalChunks: number;
  createdAt: string;
}

export interface EvaluationRun {
  id: string;
  benchmarkName: string;
  modelId: string;
  datasetSize: number;
  accuracyScore: number;
  rougeLScore: number;
  bleuScore: number;
  faithfulnessScore: number;
  hallucinationRate: number;
  averageLatencyMs: number;
  status: 'RUNNING' | 'COMPLETED' | 'FAILED';
  executedAt: string;
}

export interface FineTuningJob {
  id: string;
  jobName: string;
  baseModel: string;
  tuningMethod: 'LORA' | 'QLORA' | 'FULL_PARAM';
  datasetName: string;
  totalSamples: number;
  epochs: number;
  learningRate: number;
  batchSize: number;
  currentEpoch: number;
  trainLoss: number;
  validationLoss: number;
  status: 'QUEUED' | 'RUNNING' | 'COMPLETED' | 'FAILED';
  outputCheckpoint?: string;
  startedAt: string;
  completedAt?: string;
}

export interface SafetyRule {
  id: string;
  ruleName: string;
  category: 'PROMPT_INJECTION' | 'PII_REDACTION' | 'JAILBREAK_PREVENTION' | 'TOXICITY' | 'SYSTEM_PROMPT_LEAK';
  pattern: string;
  action: 'BLOCK' | 'REDACT' | 'FLAG_AND_LOG';
  severity: 'HIGH' | 'MEDIUM' | 'LOW';
  isEnabled: boolean;
}

export interface AIAuditLog {
  id: string;
  timestamp: string;
  userId: string;
  userName: string;
  userRole: UserRole;
  action: 'PROMPT_COMPLETION' | 'AGENT_WORKFLOW' | 'RAG_QUERY' | 'EVAL_RUN' | 'FINE_TUNE_START' | 'GUARDRAIL_BLOCKED' | 'API_KEY_ROTATED';
  modelId?: string;
  promptSnippet: string;
  inputTokens: number;
  outputTokens: number;
  estimatedCostUsd: number;
  latencyMs: number;
  status: 'SUCCESS' | 'BLOCKED_BY_GUARDRAIL' | 'RATE_LIMITED' | 'ERROR';
  ipAddress: string;
}
