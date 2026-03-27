# LumiShop

LumiShop is a Shopify app template focused on one commercial outcome: turning product images into lightweight product videos that can improve product-page engagement and conversion on the product detail page.

This repository now contains the early foundation for a **full-stack Shopify app**:

- a JavaScript backend on Firebase Cloud Functions
- an initial admin web scaffold for the embedded app experience
- shared packages for future theme/video/business logic extraction

It is designed to be deployed quickly, iterated cheaply, and evolved later into a more distributed architecture.

---

## Product vision

Merchants do not need “AI video for fun”. They need:

- fast video generation
- lightweight storefront embedding
- minimal setup
- campaign-aware styling
- conversion-focused output

LumiShop is designed around a **template-first engine** with optional AI enhancements later.

---

## Current project goal

This repo starts with a production-minded backend template that lets you build:

- Shopify webhook ingestion
- product-video generation requests
- event-aware styling rules
- template resolution logic
- a clean place to plug in FFmpeg or future AI renderers
- Firebase deployment from day one

---

## Tech stack (current)

- **Runtime:** Node.js 22
- **Backend:** Express on Firebase Cloud Functions v2
- **Frontend:** React + Vite admin scaffold
- **Validation:** Zod
- **Admin SDK:** Firebase Admin
- **Lint/Test:** ESLint + Vitest

### Planned next-layer stack

- Queue: Redis / Cloud Tasks / PubSub
- Rendering: FFmpeg template renderer
- Storage: Firebase Storage or Cloudflare R2
- CDN: Cloudflare
- Analytics: event tracking + A/B testing

---

## Agent and skill guidance

This repo now includes internal guidance for coding agents:

- `CLAUDE.md`
- `AGENTS.md`
- `.skills/lumishop-dev/SKILL.md`
- `.skills/lumishop-dev/references/*`

These files explain the product direction, preferred repo evolution, implementation priorities, and coding boundaries so future contributors and coding agents can work consistently.

## Repository structure

```text
LumiShop/
├── README.md
├── package.json
├── firebase.json
├── .firebaserc
├── .gitignore
├── docs/
│   ├── architecture.md
│   ├── roadmap.md
│   └── skills.md
├── apps/
│   └── admin-web/
│       ├── package.json
│       ├── index.html
│       ├── vite.config.js
│       └── src/
│           ├── App.jsx
│           ├── main.jsx
│           ├── styles.css
│           ├── components/
│           └── lib/
├── functions/
│   ├── README.md
│   ├── package.json
│   ├── .env.example
│   ├── eslint.config.js
│   └── src/
│       ├── index.js
│       ├── app.js
│       ├── config/
│       ├── controllers/
│       ├── routes/
│       ├── services/
│       ├── skills/
│       ├── templates/
│       ├── workers/
│       ├── middleware/
│       └── utils/
└── packages/
    ├── shared/
    ├── theme-engine/
    └── video-core/
```

---

## What “skills” mean in this project

In LumiShop, **skills** are modular decision units that help transform product and seasonal context into rendering choices.

They are not LLM-only concepts. They are practical business logic modules.

### Included skills

#### 1. `eventStylingSkill`
Resolves active campaign/event styling based on time.

Examples:
- Halloween
- Black Friday
- Christmas
- default seasonal fallback

#### 2. `productThemeSkill`
Maps product tags and product context to a presentation tone.

Examples:
- beauty → premium-soft
- fashion → energetic-clean
- default → clean-commerce

These skills feed into the template layer so the app can eventually say:

> “This product should use template X with Black Friday styling and a bold pricing effect.”

---

## Request flow (current template)

### Video generation

1. Client calls `POST /api/videos/generate`
2. Payload is validated with Zod
3. `videoService` creates a generation job object
4. `templateService` builds context using:
   - event styling skill
   - product theme skill
   - default product video template
5. Response returns a queued job object

At the moment, rendering is mocked. The structure is ready for real render integration.

---

## API endpoints

### `GET /api/health`
Health check endpoint.

### `POST /api/videos/generate`
Creates a mock template-based generation job.

Example payload:

```json
{
  "title": "Glow Serum",
  "price": "$29.00",
  "featuredImage": "https://example.com/glow-serum.jpg",
  "tags": ["beauty", "skincare"]
}
```

### `POST /api/webhooks/shopify`
Placeholder endpoint for Shopify webhooks such as:
- `products/create`
- `products/update`
- `app/uninstalled`

---

## Local development

### 1. Install dependencies

```bash
cd functions
npm install
```

### 2. Configure environment

Copy example env values:

```bash
cp .env.example .env
```

Fill in:
- `SHOPIFY_API_KEY`
- `SHOPIFY_API_SECRET`
- `SHOPIFY_SCOPES`
- `SHOPIFY_APP_URL`
- `SHOPIFY_WEBHOOK_SECRET`
- `ASSET_BUCKET`
- `CDN_BASE_URL`

### 3. Run emulator

From project root:

```bash
firebase emulators:start --only functions
```

Or from `functions/`:

```bash
npm run serve
```

---

## Deploy to Firebase Cloud Functions

From `functions/`:

```bash
npm run deploy
```

Or from root:

```bash
firebase deploy --only functions
```

Before deploying, make sure:
- Firebase project is configured in `.firebaserc`
- billing/runtime requirements are satisfied
- environment variables are set appropriately

---

## Recommended next build steps

### Phase 1 — Full-stack foundation
- [ ] add Shopify embedded app shell and real routing
- [ ] add Shopify OAuth flow
- [ ] verify Shopify webhook signatures
- [ ] add Firestore/Postgres persistence
- [ ] create product sync layer
- [ ] create real job persistence

### Phase 2 — Rendering pipeline
- [ ] replace mocked render worker with FFmpeg-based renderer
- [ ] generate MP4 + poster image
- [ ] upload assets to bucket
- [ ] return CDN-backed URLs

### Phase 3 — Shopify app integration
- [ ] embed app admin UI
- [ ] product selection UI
- [ ] theme selection UI
- [ ] publish/unpublish video per product
- [ ] storefront block/embed integration

### Phase 4 — Differentiation
- [ ] event-aware automatic campaigns
- [ ] bulk generation for all products
- [ ] analytics and A/B tests
- [ ] AI-enhanced motion generation as optional premium mode

---

## Architectural direction

### Why template-first?
Because fully AI-generated video is expensive, slow, and unpredictable.

Template-first gives you:
- low cost
- low latency
- consistent output
- easier debugging
- better merchant UX

### Where AI fits later
AI should enhance these layers, not replace them:
- product scene suggestions
- copy suggestions
- smart theme selection
- optional premium motion generation

---

## Example long-term service split

When LumiShop grows beyond Firebase-only deployment, the architecture can split into:

- `api-gateway`
- `shopify-service`
- `template-service`
- `event-engine`
- `render-worker`
- `analytics-service`

For now, this template keeps everything simple and centralized.

---

## Naming direction

Project name in repo: **LumiShop**

Suggested product positioning:

> Lightweight product videos for Shopify stores.

or

> Turn product images into conversion-ready videos.

---

## Build philosophy

This project should optimize for:

- practical shipping speed
- low infra complexity at the start
- clear module boundaries
- future migration path to workers and queues
- business outcome over flashy AI demos

---

## Next thing to build

The best next step is:

1. Shopify OAuth + webhook verification
2. persistence model for shops/products/jobs
3. FFmpeg template renderer
4. admin UI for triggering generation

---

## License

Private project for now.
