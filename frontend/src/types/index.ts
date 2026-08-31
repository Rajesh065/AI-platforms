export type UserRole = 'ADMIN' | 'ML_ENGINEER' | 'DATA_SCIENTIST' | 'PROMPT_ENGINEER' | 'AUDITOR';

export interface AIModel {
  id: string;
  name: string;
  provider: string;
  modelType: string;
  contextWindow: number;
  inputCostPer1M: number;
  outputCostPer1M: number;
  averageLatencyMs: number;
  status: string;
}

export interface Agent {
  id: string;
  name: string;
  roleDescription: string;
  modelId: string;
  temperature: number;
  tools: string[];
  status: string;
}

export interface EvaluationRun {
  id: string;
  benchmarkName: string;
  modelId: string;
  accuracyScore: number;
  rougeLScore: number;
  faithfulnessScore: number;
  hallucinationRate: number;
  averageLatencyMs: number;
  status: string;
}

export interface FineTuningJob {
  id: string;
  jobName: string;
  baseModel: string;
  tuningMethod: string;
  totalSamples: number;
  epochs: number;
  trainLoss: number;
  validationLoss: number;
  status: string;
}

export interface SafetyRule {
  id: string;
  ruleName: string;
  category: string;
  action: string;
  severity: string;
  isEnabled: boolean;
}

export interface AIAuditLog {
  id: string;
  timestamp: string;
  userName: string;
  action: string;
  modelId?: string;
  promptSnippet: string;
  inputTokens: number;
  outputTokens: number;
  estimatedCostUsd: number;
  status: string;
}
