import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function LandingPricingTeaser() {
  return (
    <div className="mx-auto max-w-[720px] rounded-[28px] border border-white/[0.09] bg-[color:rgba(18,23,34,0.55)] p-8 text-center shadow-[0_30px_80px_rgba(0,0,0,0.32)] sm:p-10">
      <p className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-text-dim)]">
        Membership
      </p>
      <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
        7-day free trial
      </h2>
      <p className="mx-auto mt-3 max-w-lg text-base leading-7 text-[color:var(--color-text-muted)]">
        Then monthly membership. Value is ongoing curation—not one teaser screen.
      </p>
      <ul className="mx-auto mt-8 max-w-md space-y-3 text-left text-sm leading-6 text-[color:var(--color-text-muted)]">
        <li className="flex gap-2">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[color:var(--color-accent)]" />
          Cancel during trial without theatrics.
        </li>
        <li className="flex gap-2">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[color:var(--color-accent)]" />
          Pricing confirmed before you pay. Trial is where the real shortlist begins.
        </li>
      </ul>
      <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
