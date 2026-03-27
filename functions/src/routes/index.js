import { Router } from 'express';
import { healthController } from '../controllers/healthController.js';
import { generateVideoController } from '../controllers/videoController.js';
import { shopifyWebhookController } from '../controllers/shopifyController.js';

const router = Router();

router.get('/health', healthController);
router.post('/videos/generate', generateVideoController);
router.post('/webhooks/shopify', shopifyWebhookController);

export default router;
