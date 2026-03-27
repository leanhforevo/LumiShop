---
name: lumishop-dev
description: Build, refactor, and extend the LumiShop codebase. Use when working on LumiShop architecture, Shopify app structure, Firebase Functions backend, event/theme engine, template video generation pipeline, or embedded admin app planning.
---

# LumiShop Dev

Use this skill when changing the LumiShop repository.

## Goal
Keep LumiShop focused on a practical Shopify app that converts product images into lightweight, conversion-oriented product videos.

## Always optimize for
- simple merchant workflow
- template-first rendering
- fast generation
- lightweight storefront delivery
- separable domain logic

## Core architectural stance
Do not treat AI video generation as the foundation.
Treat AI as an optional premium enhancement.
The primary moat is the combination of:
- theme engine
- event-aware styling
- reusable render templates
- Shopify-native usability

## Current repo state
The current repo contains an initial backend scaffold built with JavaScript on Firebase Cloud Functions.
When needed, evolve it toward a fuller FE + BE layout instead of stacking unrelated logic into one folder.

## Preferred module boundaries
- Shopify auth/webhooks/app-specific transport code
- product/theme/event business logic
- template/timeline/render logic
- storage/delivery logic
- analytics/experiments logic

Keep those boundaries clear.

## When planning changes
Read these references as needed:
- `references/repo-structure.md` for preferred repo evolution
- `references/implementation-priorities.md` for sequencing
- `references/shopify-app-principles.md` for product/technical constraints

## Default implementation sequence
1. clarify module boundary
2. add minimal viable code path
3. keep APIs explicit with schemas
4. leave clean extension points for rendering/storage/shopify integration
5. update docs when structure or intent changes
