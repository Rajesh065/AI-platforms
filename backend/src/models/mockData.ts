import { User, AIModel, PromptTemplate, Agent, AgentTool, KnowledgeCollection, DocumentChunk, EvaluationRun, FineTuningJob, SafetyRule, AIAuditLog } from './types';

export const mockDataStore = {
  users: [
    {
      id: 'usr-admin-1',
      name: 'Elena Rostova (Head of AI Engineering)',
      email: 'admin@cortexai.internal',
      role: 'ADMIN' as const,
      team: 'Core Platform & Architecture',
      accessTier: 'ENTERPRISE_ADMIN_TIER',
      rateLimitRpm: 1200,
      monthlyTokenQuota: 50000000,
      tokensConsumedThisMonth: 12450000,
      createdAt: '2025-01-10T08:00:00.000Z'
    },
    {
      id: 'usr-dev-1',
      name: 'Alex Vance (Senior ML Engineer)',
      email: 'alex.vance@cortexai.internal',
      role: 'ML_ENGINEER' as const,
      team: 'Agentic AI & RAG Systems',
      accessTier: 'ENGINEERING_PRO_TIER',
      rateLimitRpm: 600,
      monthlyTokenQuota: 20000000,
      tokensConsumedThisMonth: 6820000,
      createdAt: '2025-01-15T09:30:00.000Z'
    }
  ],

  models: [
    { id: 'gpt-4o', name: 'GPT-4o Omnichannel', provider: 'OpenAI' as const, modelType: 'CHAT' as const, contextWindow: 128000, maxOutputTokens: 4096, inputCostPer1M: 5.0, outputCostPer1M: 15.0, supportsStreaming: true, supportsFunctionCalling: true, supportsVision: true, averageLatencyMs: 320, status: 'ACTIVE' as const },
    { id: 'claude-3-5-sonnet', name: 'Claude 3.5 Sonnet', provider: 'Anthropic' as const, modelType: 'REASONING' as const, contextWindow: 200000, maxOutputTokens: 8192, inputCostPer1M: 3.0, outputCostPer1M: 15.0, supportsStreaming: true, supportsFunctionCalling: true, supportsVision: true, averageLatencyMs: 410, status: 'ACTIVE' as const },
    { id: 'gemini-1-5-pro', name: 'Gemini 1.5 Pro', provider: 'Google' as const, modelType: 'CHAT' as const, contextWindow: 2000000, maxOutputTokens: 8192, inputCostPer1M: 3.5, outputCostPer1M: 10.5, supportsStreaming: true, supportsFunctionCalling: true, supportsVision: true, averageLatencyMs: 380, status: 'ACTIVE' as const },
    { id: 'deepseek-r1', name: 'DeepSeek-R1 Deep Thinking', provider: 'DeepSeek' as const, modelType: 'REASONING' as const, contextWindow: 64000, maxOutputTokens: 8192, inputCostPer1M: 0.55, outputCostPer1M: 2.19, supportsStreaming: true, supportsFunctionCalling: true, supportsVision: false, averageLatencyMs: 580, status: 'ACTIVE' as const },
    { id: 'llama-3-70b-instruct', name: 'Llama 3.3 70B Instruct', provider: 'Meta' as const, modelType: 'CHAT' as const, contextWindow: 128000, maxOutputTokens: 4096, inputCostPer1M: 0.90, outputCostPer1M: 0.90, supportsStreaming: true, supportsFunctionCalling: true, supportsVision: false, averageLatencyMs: 290, status: 'ACTIVE' as const }
  ],

  agents: [
    {
      id: 'agent-1',
      name: 'Autonomous Software Engineer Agent',
      roleDescription: 'Expert full-stack engineer that generates, refactors, and tests production-grade code architectures.',
      systemPrompt: 'You are an elite software architect and software engineer. You analyze code requirements, write clean modular TypeScript/Python code, execute unit tests, and resolve edge cases.',
      modelId: 'claude-3-5-sonnet',
      temperature: 0.2,
      tools: ['python_code_sandbox', 'git_repo_manager', 'ast_syntax_checker'],
      maxIterations: 10,
      memoryType: 'CONVERSATIONAL' as const,
      status: 'IDLE' as const
    },
    {
      id: 'agent-2',
      name: 'Financial Data & Market Analyst Agent',
      roleDescription: 'Analyzes enterprise balance sheets, macroeconomic indicators, and generates structured forecast models.',
      systemPrompt: 'You are a quantitative financial analyst. Query SQL databases, run econometric regressions in Python, and output structured investment analysis.',
      modelId: 'gpt-4o',
      temperature: 0.1,
      tools: ['sql_query_runner', 'python_code_sandbox', 'web_market_search'],
      maxIterations: 8,
      memoryType: 'VECTOR_LONG_TERM' as const,
      status: 'IDLE' as const
    }
  ],

  collections: [
    {
      id: 'col-101',
      name: 'Enterprise Technical Documentation & RFCs',
      description: 'System design documents, API specifications, database schemas, and microservice architectural diagrams.',
      embeddingModel: 'text-embedding-3-large',
      vectorDimension: 3072,
      chunkSizeTokens: 512,
      chunkOverlapTokens: 64,
      totalDocuments: 148,
      totalChunks: 2480,
      createdAt: '2025-02-01T10:00:00.000Z'
    }
  ],

  evaluations: [
    {
      id: 'eval-201',
      benchmarkName: 'GSM8K Mathematical Reasoning Benchmark (1,319 samples)',
      modelId: 'deepseek-r1',
      datasetSize: 1319,
      accuracyScore: 94.8,
      rougeLScore: 89.2,
      bleuScore: 84.5,
      faithfulnessScore: 98.2,
      hallucinationRate: 1.8,
      averageLatencyMs: 540,
      status: 'COMPLETED' as const,
      executedAt: '2026-08-30T14:30:00.000Z'
    },
    {
      id: 'eval-202',
      benchmarkName: 'HumanEval Python Code Generation Benchmark (164 samples)',
      modelId: 'claude-3-5-sonnet',
      datasetSize: 164,
      accuracyScore: 92.4,
      rougeLScore: 94.1,
      bleuScore: 91.0,
      faithfulnessScore: 99.1,
      hallucinationRate: 0.9,
      averageLatencyMs: 390,
      status: 'COMPLETED' as const,
      executedAt: '2026-08-31T09:15:00.000Z'
    }
  ],

  fineTuningJobs: [
    {
      id: 'ft-301',
      jobName: 'Llama-3-70B-Cortex-Enterprise-Coder-LoRA',
      baseModel: 'llama-3-70b-instruct',
      tuningMethod: 'LORA' as const,
      datasetName: 'enterprise-typescript-codebase-v2.jsonl',
      totalSamples: 25000,
      epochs: 3,
      learningRate: 0.0002,
      batchSize: 16,
      currentEpoch: 3,
      trainLoss: 0.421,
      validationLoss: 0.468,
      status: 'COMPLETED' as const,
      outputCheckpoint: 's3://cortex-models/checkpoints/llama3-coder-v2-final.pt',
      startedAt: '2026-08-30T10:00:00.000Z',
      completedAt: '2026-08-30T18:45:00.000Z'
    }
  ],

  safetyRules: [
    { id: 'sec-1', ruleName: 'Prompt Injection & System Prompt Extraction Defense', category: 'PROMPT_INJECTION' as const, pattern: 'ignore all previous instructions|reveal your system prompt|disregard safety guidelines', action: 'BLOCK' as const, severity: 'HIGH' as const, isEnabled: true },
    { id: 'sec-2', ruleName: 'Automated PII Redaction (SSN, Credit Card, Email)', category: 'PII_REDACTION' as const, pattern: '\b\d{3}-\d{2}-\d{4}\b|\b(?:4[0-9]{12}(?:[0-9]{3})?)\b', action: 'REDACT' as const, severity: 'HIGH' as const, isEnabled: true }
  ],

  auditLogs: [
    {
      id: 'audit-001',
      timestamp: '2026-08-31T11:00:15.000Z',
      userId: 'usr-admin-1',
      userName: 'Elena Rostova',
      userRole: 'ADMIN' as const,
      action: 'PROMPT_COMPLETION' as const,
      modelId: 'claude-3-5-sonnet',
      promptSnippet: 'Analyze enterprise vector similarity performance across 10M embeddings...',
      inputTokens: 450,
      outputTokens: 820,
      estimatedCostUsd: 0.0136,
      latencyMs: 385,
      status: 'SUCCESS' as const,
      ipAddress: '192.168.1.110'
    }
  ]
};
