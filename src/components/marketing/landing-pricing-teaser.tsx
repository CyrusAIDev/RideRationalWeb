import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function LandingPricingTeaser() {
  return (
    <div className="mx-auto max-w-[720px] rounded-[28px] border border-white/[0.09] bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(11,13,18,0.96))] p-8 text-center shadow-[0_30px_80px_rgba(0,0,0,0.32)] sm:p-10">
      <p className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-text-dim)]">
        Membership
      </p>
      <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
        Start with a 7-day free trial.
      </h2>
      <p className="mx-auto mt-3 max-w-lg text-base leading-7 text-[color:var(--color-text-muted)]">
        Then continue on a monthly membership. The value is the ongoing daily curation—not one
        teaser screen.
      </p>
      <ul className="mx-auto mt-6 max-w-md space-y-2 text-left text-sm leading-6 text-[color:var(--color-text-muted)]">
        <li className="flex gap-2">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[color:var(--color-accent)]" />
          Cancel anytime during trial; no tricks, no theatrics.
        </li>
        <li className="flex gap-2">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[color:var(--color-accent)]" />
          Pricing details confirmed before you pay—trial is where the real shortlist begins.
        </li>
      </ul>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link className={cn(buttonVariants({ variant: "primary", size: "lg" }), "min-w-[200px] justify-center")} href="/trial">
          Review trial terms
        </Link>
        <Link
          className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "min-w-[200px] justify-center")}
          href="/discover"
        >
          Start with your taste
        </Link>
      </div>
    </div>
  );
}
