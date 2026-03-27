# Image Strategy and Asset System

## Purpose

RideRational marketing should feel **editorial and cinematic**, not like stacked SaaS typography. Photography is a first-class product decision: it creates aspiration, proves seriousness, and supports the “default vs. sweet spot” story—without implying live inventory or guaranteed outcomes.

This document pairs with `src/content/image-library.ts` and `public/images/`.

## Principles

- **Real photographs only** from licensed or owned sources. **No AI-generated imagery.** No synthetic “hero mood boards” masquerading as photography.
- **No autonomous scraping** of listings or Google Images. Every remote URL used in production must be **deliberately chosen** and **traced in the manifest** (attribution + license).
- **Placeholders are structural**, not decorative: they reserve crop, hierarchy, and performance budgets until final assets arrive.
- **Curated remote assets (optional):** if a founder hosts images on a CDN or stock provider, add the hostname to `next.config.ts` under `images.remotePatterns` and record `sourceUrl`, `license`, and `photographer` in the manifest entry.

## Recommended sources for real photography

Use channels where **license and attribution** are explicit:

- **Founder-owned photography** from private shoots or personal archives (simplest legally; update `license: "proprietary"`).
- **Manufacturer press libraries** where terms allow marketing use (read each OEM’s media terms carefully).
- **Licensed stock** from reputable providers (e.g. Getty, Shutterstock, Adobe Stock) with download receipts stored offline.
- **Creative Commons** only when the CC variant permits commercial use and **attribution** is satisfied; record `sourceUrl` and license string precisely.

Avoid: random Pinterest, unlabeled Instagram reposts, or “free stock” sites with unclear model/property releases for recognizable vehicles in commercial contexts.

## Folder conventions (`public/images`)

| Folder | Role |
| --- | --- |
| `categories/` | Per-lane tiles and category atmosphere shots (six launch lanes + future variants). |
| `editorial/` | Hero, wide proof bands, landing panels—large crops for desktop. |
| `scenarios/` | Benchmark vs. sweet-spot pairs, teaser storytelling frames—often shot as matched sets. |
| `trust/` | Restrained craftsmanship / legitimacy imagery—detail, cabin, calm road. |
| `placeholders/` | Neutral SVG or tiny bitmap slots **until** real files replace manifest `src` paths. |

Ship real files under the semantic folder, then **point manifest `src` to the new path** (e.g. `/images/editorial/hero-v1.jpg`).

## Manifest conventions (`src/content/image-library.ts`)

Each `ImageLibraryEntry` includes:

- **`id`:** stable slug for engineers (`landing-hero-primary`).
- **`category`:** taxonomy bucket matching the folder system (`categories` | `editorial` | `scenarios` | `trust` | `placeholders`).
- **`slot`:** lookup key for layouts (`landing-hero`, `category-card-sports-car`, `teaser-benchmark`).
- **`src`:** default URL path served from `public/` (or absolute URL if remote patterns are configured).
- **`alt`:** descriptive, honest alt text—**never** pretend a stock car is a user’s actual listing.
- **`orientation`:** guides layout (`landscape` | `portrait` | `square`).
- **`photographer`**, **`sourceUrl`**, **`license`:** required for third-party imagery once assets are real.
- **`notes`:** founder / art-direction TODOs (what to reshoot, what mood to match).
- **`variants.desktop` / `variants.mobile`:** optional paths when crops materially differ (see below).

### Lookup helpers

- `getImageById`, `getImageBySlot`, `getImagesByCategory`, `getCategoryCardImage`, `resolveImageSrc`.

Prefer **`slot`** for layout wiring so IDs can evolve without grep churn.

## Desktop vs. mobile crops

Align with `06_VISUAL_DESIGN_SYSTEM.md` and `08_MOBILE_EXPERIENCE_BLUEPRINT.md`:

- **Desktop:** wider, cinematic crops; allow negative space; horizon lines may sit lower—room for typographic overlay where used.
- **Mobile:** tighter emotional crops (silhouette, lamp graphic, wheel detail); **avoid vast empty sky** dominating the frame; keep contrast high enough for dark UI overlays.

When crops differ materially, set `variants.mobile` to a distinct file. When they only differ by minor reframe, a single JPEG/WEBP with strong `sizes` and `object-position` may suffice—document the decision in `notes`.

## Attribution tracking

For every non-proprietary photograph:

1. Store the **original source URL** and **license name** in the manifest entry.
2. Keep **offline receipts** (stock invoice, OEM approval email, CC snapshot) in the founder’s records—not necessarily in-repo.
3. If the UI ever shows attribution (not required today), pull from `photographer` + `sourceUrl` consistently.

## How to add new images safely

1. Acquire the asset legally; export **WebP or JPEG** (SVG only for logos/diagrams, not photos).
2. Place it under the correct `public/images/...` subfolder.
3. Add or update an entry in `image-library.ts` with complete metadata.
4. If using a **remote** absolute URL, add a **specific** `remotePatterns` entry in `next.config.ts`—never `**` wildcards to arbitrary hosts.
5. Run `npm run build` locally and spot-check LCP on `/`, `/discover`, `/teaser`.
6. Update this doc only when **process** changes (not for every single asset).

## Local vs. optional remote assets

| Approach | When to use |
| --- | --- |
| **Local (`public/images`)** | Default. Full control, simplest compliance story, best offline dev experience. |
| **Remote (curated CDN)** | Large HDR masters or shared DAM; still mirror attribution in the manifest. Requires `remotePatterns`. |

Never point the manifest at ephemeral hotlinks or user-generated URLs.

## QA expectations

See `15_QA_AND_TESTING_GUIDE.md` for route-level checks. Minimum for imagery:

- No layout-exploding huge uncropped masters without `sizes`.
- Alt text present and honest for visible images.
- Placeholders obviously marked (until replaced).
- No new route implies dashboard browsing or live ranking beyond the API contract.
