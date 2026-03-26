import { Ban, Calculator, LayoutGrid } from "lucide-react";

const tiles = [
  {
    icon: LayoutGrid,
    title: "Not another endless listing rabbit hole.",
    body: "If you wanted to scroll forever, you would not be here.",
  },
  {
    icon: Calculator,
    title: "Not a generic affordability quiz.",
    body: "Economics matter—but the outcome is still a car you actually want to own.",
  },
  {
    icon: Ban,
    title: "Not a broad marketplace.",
    body: "Narrow categories, local opportunities, and a daily shortlist tuned to your taste.",
  },
] as const;

export function LandingTrust() {
  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-12">
      <div className="space-y-4">
        <p className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-text-dim)]">
          Built for skepticism
        </p>
        <h2 className="text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
          Credible scope. Calm execution.
        </h2>
        <p className="text-base leading-7 text-[color:var(--color-text-muted)]">
          RideRational is intentionally narrow: category-aware matching, comfort-zone-aware inputs,
          and email-first delivery—so the product does the hunting while you stay out of the noise.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
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
