# Visual Design System

## Visual intent

The visual system should feel like premium automotive editorial translated into a modern product interface.

The experience should feel:
- dark, refined, and cinematic on desktop
- tighter, cleaner, and conversion-forward on mobile
- luxurious without being glossy
- technical without becoming cold
- highly intentional, never default

## Color palette direction

### Base palette
- **Obsidian** — `#0B0D12`
- **Graphite** — `#121722`
- **Carbon** — `#1A2230`
- **Steel Mist** — `#657289`
- **Pearl** — `#F5F1E8`
- **Warm Stone** — `#D8CDB8`
- **Ignition Gold** — `#B89146`
- **Copper Ember** — `#8F6130`
- **Signal White** — `#FAF9F6`
- **Error Red** — `#C4544F`
- **Success Green** — `#4F8A6A`

### Usage principle
The palette should be mostly neutral and dark, with warm metallic accents used sparingly to create premium tension and CTA emphasis.

## Semantic color tokens

### Backgrounds
- `bg.page` — Obsidian
- `bg.surface.1` — Graphite
- `bg.surface.2` — Carbon
- `bg.surface.elevated` — translucent pearl-on-carbon blend

### Text
- `text.primary` — Signal White
- `text.secondary` — Warm Stone at reduced opacity
- `text.muted` — Steel Mist
- `text.inverse` — Obsidian

### Actions
- `action.primary` — Ignition Gold
- `action.primary.hover` — lighter gold burnish
- `action.secondary` — soft pearl outline on dark surface
- `action.tertiary` — muted text link

### Feedback
- `state.success`
- `state.error`
- `state.warning` — copper/gold warning tone, not bright yellow

## Typography direction

### Recommended font pair
- **Primary UI sans:** Instrument Sans
- **Editorial accent serif:** Instrument Serif

### Role split
- Instrument Sans for UI, forms, card headings, buttons, navigation
- Instrument Serif only for small, intentional moments:
  - key number callouts
  - taste/elevation accents
  - select hero phrases

### Typography rules
- keep serif usage below 10–15% of visible text
- avoid giant novelty italics
- use crisp, assertive sans for most conversion copy
- tighten letter spacing slightly on high-impact headlines
- never use more than 4 visible type sizes in one section

## Type scale

### Desktop guidance
- Hero Display: 64–80px
- H1: 48–56px
- H2: 32–40px
- H3: 24–28px
- Body Large: 18–20px
- Body: 16px
- Small: 14px
- Micro: 12px

### Mobile guidance
- Hero Display: 40–48px
- H1: 32–36px
- H2: 24–28px
- H3: 20–22px
- Body: 15–16px
- Small: 13–14px

## Sizing and spacing scale

Use an 8px base rhythm.

### Core spacing tokens
- `space-1` — 4
- `space-2` — 8
- `space-3` — 12
- `space-4` — 16
- `space-5` — 20
- `space-6` — 24
- `space-8` — 32
- `space-10` — 40
- `space-12` — 48
- `space-16` — 64
- `space-20` — 80
- `space-24` — 96

### Section rhythm
- desktop sections should breathe at 96–144px vertical padding
- mobile sections should use 56–72px
- cards should feel dense enough to convert, but never cramped

## Grid rules

### Desktop
- 12-column grid
- max content width around 1280–1440px
- editorial asymmetry allowed in hero and proof sections
- large image-led blocks can break the grid intentionally

### Mobile
- 4-column logic
- 20px page gutters
- sticky bottom CTA rails allowed in flows

## Radius rules

- Primary card radius: `24px`
- Small control radius: `14px`
- Pill radius: full
- Hero media radius: `28px`
- Avoid sharp, generic 4px/6px radii

## Card and surface rules

### Surface hierarchy
1. page background
2. grounded content block
3. elevated card
4. premium highlighted card
5. locked/blurred preview surface

### Card language
- layered borders, not hard black outlines
- subtle inner highlights
- rich dark surfaces with soft edge contrast
- occasional glass/tint surfaces for premium modules only

### Card do-not
- default white SaaS cards on blue background
- overloaded shadows
- rainbow gradients
- noisy borders

## Shadows and highlights

### Shadow style
Use soft, long, low-opacity shadows, not floating toy-card shadows.

### Highlight style
Use restrained top-edge highlights and metallic accent lines sparingly for premium emphasis.

## Imagery treatment

### Image style
- cinematic
- premium editorial
- dusk/night/garage/road texture acceptable
- should feel like desire and confidence, not stock-dealership inventory
- avoid loud lens flare or luxury cliché overload

### Crop rules
- desktop can use wider cinematic crops
- mobile should use tighter emotional crops
- use images to sell possibility, not catalog every angle

## Iconography direction

- slim, geometric, understated
- more “instrument panel” than cartoon
- avoid emoji-like icons
- use icons as support, not decoration overload

## Proof module styling

Proof modules should feel like restrained evidence, not conversion gimmicks.

### Proof module traits
- side-by-side comparison
- muted labels
- strong hierarchy on the surprising option
- concise supporting rationale
- locked detail hints for intrigue

## CTA module styling

### Primary CTAs
- warm accent fill
- dark text
- medium-to-large height
- premium heft
- subtle hover lift, not huge scale jumps

### Secondary CTAs
- dark glass or outlined pearl on dark background
- calm, refined

## Premium automotive vibe checklist

The experience stays premium and automotive when:
- the palette stays restrained
- motion stays confident and subtle
- type stays tight and intentional
- proof moments feel editorial
- imagery is emotionally loaded
- cards feel engineered, not generic
- no section looks copy-first and template-led
