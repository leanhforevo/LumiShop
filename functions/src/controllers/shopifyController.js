import { fail, ok } from '../utils/http.js';
import { logger } from '../utils/logger.js';
import { verifyShopifyWebhook } from '../utils/shopify.js';

export async function shopifyWebhookController(req, res) {
  const signature = req.headers['x-shopify-hmac-sha256'] || '';
  const isValid = verifyShopifyWebhook({
    rawBody: req.rawBodyText || '',
    signature,
  });

  if (!isValid) {
    return fail(res, 'Invalid Shopify webhook signature', 401);
  }

  logger.info('shopify webhook received', {
    topic: req.headers['x-shopify-topic'],
    shop: req.headers['x-shopify-shop-domain'],
  });

  return ok(res, { received: true, verified: true });
}
