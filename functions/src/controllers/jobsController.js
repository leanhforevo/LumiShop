import { ok } from '../utils/http.js';
import { listJobs } from '../services/jobService.js';

export async function listJobsController(req, res) {
  const limit = Number(req.query.limit || 20);
  const jobs = await listJobs(limit);
  return ok(res, { jobs });
}
