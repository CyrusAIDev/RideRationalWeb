# Cursor Rules and Guardrails

## Purpose

These rules exist to keep Cursor productive **without letting it invent product behavior, break the brand system, or overbuild the MVP**.

## Core operating rules

1. Read the product and contract docs before editing code.
2. Preserve backend truth at all times.
3. Build incrementally in small, reviewable steps.
4. Keep mock mode and real API mode clearly separated.
5. Do not add features that were not scoped.
6. Protect the premium brand and visual consistency.
7. Favor clarity and maintainability over cleverness.

## Files Cursor should consult first

- `@00_MASTER_CONTEXT.md `
- `@01_PRODUCT_BRIEF.md `
- `@03_BACKEND_TRUTH_AND_API_CONTRACT.md `
- `@04_FUNNEL_AND_INFORMATION_ARCHITECTURE.md `
- `@05_BRAND_STRATEGY.md `
- `@06_VISUAL_DESIGN_SYSTEM.md `
- `@16_CURSOR_RULES_AND_GUARDRAILS.md `

## Anti-hallucination rules

### Never invent
- backend endpoints not in the contract
- user states not defined in the docs
- pricing behavior not documented
- live dashboard functionality
- confidence scores or full ranking logic not yet implemented
- email product behavior beyond the documented MVP

### If something is unclear
- prefer a placeholder
- add a TODO note
- document the assumption in `18_ASSUMPTIONS.md`
- do not silently fabricate product logic

## Preserve backend truth

### Allowed
- mock realistic teaser data
- simulate auth and account states
- create contract-safe empty/loading/error states

### Not allowed
- implying the real backend already computes everything
- inventing multi-search support in UI
- pretending saved searches are a core MVP concept
- claiming maintenance, insurance, or fuel are in core TCO unless explicitly labeled

## Preserve design consistency

### Must follow
- dark premium palette
- restrained accent usage
- editorial hierarchy
- premium spacing and radii
- mobile and desktop intentional differences

### Must avoid
- generic Tailwind demo blocks
- default dashboard cards
- noisy gradients
- bright fintech blues
- random one-off components that break the system

## Preserve mock / API separation

- mock data lives in dedicated mock files
- page components should not hardcode API payloads inline
- contract schemas stay centralized
- switching to real backend later should not require page rewrites

## Incremental build rules

When making changes:
1. update the smallest useful surface
2. run through related docs
3. avoid touching unrelated files
4. keep the founder able to review progress milestone by milestone

## Do not overengineer

Avoid adding:
- unnecessary state libraries
- unneeded abstractions
- speculative admin features
- speculative search/dashboard architecture
- package bloat

## Do not invent product claims

Do not write public copy that claims:
- guaranteed savings
- exact superiority of a deal
- complete live local ranking unless backend supports it
- “AI-powered” value without necessity

## Do not break the visual system

If a component feels:
- template-like
- too bright
- too cramped
- too text-heavy
- too dashboard-like

it must be revised before it is considered complete.

## MVP red line

Do not add a dashboard/results-browsing experience to MVP unless explicitly instructed later.
