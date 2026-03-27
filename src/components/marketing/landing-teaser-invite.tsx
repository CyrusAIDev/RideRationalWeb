import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { getImageBySlot } from "@/content/image-library";
import { EditorialImageBlock } from "@/components/marketing/editorial-image-block";
import { SectionEyebrow } from "@/components/marketing/section-eyebrow";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function LandingTeaserInvite() {
  const panel = getImageBySlot("landing-teaser-invite");

  return (
    <div className="grid gap-10 overflow-hidden rounded-[28px] border border-[color:rgba(184,145,70,0.22)] bg-[color:rgba(18,23,34,0.55)] p-6 shadow-[0_32px_90px_rgba(0,0,0,0.35)] sm:p-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-12 lg:p-10">
      <div className="space-y-5">
        <SectionEyebrow className="text-[color:var(--color-accent-soft)]">Proof before commitment</SectionEyebrow>
        <h2 className="max-w-xl text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl lg:text-[2rem] lg:leading-snug">
          See what buyers like you may be overlooking.
        </h2>
        <p className="max-w-xl text-base leading-7 text-[color:var(--color-text-muted)]">
          A curated preview from taste + comfort zone. Plausible—not hypothetical.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            className={cn(buttonVariants({ variant: "primary", size: "lg" }), "justify-center px-8")}
            href="/discover"
          >
            Start with your taste
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
          </Link>
          <p className="text-sm text-[color:var(--color-text-dim)]">
            ~3 minutes · no account for the preview path
          </p>
        </div>
      </div>

      {panel ? (
        <EditorialImageBlock
          caption="Teaser invites curiosity; the trial delivers ongoing curation."
          entry={panel}
          sizes="(max-width: 1024px) 100vw, 480px"
        />
      ) : null}
    </div>
  );
}
