import Link from "next/link";
import { ArrowRight, Gauge, Mail, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function HeroShell() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
      <div className="space-y-6">
        <Badge>Premium and performance sweet spots, found locally</Badge>
        <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
          For what you were about to spend anyway, you may be able to drive something far more special.
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-[color:var(--color-text-muted)]">
          RideRational finds used premium and performance cars that are already past the worst depreciation, then emails the strongest local opportunities daily.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/discover">
            <Button size="lg">
              Start with your taste
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/teaser">
            <Button size="lg" variant="secondary">
              See what may be possible
            </Button>
          </Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { icon: Sparkles, label: "Desirable categories" },
            { icon: Gauge, label: "Economics-aware sweet spots" },
            { icon: Mail, label: "Daily email delivery" },
          ].map((item) => (
            <div
              className="rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-sm text-[color:var(--color-text-muted)]"
              key={item.label}
            >
              <item.icon className="mb-3 h-4 w-4 text-[color:var(--color-accent)]" />
              {item.label}
            </div>
          ))}
        </div>
      </div>

      <Card className="relative overflow-hidden p-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(184,145,70,0.24),transparent_55%)]" />
        <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-[linear-gradient(160deg,#1a2230_0%,#0b0d12_80%)] p-6">
          <div className="flex h-full flex-col justify-between">
            <div className="rounded-[20px] border border-white/10 bg-black/15 p-5 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-text-dim)]">
                Expected default
              </p>
              <p className="mt-2 text-2xl font-semibold text-white">
                New mainstream compact SUV
              </p>
              <p className="mt-3 text-sm leading-6 text-[color:var(--color-text-muted)]">
                Predictable. Easy. Familiar. Also the kind of choice many buyers make before they see a more interesting used answer.
              </p>
            </div>

            <Card className="border-[color:rgba(184,145,70,0.28)] bg-[color:rgba(184,145,70,0.08)]">
              <CardHeader>
                <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-accent-soft)]">
                  RideRational sweet spot
                </p>
                <CardTitle>BMW M340i</CardTitle>
                <CardDescription>
                  A more special ownership experience may still sit inside the same broad comfort zone.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="inline-flex rounded-full border border-white/10 px-3 py-1 text-xs text-[color:var(--color-text-muted)]">
                  Vancouver teaser example · details intentionally locked
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Card>
    </div>
  );
}
