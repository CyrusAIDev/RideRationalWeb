# QA and Testing Guide

## Goal of this guide

This is a founder-friendly manual QA checklist for testing the RideRational frontend in mock mode before a real backend exists.

## Before testing

Confirm:
- env vars are set from `.env.example`
- mock mode is enabled
- the app boots locally
- founder progress route is enabled

## Routes to test

### Public
- `/`
- `/discover`
- `/teaser`
- `/signup`
- `/login`
- `/forgot-password`
- `/reset-password`

### Authenticated shell
- `/setup`
- `/trial`
- `/account`
- `/settings`

### Founder
- `/founder/progress`

## Route-by-route checklist

## `/`
- verify header renders cleanly
- verify hero hierarchy feels premium
- verify there is one clear primary CTA
- verify sections do not look like default Tailwind blocks
- verify mobile and desktop spacing feel intentionally different

## `/discover`
- verify progress indicator is visible
- verify step order is category -> purchase mode -> budget -> market
- verify the page does not ask monthly questions before purchase mode
- verify CTA is always easy to find
- verify category cards have clear selected states

## `/teaser`
- verify teaser looks like proof, not full product access
- verify benchmark/default and sweet-spot contrast is legible
- verify local opportunity count is visible
- verify locked details feel intentional
- verify the CTA pushes toward signup/trial

## `/signup`
- verify email/password validation works
- verify page feels simple and low-friction
- verify copy is calm, not aggressive

## `/login`
- verify fields and errors render cleanly
- verify navigation to forgot-password is obvious

## `/setup`
- verify categories can be confirmed/edited
- verify relevant budget fields appear for purchase mode
- verify optional refinements do not overwhelm
- verify email preference controls feel clear

## `/trial`
- verify the 7-day trial framing is obvious
- verify the user understands value is delivered by email
- verify the page does not imply a dashboard unlock

## `/account`
- verify account status is easy to understand
- verify the page communicates “daily picks are delivered by email”
- verify no dashboard/results-browsing modules exist

## `/settings`
- verify grouped settings sections are understandable
- verify notifications and billing entry points are visible
- verify destructive actions are visually separated

## `/founder/progress`
- verify milestone checklist is readable
- verify progress values match `14_BUILD_PROGRESS.md`
- verify next milestone is obvious

## Mock mode testing

### Verify
- mock mode can be toggled via env
- contract-shaped mock data loads without crashes
- missing/slow/error states can be simulated later without architecture changes

## Visual consistency testing

### Desktop
- check hierarchy, spacing, and image balance
- confirm surface styles match the design system
- ensure sections do not become flat or generic

### Mobile
- test on narrow viewport
- confirm CTA buttons remain thumb-friendly
- confirm sections do not become cramped
- confirm mobile order makes sense, not just compressed desktop order

## Performance / responsiveness checks

- pages should feel fast in mock mode
- no janky animations
- images should have reserved slots
- no huge layout shift on route load

## Conversion sanity checks

- does the landing page create curiosity quickly?
- does the discovery flow feel short enough?
- does the teaser create a real “that’s interesting” moment?
- does signup feel like a natural next step?
- does trial framing feel trustworthy?

## Explicit logic tests

### Quiz logic
- selecting `monthly` shows only monthly fields
- selecting `cash` shows only cash fields
- selecting `both` shows both groups
- Vancouver should appear as the default market

### Teaser-value flow
- teaser should use scenario logic, not raw browsing
- teaser should not reveal a full shortlist
- teaser should point clearly toward starting the trial for real daily matches

## Accessibility checks
- keyboard focus states visible
- color contrast sufficient
- forms have labels
- reduced motion path remains readable
- buttons are usable without hover

## Final QA rule
If any route starts to feel like a generic marketplace or dashboard, it fails the current MVP spec and should be revised.
