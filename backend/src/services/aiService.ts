import { mockDataStore } from '../models/mockData';
import { AIModel, ChatMessage, Agent, EvaluationRun, FineTuningJob, AIAuditLog } from '../models/types';

export class AIService {
  static getModels(): AIModel[] { return mockDataStore.models; }
  static getAgents(): Agent[] { return mockDataStore.agents; }
  static getCollections() { return mockDataStore.collections; }
  static getEvaluations(): EvaluationRun[] { return mockDataStore.evaluations; }
  static getFineTuningJobs(): FineTuningJob[] { return mockDataStore.fineTuningJobs; }
  static getSafetyRules() { return mockDataStore.safetyRules; }
  static getAuditLogs(): AIAuditLog[] { return mockDataStore.auditLogs; }

  static executePrompt(modelId: string, messages: ChatMessage[], temperature: number): { response: string; inputTokens: number; outputTokens: number; latencyMs: number } {
    const model = mockDataStore.models.find(m => m.id === modelId) || mockDataStore.models[0];
    const lastUserMsg = messages.filter(m => m.role === 'user').pop()?.content || 'Hello';
    
    let generated = `[${model.name}] Generated output for: "${lastUserMsg.slice(0, 60)}..."

Execution successfully routed via CortexAI Smart Gateway. Multi-modal embedding and reasoning verification completed.`;
    
    const inTokens = Math.round(lastUserMsg.length / 4) + 120;
    const outTokens = 240;
    const latency = model.averageLatencyMs + Math.floor(Math.random() * 80);

    mockDataStore.auditLogs.unshift({
      id: 'audit-' + Date.now(),
      timestamp: new Date().toISOString(),
      userId: 'usr-admin-1',
      userName: 'Elena Rostova',
      userRole: 'ADMIN',
      action: 'PROMPT_COMPLETION',
      modelId,
      promptSnippet: lastUserMsg.slice(0, 80),
      inputTokens: inTokens,
      outputTokens: outTokens,
      estimatedCostUsd: (inTokens * model.inputCostPer1M + outTokens * model.outputCostPer1M) / 1000000,
      latencyMs: latency,
      status: 'SUCCESS',
      ipAddress: '127.0.0.1'
    });

    return { response: generated, inputTokens: inTokens, outputTokens: outTokens, latencyMs: latency };
  }

  static runToxicityCheck(text: string): { isSafe: boolean; detectedFlags: string[] } {
    const flags: string[] = [];
    const lower = text.toLowerCase();
    for (const rule of mockDataStore.safetyRules) {
      if (rule.isEnabled && new RegExp(rule.pattern, 'i').test(lower)) {
        flags.push(`Violated rule: ${rule.ruleName}`);
      }
    }
    return { isSafe: flags.length === 0, detectedFlags: flags };
  }
}
