# Build Plan

## Delivery philosophy

A professional team would build this in layers:
1. define product and experience truth
2. lock contracts and guardrails
3. scaffold the repo
4. build the premium landing experience
5. build discovery and teaser flow
6. build auth, setup, and trial UI
7. build account/settings shell
8. harden, QA, and refine

## Phase order

### Phase 1 — Documentation system
Create all root-level planning docs, product definitions, API contract, design system, copy rules, and Cursor guardrails.

**Status:** complete in this milestone

### Phase 2 — Frontend foundation
Set up the app shell, route groups, theme tokens, API layer, mock system, and founder progress route.

**Status:** complete in this milestone

### Phase 3 — Premium landing page
Build the full customer-facing landing page using the approved structure, brand rules, and visual system.

### Phase 4 — Discovery flow + teaser experience
Implement the taste-first multi-step flow and proof-of-possibility teaser page.

### Phase 5 — Auth + lightweight setup
Implement signup, login, password reset, and post-signup setup/preferences refinement.

### Phase 6 — Trial, billing shell, account/settings
Implement the commercial flow and calm authenticated shell.

### Phase 7 — Polish and hardening
Accessibility pass, performance pass, interaction tuning, copy tightening, and pre-deployment readiness.

## What to build first

1. docs
2. env + repo structure
3. app shell
4. tokenized design foundation
5. typed contract layer
6. mock data wiring
7. founder/internal visibility route

## What to mock first

- categories
- discovery inputs
- teaser scenario response
- auth success/failure shell
- preferences payloads
- notification preferences
- billing status

## What to build later

- refined media system
- final copy polish
- richer route guards
- deeper account states
- deployment automation
- real backend integration

## Recommended implementation sequence inside the frontend

1. global layout and providers
2. design tokens and global CSS
3. UI primitives
4. navigation and shell
5. contract schemas
6. mock client
7. placeholder routes
8. progress/QA founder tooling

## Git commit cadence

Recommended cadence:
- `docs: create RideRational master planning system`
- `foundation: scaffold Next app architecture and mock API layer`
- `marketing: build premium landing page shell`
- `funnel: implement discovery and teaser flow`
- `auth: add signup login and setup screens`
- `billing: add trial and subscription state UI`
- `polish: refine interactions accessibility and QA`

## Frontend / backend integration approach

- treat the frontend contract as the stable target
- when backend comes online, swap mock handlers for real endpoints
- keep Zod schemas and typed models aligned
- never let page components depend directly on backend implementation details

## MVP scope control

### Explicitly in scope
- landing
- teaser
- auth
- setup
- trial
- settings/account shell
- email-first product explanation

### Explicitly out of scope
- results dashboard
- saved searches as a primary concept
- browse feeds
- deal archive UI
- advanced comparison tools

If a new request starts pushing the build toward “a dashboard product,” pause and recheck the MVP brief first.
