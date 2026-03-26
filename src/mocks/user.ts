import type { AuthResponse, BillingStatus, User } from "@/lib/api/contracts";

export const mockUser: User = {
  id: "usr_123",
  email: "driver@example.com",
  first_name: "Alex",
  market: "vancouver",
  subscription_status: "trialing",
  trial_ends_at: "2026-04-01T18:00:00.000Z",
  created_at: "2026-03-25T18:00:00.000Z",
};

export const mockAuthResponse: AuthResponse = {
  token: "mock-jwt-token",
  user: mockUser,
};

export const mockBillingStatus: BillingStatus = {
  subscription_status: "trialing",
  plan_name: "RideRational Membership",
  trial_ends_at: "2026-04-01T18:00:00.000Z",
  renews_at: "2026-04-01T18:00:00.000Z",
  price_cad_monthly: 29,
};
