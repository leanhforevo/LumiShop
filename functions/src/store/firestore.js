import admin from 'firebase-admin';

export const db = admin.firestore();

export const collections = {
  shops: () => db.collection('shops'),
  jobs: () => db.collection('video_jobs'),
};
