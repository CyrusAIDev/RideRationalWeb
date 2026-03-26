# Next Action Prompts

Use the prompts below directly inside Cursor. Keep the spacing around `@` references exactly as shown so the file references are easy to parse visually.

---

## 1. Foundation scaffold review / refinement

Using these docs as the source of truth:

@00_MASTER_CONTEXT.md  
@01_PRODUCT_BRIEF.md  
@03_BACKEND_TRUTH_AND_API_CONTRACT.md  
@11_COMPONENT_SYSTEM_AND_UI_ARCHITECTURE.md  
@12_TECH_ARCHITECTURE_AND_SECURITY.md  
@16_CURSOR_RULES_AND_GUARDRAILS.md  
@18_ASSUMPTIONS.md  

Review the current repo foundation and tighten anything that is inconsistent with the docs. Do not add new product scope. Improve type safety, route structure, mock/API separation, and reusable component architecture. Keep changes small and production-minded.

---

## 2. Premium landing page

Using these docs as the source of truth:

@00_MASTER_CONTEXT.md  
@02_TARGET_AVATAR_AND_POSITIONING.md  
@04_FUNNEL_AND_INFORMATION_ARCHITECTURE.md  
@05_BRAND_STRATEGY.md  
@06_VISUAL_DESIGN_SYSTEM.md  
@07_DESKTOP_EXPERIENCE_BLUEPRINT.md  
@08_MOBILE_EXPERIENCE_BLUEPRINT.md  
@09_COPY_AND_MESSAGING_GUIDE.md  
@10_ANIMATION_AND_INTERACTION_SYSTEM.md  
@16_CURSOR_RULES_AND_GUARDRAILS.md  

Build the real premium landing page for RideRational. It must feel studio-quality, premium automotive, and conversion-optimized. Do not build a generic SaaS landing page. Do not add dashboard UI. Follow the approved section order, copy direction, motion rules, and desktop/mobile composition guidance.

---

## 3. Discovery flow + teaser value flow

Using these docs as the source of truth:

@01_PRODUCT_BRIEF.md  
@03_BACKEND_TRUTH_AND_API_CONTRACT.md  
@04_FUNNEL_AND_INFORMATION_ARCHITECTURE.md  
@07_DESKTOP_EXPERIENCE_BLUEPRINT.md  
@08_MOBILE_EXPERIENCE_BLUEPRINT.md  
@09_COPY_AND_MESSAGING_GUIDE.md  
@10_ANIMATION_AND_INTERACTION_SYSTEM.md  
@20_PREFERENCE_SCHEMA_AND_USER_INPUTS.md  
@21_VEHICLE_CATEGORY_AND_BENCHMARK_SYSTEM.md  
@16_CURSOR_RULES_AND_GUARDRAILS.md  

Implement the taste-first discovery flow and the teaser proof-of-possibility experience. Respect the exact step order. Keep the teaser as proof, not full access. Use mock data through the contract-safe API layer. Include loading, validation, and responsive behavior.

---

## 4. Auth + lightweight setup UI

Using these docs as the source of truth:

@01_PRODUCT_BRIEF.md  
@03_BACKEND_TRUTH_AND_API_CONTRACT.md  
@04_FUNNEL_AND_INFORMATION_ARCHITECTURE.md  
@09_COPY_AND_MESSAGING_GUIDE.md  
@11_COMPONENT_SYSTEM_AND_UI_ARCHITECTURE.md  
@12_TECH_ARCHITECTURE_AND_SECURITY.md  
@20_PREFERENCE_SCHEMA_AND_USER_INPUTS.md  
@16_CURSOR_RULES_AND_GUARDRAILS.md  

Implement signup, login, forgot-password, reset-password, and the lightweight post-signup setup flow. Use React Hook Form and Zod. Keep forms premium, clear, and low-friction. Respect mock mode and avoid inventing unsupported backend behavior.

---

## 5. Account/settings shell

Using these docs as the source of truth:

@01_PRODUCT_BRIEF.md  
@04_FUNNEL_AND_INFORMATION_ARCHITECTURE.md  
@11_COMPONENT_SYSTEM_AND_UI_ARCHITECTURE.md  
@12_TECH_ARCHITECTURE_AND_SECURITY.md  
@19_EMAIL_PRODUCT_SPEC.md  
@20_PREFERENCE_SCHEMA_AND_USER_INPUTS.md  
@16_CURSOR_RULES_AND_GUARDRAILS.md  

Implement the MVP account and settings shell. This is not a dashboard. It should communicate account state, preferences, notification settings, billing entry, and email-first product expectations. Include trial, active, past-due, and expired mock states.

---

## 6. Billing / trial UI

Using these docs as the source of truth:

@01_PRODUCT_BRIEF.md  
@03_BACKEND_TRUTH_AND_API_CONTRACT.md  
@04_FUNNEL_AND_INFORMATION_ARCHITECTURE.md  
@05_BRAND_STRATEGY.md  
@09_COPY_AND_MESSAGING_GUIDE.md  
@12_TECH_ARCHITECTURE_AND_SECURITY.md  
@16_CURSOR_RULES_AND_GUARDRAILS.md  

Implement the billing and trial UI. Keep the experience premium, clear, and commercially credible. The architecture should be Stripe-ready without exposing secrets or inventing backend behavior. Include graceful past-due and expired states.

---

## 7. Polish / hardening

Using these docs as the source of truth:

@05_BRAND_STRATEGY.md  
@06_VISUAL_DESIGN_SYSTEM.md  
@09_COPY_AND_MESSAGING_GUIDE.md  
@10_ANIMATION_AND_INTERACTION_SYSTEM.md  
@12_TECH_ARCHITECTURE_AND_SECURITY.md  
@14_BUILD_PROGRESS.md  
@15_QA_AND_TESTING_GUIDE.md  
@16_CURSOR_RULES_AND_GUARDRAILS.md  

Polish the current build for consistency, responsiveness, accessibility, and premium feel. Tighten spacing, hierarchy, motion, CTA clarity, and state handling. Then update progress and QA notes to reflect what changed.
