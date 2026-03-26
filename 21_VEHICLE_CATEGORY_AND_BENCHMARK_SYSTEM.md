# Vehicle Category and Benchmark System

## Purpose

This system defines the category and benchmark logic that makes RideRational feel intentional instead of generic.

The frontend should use this system for:
- category cards
- teaser scenarios
- contrast logic
- future matching explanations

## Launch category taxonomy

### Sports Car
Emotion-first, driver-focused, compact performance.

Examples:
- Porsche Cayman
- Porsche 911 sweet spots
- BMW M2
- Toyota GR Supra

### Performance Sedan
Everyday usability with serious pace and status.

Examples:
- BMW M340i
- BMW M3 sweet spots
- Audi S4
- Mercedes-AMG C-class sweet spots
- Lexus IS F

### Hot Hatch
Practical footprint, playful energy, enthusiast appeal.

Examples:
- Golf R
- Civic Type R
- GR Corolla

### Luxury SUV
Premium daily driver with comfort, presence, and pace.

Examples:
- Porsche Macan
- Porsche Cayenne sweet spots
- Audi SQ5
- BMW X3 M40i

### Rugged Luxury
Boxier, tougher, premium SUVs with lifestyle and durability appeal.

Examples:
- Lexus GX
- Land Rover / Range Rover sweet spots where appropriate later
- upscale body-on-frame or adventure-coded premium options

### Premium GT
Comfortable long-leg cars with presence and pace.

Examples:
- Audi S5
- BMW 4 Series / M440i
- Mercedes E Coupe / AMG light sweet spots
- Lexus RC F

## Aspiration / desirability tier system

### Tier 1 — Default
Obvious, safe, familiar buyer choice. Often emotionally flatter.

### Tier 2 — Elevated
A recognized upgrade with stronger emotional pull.

### Tier 3 — Aspirational sweet spot
A category-respected option that feels distinctly more special and still plausible within the buyer’s comfort zone.

### Important rule
The product is not about forcing every user into Tier 3 exotica. It is about finding a more compelling answer inside the user’s comfort zone.

## Benchmark/default vehicle concept

A benchmark/default vehicle is the car the buyer might have chosen without RideRational:
- safer
- newer
- more generic
- more obviously “responsible”
- often front-loaded on depreciation
- less emotionally rewarding

The benchmark exists to create contrast.

## Budget band framework

Use budget bands in teaser and future comparison logic.

### Example monthly bands
- `650–800 CAD`
- `800–950 CAD`
- `950–1150 CAD`
- `1150+ CAD`

### Example cash bands
- `30k–40k`
- `40k–50k`
- `50k–65k`
- `65k+`

## Teaser comparison logic

Every teaser should map:
1. selected category
2. budget band
3. benchmark/default concept
4. sweet-spot alternative concept
5. short narrative explaining the contrast

### Example
Input:
- category: performance-sedan
- monthly band: 800–950
- market: Vancouver

Teaser:
- benchmark/default: new mainstream compact crossover
- sweet-spot alternative: Audi S4 or BMW M340i concept
- narrative: similar broad spend, much more special ownership experience, used car already past steepest depreciation

## Marketing framing vs actual product data

### Marketing framing
- “more special than the default”
- “skip the worst depreciation”
- “sweet-spot used cars”

### Actual product data later
- category taxonomy
- benchmark mappings
- model metadata
- depreciation curves
- budget benchmarks
- listing analysis
- match explanations

## Safe frontend implication

The frontend can safely imply that:
- RideRational thinks in categories
- it uses benchmark/default comparison logic
- it is designed to surface more desirable sweet spots than the obvious choice

The frontend should not imply that:
- every teaser is already backed by a live production scoring engine
- every example reflects real-time inventory ranking
- every benchmark comparison is mathematically guaranteed

## Frontend guidance

Use category and benchmark logic to make the product feel curated and intelligent. Do not collapse it into generic “find cool cars” messaging.
