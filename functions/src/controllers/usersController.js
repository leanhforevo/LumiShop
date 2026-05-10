import { z } from 'zod';
import { fail, ok } from '../utils/http.js';
import { createUserRecord } from '../services/userRepository.js';

const createUserSchema = z.object({
  email: z.string().email(),
  provider: z.string().optional(),
  metadata: z.record(z.any()).optional(),
});

export async function createUserController(req, res) {
  try {
    const payload = createUserSchema.parse(req.body || {});
    const user = await createUserRecord(payload);
    return ok(res, { user }, 201);
  } catch (error) {
    return fail(res, 'Invalid user payload', 400, {
      error: error?.message || 'unknown_error',
    });
  }
}
