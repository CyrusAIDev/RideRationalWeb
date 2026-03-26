import Link from "next/link";

import { PageIntro } from "@/components/layout/page-intro";
import { SectionFrame } from "@/components/layout/section-frame";
import { TeaserScenarioCard } from "@/components/teaser/teaser-scenario-card";
import { Button } from "@/components/ui/button";
import { mockTeaser } from "@/mocks/teaser";

export default function TeaserPage() {
  const scenario = mockTeaser.scenarios[0];

  return (
    <SectionFrame className="space-y-10">
      <PageIntro
        eyebrow="Proof of possibility"
        title="A teaser should create a real contrast moment without giving the product away."
        description="This MVP surface is intentionally curated. It previews the kind of upgrade RideRational looks for, then pushes the user toward signup and trial for the real daily shortlist."
      />

      <TeaserScenarioCard
        benchmark={scenario.default_benchmark.vehicle_name}
        sweetSpot={scenario.sweet_spot_alternative.vehicle_name}
        narrative={scenario.narrative}
        opportunityCount={scenario.local_opportunity_count}
      />

      <div className="flex flex-col gap-3 sm:flex-row">
        <Link href="/signup">
          <Button size="lg">Start your free trial</Button>
        </Link>
        <Link href="/discover">
          <Button size="lg" variant="secondary">
            Refine the brief
          </Button>
        </Link>
      </div>
    </SectionFrame>
  );
}
