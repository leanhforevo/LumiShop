import { env } from '../config/env.js';
import { ok } from '../utils/http.js';

export function stackStatusController(_req, res) {
  return ok(res, {
    stack: {
      cloudFunctions: true,
      nextjsFrontend: true,
      supabaseConfigured: Boolean(env.supabaseUrl && env.supabaseServiceRoleKey),
      mongoConfigured: Boolean(env.mongodbUri),
      kingMmoConfigured: Boolean(env.kingMmoApiKey),
    },
  });
}
