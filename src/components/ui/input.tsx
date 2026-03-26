import * as React from "react";

import { cn } from "@/lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition focus:border-[color:var(--color-accent)] focus:bg-white/7 placeholder:text-[color:var(--color-text-dim)]",
        className,
      )}
      {...props}
    />
  ),
);

Input.displayName = "Input";
