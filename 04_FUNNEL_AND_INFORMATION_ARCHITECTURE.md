# Funnel and Information Architecture

## Funnel overview

RideRational MVP is not a browse-heavy search product. The funnel is designed to create emotional proof first, then convert into a lightweight setup for an email-first concierge experience.

### Funnel sequence
1. Landing page
2. Taste-first discovery flow
3. Teaser value page
4. Signup
5. Lightweight setup
6. Trial start
7. Account/settings state
8. Daily deal delivery by email

## Route map

### Anonymous routes
- `/` — landing page
- `/discover` — taste-first discovery flow
- `/teaser` — personalized proof-of-possibility
- `/signup` — create account
- `/login` — sign in
- `/forgot-password`
- `/reset-password`

### Authenticated routes
- `/setup` — lightweight preference refinement after signup
- `/trial` — start or confirm free trial
- `/account` — account state and product expectation-setting
- `/settings` — preferences, notifications, billing entry point

### Founder/internal route
- `/founder/progress` — build progress and QA coordination

## Anonymous vs authenticated logic

### Anonymous state
- can read landing page
- can complete discovery flow
- can view teaser proof
- cannot access settings, billing, or account shell
- should be shown signup CTAs after teaser proof

### Authenticated pre-trial state
- can complete setup
- can see trial wall and pricing terms
- can edit preferences
- cannot access full paid-product messaging as if deals are already being delivered

### Authenticated active-trial / active-paid state
- can view account confirmation
- can manage preferences and notifications
- can access billing management
- still does **not** get a dashboard of live deal browsing in MVP

---

## Taste-first discovery flow

### Goal
Capture desire before asking for account creation. The flow should feel emotionally correct and low friction.

### Required order
1. what kind of car excites you?
2. how do you think about buying? monthly, cash, or both
3. ask only the relevant comfort-zone question
4. where are you? default Vancouver
5. show teaser result

### Why this order matters
It respects buyer psychology:
- desire first
- money framing second
- concrete comfort zone third
- location last

Do **not** ask monthly budget questions before understanding whether the visitor thinks in monthly, cash, or both.

### Discovery steps

#### Step 1 — Category selection
Purpose:
- anchor taste
- establish emotional direction
- avoid generic financial-quiz vibes

Content:
- six category cards
- short descriptors
- optional “select up to 2” logic for MVP
- CTA: Continue

#### Step 2 — Purchase mode
Purpose:
- understand how the buyer thinks
- reduce irrelevant questions

Choices:
- Monthly budget
- Cash budget
- Both

#### Step 3 — Comfort zone
Purpose:
- capture usable budget range without overwhelming detail

If monthly:
- target monthly comfort
- ceiling monthly comfort

If cash:
- target cash spend
- ceiling cash spend

If both:
- capture both ranges in one step with progressive disclosure

#### Step 4 — Market
Purpose:
- localize teaser proof
- keep MVP geography disciplined

Fields:
- market preselected as Vancouver
- later-expandable location control
- optional postal code stub in future, not required now

#### Step 5 — Teaser transition
Purpose:
- reinforce that the next page is a curated preview, not the full live product

Microcopy:
- “Give us a second. We’re framing what buyers like you may be overlooking.”

---

## Teaser value flow

### Goal
Create the “wow, I could actually drive that?” moment without giving away the paid product.

### Teaser content model
- buyer-like-you framing
- one benchmark/default vehicle
- one sweet-spot alternative
- short ownership-economics narrative
- local opportunity count
- selectively locked deeper detail
- strong CTA to start free trial

### What teaser is not
- not a live shortlist
- not a multi-card browse experience
- not an inventory dump
- not a full recommendation report

### Teaser page information hierarchy
1. personalized headline
2. short proof-of-possibility statement
3. benchmark vs sweet-spot comparison module
4. short narrative explanation
5. local opportunity count
6. locked/blurred detail strip
7. CTA stack to start trial
8. trust note around daily email delivery

---

## Lightweight preference setup flow

### Goal
Turn anonymous curiosity into an email-delivery-ready preference profile with minimal friction.

### Post-signup priorities
- confirm category taste
- confirm purchase mode
- confirm comfort zone
- confirm email preferences
- explain daily email behavior
- start free trial

### Setup page block order
1. welcome header
2. selected categories review
3. budget logic confirmation
4. optional refinements
5. email preference selection
6. “what happens next” summary
7. continue to trial CTA

---

## Paywall and trial flow

### Goal
Close the sale with clarity, not pressure.

### Trial page hierarchy
1. trial headline
2. what the membership does
3. what happens during the trial
4. simple price presentation
5. reassurance bullets
6. payment/start trial CTA
7. cancellation/manage expectation note

### Key message
The value is the ongoing daily curation, not one teaser screen.

---

## Email-first product flow

### Important product principle
The product delivers recurring value through email, not through an on-site browsing interface.

### In-product expectation setting
After trial start, the account shell should communicate:
- your preferences are set
- your market is set
- daily emails will begin
- you can edit settings anytime
- the product hunts for you in the background

### Explicit non-feature note
A deal-browsing dashboard is **not part of MVP** and should not be implied in navigation, CTAs, or account empty states.

---

## Account and settings states

### Account states to support
- signed up, setup incomplete
- setup complete, trial not started
- trial active
- paid active
- past due
- canceled / access until period end
- expired / resubscribe

### Settings sections
- profile basics
- category and budget preferences
- notification preferences
- billing management entry
- account deletion

---

## Page-by-page breakdown

## `/` Landing page

### Block order
1. hero
2. credibility statement
3. “boring default vs sweet spot” proof strip
4. category taste preview
5. how it works
6. teaser invitation CTA
7. trust module
8. pricing/trial teaser
9. final CTA

### CTA hierarchy
Primary: Start with your taste  
Secondary: See how it works

### Emotional job
Create aspiration, credibility, and curiosity.

---

## `/discover`

### Block order
1. compact progress header
2. discovery step content
3. bottom CTA rail

### Emotional job
Feel fast, clear, and personal—not like a form gauntlet.

---

## `/teaser`

### Block order
1. tailored result headline
2. benchmark vs sweet-spot comparison
3. explanation narrative
4. local opportunity count
5. locked details preview
6. trial CTA
7. trust note

### Emotional job
Deliver surprise plus legitimacy.

---

## `/signup`

### Block order
1. concise value reminder
2. email/password form
3. trust note
4. login link

### Emotional job
Keep friction low.

---

## `/setup`

### Block order
1. step header
2. category confirmation
3. budget confirmation
4. refinements
5. email settings
6. next-step explanation
7. continue CTA

### Emotional job
Make setup feel short and intelligent.

---

## `/trial`

### Block order
1. trial headline
2. what you get
3. pricing module
4. reassurance note
5. start trial CTA

### Emotional job
Remove hesitation without looking desperate.

---

## `/account`

### Block order
1. account state summary
2. what happens next
3. preferences summary
4. notification summary
5. billing/status entry
6. support/account actions

### Emotional job
Reinforce that the machine is now working for the user.

---

## `/settings`

### Block order
1. page intro
2. preference form
3. notification settings
4. billing actions
5. destructive account actions

### Emotional job
Stay practical and calm.

## MVP discipline note

A dashboard or results-browsing shell is **not** part of this information architecture. The account experience should confirm state, allow edits, and reinforce email delivery—not become a search product.
