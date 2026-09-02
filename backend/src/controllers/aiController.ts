import { Request, Response } from 'express';
import { AiService } from '../services/aiService';

export class AiController {
  static getModels(req: Request, res: Response): void { res.json({ success: true, data: AiService.getModels() }); }
  static getModelById(req: Request, res: Response): void {
    const model = AiService.getModelById(req.params.id);
    if (!model) { res.status(404).json({ success: false, message: 'Model not found' }); return; }
    res.json({ success: true, data: model });
  }
  static getAgents(req: Request, res: Response): void { res.json({ success: true, data: AiService.getAgents() }); }
  static getKnowledgeBases(req: Request, res: Response): void { res.json({ success: true, data: AiService.getKnowledgeBases() }); }
  static routeInference(req: Request, res: Response): void {
    const result = AiService.routeInference(req.body.modelId || 'deepseek-v3-chat', req.body.prompt || 'Hello');
    res.json({ success: true, data: result });
  }
}
