# Repo Structure

## Current state
The repo currently starts from a Firebase Functions backend scaffold.

## Preferred target state

```text
LumiShop/
├── apps/
│   ├── admin-web/
│   └── functions-api/
├── packages/
│   ├── shared/
│   ├── theme-engine/
│   └── video-core/
├── docs/
└── README.md
```

## Principles
- Frontend and backend should be separable.
- Shared schemas and business logic should avoid framework lock-in.
- Theme/event logic should not depend on Shopify transport code.
- Rendering logic should remain portable.
