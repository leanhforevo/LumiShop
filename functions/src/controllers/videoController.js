import { z } from 'zod';
import { fail, ok } from '../utils/http.js';
import { createVideoJob } from '../services/videoService.js';

const generateSchema = z.object({
  title: z.string().min(1),
  price: z.string().optional(),
  featuredImage: z.string().url().optional(),
  tags: z.array(z.string()).optional(),
});

export async function generateVideoController(req, res) {
  try {
    const payload = generateSchema.parse(req.body || {});
    const job = await createVideoJob(payload);
    return ok(res, { job }, 202);
  } catch (error) {
    return fail(res, 'Invalid generate payload', 400, {
      error: error?.message || 'unknown_error',
    });
  }
}
