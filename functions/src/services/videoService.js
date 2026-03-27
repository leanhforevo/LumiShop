import { buildTemplateContext } from './templateService.js';
import { saveJob } from './jobService.js';

export async function createVideoJob(product = {}) {
  const context = buildTemplateContext(product);

  const job = {
    id: `job_${Date.now()}`,
    status: 'queued',
    mode: 'template',
    context,
    product,
    createdAt: new Date().toISOString(),
  };

  await saveJob(job);

  return job;
}
