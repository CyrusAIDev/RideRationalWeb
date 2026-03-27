import { Ban, Calculator, LayoutGrid } from "lucide-react";

import { getImageBySlot } from "@/content/image-library";
import { EditorialImageBlock } from "@/components/marketing/editorial-image-block";
import { SectionEyebrow } from "@/components/marketing/section-eyebrow";

const tiles = [
  {
    icon: LayoutGrid,
    title: "Not another listing rabbit hole.",
    body: "Daily picks—tuned to taste—not endless scrolling.",
  },
  {
    icon: Calculator,
    title: "Not a generic affordability quiz.",
    body: "Economics matter; the outcome is still a car you want.",
  },
  {
    icon: Ban,
    title: "Not a broad marketplace.",
    body: "Narrow categories. Local opportunities. Email-first.",
  },
] as const;

export function LandingTrust() {
  const trustImage = getImageBySlot("landing-trust");

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start lg:gap-16">
      <div className="space-y-6">
        <SectionEyebrow>Built for skepticism</SectionEyebrow>
        <h2 className="text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl lg:text-[2rem]">
          Credible scope. Calm execution.
        </h2>
        <p className="max-w-md text-base leading-7 text-[color:var(--color-text-muted)]">
          Narrow promise: category-aware matching, comfort-zone inputs, email delivery.
        </p>
        {trustImage ? (
          <EditorialImageBlock
            className="hidden lg:block"
            entry={trustImage}
            sizes="(max-width: 1280px) 42vw, 520px"
          />
        ) : null}
      </div>

      <div className="grid gap-4">
        {trustImage ? (
          <EditorialImageBlock className="lg:hidden" entry={trustImage} sizes="100vw" />
        ) : null}
        {tiles.map((tile) => (
          <div
            className="flex gap-4 rounded-[20px] border border-white/[0.07] bg-[color:rgba(18,23,34,0.55)] p-5 transition duration-200 hover:border-white/[0.11]"
            key={tile.title}
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.04]">
              <tile.icon aria-hidden className="h-5 w-5 text-[color:var(--color-accent)]" strokeWidth={1.4} />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{tile.title}</p>
              <p className="mt-1 text-sm leading-6 text-[color:var(--color-text-muted)]">{tile.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
