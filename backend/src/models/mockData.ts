import { User, AIModel, PromptTemplate, Agent, AgentTool, EvaluationRun } from './types';

export const mockDataStore = {
  users: [
    { id: 'usr-admin-1', name: 'Elena Rostova', email: 'admin@cortexai.internal', role: 'ADMIN' as const, team: 'Core Platform & Architecture', accessTier: 'ENTERPRISE_ADMIN_TIER', rateLimitRpm: 1200, monthlyTokenQuota: 50000000, tokensConsumedThisMonth: 12450000, createdAt: '2025-01-10T08:00:00.000Z' },
    { id: 'usr-dev-1', name: 'Alex Vance', email: 'alex.vance@cortexai.internal', role: 'ML_ENGINEER' as const, team: 'Agentic AI & RAG Systems', accessTier: 'ENGINEERING_PRO_TIER', rateLimitRpm: 600, monthlyTokenQuota: 20000000, tokensConsumedThisMonth: 6820000, createdAt: '2025-01-15T09:30:00.000Z' }
  ],

  models: [
    { id: 'gpt-4o', name: 'GPT-4o Omnichannel', provider: 'OpenAI' as const, modelType: 'CHAT' as const, contextWindow: 128000, maxOutputTokens: 4096, inputCostPer1M: 5.0, outputCostPer1M: 15.0, supportsStreaming: true, supportsFunctionCalling: true, supportsVision: true, averageLatencyMs: 320, status: 'ACTIVE' as const },
    { id: 'claude-3-5-sonnet', name: 'Claude 3.5 Sonnet', provider: 'Anthropic' as const, modelType: 'REASONING' as const, contextWindow: 200000, maxOutputTokens: 8192, inputCostPer1M: 3.0, outputCostPer1M: 15.0, supportsStreaming: true, supportsFunctionCalling: true, supportsVision: true, averageLatencyMs: 410, status: 'ACTIVE' as const },
    { id: 'gemini-1-5-pro', name: 'Gemini 1.5 Pro', provider: 'Google' as const, modelType: 'CHAT' as const, contextWindow: 2000000, maxOutputTokens: 8192, inputCostPer1M: 3.5, outputCostPer1M: 10.5, supportsStreaming: true, supportsFunctionCalling: true, supportsVision: true, averageLatencyMs: 380, status: 'ACTIVE' as const },
    { id: 'deepseek-r1', name: 'DeepSeek-R1 Deep Thinking', provider: 'DeepSeek' as const, modelType: 'REASONING' as const, contextWindow: 64000, maxOutputTokens: 8192, inputCostPer1M: 0.55, outputCostPer1M: 2.19, supportsStreaming: true, supportsFunctionCalling: true, supportsVision: false, averageLatencyMs: 580, status: 'ACTIVE' as const },
    { id: 'llama-3-70b-instruct', name: 'Llama 3.3 70B Instruct', provider: 'Meta' as const, modelType: 'CHAT' as const, contextWindow: 128000, maxOutputTokens: 4096, inputCostPer1M: 0.90, outputCostPer1M: 0.90, supportsStreaming: true, supportsFunctionCalling: true, supportsVision: false, averageLatencyMs: 290, status: 'ACTIVE' as const }
  ],

  agents: [
    { id: 'ag-supervisor', name: 'Cortex Supervisor Agent', role: 'Decomposes complex requests into DAG sub-tasks and assigns to specialized agents', systemPersona: 'You are the Master Orchestrator overseeing an autonomous multi-agent swarm.', modelId: 'claude-3-5-sonnet', tools: ['code_sandbox_execute', 'vector_search_rag'], maxIterationSteps: 10, status: 'ACTIVE' as const },
    { id: 'ag-coder', name: 'Synthesizer Code Specialist', role: 'Full-stack polyglot software engineer capable of architectural refactoring and zero-shot code generation', systemPersona: 'You are a Senior Principal Software Architect specializing in TypeScript, Python, Rust, and Go.', modelId: 'gpt-4o', tools: ['code_sandbox_execute', 'git_commit_pr'], maxIterationSteps: 8, status: 'ACTIVE' as const }
  ],

  evaluations: [
    { id: 'eval-1', modelId: 'claude-3-5-sonnet', benchmarkName: 'HumanEval (Coding Zero-Shot)', accuracyScore: 92.4, latencyAvgMs: 410, costPer1kQueries: 2.80, toxicityScore: 0.001, faithfulnessScore: 98.2 },
    { id: 'eval-2', modelId: 'gpt-4o', benchmarkName: 'MMLU (Massive Multitask Knowledge)', accuracyScore: 88.7, latencyAvgMs: 320, costPer1kQueries: 3.20, toxicityScore: 0.002, faithfulnessScore: 97.4 },
    { id: 'eval-3', modelId: 'deepseek-r1', benchmarkName: 'GSM8K (Mathematical Reasoning)', accuracyScore: 95.8, latencyAvgMs: 580, costPer1kQueries: 0.85, toxicityScore: 0.001, faithfulnessScore: 99.1 }
  ]
};
