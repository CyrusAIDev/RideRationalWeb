import type { ReactNode } from "react";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const tones: Record<string, string> = {
  "sports-car":
    "bg-[radial-gradient(ellipse_120%_100%_at_20%_0%,rgba(184,145,70,0.22),transparent_55%),linear-gradient(145deg,#1a2230_0%,#0b0d12_100%)]",
  "performance-sedan":
    "bg-[radial-gradient(ellipse_100%_80%_at_80%_20%,rgba(101,114,137,0.35),transparent_50%),linear-gradient(155deg,#121722_0%,#0b0d12_100%)]",
  "hot-hatch":
    "bg-[radial-gradient(circle_at_30%_70%,rgba(184,145,70,0.18),transparent_45%),linear-gradient(160deg,#1a2230_0%,#0b0d12_100%)]",
  "luxury-suv":
    "bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(143,97,48,0.2),transparent_55%),linear-gradient(175deg,#121722_0%,#080a0e_100%)]",
  "rugged-luxury":
    "bg-[radial-gradient(ellipse_90%_70%_at_10%_50%,rgba(79,138,106,0.14),transparent_50%),linear-gradient(165deg,#1a2230_0%,#0b0d12_100%)]",
  "premium-gt":
    "bg-[radial-gradient(ellipse_100%_90%_at_60%_0%,rgba(184,145,70,0.16),transparent_52%),linear-gradient(185deg,#121722_0%,#0b0d12_100%)]",
};

function Silhouette({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute bottom-3 right-3 h-14 w-28 opacity-[0.22] sm:h-16 sm:w-32",
        className,
      )}
    >
      <svg className="h-full w-full text-white" fill="currentColor" viewBox="0 0 120 48">
        <path d="M8 32c0-6 4-10 10-10h2l4-8h32l6 8h8c7 0 12 5 12 12v4H8v-6zm16-18h48l-3-4H27l-3 4z" />
      </svg>
    </div>
  );
}

export function LandingCategoryCard({
  id,
  title,
  description,
  accent,
}: {
  id: string;
  title: string;
  description: string;
  accent?: ReactNode;
}) {
  const bg = tones[id] ?? tones["performance-sedan"];

  return (
    <Card className="group relative h-full overflow-hidden border-white/[0.08] p-0 transition duration-300 hover:-translate-y-1 hover:border-[color:rgba(184,145,70,0.28)] motion-reduce:transform-none">
      <div className={cn("relative h-28 border-b border-white/[0.06] sm:h-32", bg)}>
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(11,13,18,0.85),transparent_62%)]" />
        <Silhouette />
        {accent ? (
          <div className="absolute left-4 top-4 text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-text-dim)]">
            {accent}
          </div>
        ) : null}
      </div>
      <CardHeader className="p-5 sm:p-6">
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
