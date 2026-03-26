import { cn } from "@/lib/utils";

export function Badge({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[color:rgba(184,145,70,0.28)] bg-[color:rgba(184,145,70,0.12)] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--color-accent-soft)]",
        className,
      )}
    >
      {children}
    </span>
  );
}
