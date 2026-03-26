# Animation and Interaction System

## Motion philosophy

Motion should communicate confidence, polish, and responsiveness—not entertainment for its own sake.

The system should feel:
- smooth
- refined
- restrained
- premium
- intentional

## Motion principles

1. motion should clarify hierarchy
2. motion should reinforce depth and material
3. motion should never feel playful in a toy-like way
4. timing should be consistent across surfaces
5. major sections may reveal; micro-elements should respond quickly
6. reduced-motion users should get the same clarity without flourish

## Allowed motion types

- fade + slight translate reveal
- subtle scale on CTA hover
- premium card lift
- progress bar interpolation
- count-up number transitions
- blur-to-sharp reveal for teaser locked areas
- staggered child entrances in premium moderation

## Reveal styles

### Section reveal
- opacity `0 -> 1`
- y `16 -> 0`
- duration `0.45–0.6s`
- ease: smooth standard curve

### Card reveal
- opacity `0 -> 1`
- y `10 -> 0`
- optional scale `0.985 -> 1`
- duration `0.35–0.45s`

### Hero reveal
- headline first
- subhead second
- CTA third
- media last or parallel based on performance budget

## Hover rules

### Cards
- slight upward translate
- slight border highlight
- shadow deepens subtly
- max transform should stay restrained

### Buttons
- 1–2px lift
- mild scale only if paired with lift
- accent glow must remain subtle

### Links
- color shift or underline movement
- avoid cartoon slide distances

## Card interaction rules

### Category cards
- selected state should feel decisive
- on hover: slight lift + edge highlight
- on select: ring + fill change + maybe check badge

### Proof cards
- benchmark card remains calmer
- sweet-spot card gets slightly stronger elevation

### Locked preview cards
- can use blur and glass overlays
- hover should hint at depth, not expose full info

## Button motion rules

### Primary CTA
- lift + subtle highlight
- response duration around `160–220ms`

### Secondary CTA
- border/overlay shift rather than dramatic movement

### Disabled/loading state
- no bouncing
- use opacity + spinner or text change

## Scroll behavior

- use reveal-on-scroll sparingly and consistently
- hero should not parallax aggressively
- progress bars in flows can update smoothly between steps
- do not animate every paragraph independently

## Progress transitions

In multi-step flows:
- progress bar should animate width
- step label should crossfade
- next-step content should enter quickly to preserve momentum

## Skeleton/loading rules

### Use skeletons for
- teaser generation wait state
- account status fetch
- settings load
- billing status load

### Skeleton style
- dark-surface shimmer
- low contrast
- no bright loading bars
- respect premium tone

## Reduced-motion policy

When `prefers-reduced-motion` is enabled:
- remove lifts and scale transforms
- keep only opacity transitions where needed
- disable stagger timing flourishes
- keep navigation and state changes immediate

## Timing and easing consistency

### Suggested timing tokens
- `instant`: 120ms
- `fast`: 180ms
- `base`: 240ms
- `slow`: 420ms
- `hero`: 560ms

### Easing guidance
Use one standard smooth curve across most interactions. Avoid mixing many bespoke easing curves unless there is a very strong reason.

## Motion budget rule

If motion starts competing with clarity or makes the interface feel like a concept site instead of a real product, reduce it.
