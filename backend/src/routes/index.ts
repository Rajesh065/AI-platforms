import { Router } from 'express';
import { AIController } from '../controllers/aiController';

const router = Router();
router.get('/models', AIController.getModels);
router.get('/agents', AIController.getAgents);
router.get('/collections', AIController.getCollections);
router.get('/evaluations', AIController.getEvaluations);
router.get('/finetuning', AIController.getFineTuning);
router.get('/safety-rules', AIController.getSafetyRules);
router.get('/audit-logs', AIController.getAuditLogs);
router.post('/playground/execute', AIController.executePrompt);

export default router;
