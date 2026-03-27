import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionEyebrow } from "@/components/marketing/section-eyebrow";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function LandingFinalCta() {
  return (
    <div className="space-y-8 text-center">
      <SectionEyebrow className="mx-auto max-w-md">Daily sweet-spot picks</SectionEyebrow>
      <p className="font-serif text-xl italic text-[color:var(--color-accent-soft)] sm:text-2xl lg:text-[1.75rem]">
        Skip the worst depreciation. Get the car you actually want.
      </p>
      <p className="mx-auto max-w-lg text-base leading-7 text-[color:var(--color-text-muted)]">
        Tell us what excites you and what feels comfortable—we hunt the strongest local matches and email them.
      </p>
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
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
