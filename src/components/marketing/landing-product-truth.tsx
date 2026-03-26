import { MapPin, Mail, TrendingDown } from "lucide-react";

const items = [
  {
    icon: MapPin,
    title: "Local listing intelligence",
    body: "We scan the sources that matter in your market and filter for categories where desirability and economics actually meet.",
  },
  {
    icon: TrendingDown,
    title: "Sweet-spot economics",
    body: "Not bargain-bin randoms—used premium and performance windows past the steepest part of the curve.",
  },
  {
    icon: Mail,
    title: "Daily email delivery",
    body: "No endless browsing shell. The strongest matches land in your inbox on a rhythm you control.",
  },
] as const;

export function LandingProductTruth() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item) => (
        <div
          className="group relative overflow-hidden rounded-[24px] border border-white/[0.07] bg-[linear-gradient(165deg,rgba(26,34,48,0.55),rgba(11,13,18,0.92))] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-0.5 hover:border-[color:rgba(184,145,70,0.22)] motion-reduce:transform-none"
          key={item.title}
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <item.icon
            aria-hidden
            className="mb-4 h-5 w-5 text-[color:var(--color-accent)] opacity-90"
            strokeWidth={1.5}
          />
          <p className="text-base font-semibold tracking-[-0.02em] text-white">{item.title}</p>
          <p className="mt-2 text-sm leading-6 text-[color:var(--color-text-muted)]">{item.body}</p>
        </div>
      ))}
    </div>
  );
}
