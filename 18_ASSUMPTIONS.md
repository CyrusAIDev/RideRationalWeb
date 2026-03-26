# Assumptions

## Product assumptions

- Vancouver is the launch market.
- The first frontend is email-first, not dashboard-first.
- The teaser is curated proof of possibility, not full product access.
- Users will understand the value proposition better through category-led discovery than through a generic calculator.
- A single preference profile per user is sufficient for MVP.

## Backend assumptions

- a stable API contract will be implemented later
- JWT auth will be used
- billing will be handled through Stripe
- teaser responses will be generated from comparison logic, not raw live listing dumps
- categories are fixed enums at launch
- all monetary values are CAD

## Data assumptions

- mock data is realistic but not live
- opportunity counts shown in teaser are illustrative contract-safe values
- category examples and benchmark vehicles are curated planning assets
- `sweet_spot_score` exists in the planned backend contract but is not yet operational

## Design assumptions

- dark premium visual direction is the right brand lane
- the site needs both desktop and mobile art direction, not just responsive compression
- restrained warm metallic accents fit the automotive-premium tone better than blue SaaS accents
- imagery slots will be replaced later with final visual assets

## UX assumptions

- signup should not be the first click
- budget logic must adapt to monthly vs cash vs both
- users need to see emotional possibility before trial commitment
- lightweight setup will outperform a complex onboarding questionnaire for MVP

## Technical assumptions

- dependencies may be installed later if the environment is restricted today
- the repo should still be fully scaffolded and documented now
- shadcn/ui-compatible patterns are acceptable in the scaffold even if final generation happens later
- TanStack Query should be introduced at the foundation layer so backend integration is clean later

## What is real today

- the docs
- the route structure
- the typed contract target
- the mock mode architecture
- the frontend scaffold
- the build progress tracking
- the QA workflow docs

## What is mocked today

- teaser scenarios
- categories API results
- auth responses
- user profile responses
- notification preferences
- billing status
- account states

## What is planned but not real yet

- API server
- auth backend
- Stripe integration
- email sending infrastructure
- real matching engine
- real listing analysis engine
- user-deal matching engine
- production-grade persistence

## What must be revisited later

- final pricing
- exact Stripe checkout flow details
- real market/location controls
- exact benchmark vehicle mappings by budget band
- final email frequency controls
- real auth/session persistence
- production telemetry and analytics
