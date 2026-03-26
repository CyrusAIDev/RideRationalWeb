import Link from "next/link";

import { PageIntro } from "@/components/layout/page-intro";
import { SectionFrame } from "@/components/layout/section-frame";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <SectionFrame className="space-y-8">
      <PageIntro
        eyebrow="Not found"
        title="This route is not part of the current MVP map."
        description="Stick to the approved funnel and authenticated shell while the product foundation is still being built."
      />
      <Link href="/">
        <Button>Return to RideRational</Button>
      </Link>
    </SectionFrame>
  );
}
