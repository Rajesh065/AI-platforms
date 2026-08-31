import { Request, Response } from 'express';
import { AIService } from '../services/aiService';

export class AIController {
  static getModels(req: Request, res: Response): void { res.json({ success: true, data: AIService.getModels() }); }
  static getAgents(req: Request, res: Response): void { res.json({ success: true, data: AIService.getAgents() }); }
  static getCollections(req: Request, res: Response): void { res.json({ success: true, data: AIService.getCollections() }); }
  static getEvaluations(req: Request, res: Response): void { res.json({ success: true, data: AIService.getEvaluations() }); }
  static getFineTuning(req: Request, res: Response): void { res.json({ success: true, data: AIService.getFineTuningJobs() }); }
  static getSafetyRules(req: Request, res: Response): void { res.json({ success: true, data: AIService.getSafetyRules() }); }
  static getAuditLogs(req: Request, res: Response): void { res.json({ success: true, data: AIService.getAuditLogs() }); }

  static executePrompt(req: Request, res: Response): void {
    const { modelId, messages, temperature } = req.body;
    const safety = AIService.runToxicityCheck(JSON.stringify(messages));
    if (!safety.isSafe) {
      res.status(400).json({ success: false, message: 'Blocked by CortexAI Safety Guardrails', flags: safety.detectedFlags });
      return;
    }
    const result = AIService.executePrompt(modelId || 'claude-3-5-sonnet', messages || [], temperature || 0.7);
    res.json({ success: true, data: result });
  }
}
