"use client";

import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { api } from "@/lib/api/client";
import { purchaseModeSchema, vehicleCategorySchema } from "@/lib/api/contracts";

const setupSchema = z
  .object({
    category_ids: z.array(vehicleCategorySchema).min(1, "Choose at least one category."),
    purchase_mode: purchaseModeSchema,
    monthly_budget_target_cad: z.coerce.number().positive().optional(),
    monthly_budget_ceiling_cad: z.coerce.number().positive().optional(),
    cash_budget_target_cad: z.coerce.number().positive().optional(),
    cash_budget_ceiling_cad: z.coerce.number().positive().optional(),
    location_market: z.string().min(1),
    email_frequency: z.enum(["daily", "weekdays", "pause"]),
  })
  .superRefine((value, ctx) => {
    if (value.purchase_mode === "monthly" || value.purchase_mode === "both") {
      if (!value.monthly_budget_target_cad || !value.monthly_budget_ceiling_cad) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["monthly_budget_target_cad"],
          message: "Add your monthly comfort zone.",
        });
      }
    }

    if (value.purchase_mode === "cash" || value.purchase_mode === "both") {
      if (!value.cash_budget_target_cad || !value.cash_budget_ceiling_cad) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["cash_budget_target_cad"],
          message: "Add your cash comfort zone.",
        });
      }
    }
  });

type SetupValues = z.infer<typeof setupSchema>;

export function PreferenceSetupForm() {
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const categoriesQuery = useQuery({
    queryKey: ["categories"],
    queryFn: () => api.getCategories(),
  });

  const form = useForm<SetupValues>({
    resolver: zodResolver(setupSchema),
    defaultValues: {
      category_ids: ["performance-sedan"],
      purchase_mode: "monthly",
      monthly_budget_target_cad: 850,
      monthly_budget_ceiling_cad: 1000,
      location_market: "vancouver",
      email_frequency: "daily",
    },
  });

  const purchaseMode = useWatch({ control: form.control, name: "purchase_mode" });
  const categoryIds = useWatch({ control: form.control, name: "category_ids" }) ?? [];
  const showMonthly = purchaseMode === "monthly" || purchaseMode === "both";
  const showCash = purchaseMode === "cash" || purchaseMode === "both";

  const onSubmit = form.handleSubmit(async (values) => {
    setServerMessage(null);
    await api.savePreferences(values);
    setServerMessage("Preferences saved in mock mode. Daily email delivery is now configurable.");
  });

  const categories = useMemo(
    () => categoriesQuery.data?.categories ?? [],
    [categoriesQuery.data?.categories],
  );

  return (
    <div className="grid gap-6 xl:grid-cols-[0.82fr_1.18fr]">
      <Card>
        <CardHeader>
          <CardTitle>Lightweight setup</CardTitle>
          <CardDescription>
            Confirm what excites you, where your comfort zone sits, and how often we should send strong local matches.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm leading-6 text-[color:var(--color-text-muted)]">
          <p>
            This is not a long onboarding. We only collect what the MVP needs to send better daily email picks.
          </p>
          <p>
            Budget logic is intentionally framed as comfort zone, not maximum approval power.
          </p>
          <p>
            The product remains email-first. No dashboard browsing is introduced here.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Preference profile</CardTitle>
          <CardDescription>
            Built against the planned API contract. Mock mode keeps the shape stable while backend services catch up.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6" onSubmit={onSubmit}>
            <div>
              <Label>Categories</Label>
              <div className="grid gap-3 sm:grid-cols-2">
                {categories.map((category) => {
                  const selected = categoryIds.includes(category.id);

                  return (
                    <button
                      className={[
                        "rounded-2xl border px-4 py-4 text-left transition",
                        selected
                          ? "border-[color:rgba(184,145,70,0.35)] bg-[color:rgba(184,145,70,0.1)]"
                          : "border-white/10 bg-white/4 hover:border-white/20",
                      ].join(" ")}
                      key={category.id}
                      onClick={(event) => {
                        event.preventDefault();
                        const current = form.getValues("category_ids");
                        form.setValue(
                          "category_ids",
                          selected
                            ? current.filter((value) => value !== category.id)
                            : [...current, category.id].slice(-2),
                          { shouldValidate: true },
                        );
                      }}
                      type="button"
                    >
                      <p className="font-medium text-white">{category.label}</p>
                      <p className="mt-1 text-sm text-[color:var(--color-text-muted)]">
                        {category.short_description}
                      </p>
                    </button>
                  );
                })}
              </div>
              {form.formState.errors.category_ids ? (
                <p className="mt-2 text-sm text-[color:var(--color-error)]">
                  {form.formState.errors.category_ids.message}
                </p>
              ) : null}
            </div>

            <div>
              <Label>How do you think about buying?</Label>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ["monthly", "Monthly budget"],
                  ["cash", "Cash budget"],
                  ["both", "Both"],
                ].map(([value, label]) => (
                  <button
                    className={[
                      "rounded-2xl border px-4 py-4 text-left text-sm transition",
                      purchaseMode === value
                        ? "border-[color:rgba(184,145,70,0.35)] bg-[color:rgba(184,145,70,0.1)] text-white"
                        : "border-white/10 bg-white/4 text-[color:var(--color-text-muted)] hover:border-white/20",
                    ].join(" ")}
                    key={value}
                    onClick={(event) => {
                      event.preventDefault();
                      form.setValue("purchase_mode", value as SetupValues["purchase_mode"], {
                        shouldValidate: true,
                      });
                    }}
                    type="button"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {showMonthly ? (
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="monthly_target">Monthly target (CAD)</Label>
                  <Input id="monthly_target" type="number" {...form.register("monthly_budget_target_cad")} />
                </div>
                <div>
                  <Label htmlFor="monthly_ceiling">Monthly ceiling (CAD)</Label>
                  <Input id="monthly_ceiling" type="number" {...form.register("monthly_budget_ceiling_cad")} />
                </div>
              </div>
            ) : null}

            {showCash ? (
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="cash_target">Cash target (CAD)</Label>
                  <Input id="cash_target" type="number" {...form.register("cash_budget_target_cad")} />
                </div>
                <div>
                  <Label htmlFor="cash_ceiling">Cash ceiling (CAD)</Label>
                  <Input id="cash_ceiling" type="number" {...form.register("cash_budget_ceiling_cad")} />
                </div>
              </div>
            ) : null}

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="location_market">Market</Label>
                <Input id="location_market" {...form.register("location_market")} />
              </div>
              <div>
                <Label htmlFor="email_frequency">Email frequency</Label>
                <select
                  className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition focus:border-[color:var(--color-accent)]"
                  id="email_frequency"
                  {...form.register("email_frequency")}
                >
                  <option value="daily">Daily</option>
                  <option value="weekdays">Weekdays</option>
                  <option value="pause">Pause</option>
                </select>
              </div>
            </div>

            {serverMessage ? (
              <div className="rounded-2xl border border-[color:rgba(79,138,106,0.28)] bg-[color:rgba(79,138,106,0.12)] px-4 py-3 text-sm text-white">
                {serverMessage}
              </div>
            ) : null}

            <Button size="lg" type="submit">
              {form.formState.isSubmitting ? "Saving..." : "Save profile"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
