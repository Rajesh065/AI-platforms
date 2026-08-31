import { Router } from 'express';
import { AIController } from '../controllers/aiController';

const router = Router();
router.get('/models', AIController.getModels);
router.post('/playground/run', AIController.runPrompt);
router.get('/agents', AIController.getAgents);
router.get('/evaluations', AIController.getEvaluations);

export default router;
