import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { getImageBySlot } from "@/content/image-library";
import { EditorialImageBlock } from "@/components/marketing/editorial-image-block";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function LandingHero() {
  const heroImage = getImageBySlot("landing-hero");
  if (!heroImage) {
    return null;
  }

  return (
    <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-end lg:gap-16">
      <div className="flex flex-col space-y-8">
        <Badge>Premium and performance sweet spots, found locally</Badge>

        <h1 className="max-w-[20ch] text-[2.5rem] font-semibold leading-[1.06] tracking-[-0.045em] text-[color:var(--color-text)] sm:max-w-none sm:text-5xl lg:text-[4rem] lg:leading-[1.02]">
          Skip the worst depreciation.{" "}
          <span className="font-serif italic text-[color:var(--color-accent-soft)]">
            Drive something more special.
          </span>
        </h1>

        <p className="max-w-xl text-base leading-7 text-[color:var(--color-text-muted)] sm:text-lg sm:leading-8">
          Used premium and performance—past the steepest curve—surfaced locally and delivered by email.
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

      <EditorialImageBlock
        entry={heroImage}
        priority
        sizes="(max-width: 1024px) 100vw, 44vw"
        overlay={
          <div className="flex h-full flex-col justify-between p-5 sm:p-6 lg:p-7">
            <div className="flex justify-end">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-text-dim)] backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)] shadow-[0_0_12px_rgba(184,145,70,0.55)]" />
                Vancouver · local hunt
              </div>
            </div>

            <div className="relative mt-8 max-w-[min(100%,380px)] rounded-[20px] border border-white/[0.1] bg-[color:rgba(18,23,34,0.72)] p-4 shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-5">
              <p className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-text-dim)]">
                Expected default
              </p>
              <p className="mt-2 text-lg font-semibold text-white sm:text-xl">New mainstream SUV</p>
              <p className="mt-2 text-sm leading-6 text-[color:var(--color-text-muted)]">
                The obvious choice—before you see what a used sweet spot can deliver.
              </p>
            </div>

            <Card className="relative border-[color:rgba(184,145,70,0.28)] bg-[color:rgba(18,23,34,0.75)] p-0 shadow-[0_28px_70px_rgba(0,0,0,0.4)] backdrop-blur-xl">
              <div className="absolute left-6 top-0 h-px w-[calc(100%-3rem)] bg-gradient-to-r from-transparent via-[color:rgba(184,145,70,0.55)] to-transparent" />
              <CardHeader className="pb-2 pt-6">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-accent-soft)]">
                  Sweet-spot alternative
                </p>
                <CardTitle className="text-xl sm:text-2xl">Performance sedan · used</CardTitle>
                <CardDescription className="text-[color:var(--color-text-muted)]">
                  Sharper drive, more presence—often within the same comfort zone.
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-6">
                <div className="inline-flex rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-[color:var(--color-text-muted)]">
                  Illustrative contrast · not a live listing
                </div>
              </CardContent>
            </Card>
          </div>
        }
      />
    </div>
  );
}
