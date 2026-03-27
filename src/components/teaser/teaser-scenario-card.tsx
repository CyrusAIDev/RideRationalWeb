import { LockKeyhole } from "lucide-react";

import { ProofStatStrip } from "@/components/marketing/proof-stat-strip";
import { SectionEyebrow } from "@/components/marketing/section-eyebrow";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function TeaserScenarioCard({
  benchmark,
  sweetSpot,
  narrative,
  opportunityCount,
  showVehicleCards = true,
}: {
  benchmark: string;
  sweetSpot: string;
  narrative: string;
  opportunityCount: number;
  showVehicleCards?: boolean;
}) {
  return (
    <div className="space-y-10">
      {showVehicleCards ? (
        <div className="grid gap-5 lg:grid-cols-2 lg:gap-8">
          <Card className="h-full border-white/[0.08] bg-[color:rgba(18,23,34,0.45)]">
            <CardHeader className="space-y-3">
              <Badge className="border-white/15 bg-white/[0.06] text-[color:var(--color-text-dim)]">
                Expected default
              </Badge>
              <CardTitle className="text-2xl">{benchmark}</CardTitle>
              <CardDescription>The obvious lane—often responsible, emotionally flat.</CardDescription>
            </CardHeader>
          </Card>

          <Card className="h-full border-[color:rgba(184,145,70,0.28)] bg-[color:rgba(18,23,34,0.55)] shadow-[0_28px_70px_rgba(0,0,0,0.35)]">
            <CardHeader className="space-y-3">
              <Badge className="border-[color:rgba(184,145,70,0.35)] bg-[color:rgba(184,145,70,0.08)] text-[color:var(--color-accent-soft)]">
                RideRational sweet spot
              </Badge>
              <CardTitle className="text-2xl">{sweetSpot}</CardTitle>
              <CardDescription>{narrative}</CardDescription>
            </CardHeader>
          </Card>
        </div>
      ) : (
        <Card className="border-white/[0.08] bg-[color:rgba(18,23,34,0.45)]">
          <CardHeader className="space-y-3">
            <Badge className="border-white/15 bg-white/[0.06] text-[color:var(--color-text-dim)]">Why this is interesting</Badge>
            <CardTitle className="font-serif text-2xl italic text-[color:var(--color-accent-soft)] sm:text-[1.65rem]">
              {sweetSpot}
              <span className="mt-2 block font-sans text-base font-normal not-italic text-[color:var(--color-text-muted)]">
                vs. {benchmark}
              </span>
            </CardTitle>
            <CardDescription className="text-base leading-7 text-[color:var(--color-text-muted)]">
              {narrative}
            </CardDescription>
          </CardHeader>
        </Card>
      )}

      <div className="space-y-4">
        <SectionEyebrow>Local signal</SectionEyebrow>
        <ProofStatStrip
          items={[
            {
              label: "Curated possibilities nearby",
              value: String(opportunityCount),
              hint: "Illustrative count—deeper match detail begins in trial.",
            },
          ]}
        />
      </div>

      <div className="space-y-3">
        <SectionEyebrow>Locked in trial</SectionEyebrow>
        <div className="grid gap-3 sm:grid-cols-2">
          {[1, 2, 3, 4].map((item) => (
            <div
              className="flex items-center gap-3 rounded-2xl border border-white/8 bg-[color:rgba(18,23,34,0.4)] px-4 py-3 text-sm text-[color:var(--color-text-muted)] blur-[1px]"
              key={item}
            >
              <LockKeyhole className="h-4 w-4 shrink-0 text-[color:var(--color-accent)]" aria-hidden />
              Match preview · locked
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
