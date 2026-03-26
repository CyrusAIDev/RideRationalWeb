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
    body: "Choose what excites you and how you think about buying—monthly, cash, or both.",
  },
  {
    icon: SlidersHorizontal,
    title: "Set your comfort zone",
    body: "We filter temptation: the point isn’t “cheapest”—it’s the right kind of special for your spend.",
    highlight: true,
  },
  {
    icon: Mail,
    title: "Get the daily shortlist",
    body: "We hunt locally and email the strongest opportunities—clear framing, no marketplace marathon.",
  },
];

export function LandingHowItWorks() {
  return (
    <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
      {steps.map((step, index) => (
        <div
          className={
            step.highlight
              ? "relative overflow-hidden rounded-[24px] border border-[color:rgba(184,145,70,0.32)] bg-[linear-gradient(185deg,rgba(184,145,70,0.12),rgba(11,13,18,0.96))] p-6 shadow-[0_28px_70px_rgba(0,0,0,0.38)] sm:p-7"
              : "rounded-[24px] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(11,13,18,0.94))] p-6 sm:p-7"
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
