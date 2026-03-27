import crypto from 'node:crypto';
import { env } from '../config/env.js';

export function buildInstallUrl(shop) {
  const redirectUri = `${env.shopifyAppUrl}/api/shopify/callback`;
  const scopes = env.shopifyScopes;
  return `https://${shop}/admin/oauth/authorize?client_id=${env.shopifyApiKey}&scope=${encodeURIComponent(scopes)}&redirect_uri=${encodeURIComponent(redirectUri)}`;
}

export function verifyShopifyWebhook({ rawBody = '', signature = '' }) {
  if (!env.shopifyWebhookSecret || !signature) {
    return false;
  }

  const digest = crypto
    .createHmac('sha256', env.shopifyWebhookSecret)
    .update(rawBody, 'utf8')
    .digest('base64');

  return crypto.timingSafeEqual(
    Buffer.from(digest),
    Buffer.from(signature),
  );
}
