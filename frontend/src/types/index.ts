export interface AIModel {
  id: string;
  name: string;
  provider: string;
  modelType: string;
  contextWindow: number;
  averageLatencyMs: number;
  status: string;
}

export interface Agent {
  id: string;
  name: string;
  role: string;
  systemPersona: string;
  modelId: string;
  tools: string[];
}

export interface EvaluationRun {
  id: string;
  modelId: string;
  benchmarkName: string;
  accuracyScore: number;
  faithfulnessScore: number;
}
