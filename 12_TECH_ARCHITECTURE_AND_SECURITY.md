# Tech Architecture and Security

## App architecture

### Stack
- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui-compatible component patterns
- Motion
- React Hook Form
- Zod
- TanStack Query

### Architecture posture
- contract-first
- mock-first
- secure by default
- modular by feature
- easy for a founder to test
- easy for Cursor to extend without hallucinating

## Route architecture

Suggested route groups:
- `(marketing)`
- `(auth)`
- `(app)`
- `founder`

This keeps funnel, auth, and authenticated experiences cleanly separated.

## API client plan

### Rules
- one typed API client layer
- centralized request helpers
- endpoint contract schemas live in one place
- mock and live mode share the same response shapes

### Client responsibilities
- attach auth token when present
- parse JSON
- validate response shapes where practical
- normalize errors
- expose route-safe helpers to components/hooks

## Mock mode plan

### Mock mode must:
- be toggleable via env var
- return realistic contract-shaped data
- support landing/discovery/teaser/auth/setup/settings flows
- never pretend production features exist

### Mock mode must not:
- invent admin or dashboard behavior
- create fake live browsing surfaces
- bypass form validation rules

## Environment variable plan

### Public vars
- `NEXT_PUBLIC_API_BASE_URL`
- `NEXT_PUBLIC_MOCK_MODE`
- `NEXT_PUBLIC_SHOW_FOUNDER_PROGRESS`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`

### Server-only vars (future)
- auth secret / JWT validation secret
- Stripe secret key
- webhook secret
- email provider credentials

### Rules
- never hardcode secrets
- never expose server-only vars to client bundles
- always provide safe `.env.example`

## Auth assumptions

- JWT-based auth at launch
- email/password only
- no social auth
- route protection for authenticated pages
- lightweight account state fetch on app shell load

## Security headers plan

Use middleware or hosting config to set:
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` with restrictive defaults
- a conservative Content Security Policy when deployment details are known

## Data validation plan

- use Zod for form schemas
- validate request payloads before submit
- validate critical response shapes in the client boundary
- do not trust mock data just because it is local
- use safe defaults and explicit fallbacks

## Stripe-ready plan

- isolate billing actions behind dedicated client helpers
- treat checkout and portal as server-returned URLs
- do not couple pricing presentation to Stripe implementation details
- design trial UI so it can connect later without page rewrites

## Error handling philosophy

The app should fail in a calm, legible way.

### Must support
- inline field validation errors
- route-level recoverable fetch errors
- empty states
- unavailable service state
- expired trial state
- past-due billing state

### Should avoid
- raw error dumps
- generic red browser-alert style messaging
- blaming the user

## Loading / error / expired-trial strategy

### Loading
- skeletons for account, teaser, settings
- button loading states for form actions
- progress continuity in discovery flow

### Error
- field-level validation where possible
- section-level retry state for fetches
- minimal top-level fatal state for broken route cases

### Expired trial
- show calm account banner
- explain that daily picks are paused until membership resumes
- present resubscribe CTA
- do not imply browsing access exists after expiry

## Git and repo hygiene

- initialize git immediately
- commit foundation once stable
- never commit `node_modules`
- use a strict `.gitignore`
- keep docs at project root for Cursor `@` references
- keep mock data centralized
- keep naming disciplined

## Testability strategy

- pages should be renderable with mock mode only
- forms should be testable without backend
- API layer should isolate backend changes
- founder progress page should make milestone state obvious

## What not to hardcode

- secret values
- production URLs
- final pricing assumptions inside multiple files
- backend-only derived fields not in contract
- cities beyond launch market unless docs explicitly expand scope
- fake algorithm confidence claims
