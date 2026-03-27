# LumiShop Architecture

## Goal
LumiShop is a Shopify-focused app that turns product images into lightweight conversion-oriented product videos.

## Core principles
- Template-first rendering
- Event-aware styling
- Fast generation
- Lightweight storefront delivery
- AI as enhancement, not hard dependency

## Initial runtime choice
- Backend: JavaScript on Firebase Cloud Functions
- Future workers: Cloud Run / dedicated render worker
- Storage: Firebase Storage or Cloudflare R2
- CDN: Cloudflare

## Logical modules
- API layer
- Shopify integration
- Template service
- Event styling skill
- Product theme skill
- Render worker
- Product-detail storefront integration
- Analytics and experiments
