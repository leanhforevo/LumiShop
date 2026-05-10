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
import {
  listVideosController,
  productDetailVideoController,
  publishVideoController,
  unpublishVideoController,
} from '../controllers/videosController.js';
import { storefrontProductDetailController } from '../controllers/storefrontController.js';
import {
  kingMmoBuyController,
  kingMmoOrderController,
  kingMmoProductController,
  kingMmoProductsController,
  kingMmoProfileController,
} from '../controllers/kingMmoController.js';
import { createUserController } from '../controllers/usersController.js';
import { stackStatusController } from '../controllers/systemController.js';

const router = Router();

router.get('/health', healthController);
router.get('/stack', stackStatusController);
router.get('/shopify/install', shopifyInstallController);
router.get('/shopify/callback', shopifyCallbackController);
router.get('/shops', listInstalledShopsController);
router.get('/jobs', listJobsController);
router.get('/videos', listVideosController);
router.get('/videos/product/:productId', productDetailVideoController);
router.get('/storefront/product/:productId', storefrontProductDetailController);
router.get('/providers/kingmmo/profile', kingMmoProfileController);
router.get('/providers/kingmmo/products', kingMmoProductsController);
router.get('/providers/kingmmo/products/:productId', kingMmoProductController);
router.get('/providers/kingmmo/orders/:orderId', kingMmoOrderController);
router.post('/users', createUserController);
router.post('/videos/generate', generateVideoController);
router.post('/videos/publish', publishVideoController);
router.post('/videos/unpublish', unpublishVideoController);
router.post('/providers/kingmmo/buy', kingMmoBuyController);
router.post('/webhooks/shopify', shopifyWebhookController);

export default router;
