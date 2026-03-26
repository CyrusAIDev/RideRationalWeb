import {
  authResponseSchema,
  billingStatusSchema,
  categoriesResponseSchema,
  notificationPreferencesSchema,
  personalizedTeaserRequestSchema,
  personalizedTeaserResponseSchema,
  preferenceSchema,
  teaserResponseSchema,
  userSchema,
  type PersonalizedTeaserRequest,
} from "@/lib/api/contracts";
import { mockCategories } from "@/mocks/categories";
import { mockNotificationPreferences, mockPreferences } from "@/mocks/preferences";
import { makePersonalizedTeaser, mockTeaser } from "@/mocks/teaser";
import { mockAuthResponse, mockBillingStatus, mockUser } from "@/mocks/user";

async function simulateLatency() {
  await new Promise((resolve) => setTimeout(resolve, 250));
}

export async function mockGetCategories() {
  await simulateLatency();
  return categoriesResponseSchema.parse(mockCategories);
}

export async function mockGetTeaser() {
  await simulateLatency();
  return teaserResponseSchema.parse(mockTeaser);
}

export async function mockCreatePersonalizedTeaser(
  payload: PersonalizedTeaserRequest,
) {
  await simulateLatency();
  const parsed = personalizedTeaserRequestSchema.parse(payload);
  return personalizedTeaserResponseSchema.parse(makePersonalizedTeaser(parsed));
}

export async function mockSignup() {
  await simulateLatency();
  return authResponseSchema.parse(mockAuthResponse);
}

export async function mockLogin() {
  await simulateLatency();
  return authResponseSchema.parse(mockAuthResponse);
}

export async function mockGetUser() {
  await simulateLatency();
  return userSchema.parse(mockUser);
}

export async function mockGetPreferences() {
  await simulateLatency();
  return preferenceSchema.parse(mockPreferences);
}

export async function mockSavePreferences(payload: unknown) {
  await simulateLatency();
  const updates = (payload ?? {}) as Record<string, unknown>;
  return preferenceSchema.parse({ ...mockPreferences, ...updates });
}

export async function mockGetNotificationPreferences() {
  await simulateLatency();
  return notificationPreferencesSchema.parse(mockNotificationPreferences);
}

export async function mockGetBillingStatus() {
  await simulateLatency();
  return billingStatusSchema.parse(mockBillingStatus);
}
