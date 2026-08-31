import { Request, Response } from 'express';
import { AIService } from '../services/aiService';

export class AIController {
  static getModels(req: Request, res: Response): void { res.json({ success: true, data: AIService.getModels() }); }
  static getAgents(req: Request, res: Response): void { res.json({ success: true, data: AIService.getAgents() }); }
  static getEvaluations(req: Request, res: Response): void { res.json({ success: true, data: AIService.getEvaluations() }); }

  static runPrompt(req: Request, res: Response): void {
    const { modelId, prompt, temperature } = req.body;
    const result = AIService.executePrompt(modelId || 'gpt-4o', prompt || 'Hello', temperature || 0.7);
    res.json({ success: true, data: result });
  }
}
