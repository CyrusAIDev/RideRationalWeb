import { Mail, Settings2, Sparkles } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function AccountShell() {
  return (
    <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
      <Card>
        <CardHeader>
          <CardTitle>Account state</CardTitle>
          <CardDescription>
            Trial active. Your profile is ready for daily Vancouver sweet-spot picks.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-[color:var(--color-text-muted)]">
          <div className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/4 p-4">
            <Sparkles className="mt-0.5 h-4 w-4 text-[color:var(--color-accent)]" />
            <p>Your product value arrives by email. This shell is for confirming state and editing preferences, not browsing deals on-site.</p>
          </div>
          <div className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/4 p-4">
            <Mail className="mt-0.5 h-4 w-4 text-[color:var(--color-accent)]" />
            <p>Daily delivery is currently set for mornings. Manage timing and categories in settings.</p>
          </div>
          <div className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/4 p-4">
            <Settings2 className="mt-0.5 h-4 w-4 text-[color:var(--color-accent)]" />
            <p>Billing and preference controls are ready to connect to the live backend once it exists.</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>What happens next</CardTitle>
          <CardDescription>
            The MVP product loop is intentionally simple and email-first.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "You set the brief",
              body: "Categories, comfort zone, and delivery preferences.",
            },
            {
              title: "RideRational does the hunting",
              body: "Local listing intake, sweet-spot logic, and match ranking later map to this shell.",
            },
            {
              title: "Daily picks arrive by email",
              body: "One hero deal plus supporting matches, with just enough rationale to act fast.",
            },
          ].map((item) => (
            <div className="rounded-2xl border border-white/8 bg-white/4 p-4" key={item.title}>
              <p className="font-medium text-white">{item.title}</p>
              <p className="mt-2 text-sm leading-6 text-[color:var(--color-text-muted)]">
                {item.body}
              </p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
