import Link from "next/link";

import { SectionFrame } from "@/components/layout/section-frame";
import { LandingCategoryCard } from "@/components/marketing/landing-category-card";
import { LandingDefaultVsSweet } from "@/components/marketing/landing-default-vs-sweet";
import { LandingFinalCta } from "@/components/marketing/landing-final-cta";
import { LandingHero } from "@/components/marketing/landing-hero";
import { LandingHowItWorks } from "@/components/marketing/landing-how-it-works";
import { LandingPricingTeaser } from "@/components/marketing/landing-pricing-teaser";
import { LandingProductTruth } from "@/components/marketing/landing-product-truth";
import { LandingTeaserInvite } from "@/components/marketing/landing-teaser-invite";
import { LandingTrust } from "@/components/marketing/landing-trust";
import { FadeIn } from "@/components/motion/fade-in";
import { Badge } from "@/components/ui/badge";
import { mockCategories } from "@/mocks/categories";

export default function LandingPage() {
  return (
    <>
      <SectionFrame className="pt-14 sm:pt-16 lg:pt-24">
        <LandingHero />
      </SectionFrame>

      <SectionFrame className="pt-0 lg:py-20">
        <FadeIn>
          <p className="mb-6 max-w-3xl text-lg leading-8 text-[color:var(--color-text-muted)] sm:text-xl sm:leading-8">
            <span className="text-[color:var(--color-text)]">RideRational</span> is an email-first
            concierge for desirable used cars—grounded in local listings, sweet-spot economics, and
            categories where the emotional payoff is real.
          </p>
          <LandingProductTruth />
        </FadeIn>
      </SectionFrame>

      <SectionFrame>
        <FadeIn className="space-y-10">
          <div className="max-w-3xl space-y-4">
            <Badge>Reframe the default</Badge>
            <h2 className="text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
              Boring default vs. sweet-spot used
            </h2>
            <p className="text-base leading-7 text-[color:var(--color-text-muted)] sm:text-lg sm:leading-8">
              The hook is contrast—without turning your life into a spreadsheet. We’re not promising
              miracles; we’re hunting for overlap between what you want and what the market sometimes
              hands to patient buyers.
            </p>
          </div>
          <LandingDefaultVsSweet />
        </FadeIn>
      </SectionFrame>

      <SectionFrame className="texture-overlay">
        <FadeIn>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start lg:gap-14">
            <div className="space-y-4 lg:sticky lg:top-28">
              <Badge>Category-led taste</Badge>
              <h2 className="text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
                Built for premium and performance lanes—not “anything used.”
              </h2>
              <p className="text-base leading-7 text-[color:var(--color-text-muted)] sm:text-lg sm:leading-8">
                Six starting categories. You can refine later—the goal here is recognition: this is a
                product for people who care what they drive.
              </p>
              <Link
                className="inline-flex text-sm font-medium text-[color:var(--color-accent-soft)] underline-offset-4 transition hover:text-white hover:underline"
                href="/discover"
              >
                Begin taste-first discovery →
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {mockCategories.categories.map((category) => (
                <LandingCategoryCard
                  description={category.short_description}
                  id={category.id}
                  key={category.id}
                  title={category.label}
                />
              ))}
            </div>
          </div>
        </FadeIn>
      </SectionFrame>

      <SectionFrame id="how-it-works" className="scroll-mt-28">
        <FadeIn className="space-y-10">
          <div className="max-w-3xl space-y-4">
            <Badge>How it works</Badge>
            <h2 className="text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
              Aspiration first. Proof next. Email as the habit.
            </h2>
            <p className="text-base leading-7 text-[color:var(--color-text-muted)] sm:text-lg sm:leading-8">
              A tight path—so you never mistake this for another marketplace tab you have to babysit.
            </p>
          </div>
          <LandingHowItWorks />
        </FadeIn>
      </SectionFrame>

      <SectionFrame>
        <FadeIn>
          <LandingTeaserInvite />
        </FadeIn>
      </SectionFrame>

      <SectionFrame>
        <FadeIn>
          <LandingTrust />
        </FadeIn>
      </SectionFrame>

      <SectionFrame id="pricing" className="scroll-mt-28">
        <FadeIn>
          <LandingPricingTeaser />
        </FadeIn>
      </SectionFrame>

      <SectionFrame className="pb-20 pt-8 lg:pb-28">
        <FadeIn>
          <LandingFinalCta />
        </FadeIn>
      </SectionFrame>
    </>
  );
}
