# AGENTS.md

## Repo identity
LumiShop is a Shopify app for generating lightweight product videos from product assets and metadata.

## What matters most
- Merchant UX must stay simple.
- Storefront performance must stay strong.
- Template/event engine is the moat.
- AI is optional enhancement, not the foundation.

## Preferred repo direction
This repo should evolve toward:
- `apps/admin-web` for the Shopify embedded frontend
- `apps/functions-api` for Firebase Cloud Functions backend
- `packages/shared` for schemas and shared helpers
- `packages/theme-engine` for campaign and theme rules
- `packages/video-core` for template/timeline/render orchestration

## Coding guidance
- Keep modules small and explicit.
- Keep framework code near edges.
- Keep domain logic reusable.
- Prefer JSON-configurable templates over hardcoded branching.
- Validate API inputs.
- Avoid overengineering early infrastructure.

## Product guidance
Always ask: does this help merchants generate better product videos faster and with less manual work?

## Short-term implementation order
1. Project structure cleanup
2. Shopify auth + webhook foundation
3. persistence layer
4. rendering pipeline
5. embedded admin UI
6. storefront embed
7. analytics and experiments
