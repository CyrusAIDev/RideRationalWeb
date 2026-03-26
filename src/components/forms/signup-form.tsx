"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { api } from "@/lib/api/client";

const signupSchema = z.object({
  email: z.string().email("Enter a valid email address."),
  password: z.string().min(8, "Use at least 8 characters."),
});

type SignupValues = z.infer<typeof signupSchema>;

export function SignupForm({
  mode = "signup",
}: {
  mode?: "signup" | "login";
}) {
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  const form = useForm<SignupValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "driver@example.com",
      password: "StrongPassword123!",
    },
  });

  const onSubmit = form.handleSubmit(async (values) => {
    setServerMessage(null);

    const result =
      mode === "signup" ? await api.signup(values) : await api.login(values);

    setServerMessage(
      `${mode === "signup" ? "Account" : "Session"} ready in ${
        result.user.market
      } mock mode.`,
    );
  });

  return (
    <Card className="mx-auto w-full max-w-xl">
      <CardHeader>
        <CardTitle>{mode === "signup" ? "Create your account" : "Welcome back"}</CardTitle>
        <CardDescription>
          {mode === "signup"
            ? "Email and password only for launch. Preference setup comes right after."
            : "Sign in to adjust your preferences, trial state, and email delivery settings."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-5" onSubmit={onSubmit}>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" {...form.register("email")} />
            {form.formState.errors.email ? (
              <p className="mt-2 text-sm text-[color:var(--color-error)]">
                {form.formState.errors.email.message}
              </p>
            ) : null}
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" {...form.register("password")} />
            {form.formState.errors.password ? (
              <p className="mt-2 text-sm text-[color:var(--color-error)]">
                {form.formState.errors.password.message}
              </p>
            ) : null}
          </div>

          {serverMessage ? (
            <div className="rounded-2xl border border-[color:rgba(79,138,106,0.28)] bg-[color:rgba(79,138,106,0.12)] px-4 py-3 text-sm text-white">
              {serverMessage}
            </div>
          ) : null}

          <Button className="w-full" size="lg" type="submit">
            {form.formState.isSubmitting
              ? "Working..."
              : mode === "signup"
                ? "Continue to setup"
                : "Sign in"}
          </Button>

          <div className="flex justify-between text-sm text-[color:var(--color-text-muted)]">
            <Link href="/forgot-password" className="transition hover:text-white">
              Forgot password
            </Link>
            <Link
              href={mode === "signup" ? "/login" : "/signup"}
              className="transition hover:text-white"
            >
              {mode === "signup" ? "Already have an account?" : "Need an account?"}
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
