import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function LandingTeaserInvite() {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-[color:rgba(184,145,70,0.22)] bg-[linear-gradient(120deg,rgba(184,145,70,0.1),rgba(11,13,18,0.92))] p-8 shadow-[0_32px_90px_rgba(0,0,0,0.35)] sm:p-10 lg:p-12">
      <div className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(184,145,70,0.16),transparent_65%)] blur-2xl" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_35%,rgba(250,249,246,0.03)_50%,transparent_65%)]" />

      <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="max-w-2xl space-y-3">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-accent-soft)]">
            Proof before commitment
          </p>
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl lg:text-[2rem]">
            See what buyers like you may be overlooking.
          </h2>
          <p className="text-base leading-7 text-[color:var(--color-text-muted)]">
            A short, curated preview—built from your taste and comfort zone—so the next step feels
            plausible, not hypothetical.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 pt-2 text-sm text-[color:var(--color-text-dim)]">
            <span className="inline-flex items-center gap-2">
              <span className="h-1 w-8 rounded-full bg-gradient-to-r from-[color:var(--color-accent)] to-transparent" />
              Taste-first
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1 w-8 rounded-full bg-gradient-to-r from-[color:var(--color-accent)] to-transparent opacity-70" />
              Vancouver-first market
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
          <Link
            className={cn(buttonVariants({ variant: "primary", size: "lg" }), "justify-center px-8")}
            href="/discover"
          >
            Start with your taste
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
          </Link>
          <p className="max-w-[280px] text-right text-xs leading-5 text-[color:var(--color-text-dim)] lg:text-right">
            Takes a few minutes. No account required to preview the teaser path.
          </p>
        </div>
      </div>
    </div>
  );
}
