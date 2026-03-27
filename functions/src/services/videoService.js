import { buildTemplateContext } from './templateService.js';

export async function createVideoJob(product = {}) {
  const context = buildTemplateContext(product);

  return {
    id: `job_${Date.now()}`,
    status: 'queued',
    mode: 'template',
    context,
  };
}
