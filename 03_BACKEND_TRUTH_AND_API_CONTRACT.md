# Backend Truth and API Contract

## Current backend reality

### What exists today
- Python scrapers for Craigslist, AutoTrader.ca, and Kijiji
- basic listing ingestion
- JSON file storage
- sold/expired validation scripts
- price tracking
- partial/simplified deal analysis
- strong internal documentation around Algorithm v3 and product/business direction

### What does not exist yet
- no production API server
- no database
- no user auth system
- no onboarding system
- no notifications/email delivery service
- no Stripe or billing implementation
- no real Algorithm v3 service
- no confidence scoring
- no location ring system
- no true sweet-spot engine
- no user-deal matching engine
- no frontend

## Frontend operating rule

The frontend must be built against a **planned stable API contract** plus **mock data**.

Do not:
- invent undocumented backend behavior
- claim real-time live matching exists today
- imply local inventory numbers are already powered by production ranking
- silently add fields not represented in the contract

## Stable frontend assumptions

- API base URL comes from env var
- JWT auth for authenticated endpoints
- all money values are CAD
- categories are fixed enum values
- `sweet_spot_score` is normalized `0..1`
- teaser results are visible pre-signup
- signup requires only email + password
- post-signup setup is lightweight and preference-based
- no social auth at launch
- email-first product
- no live dashboard browsing experience in MVP

## MVP entities

- users
- subscriptions
- user_preferences
- notification_preferences
- vehicle_models_metadata
- depreciation_curves
- budget_benchmarks
- listings
- listing_price_history
- listing_analysis
- user_deal_matches
- email_jobs

## Core frontend-facing endpoints

- `POST /api/auth/signup`
- `POST /api/auth/login`
- `POST /api/auth/forgot-password`
- `POST /api/auth/reset-password`
- `GET /api/user/me`
- `PATCH /api/user/me`
- `DELETE /api/user/me`
- `GET /api/preferences`
- `POST /api/preferences`
- `PATCH /api/preferences`
- `GET /api/categories`
- `GET /api/teaser`
- `POST /api/teaser/personalized`
- `GET /api/notifications/preferences`
- `PUT /api/notifications/preferences`
- `POST /api/billing/checkout`
- `POST /api/billing/portal`
- `POST /api/billing/webhook`
- `GET /api/billing/status`
- `GET /api/health`

---

## Enums

### Vehicle category enum
```ts
type VehicleCategory =
  | "sports-car"
  | "performance-sedan"
  | "hot-hatch"
  | "luxury-suv"
  | "rugged-luxury"
  | "premium-gt";
```

### Purchase mode enum
```ts
type PurchaseMode = "monthly" | "cash" | "both";
```

### Transmission preference enum
```ts
type TransmissionPreference = "auto" | "manual" | "either";
```

### Subscription status enum
```ts
type SubscriptionStatus =
  | "none"
  | "trialing"
  | "active"
  | "past_due"
  | "canceled"
  | "expired";
```

### Email frequency enum
```ts
type EmailFrequency = "daily" | "weekdays" | "pause";
```

---

## Common shapes

### Money
```json
{
  "amount_cad": 42999,
  "formatted": "$42,999 CAD"
}
```

### API error
```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Please review the highlighted fields.",
    "field_errors": {
      "email": ["Enter a valid email address."]
    }
  }
}
```

### Auth token response
```json
{
  "token": "jwt-token",
  "user": {
    "id": "usr_123",
    "email": "driver@example.com",
    "first_name": null,
    "market": "vancouver",
    "subscription_status": "trialing"
  }
}
```

---

## Endpoint contracts

### `POST /api/auth/signup`

#### Request
```json
{
  "email": "driver@example.com",
  "password": "StrongPassword123!"
}
```

#### Success response
```json
{
  "token": "jwt-token",
  "user": {
    "id": "usr_123",
    "email": "driver@example.com",
    "market": "vancouver",
    "subscription_status": "none"
  }
}
```

### `POST /api/auth/login`

#### Request
```json
{
  "email": "driver@example.com",
  "password": "StrongPassword123!"
}
```

#### Success response
```json
{
  "token": "jwt-token",
  "user": {
    "id": "usr_123",
    "email": "driver@example.com",
    "market": "vancouver",
    "subscription_status": "trialing"
  }
}
```

### `POST /api/auth/forgot-password`
```json
{
  "email": "driver@example.com"
}
```

### `POST /api/auth/reset-password`
```json
{
  "token": "reset-token",
  "password": "NewStrongPassword123!"
}
```

### `GET /api/user/me`
```json
{
  "id": "usr_123",
  "email": "driver@example.com",
  "first_name": "Alex",
  "market": "vancouver",
  "subscription_status": "trialing",
  "trial_ends_at": "2026-04-01T18:00:00.000Z",
  "created_at": "2026-03-25T18:00:00.000Z"
}
```

### `PATCH /api/user/me`
Allowed editable fields:
```json
{
  "first_name": "Alex",
  "market": "vancouver"
}
```

### `DELETE /api/user/me`
```json
{
  "ok": true
}
```

---

## Preferences contract

### `GET /api/preferences`
```json
{
  "category_ids": ["performance-sedan", "luxury-suv"],
  "purchase_mode": "both",
  "monthly_budget_target_cad": 850,
  "monthly_budget_ceiling_cad": 1050,
  "cash_budget_target_cad": 42000,
  "cash_budget_ceiling_cad": 52000,
  "location_market": "vancouver",
  "postal_code": null,
  "radius_km": null,
  "transmission_preference": "either",
  "body_style_notes": ["usable-back-seat", "year-round"],
  "avoid_notes": ["boring-default", "base-trim"],
  "aspiration_intensity": "elevated",
  "updated_at": "2026-03-25T18:00:00.000Z"
}
```

### `POST /api/preferences` and `PATCH /api/preferences`
```json
{
  "category_ids": ["performance-sedan", "hot-hatch"],
  "purchase_mode": "monthly",
  "monthly_budget_target_cad": 850,
  "monthly_budget_ceiling_cad": 1050,
  "location_market": "vancouver",
  "transmission_preference": "either",
  "body_style_notes": ["practical", "fun"],
  "avoid_notes": ["too-plain"],
  "aspiration_intensity": "elevated"
}
```

### Preference validation rules
- at least 1 category required
- `purchase_mode` required
- monthly fields required when `purchase_mode` is `monthly` or `both`
- cash fields required when `purchase_mode` is `cash` or `both`
- values are positive integers in CAD
- ceiling must be greater than or equal to target
- market required, default `vancouver`

---

## Categories contract

### `GET /api/categories`
```json
{
  "categories": [
    {
      "id": "sports-car",
      "label": "Sports Car",
      "short_description": "Focused, exciting, emotionally led."
    },
    {
      "id": "performance-sedan",
      "label": "Performance Sedan",
      "short_description": "Everyday usability with real pace."
    }
  ]
}
```

---

## Teaser contract

### `GET /api/teaser`
Returns a generic curated teaser experience for anonymous visitors.

```json
{
  "market": "vancouver",
  "scenarios": [
    {
      "id": "scenario_m340i_vs_default",
      "buyer_type": "Performance Sedan Upgrader",
      "budget_anchor": {
        "label": "Around $900/mo",
        "monthly_tco_estimate_cad": 900
      },
      "default_benchmark": {
        "label": "Expected default",
        "vehicle_name": "New mainstream compact SUV",
        "why_people_choose_it": "Predictable, easy, and familiar."
      },
      "sweet_spot_alternative": {
        "label": "RideRational sweet spot",
        "vehicle_name": "BMW M340i",
        "why_it_surprises": "A more special driving experience may be within the same broad comfort zone."
      },
      "narrative": "For buyers who were about to default to something safe, the sweet spot may be dramatically more interesting.",
      "local_opportunity_count": 30,
      "details_locked": true
    }
  ]
}
```

### `POST /api/teaser/personalized`
Returns a personalized proof-of-possibility teaser based on anonymous discovery inputs.

#### Request
```json
{
  "category_ids": ["performance-sedan"],
  "purchase_mode": "monthly",
  "monthly_budget_target_cad": 850,
  "monthly_budget_ceiling_cad": 1000,
  "location_market": "vancouver"
}
```

#### Response
```json
{
  "market": "vancouver",
  "input_summary": {
    "category_ids": ["performance-sedan"],
    "purchase_mode": "monthly",
    "budget_label": "Around $850–$1,000/mo"
  },
  "teaser_result": {
    "buyer_profile_label": "Performance sedan shopper",
    "benchmark_vehicle": {
      "vehicle_name": "New mainstream compact crossover",
      "positioning": "The safe, obvious default at this spend."
    },
    "sweet_spot_vehicle": {
      "vehicle_name": "Audi S4",
      "positioning": "A more special used sweet spot that may sit in the same broad comfort zone."
    },
    "ownership_story": "Instead of spending that budget on something ordinary and front-loaded on depreciation, you may be able to target a more desirable car that has already absorbed the steepest drop.",
    "local_opportunity_count": 18,
    "locked_preview_count": 4,
    "cta": {
      "label": "Start your free trial",
      "next_route": "/signup"
    }
  }
}
```

### Teaser product rule
Teaser content should prove possibility without giving away the full live shortlist. It is a controlled preview, not the product itself.

---

## Notifications contract

### `GET /api/notifications/preferences`
```json
{
  "email_frequency": "daily",
  "delivery_hour_local": 7,
  "send_on_weekends": true,
  "unsubscribe_token_hint": "managed-server-side"
}
```

### `PUT /api/notifications/preferences`
```json
{
  "email_frequency": "weekdays",
  "delivery_hour_local": 7,
  "send_on_weekends": false
}
```

---

## Billing contract

### `GET /api/billing/status`
```json
{
  "subscription_status": "trialing",
  "plan_name": "RideRational Membership",
  "trial_ends_at": "2026-04-01T18:00:00.000Z",
  "renews_at": "2026-04-01T18:00:00.000Z",
  "price_cad_monthly": 29
}
```

### `POST /api/billing/checkout`
```json
{
  "checkout_url": "https://checkout.stripe.com/..."
}
```

### `POST /api/billing/portal`
```json
{
  "portal_url": "https://billing.stripe.com/..."
}
```

### `POST /api/billing/webhook`
Server-only. No frontend integration details beyond success/error handling assumptions.

---

## Health contract

### `GET /api/health`
```json
{
  "ok": true,
  "environment": "mock",
  "version": "0.1.0"
}
```

---

## Safe claims vs unsafe claims

### Safe public-facing claims
- We help you skip the worst depreciation.
- We look for sweet-spot used cars in desirable categories.
- We tailor results to your taste and comfort zone.
- We send the strongest matching local opportunities by email.
- We preview the kind of upgrade that may be possible at your budget.

### Unsafe claims until backend exists
- “We are tracking your exact personalized shortlist live.”
- “We have already scored every listing with the production algorithm.”
- “Our confidence score proves this is the best deal.”
- “We know your exact total ownership cost including maintenance and insurance.”
- “We guarantee savings.”
- “We already support multi-market ring-based matching.”

## Mock mode rules

1. Mock responses must match the contract shape.
2. Mock copy must not imply a live production backend exists.
3. Mock data should be realistic enough to test UI hierarchy and decision flow.
4. Use deterministic, curated examples for teaser flows.
5. Keep all mock constants centralized and typed.
