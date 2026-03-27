import { collections } from '../store/firestore.js';

export async function saveJob(job) {
  const ref = collections.jobs().doc(job.id);
  await ref.set(
    {
      ...job,
      updatedAt: new Date().toISOString(),
    },
    { merge: true },
  );

  return job;
}

export async function listJobs(limit = 20) {
  const snapshot = await collections.jobs().limit(limit).get();
  return snapshot.docs.map((doc) => doc.data());
}
