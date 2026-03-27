import { buildTemplateContext } from './templateService.js';
import { saveJob } from './jobService.js';
import { createVideoRecord } from './videoPublishService.js';

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
  const video = await createVideoRecord({ job, product });

  return {
    ...job,
    video,
  };
}
