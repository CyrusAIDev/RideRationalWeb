import { BuildProgressPanel } from "@/components/progress/build-progress-panel";
import { PageIntro } from "@/components/layout/page-intro";
import { SectionFrame } from "@/components/layout/section-frame";

export default function FounderProgressPage() {
  return (
    <SectionFrame className="space-y-10">
      <PageIntro
        eyebrow="Founder visibility"
        title="Progress tracking is wired into the repo from day one."
        description="Use this route alongside 14_BUILD_PROGRESS.md and 15_QA_AND_TESTING_GUIDE.md so milestone progress stays visible and the build does not drift into guesswork."
      />
      <BuildProgressPanel />
    </SectionFrame>
  );
}
