# Preference Schema and User Inputs

## Core principle

The preference flow should stay low-friction while still collecting enough information to avoid boring, mismatched, or obviously wrong results.

## Exact signup fields

### Required
- email
- password

### Not required at signup
- first name
- phone
- postal code
- budget details
- notification frequency
- vehicle details

## Exact post-signup setup fields

### Required
- `category_ids` (at least 1)
- `purchase_mode`
- budget fields required by purchase mode
- `location_market`
- `email_frequency`

### Optional at setup
- `transmission_preference`
- `body_style_notes`
- `avoid_notes`
- `aspiration_intensity`

## Exact optional refinement fields

- transmission preference
- practicality notes
- lifestyle/use notes
- “avoid” notes
- aspiration intensity
- delivery hour preference

## Settings-editable fields

- categories
- purchase mode
- monthly budget target
- monthly budget ceiling
- cash budget target
- cash budget ceiling
- transmission preference
- body style notes
- avoid notes
- aspiration intensity
- email frequency
- send on weekends
- preferred delivery hour

## Required vs optional logic

### Always required
- category
- purchase mode
- relevant budget logic
- market
- email frequency

### Conditionally required
- monthly budget fields if purchase mode is `monthly` or `both`
- cash budget fields if purchase mode is `cash` or `both`

### Optional
- refinement notes
- transmission
- scheduling nuance

## Backend mapping

### Direct mapping
- `category_ids` -> `user_preferences.category_ids`
- `purchase_mode` -> `user_preferences.purchase_mode`
- `monthly_budget_target_cad`
- `monthly_budget_ceiling_cad`
- `cash_budget_target_cad`
- `cash_budget_ceiling_cad`
- `location_market`
- `transmission_preference`
- `body_style_notes`
- `avoid_notes`
- `aspiration_intensity`
- `email_frequency`

## Monthly vs cash vs both logic

### Monthly mode
Ask:
- What monthly ownership cost feels comfortable?
- What is the upper edge where this stops feeling good?

### Cash mode
Ask:
- What cash purchase budget feels comfortable?
- What is the upper edge where this stops feeling good?

### Both mode
Ask both sets, but visually group them so the user understands:
- monthly comfort
- cash comfort

This should not look like a mortgage application.

## How to avoid boring mismatched results

The flow should gently protect against generic results by collecting:
- preferred categories
- what to avoid
- aspiration intensity
- body style / practicality hints where useful

### Example
A user selecting `luxury-suv` plus `avoid_notes: ["boring-default", "base-trim"]` should nudge future matching away from generic mainstream options in both teaser framing and actual matching logic later.

## Recommended field copy

### Category
What kind of car actually excites you?

### Purchase mode
How do you think about buying?

### Budget
Where does this still feel comfortable?

### Avoid notes
What would feel like settling?

### Email frequency
How often should we send strong matches?

## Low-friction rule

If a field does not materially improve matching or trial conversion in MVP, it should not be required.
