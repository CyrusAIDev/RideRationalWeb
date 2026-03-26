import type {
  NotificationPreferences,
  Preference,
} from "@/lib/api/contracts";

export const mockPreferences: Preference = {
  category_ids: ["performance-sedan", "luxury-suv"],
  purchase_mode: "both",
  monthly_budget_target_cad: 850,
  monthly_budget_ceiling_cad: 1050,
  cash_budget_target_cad: 42000,
  cash_budget_ceiling_cad: 52000,
  location_market: "vancouver",
  postal_code: null,
  radius_km: null,
  transmission_preference: "either",
  body_style_notes: ["usable-back-seat", "year-round"],
  avoid_notes: ["boring-default", "base-trim"],
  aspiration_intensity: "elevated",
  updated_at: "2026-03-25T18:00:00.000Z",
};

export const mockNotificationPreferences: NotificationPreferences = {
  email_frequency: "daily",
  delivery_hour_local: 7,
  send_on_weekends: true,
  unsubscribe_token_hint: "managed-server-side",
};
