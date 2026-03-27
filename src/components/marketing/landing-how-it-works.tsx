import type { LucideIcon } from "lucide-react";
import { Mail, SlidersHorizontal, Sparkles } from "lucide-react";

const steps: Array<{
  icon: LucideIcon;
  title: string;
  body: string;
  highlight?: boolean;
}> = [
  {
    icon: Sparkles,
    title: "Start with taste",
    body: "What excites you—and how you buy: monthly, cash, or both.",
  },
  {
    icon: SlidersHorizontal,
    title: "Comfort zone only",
    body: "We filter temptation to your lane—not “cheapest,” but right-kind special.",
    highlight: true,
  },
  {
    icon: Mail,
    title: "Daily shortlist",
    body: "Local hunt, clear framing, in your inbox—no marketplace marathon.",
  },
];

export function LandingHowItWorks() {
  return (
    <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
      {steps.map((step, index) => (
        <div
          className={
            step.highlight
              ? "relative overflow-hidden rounded-[24px] border border-[color:rgba(184,145,70,0.32)] bg-[color:rgba(18,23,34,0.65)] p-6 shadow-[0_28px_70px_rgba(0,0,0,0.38)] sm:p-7"
              : "rounded-[24px] border border-white/[0.08] bg-[color:rgba(18,23,34,0.45)] p-6 sm:p-7"
          }
          key={step.title}
        >
          {step.highlight ? (
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:rgba(184,145,70,0.55)] to-transparent" />
          ) : null}
          <div className="mb-4 flex items-center gap-3">
            <span className="font-serif text-2xl italic tabular-nums text-[color:var(--color-accent-soft)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <step.icon
              aria-hidden
              className={
                step.highlight
                  ? "h-5 w-5 text-[color:var(--color-accent)]"
                  : "h-5 w-5 text-[color:var(--color-text-dim)]"
              }
              strokeWidth={1.5}
            />
          </div>
          <p className="text-lg font-semibold tracking-[-0.02em] text-white">{step.title}</p>
          <p className="mt-2 text-sm leading-6 text-[color:var(--color-text-muted)]">{step.body}</p>
        </div>
      ))}
    </div>
  );
}
