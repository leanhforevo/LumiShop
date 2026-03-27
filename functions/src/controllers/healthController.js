import { ok } from '../utils/http.js';

export function healthController(_req, res) {
  return ok(res, {
    service: 'lumishop-functions',
    status: 'healthy',
    timestamp: new Date().toISOString(),
  });
}
