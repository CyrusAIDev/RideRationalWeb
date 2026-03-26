# Product Brief

## What we are building now

We are building the first customer-facing RideRational frontend and the documentation system that will guide every next implementation step.

This build is intentionally **contract-first** and **mock-first**. It is a premium marketing + onboarding + trial-start experience for an email-first sweet-spot car discovery product.

### Current frontend scope
- landing page foundation
- taste-first discovery flow
- teaser value experience
- email/password auth screens
- lightweight post-signup setup
- trial and billing state UI
- account/settings shell
- founder progress route
- typed API contract layer
- mock data and state patterns

## What we are not building now

The following are explicitly **out of MVP frontend scope** unless later requested:

- live browsing dashboard of results
- saved searches as a core UI concept
- dealer messaging workflows
- live alerts center
- full recommendation archive
- comparison garage
- user watchlists
- multi-location search manager
- admin console
- social auth
- native app

## Launch scope

The launch frontend should support a single clear promise:

> Tell us what kind of sweet-spot car you want and what feels comfortable to spend. We will hunt the best local opportunities and email the strongest matches daily.

### Launch funnel
1. landing
2. quick discovery
3. teaser proof
4. signup
5. setup/preferences
6. start free trial
7. confirmation/account state
8. daily email delivery

## Future phase hints

These are reasonable later expansions, but not part of this build:

### Phase 2 possibilities
- richer account area
- saved preference variants
- email archive
- direct deal-detail pages
- stronger onboarding personalization

### Phase 3 possibilities
- watchlist behaviors
- alert urgency controls
- broader geography control
- richer ownership analysis
- recommendation feedback loops

## Core product definitions

### Sweet spot
A vehicle listing or model-year range that sits in the “interesting but rational” zone where:
- the steepest depreciation is likely behind it
- the desirability remains strong
- the ownership economics are more favorable than the obvious default buyer choice
- the listing still fits the user’s comfort zone and taste

A sweet spot is not just “cheap.” It is the intersection of **desirability, economics, and fit**.

### Monthly TCO
For MVP, monthly total cost of ownership means:

- depreciation
- financing interest
- transaction costs

It does **not** automatically include:
- insurance
- fuel
- maintenance

If those are ever shown, they must be clearly labeled as optional or future-scope context, not core promise math.

### Comfort zone
A user’s self-defined spending range and emotional tolerance around the purchase.

For MVP this can be expressed through:
- monthly budget
- cash budget
- or both

Comfort zone is not the same thing as approval power or mathematical maximum. It is the range in which the customer still feels good about the decision.

## Product discipline

### The frontend must emphasize
- desirable categories
- smarter used-car choices
- credible economics
- the software doing the hunting
- email-first delivery
- free trial as low-friction next step

### The frontend must avoid
- generic calculator framing
- marketplace framing
- “browse thousands of cars” framing
- overclaiming algorithm precision
- finance-bro language
- broad “AI car shopping” language

## Engineering brief

### Build constraints
- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui patterns
- Motion
- React Hook Form
- Zod
- TanStack Query

### Architecture constraints
- mock mode first
- stable contract layer
- no invented backend behavior
- secure-by-default patterns
- clean server/client boundaries
- easy for Cursor to continue safely

## Design brief

The product must feel:
- premium
- emotionally persuasive
- automotive
- clean
- fast
- trustworthy
- studio-polished

It must not feel:
- generic
- templated
- AI-generated
- crypto/growth-hack flavored
- dashboard-heavy
- overexplained

## Success criteria for this phase

- documentation is strong enough to drive future Cursor prompts cleanly
- repo foundation is organized and scalable
- conversion intent is visible in the structure
- backend truth is preserved
- MVP scope does not drift into dashboard bloat
