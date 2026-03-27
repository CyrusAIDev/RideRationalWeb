import { cn } from "@/lib/utils";

export type ProofStat = {
  label: string;
  value: string;
  hint?: string;
};

export function ProofStatStrip({
  items,
  className,
}: {
  items: readonly ProofStat[];
  className?: string;
}) {
  const gridClass =
    items.length >= 3 ? "sm:grid-cols-3" : items.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1 sm:max-w-xl";

  return (
    <div
      className={cn(
        "grid gap-4 rounded-[24px] border border-white/[0.08] bg-[color:rgba(18,23,34,0.45)] p-5 sm:gap-6 sm:p-6",
        gridClass,
        className,
      )}
    >
      {items.map((item, index) => (
        <div
          className={cn(
            "space-y-1",
            index < items.length - 1
              ? "border-b border-white/[0.06] pb-4 sm:border-b-0 sm:border-r sm:border-white/[0.06] sm:pb-0 sm:pr-6"
              : "",
          )}
          key={item.label}
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[color:var(--color-text-dim)]">
            {item.label}
          </p>
          <p className="text-lg font-semibold tracking-[-0.02em] text-white sm:text-xl">{item.value}</p>
          {item.hint ? (
            <p className="text-sm leading-6 text-[color:var(--color-text-muted)]">{item.hint}</p>
          ) : null}
        </div>
      ))}
    </div>
  );
}
