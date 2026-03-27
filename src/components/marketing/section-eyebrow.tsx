import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function SectionEyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-[11px] font-medium uppercase tracking-[0.22em] text-[color:var(--color-text-dim)]",
        className,
      )}
    >
      {children}
    </p>
  );
}
