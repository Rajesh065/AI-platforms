import { Router } from 'express';
import { AiController } from '../controllers/aiController';

const router = Router();
router.get('/models', AiController.getModels);
router.get('/models/:id', AiController.getModelById);
router.get('/agents', AiController.getAgents);
router.get('/knowledge', AiController.getKnowledgeBases);
router.post('/inference/route', AiController.routeInference);

export default router;
