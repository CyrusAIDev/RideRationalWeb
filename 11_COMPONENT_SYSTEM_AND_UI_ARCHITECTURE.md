# Component System and UI Architecture

## System philosophy

The component system should make it easy to build a premium, consistent frontend without allowing Cursor or future edits to drift into random one-off sections.

## Component taxonomy

### 1. Foundations
Low-level reusable primitives.

Examples:
- Button
- Input
- Label
- Badge
- Card
- Divider
- Progress
- Section shell
- Container
- Eyebrow

### 2. Layout components
Frame pages and section rhythm.

Examples:
- SiteHeader
- SiteFooter
- PageShell
- SectionFrame
- AccountShell
- FounderBar

### 3. Brand/marketing components
Support premium conversion storytelling.

Examples:
- HeroShell
- ComparisonProofCard
- CategoryCard
- TrustStrip
- ProcessStep
- PricingPanel
- FinalCTA

### 4. Discovery components
Support the taste-first funnel.

Examples:
- DiscoveryProgress
- DiscoveryStepCard
- PurchaseModeCard
- BudgetRangeFields
- LocationField
- StepFooterCTA

### 5. Teaser components
Support proof-of-possibility UI.

Examples:
- TeaserScenarioCard
- BenchmarkCard
- SweetSpotCard
- OpportunityCount
- LockedPreviewStrip

### 6. Account/setup components
Support lightweight post-signup state.

Examples:
- PreferenceCard
- NotificationPreferenceCard
- TrialStatusCard
- AccountStatusSummary
- SettingsSection

## Reusable components needed in phase one foundation

- `Button`
- `Card`
- `Badge`
- `Input`
- `Label`
- `ProgressBar`
- `PageIntro`
- `SectionIntro`
- `HeroShell`
- `CategoryCard`
- `DiscoveryStepCard`
- `TeaserScenarioCard`
- `TrialStatusCard`
- `SettingsCard`
- `BuildProgressPanel`

## Naming rules

- use PascalCase for React components
- use descriptive names tied to jobs, not vague visuals
- avoid names like `FancyCard`, `BigHero`, `CoolSection`
- if it is marketing-specific, place it in `/components/marketing`
- if it belongs to a domain flow, place it in that feature folder

## Section component system

Every major section should use a predictable shell:
- container
- section spacing
- eyebrow
- heading
- support line
- content body

This keeps the premium rhythm consistent even as content evolves.

## Card system

### Card types
- neutral information card
- elevated proof card
- interactive selection card
- locked preview card
- settings/utility card

### Card rules
- consistent radii
- consistent padding steps
- surface hierarchy from design system
- selection cards should clearly support hover, active, selected states

## Quiz / discovery system

### Discovery requirements
- one step focus at a time
- progress always visible
- CTA always obvious
- field count controlled carefully
- state should be resumable in future even if MVP does not require persistence yet

### Core building blocks
- progress bar
- step container
- category selection cards
- purchase mode selector
- budget input group
- location selector
- continue/back actions

## Teaser proof card system

The teaser needs a dedicated, disciplined card family.

### Required cards
- benchmark/default card
- sweet-spot card
- narrative panel
- opportunity count panel
- locked preview strip

### System rule
The teaser should feel like a carefully composed editorial proof module, not a grid of live listings.

## Progress system

Use a shared progress component for:
- discovery flow
- setup flow
- founder progress route

These should share visual DNA but have different labels.

## Pricing/trial system

Needs reusable components for:
- trial badge
- plan summary card
- pricing line
- reassurance strip
- CTA block

## Settings form system

Needs reusable structures for:
- grouped section card
- inline helper text
- validation messaging
- save state
- destructive action footer

## Account shell system

The account area should use a calm shell with:
- page intro
- status summary
- grouped cards
- clear action hierarchy

### Important note
A dashboard/results shell is **not part of MVP**. Do not create widgets that imply browsing live deals on-site.

## File/folder architecture

Recommended structure:

```txt
src/
  app/
  components/
    ui/
    layout/
    marketing/
    discovery/
    forms/
    account/
    progress/
    motion/
  lib/
    api/
    query/
    utils/
  mocks/
  config/
```

## State and mock data strategy

- centralize mock content in `/src/mocks`
- centralize API schemas in `/src/lib/api/contracts.ts`
- use a single API client entry point
- let TanStack Query handle request state even in mock mode
- avoid direct mock imports inside page components when a query wrapper can simulate the real contract

## MVP architecture note

Do not create:
- results grid components
- search toolbar shells
- listing filter sidebars
- watchlist modules
- empty states that mention saved searches or browsing feeds

Those would pull the product toward a dashboard it does not yet have.
