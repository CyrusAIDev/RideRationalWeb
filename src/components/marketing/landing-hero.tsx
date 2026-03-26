import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function LandingHero() {
  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:items-end lg:gap-12">
      <div className="flex flex-col space-y-6">
        <Badge>Premium and performance sweet spots, found locally</Badge>

        <h1 className="max-w-[22ch] text-[2.5rem] font-semibold leading-[1.06] tracking-[-0.045em] text-[color:var(--color-text)] sm:max-w-none sm:text-5xl lg:text-[4rem] lg:leading-[1.02]">
          For what you were about to spend anyway, you may be able to drive something{" "}
          <span className="font-serif italic text-[color:var(--color-accent-soft)]">
            far more special
          </span>
          .
        </h1>

        <p className="max-w-2xl text-base leading-7 text-[color:var(--color-text-muted)] sm:text-lg sm:leading-8">
          RideRational finds used premium and performance cars that are already past the worst
          depreciation, then emails the strongest local opportunities daily.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            className={cn(buttonVariants({ variant: "primary", size: "lg" }), "justify-center")}
            href="/discover"
          >
            Start with your taste
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
          </Link>
          <Link
            className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "justify-center")}
            href="/#how-it-works"
          >
            See how it works
          </Link>
        </div>
      </div>

      <div>
        <div className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#0b0d12] shadow-[0_40px_100px_rgba(0,0,0,0.45)]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_0%,rgba(184,145,70,0.18),transparent_55%),linear-gradient(165deg,rgba(26,34,48,0.9)_0%,#0b0d12_45%,#080a0e_100%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-1/4 top-1/4 h-[120%] w-[90%] rounded-full bg-[radial-gradient(circle,rgba(143,97,48,0.12),transparent_62%)] blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
            }}
          />

          <div className="relative aspect-[4/5] w-full sm:aspect-[16/11] lg:aspect-[4/5]">
            <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_20%,rgba(250,249,246,0.04)_48%,transparent_72%)]" />

            <div className="relative flex h-full flex-col justify-between p-5 sm:p-6 lg:p-7">
              <div className="flex justify-end">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-text-dim)] backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)] shadow-[0_0_12px_rgba(184,145,70,0.6)]" />
                  Vancouver · local hunt
                </div>
              </div>

              <div className="relative mt-6 max-w-[min(100%,380px)] rounded-[20px] border border-white/[0.1] bg-[color:rgba(18,23,34,0.72)] p-4 shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-5">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-text-dim)]">
                  Expected default
                </p>
                <p className="mt-2 text-lg font-semibold text-white sm:text-xl">New mainstream SUV</p>
                <p className="mt-2 text-sm leading-6 text-[color:var(--color-text-muted)]">
                  The obvious, easy choice—before you see what a used sweet spot can deliver.
                </p>
              </div>

              <Card className="relative border-[color:rgba(184,145,70,0.28)] bg-[linear-gradient(180deg,rgba(184,145,70,0.12),rgba(11,13,18,0.65))] p-0 shadow-[0_28px_70px_rgba(0,0,0,0.4)]">
                <div className="absolute left-6 top-0 h-px w-[calc(100%-3rem)] bg-gradient-to-r from-transparent via-[color:rgba(184,145,70,0.55)] to-transparent" />
                <CardHeader className="pb-2 pt-6">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-accent-soft)]">
                    Sweet-spot alternative
                  </p>
                  <CardTitle className="text-xl sm:text-2xl">Performance sedan · used</CardTitle>
                  <CardDescription className="text-[color:var(--color-text-muted)]">
                    A sharper drive, more presence—often within the same comfort zone you were already
                    considering.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-6">
                  <div className="inline-flex rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs text-[color:var(--color-text-muted)]">
                    Illustrative contrast · not a live listing
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
