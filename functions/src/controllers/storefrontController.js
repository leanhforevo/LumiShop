import { ok } from '../utils/http.js';
import { getPublishedVideoForProduct } from '../services/videoPublishService.js';

export async function storefrontProductDetailController(req, res) {
  const productId = req.params.productId;
  const published = await getPublishedVideoForProduct(productId);

  return ok(res, {
    placement: 'product-detail',
    productId,
    published,
  });
}
