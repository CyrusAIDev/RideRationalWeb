import { z } from "zod";

const publicEnvSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string().default("http://localhost:4000"),
  NEXT_PUBLIC_MOCK_MODE: z.enum(["true", "false"]).default("true"),
  NEXT_PUBLIC_SHOW_FOUNDER_PROGRESS: z.enum(["true", "false"]).default("true"),
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string().default("pk_test_replace_me"),
});

export const publicEnv = publicEnvSchema.parse({
  NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  NEXT_PUBLIC_MOCK_MODE: process.env.NEXT_PUBLIC_MOCK_MODE,
  NEXT_PUBLIC_SHOW_FOUNDER_PROGRESS:
    process.env.NEXT_PUBLIC_SHOW_FOUNDER_PROGRESS,
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
});

export const isMockMode = publicEnv.NEXT_PUBLIC_MOCK_MODE === "true";
