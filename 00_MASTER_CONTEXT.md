# RideRational — Master Context

## Project overview

RideRational is a premium, email-first software concierge for finding desirable used cars that are already past the worst of their depreciation curve.

The product does **not** ask customers to become pricing analysts, market researchers, or spreadsheet hobbyists. It does the hunting for them.

RideRational ingests local listings, filters for desirable vehicle categories, evaluates likely ownership economics, identifies sweet-spot opportunities, and sends the strongest local matches by email.

This project is a **hard reset** of the frontend and documentation system. The goal is to establish a premium, contract-first foundation that is visually elevated, commercially credible, and easy for Cursor to extend without drifting into generic SaaS patterns.

## Mission

**Core mission:**  
Skip the worst depreciation. Get the car you actually want.

**Expanded product promise:**  
For the same money a buyer was about to spend on the obvious default, RideRational may uncover something more special, more emotionally rewarding, and still economically rational.

## What the hook is vs what the actual product is

### The hook
The boring-vs-special comparison.

The “wait, I could drive *that* for roughly what I was going to spend anyway?” moment is the emotional entry point. It creates surprise, curiosity, and urgency without requiring a hard sell.

### The actual product
A sweet-spot used-car finder for desirable vehicles, grounded in:

- category-based matching
- aspiration/desirability metadata
- benchmark/default comparison logic
- ownership economics
- local listing availability
- explanation generation
- daily email delivery

This distinction matters. The frontend should use the hook to convert attention, but the system must ultimately behave like a disciplined, category-aware deal-concierge product, not a vague aspirational gallery.

## Target user

### Launch avatar
A Vancouver-based premium/performance upgrader who:

- is already interested in used premium or performance vehicles
- has taste, but not infinite time
- wants something more special than the default choice
- does not want to become a depreciation expert
- wants software to do the local hunting and filtering

### Traits
- busy
- image-conscious without being flashy
- rational enough to care about depreciation
- emotional enough to care what they drive
- skeptical of hype
- willing to pay for curation that saves time and regret

## Launch market

### Geography
- Vancouver first
- broader Canada later

### Why Vancouver
- strong density of premium/performance buyers
- enough local supply variation to create compelling used sweet spots
- affluent urban/suburban upgrade audience
- meaningful weather/topography mix for categories like luxury SUV, rugged luxury, and premium GT

## Business model

### MVP model
- no permanent free plan
- teaser value before signup
- 7-day free trial
- paid subscription after trial
- signup with email + password
- lightweight setup
- core value delivered by daily email

### Important constraint
There is **no browsing-heavy dashboard experience in MVP**. The customer tells the product what they want, confirms their comfort zone and preferences, and then receives the best matching local sweet-spot deals by email.

## Conversion philosophy

The site should not act like a calculator app or a marketplace. It should feel like a premium product studio for people who want a better answer than the default car-buying path.

The conversion sequence should move through:

1. aspiration  
2. emotional plausibility  
3. proof of possibility  
4. trust  
5. low-friction signup  
6. trial commitment  
7. expectation-setting for daily email delivery

### Emotional outcomes to create
- I do not have to settle.
- The smart choice might actually be the exciting choice.
- This seems credible.
- This software is doing the hard work for me.
- I should start the trial.

## Product truth

### What RideRational is
- a local listing intelligence layer
- a desirable used-vehicle opportunity finder
- a category-aware matching system
- an ownership-economics explainer
- an email-first concierge

### What RideRational is not
- a generic lease-vs-buy calculator
- a generic affordability quiz
- a broad car marketplace
- a dealership lead form
- a free listicle product
- a live dashboard of endless search filters for MVP

## Backend truth summary

### Exists today
- scraping from Craigslist, AutoTrader.ca, Kijiji
- basic listing ingestion
- JSON storage
- sold/expired validation
- price tracking
- partial deal analysis
- strong Algorithm v3 and business/product docs

### Does not exist today
- no production API server
- no database
- no auth
- no billing
- no onboarding engine
- no email delivery pipeline
- no true Algorithm v3 implementation
- no frontend

### Frontend implication
The frontend must be built against a **planned API contract plus mock data**, not imagined live behavior.

## Success definition

The first version succeeds if it achieves all of the following:

### Product clarity
A first-time visitor understands within seconds that RideRational helps them skip the worst depreciation and potentially drive something more special for similar money.

### Conversion quality
The teaser flow creates a strong “that is more compelling than I expected” moment without giving away the actual paid product.

### Commercial credibility
The brand feels premium, clean, trustworthy, and intentional—not like a template, a toy, or a generic AI wrapper.

### Build discipline
The repo is structured so a founder and Cursor can safely continue milestone by milestone without:
- inventing backend behavior
- overbuilding a dashboard
- fragmenting the visual system
- diluting the product positioning

### MVP delivery fit
The experience cleanly funnels users into:
- category/taste capture
- budget/comfort-zone capture
- email preference setup
- free trial start
- expectation of daily deal emails

## Operating principles for the reset

1. **Hook with aspiration, close with credibility.**
2. **Use emotional contrast, not hype.**
3. **Keep the product narrow and powerful.**
4. **Never imply unsupported backend capabilities.**
5. **Protect the premium feeling in every component and line of copy.**
6. **Design desktop and mobile intentionally, not as one compressed layout.**
7. **Optimize for a polished, studio-quality frontend foundation first.**
