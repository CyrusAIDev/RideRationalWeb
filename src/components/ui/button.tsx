import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-bg)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[color:var(--color-accent)] px-5 py-3 text-[color:var(--color-bg)] shadow-[0_14px_40px_rgba(184,145,70,0.18)] hover:-translate-y-0.5 hover:bg-[color:var(--color-accent-strong)]",
        secondary:
          "border border-white/12 bg-white/5 px-5 py-3 text-[color:var(--color-text)] hover:-translate-y-0.5 hover:bg-white/8",
        ghost:
          "px-3 py-2 text-[color:var(--color-text-muted)] hover:text-[color:var(--color-text)]",
      },
      size: {
        default: "h-11",
        lg: "h-12 px-6 text-base",
        sm: "h-9 px-4 text-xs",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  ),
);

Button.displayName = "Button";
