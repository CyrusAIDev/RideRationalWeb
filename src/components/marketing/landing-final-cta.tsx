import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function LandingFinalCta() {
  return (
    <div className="text-center">
      <p className="font-serif text-xl italic text-[color:var(--color-accent-soft)] sm:text-2xl">
        Skip the worst depreciation. Get the car you actually want.
      </p>
      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[color:var(--color-text-muted)]">
        Tell us what excites you and what feels comfortable to spend—we’ll hunt the strongest local
        sweet spots and email them daily.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
        <Link
          className={cn(buttonVariants({ variant: "primary", size: "lg" }), "min-w-[220px] justify-center")}
          href="/discover"
        >
          Start with your taste
          <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
        </Link>
        <Link
          className="text-sm font-medium text-[color:var(--color-text-muted)] underline-offset-4 transition hover:text-white hover:underline"
          href="/#how-it-works"
        >
          See how it works
        </Link>
      </div>
    </div>
  );
}
