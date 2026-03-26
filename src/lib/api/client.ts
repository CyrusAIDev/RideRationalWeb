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
import { isMockMode, publicEnv } from "@/lib/env";
import {
  mockCreatePersonalizedTeaser,
  mockGetBillingStatus,
  mockGetCategories,
  mockGetNotificationPreferences,
  mockGetPreferences,
  mockGetTeaser,
  mockGetUser,
  mockLogin,
  mockSavePreferences,
  mockSignup,
} from "@/lib/api/mock-server";

type RequestInitExtended = RequestInit & {
  token?: string;
};

async function request<T>(
  path: string,
  schema: { parse: (value: unknown) => T },
  init?: RequestInitExtended,
): Promise<T> {
  const headers = new Headers(init?.headers);

  headers.set("Content-Type", "application/json");

  if (init?.token) {
    headers.set("Authorization", `Bearer ${init.token}`);
  }

  const response = await fetch(`${publicEnv.NEXT_PUBLIC_API_BASE_URL}${path}`, {
    ...init,
    headers,
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json?.error?.message ?? "Something went wrong.");
  }

  return schema.parse(json);
}

export const api = {
  async getCategories() {
    if (isMockMode) return mockGetCategories();
    return request("/api/categories", categoriesResponseSchema);
  },

  async getTeaser() {
    if (isMockMode) return mockGetTeaser();
    return request("/api/teaser", teaserResponseSchema);
  },

  async createPersonalizedTeaser(payload: PersonalizedTeaserRequest) {
    const body = personalizedTeaserRequestSchema.parse(payload);

    if (isMockMode) return mockCreatePersonalizedTeaser(body);

    return request("/api/teaser/personalized", personalizedTeaserResponseSchema, {
      method: "POST",
      body: JSON.stringify(body),
    });
  },

  async signup(payload: { email: string; password: string }) {
    if (isMockMode) return mockSignup();

    return request("/api/auth/signup", authResponseSchema, {
      method: "POST",
      body: JSON.stringify(payload),
    });
  },

  async login(payload: { email: string; password: string }) {
    if (isMockMode) return mockLogin();

    return request("/api/auth/login", authResponseSchema, {
      method: "POST",
      body: JSON.stringify(payload),
    });
  },

  async getUser(token?: string) {
    if (isMockMode) return mockGetUser();

    return request("/api/user/me", userSchema, { token });
  },

  async getPreferences(token?: string) {
    if (isMockMode) return mockGetPreferences();

    return request("/api/preferences", preferenceSchema, { token });
  },

  async savePreferences(payload: unknown, token?: string) {
    if (isMockMode) return mockSavePreferences(payload);

    return request("/api/preferences", preferenceSchema, {
      method: "PATCH",
      body: JSON.stringify(payload),
      token,
    });
  },

  async getNotificationPreferences(token?: string) {
    if (isMockMode) return mockGetNotificationPreferences();

    return request(
      "/api/notifications/preferences",
      notificationPreferencesSchema,
      { token },
    );
  },

  async getBillingStatus(token?: string) {
    if (isMockMode) return mockGetBillingStatus();

    return request("/api/billing/status", billingStatusSchema, { token });
  },
};
