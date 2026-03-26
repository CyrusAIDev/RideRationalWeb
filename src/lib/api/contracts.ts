import { z } from "zod";

export const vehicleCategorySchema = z.enum([
  "sports-car",
  "performance-sedan",
  "hot-hatch",
  "luxury-suv",
  "rugged-luxury",
  "premium-gt",
]);

export const purchaseModeSchema = z.enum(["monthly", "cash", "both"]);
export const transmissionPreferenceSchema = z.enum(["auto", "manual", "either"]);
export const subscriptionStatusSchema = z.enum([
  "none",
  "trialing",
  "active",
  "past_due",
  "canceled",
  "expired",
]);
export const emailFrequencySchema = z.enum(["daily", "weekdays", "pause"]);

export const categorySchema = z.object({
  id: vehicleCategorySchema,
  label: z.string(),
  short_description: z.string(),
});

export const categoriesResponseSchema = z.object({
  categories: z.array(categorySchema),
});

export const teaserScenarioSchema = z.object({
  id: z.string(),
  buyer_type: z.string(),
  budget_anchor: z.object({
    label: z.string(),
    monthly_tco_estimate_cad: z.number().int().nonnegative().optional(),
    cash_spend_estimate_cad: z.number().int().nonnegative().optional(),
  }),
  default_benchmark: z.object({
    label: z.string(),
    vehicle_name: z.string(),
    why_people_choose_it: z.string(),
  }),
  sweet_spot_alternative: z.object({
    label: z.string(),
    vehicle_name: z.string(),
    why_it_surprises: z.string(),
  }),
  narrative: z.string(),
  local_opportunity_count: z.number().int().nonnegative(),
  details_locked: z.boolean(),
});

export const teaserResponseSchema = z.object({
  market: z.string(),
  scenarios: z.array(teaserScenarioSchema),
});

export const personalizedTeaserRequestSchema = z
  .object({
    category_ids: z.array(vehicleCategorySchema).min(1),
    purchase_mode: purchaseModeSchema,
    monthly_budget_target_cad: z.number().int().positive().optional(),
    monthly_budget_ceiling_cad: z.number().int().positive().optional(),
    cash_budget_target_cad: z.number().int().positive().optional(),
    cash_budget_ceiling_cad: z.number().int().positive().optional(),
    location_market: z.string().default("vancouver"),
  })
  .superRefine((value, ctx) => {
    if (value.purchase_mode === "monthly" || value.purchase_mode === "both") {
      if (!value.monthly_budget_target_cad || !value.monthly_budget_ceiling_cad) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Monthly budget target and ceiling are required.",
          path: ["monthly_budget_target_cad"],
        });
      }
    }

    if (value.purchase_mode === "cash" || value.purchase_mode === "both") {
      if (!value.cash_budget_target_cad || !value.cash_budget_ceiling_cad) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Cash budget target and ceiling are required.",
          path: ["cash_budget_target_cad"],
        });
      }
    }
  });

export const personalizedTeaserResponseSchema = z.object({
  market: z.string(),
  input_summary: z.object({
    category_ids: z.array(vehicleCategorySchema),
    purchase_mode: purchaseModeSchema,
    budget_label: z.string(),
  }),
  teaser_result: z.object({
    buyer_profile_label: z.string(),
    benchmark_vehicle: z.object({
      vehicle_name: z.string(),
      positioning: z.string(),
    }),
    sweet_spot_vehicle: z.object({
      vehicle_name: z.string(),
      positioning: z.string(),
    }),
    ownership_story: z.string(),
    local_opportunity_count: z.number().int().nonnegative(),
    locked_preview_count: z.number().int().nonnegative(),
    cta: z.object({
      label: z.string(),
      next_route: z.string(),
    }),
  }),
});

export const userSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  first_name: z.string().nullable().optional(),
  market: z.string(),
  subscription_status: subscriptionStatusSchema,
  trial_ends_at: z.string().nullable().optional(),
  created_at: z.string().optional(),
});

export const authResponseSchema = z.object({
  token: z.string(),
  user: userSchema,
});

export const preferenceSchema = z.object({
  category_ids: z.array(vehicleCategorySchema).min(1),
  purchase_mode: purchaseModeSchema,
  monthly_budget_target_cad: z.number().int().positive().nullable().optional(),
  monthly_budget_ceiling_cad: z.number().int().positive().nullable().optional(),
  cash_budget_target_cad: z.number().int().positive().nullable().optional(),
  cash_budget_ceiling_cad: z.number().int().positive().nullable().optional(),
  location_market: z.string(),
  postal_code: z.string().nullable().optional(),
  radius_km: z.number().nullable().optional(),
  transmission_preference: transmissionPreferenceSchema,
  body_style_notes: z.array(z.string()).default([]),
  avoid_notes: z.array(z.string()).default([]),
  aspiration_intensity: z.enum(["grounded", "elevated", "aspirational"]),
  updated_at: z.string().optional(),
});

export const notificationPreferencesSchema = z.object({
  email_frequency: emailFrequencySchema,
  delivery_hour_local: z.number().int().min(0).max(23),
  send_on_weekends: z.boolean(),
  unsubscribe_token_hint: z.string().optional(),
});

export const billingStatusSchema = z.object({
  subscription_status: subscriptionStatusSchema,
  plan_name: z.string(),
  trial_ends_at: z.string().nullable().optional(),
  renews_at: z.string().nullable().optional(),
  price_cad_monthly: z.number().int().nonnegative(),
});

export type VehicleCategory = z.infer<typeof vehicleCategorySchema>;
export type PurchaseMode = z.infer<typeof purchaseModeSchema>;
export type Category = z.infer<typeof categorySchema>;
export type CategoriesResponse = z.infer<typeof categoriesResponseSchema>;
export type TeaserResponse = z.infer<typeof teaserResponseSchema>;
export type PersonalizedTeaserRequest = z.infer<
  typeof personalizedTeaserRequestSchema
>;
export type PersonalizedTeaserResponse = z.infer<
  typeof personalizedTeaserResponseSchema
>;
export type User = z.infer<typeof userSchema>;
export type AuthResponse = z.infer<typeof authResponseSchema>;
export type Preference = z.infer<typeof preferenceSchema>;
export type NotificationPreferences = z.infer<
  typeof notificationPreferencesSchema
>;
export type BillingStatus = z.infer<typeof billingStatusSchema>;
