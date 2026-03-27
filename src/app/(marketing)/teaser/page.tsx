import Link from "next/link";

import { SectionFrame } from "@/components/layout/section-frame";
import { ScenarioSplitMedia } from "@/components/marketing/scenario-split-media";
import { SectionEyebrow } from "@/components/marketing/section-eyebrow";
import { MobileStickyCta, MobileStickyCtaSpacer } from "@/components/marketing/mobile-sticky-cta";
import { TeaserScenarioCard } from "@/components/teaser/teaser-scenario-card";
import { Button } from "@/components/ui/button";
import { getImageById, getImageBySlot } from "@/content/image-library";
import { mockTeaser } from "@/mocks/teaser";

export default function TeaserPage() {
  const scenario = mockTeaser.scenarios[0];
  const benchmarkVisual = getImageBySlot("teaser-benchmark") ?? getImageById("scenario-benchmark-visual");
  const sweetVisual = getImageBySlot("teaser-sweet-spot") ?? getImageById("scenario-sweet-spot-visual");

  return (
    <>
      <SectionFrame className="space-y-12 pb-28 sm:space-y-16 sm:pb-24 sm:pt-16 lg:space-y-20 lg:pb-24 lg:pt-20">
        <header className="max-w-3xl space-y-4">
          <SectionEyebrow>Proof of possibility</SectionEyebrow>
          <h1 className="text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            Buyers like you may be overlooking something much more interesting.
          </h1>
          <p className="max-w-2xl text-base leading-7 text-[color:var(--color-text-muted)]">
            Curated preview—not the full daily shortlist. Trial is where ongoing curation begins.
          </p>
        </header>

        {benchmarkVisual && sweetVisual ? (
          <ScenarioSplitMedia
            benchmarkEntry={benchmarkVisual}
            benchmarkLabel="Expected default"
            sweetSpotEntry={sweetVisual}
            sweetSpotLabel="Sweet-spot direction"
          />
        ) : null}

        <TeaserScenarioCard
          benchmark={scenario.default_benchmark.vehicle_name}
          narrative={scenario.narrative}
          opportunityCount={scenario.local_opportunity_count}
          showVehicleCards={!(benchmarkVisual && sweetVisual)}
          sweetSpot={scenario.sweet_spot_alternative.vehicle_name}
        />

        <footer className="flex flex-col gap-4 border-t border-white/[0.06] pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-6 text-[color:var(--color-text-muted)]">
            Daily emails only after preferences are set. No on-site browsing shell in MVP.
          </p>
          <div className="hidden flex-col gap-3 sm:flex sm:flex-row sm:justify-end">
            <Link href="/signup">
              <Button className="w-full sm:w-auto" size="lg">
                Start your free trial
              </Button>
            </Link>
            <Link href="/discover">
              <Button className="w-full sm:w-auto" size="lg" variant="secondary">
                Refine the brief
              </Button>
            </Link>
          </div>
        </footer>
        <MobileStickyCtaSpacer />
      </SectionFrame>

      <MobileStickyCta
        footnote="Trial unlocks the daily shortlist—not this preview alone."
        primaryHref="/signup"
        primaryLabel="Start your free trial"
        secondaryHref="/discover"
        secondaryLabel="Refine the brief"
      />
    </>
  );
}
