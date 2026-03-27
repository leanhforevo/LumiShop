import { z } from 'zod';
import { fail, ok } from '../utils/http.js';
import {
  getPublishedVideoForProduct,
  listVideos,
  publishVideoToProductDetail,
  unpublishVideoFromProductDetail,
} from '../services/videoPublishService.js';

const publishSchema = z.object({
  videoId: z.string().min(1),
  productId: z.string().min(1),
});

export async function listVideosController(_req, res) {
  const videos = await listVideos();
  return ok(res, { videos });
}

export async function publishVideoController(req, res) {
  try {
    const payload = publishSchema.parse(req.body || {});
    const mapping = await publishVideoToProductDetail(payload);
    return ok(res, { mapping });
  } catch (error) {
    return fail(res, 'Invalid publish payload', 400, {
      error: error?.message || 'unknown_error',
    });
  }
}

export async function unpublishVideoController(req, res) {
  try {
    const payload = publishSchema.parse(req.body || {});
    const result = await unpublishVideoFromProductDetail(payload);
    return ok(res, { result });
  } catch (error) {
    return fail(res, 'Invalid unpublish payload', 400, {
      error: error?.message || 'unknown_error',
    });
  }
}

export async function productDetailVideoController(req, res) {
  const productId = req.params.productId;
  const published = await getPublishedVideoForProduct(productId);
  return ok(res, {
    productId,
    published,
  });
}
