export type UserRole = 'ADMIN' | 'ML_ENGINEER' | 'PROMPT_ENGINEER' | 'DATA_SCIENTIST' | 'SECURITY_OFFICER';

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

export type ModelProvider = 'OpenAI' | 'Anthropic' | 'Google' | 'DeepSeek' | 'Meta' | 'Mistral' | 'LocalOllama';
export type ModelType = 'CHAT' | 'REASONING' | 'EMBEDDING' | 'CODE' | 'VISION' | 'AUDIO';

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

export interface PromptTemplate {
  id: string;
  title: string;
  domain: string;
  description: string;
  systemPrompt: string;
  userPromptTemplate: string;
  recommendedModelId: string;
  temperature: number;
  topP: number;
  inputVariables: string[];
}

export interface AgentTool {
  id: string;
  name: string;
  description: string;
  functionSchema: Record<string, any>;
  isSandboxed: boolean;
}

export interface Agent {
  id: string;
  name: string;
  role: string;
  systemPersona: string;
  modelId: string;
  tools: string[];
  maxIterationSteps: number;
  status: 'ACTIVE' | 'IDLE';
}

export interface EvaluationRun {
  id: string;
  modelId: string;
  benchmarkName: string;
  accuracyScore: number;
  latencyAvgMs: number;
  costPer1kQueries: number;
  toxicityScore: number;
  faithfulnessScore: number;
}
