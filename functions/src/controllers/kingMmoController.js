import { z } from 'zod';
import { fail, ok } from '../utils/http.js';
import { kingMmoClient } from '../integrations/kingMmoClient.js';

const buySchema = z.object({
  id: z.union([z.string(), z.number()]),
  amount: z.union([z.string(), z.number()]),
  coupon: z.string().optional(),
});

export async function kingMmoProfileController(_req, res) {
  const data = await kingMmoClient.getProfile();
  return ok(res, { provider: 'kingmmo', data });
}

export async function kingMmoProductsController(_req, res) {
  const data = await kingMmoClient.getProducts();
  return ok(res, { provider: 'kingmmo', data });
}

export async function kingMmoProductController(req, res) {
  const product = req.params.productId;
  const data = await kingMmoClient.getProduct(product);
  return ok(res, { provider: 'kingmmo', data });
}

export async function kingMmoOrderController(req, res) {
  const order = req.params.orderId;
  const data = await kingMmoClient.getOrder(order);
  return ok(res, { provider: 'kingmmo', data });
}

export async function kingMmoBuyController(req, res) {
  try {
    const payload = buySchema.parse(req.body || {});
    const data = await kingMmoClient.buyProduct(payload);
    return ok(res, { provider: 'kingmmo', data });
  } catch (error) {
    return fail(res, 'Invalid buy payload', 400, {
      error: error?.message || 'unknown_error',
    });
  }
}
