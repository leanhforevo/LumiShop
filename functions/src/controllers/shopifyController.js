import { ok } from '../utils/http.js';
import { logger } from '../utils/logger.js';

export async function shopifyWebhookController(req, res) {
  logger.info('shopify webhook received', {
    topic: req.headers['x-shopify-topic'],
    shop: req.headers['x-shopify-shop-domain'],
  });

  return ok(res, { received: true });
}
