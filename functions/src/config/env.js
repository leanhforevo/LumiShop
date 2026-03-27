export const env = {
  shopifyApiKey: process.env.SHOPIFY_API_KEY || '',
  shopifyApiSecret: process.env.SHOPIFY_API_SECRET || '',
  shopifyScopes: process.env.SHOPIFY_SCOPES || 'read_products,write_products',
  shopifyAppUrl: process.env.SHOPIFY_APP_URL || '',
  shopifyWebhookSecret: process.env.SHOPIFY_WEBHOOK_SECRET || '',
  shopifyEmbeddedAppUrl: process.env.SHOPIFY_EMBEDDED_APP_URL || '',
  assetBucket: process.env.ASSET_BUCKET || '',
  cdnBaseUrl: process.env.CDN_BASE_URL || '',
};
