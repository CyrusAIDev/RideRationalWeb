import Link from "next/link";
import type { ReactNode } from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function MobileStickyCta({
  primaryHref,
  primaryLabel,
  primaryDisabled,
  secondaryHref,
  secondaryLabel,
  footnote,
  className,
}: {
  primaryHref?: string;
  primaryLabel: string;
  /** When the next funnel step is not routed yet, keep the CTA honest and inert. */
  primaryDisabled?: boolean;
  secondaryHref?: string;
  secondaryLabel?: string;
  footnote?: ReactNode;
  className?: string;
}) {
  const primaryClass = cn(buttonVariants({ variant: "primary", size: "lg" }), "w-full justify-center");

  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-x-0 bottom-0 z-40 md:hidden",
        className,
      )}
    >
      <div className="pointer-events-auto border-t border-white/[0.08] bg-[color:rgba(11,13,18,0.92)] px-4 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-lg flex-col gap-2">
          {primaryHref && !primaryDisabled ? (
            <Link className={primaryClass} href={primaryHref}>
              {primaryLabel}
            </Link>
          ) : (
            <Button className={primaryClass} disabled={primaryDisabled ?? !primaryHref} type="button">
              {primaryLabel}
            </Button>
          )}
          {secondaryHref && secondaryLabel ? (
            <Link
              className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "w-full justify-center")}
              href={secondaryHref}
            >
              {secondaryLabel}
            </Link>
          ) : null}
          {footnote ? <p className="text-center text-xs leading-5 text-[color:var(--color-text-dim)]">{footnote}</p> : null}
        </div>
      </div>
    </div>
  );
}

export function MobileStickyCtaSpacer({ className }: { className?: string }) {
  return <div aria-hidden className={cn("h-28 md:hidden", className)} />;
}
