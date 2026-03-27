# RideRational Frontend Reset

RideRational is a premium, email-first sweet-spot used-car concierge. This repo contains the new documentation system and frontend foundation for the MVP customer experience.

## What this repo includes

- root-level planning docs for Cursor-friendly execution
- Next.js App Router foundation
- typed API contract shell
- mock mode architecture
- premium design token foundation
- placeholder route structure for the MVP funnel
- founder progress route
- QA/testing workflow docs

## Quick start

### 1. Open the project
Open the repo in Cursor or your editor of choice.

### 2. Copy env vars
Create a local env file from the example:

```bash
cp .env.example .env.local
```

### 3. Install dependencies
When package registry access is available, install dependencies:

```bash
npm install
```

### 4. Run locally
```bash
npm run dev
```

### 5. Open the app
Visit:

```txt
http://localhost:3000
```

## How docs are organized

The project root contains numbered markdown files that act as the single source of truth for product, funnel, brand, design, architecture, QA, and Cursor guardrails.

### Read these first
- `00_MASTER_CONTEXT.md`
- `01_PRODUCT_BRIEF.md`
- `03_BACKEND_TRUTH_AND_API_CONTRACT.md`
- `04_FUNNEL_AND_INFORMATION_ARCHITECTURE.md`
- `16_CURSOR_RULES_AND_GUARDRAILS.md`

## How to use the `@` doc references in Cursor

When prompting Cursor, reference the relevant docs directly, for example:

```txt
Use these docs as the source of truth:
@01_PRODUCT_BRIEF.md
@03_BACKEND_TRUTH_AND_API_CONTRACT.md
@16_CURSOR_RULES_AND_GUARDRAILS.md
```

This makes it easier for Cursor to stay grounded in the approved product and architecture decisions.

## How progress is tracked

- `14_BUILD_PROGRESS.md` tracks milestone progress
- `/founder/progress` provides an in-app founder view for the current milestone state
- `15_QA_AND_TESTING_GUIDE.md` tracks manual QA expectations

## Image workflow (marketing)

RideRational uses a **typed image manifest** so photography stays attributable, swappable, and aligned with desktop vs. mobile crops.

- **Manifest:** `src/content/image-library.ts` (`getImageBySlot`, `getCategoryCardImage`, `resolveImageSrc`)
- **On-disk assets:** `public/images/{categories,editorial,scenarios,trust,placeholders}/`
- **Process + licensing guardrails:** `22_IMAGE_STRATEGY_AND_ASSET_SYSTEM.md`
- **Remote URLs:** keep `next.config.ts` `images.remotePatterns` curated; prefer local assets until a CDN is intentional

Placeholders ship as neutral SVG slots under `public/images/placeholders/` so layouts reserve real photography without AI-generated imagery.

## How mock mode works

Mock mode lets the frontend run without a real backend.

### Rules
- mock mode is controlled by env
- all mock responses should follow the contract in `03_BACKEND_TRUTH_AND_API_CONTRACT.md`
- pages should use the API layer, not hardcoded page-local fake data

## GitHub backup workflow

Recommended founder workflow:
1. initialize the repo locally if needed
2. create a private GitHub repo
3. add the remote
4. push the current branch

Example:

```bash
git remote add origin <your-private-repo-url>
git push -u origin main
```

## Testing

Use:
- `15_QA_AND_TESTING_GUIDE.md` for manual QA
- `/founder/progress` for milestone visibility
- mock mode for first-pass route and flow testing

## Important MVP note

This MVP does **not** include a deal-browsing dashboard. The product is email-first. The site should sell, collect preferences, start trial, and let the user manage their account—not become a search marketplace.
