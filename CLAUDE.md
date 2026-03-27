# CLAUDE.md

This repository is **LumiShop**, a full-stack Shopify app project focused on turning product images into lightweight, conversion-oriented product videos.

## Primary product goal
Do not optimize for flashy AI demos.
Optimize for:
- fast generation
- lightweight storefront delivery
- merchant simplicity
- event-aware styling
- conversion-oriented output

## Current implementation state
Right now the repo contains an initial backend scaffold on Firebase Cloud Functions.
This is a foundation, not the final architecture.

## Architecture direction
Treat the long-term target as a full-stack Shopify app with:
- embedded admin frontend
- backend API/webhooks
- template engine
- event-aware styling logic
- render pipeline
- storage/CDN delivery

## Engineering priorities
1. Template-first rendering before AI-heavy rendering
2. Stable business logic boundaries
3. Fast local iteration
4. Clear module separation for future FE/BE split
5. Business outcome over novelty

## Rules for coding in this repo
- Prefer simple, production-usable code over speculative abstractions.
- Keep rendering deterministic where possible.
- Do not introduce heavy infrastructure unless it unlocks a real next milestone.
- Keep Shopify-specific logic isolated from rendering logic.
- Keep theme/event logic separate from transport/framework code.
- Use explicit schemas for API payloads.

## Near-term roadmap
1. Restructure into clear FE + BE layout
2. Add Shopify OAuth and webhook verification
3. Add persistence for shops/products/jobs
4. Add FFmpeg-based rendering pipeline
5. Add embedded Shopify admin UI

## When making proposals
Frame decisions around:
- conversion impact
- generation speed
- storefront performance
- implementation complexity
- migration path to scale
