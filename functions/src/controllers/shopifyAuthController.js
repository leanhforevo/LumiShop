import { z } from 'zod';
import { fail, ok } from '../utils/http.js';
import { buildInstallUrl } from '../utils/shopify.js';
import { saveShopInstallation, listShops } from '../services/shopService.js';

const installSchema = z.object({
  shop: z.string().min(3),
});

export function shopifyInstallController(req, res) {
  try {
    const { shop } = installSchema.parse(req.query || {});
    return ok(res, {
      installUrl: buildInstallUrl(shop),
      shop,
    });
  } catch (error) {
    return fail(res, 'Invalid install request', 400, {
      error: error?.message || 'unknown_error',
    });
  }
}

export async function shopifyCallbackController(req, res) {
  const shop = req.query.shop || '';
  const code = req.query.code || '';

  if (!shop || !code) {
    return fail(res, 'Missing Shopify callback params', 400);
  }

  const installation = await saveShopInstallation({
    shop,
    accessToken: 'todo_exchange_token',
    scopes: 'read_products,write_products',
  });

  return ok(res, {
    message: 'Shop installation scaffold saved',
    installation,
  });
}

export async function listInstalledShopsController(_req, res) {
  const shops = await listShops();
  return ok(res, { shops });
}
