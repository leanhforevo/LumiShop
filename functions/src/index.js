import { onRequest } from 'firebase-functions/v2/https';
import { setGlobalOptions } from 'firebase-functions/v2';
import admin from 'firebase-admin';
import app from './app.js';

if (!admin.apps.length) {
  admin.initializeApp();
}

setGlobalOptions({
  region: 'us-central1',
  maxInstances: 10,
});

export const api = onRequest({ cors: true }, app);
