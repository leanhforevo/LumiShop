import { Router } from 'express';
import { healthController } from '../controllers/healthController.js';
import { generateVideoController } from '../controllers/videoController.js';
import { shopifyWebhookController } from '../controllers/shopifyController.js';
import {
  listInstalledShopsController,
  shopifyCallbackController,
  shopifyInstallController,
} from '../controllers/shopifyAuthController.js';
import { listJobsController } from '../controllers/jobsController.js';

const router = Router();

router.get('/health', healthController);
router.get('/shopify/install', shopifyInstallController);
router.get('/shopify/callback', shopifyCallbackController);
router.get('/shops', listInstalledShopsController);
router.get('/jobs', listJobsController);
router.post('/videos/generate', generateVideoController);
router.post('/webhooks/shopify', shopifyWebhookController);

export default router;
