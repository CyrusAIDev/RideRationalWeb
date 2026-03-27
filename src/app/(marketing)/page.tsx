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
import { CategoryVisualCard } from "@/components/marketing/category-visual-card";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionEyebrow } from "@/components/marketing/section-eyebrow";
import { getCategoryCardImage } from "@/content/image-library";
import { mockCategories } from "@/mocks/categories";

export default function LandingPage() {
  return (
    <>
      <SectionFrame className="pt-16 sm:pt-20 lg:pt-28">
        <LandingHero />
      </SectionFrame>

      <SectionFrame className="pt-8 lg:pt-12">
        <FadeIn className="space-y-10">
          <div className="max-w-2xl space-y-4">
            <SectionEyebrow>What RideRational does</SectionEyebrow>
            <h2 className="text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
              Email-first concierge. Local hunt. Sweet-spot lanes only.
            </h2>
          </div>
          <LandingProductTruth />
        </FadeIn>
      </SectionFrame>

      <SectionFrame>
        <FadeIn className="space-y-12 lg:space-y-16">
          <div className="max-w-2xl space-y-4">
            <SectionEyebrow>Reframe the default</SectionEyebrow>
            <h2 className="text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
              Boring default vs. sweet-spot used
            </h2>
            <p className="max-w-xl text-base leading-7 text-[color:var(--color-text-muted)]">
              Contrast without miracles—patient buyers sometimes get overlap between taste and the market.
            </p>
          </div>
          <LandingDefaultVsSweet />
        </FadeIn>
      </SectionFrame>

      <SectionFrame>
        <FadeIn>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-20">
            <div className="space-y-5 lg:sticky lg:top-32">
              <SectionEyebrow>Category-led taste</SectionEyebrow>
              <h2 className="text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
                Six lanes. Premium and performance—not “anything used.”
              </h2>
              <p className="max-w-md text-base leading-7 text-[color:var(--color-text-muted)]">
                Recognition over perfection—this is for people who care what they drive.
              </p>
              <Link
                className="inline-flex text-sm font-medium text-[color:var(--color-accent-soft)] underline-offset-4 transition hover:text-white hover:underline"
                href="/discover"
              >
                Begin taste-first discovery →
              </Link>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {mockCategories.categories.map((category) => {
                const image = getCategoryCardImage(category.id);
                if (!image) {
                  return (
                    <LandingCategoryCard
                      description={category.short_description}
                      id={category.id}
                      key={category.id}
                      title={category.label}
                    />
                  );
                }
                return (
                  <CategoryVisualCard
                    description={category.short_description}
                    image={image}
                    key={category.id}
                    title={category.label}
                  />
                );
              })}
            </div>
          </div>
        </FadeIn>
      </SectionFrame>

      <SectionFrame id="how-it-works" className="scroll-mt-28">
        <FadeIn className="space-y-12 lg:space-y-16">
          <div className="max-w-2xl space-y-4">
            <SectionEyebrow>Mechanism</SectionEyebrow>
            <h2 className="text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
              Taste. Comfort zone. Daily email.
            </h2>
            <p className="max-w-xl text-base leading-7 text-[color:var(--color-text-muted)]">
              Not another marketplace tab to babysit.
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

      <SectionFrame className="pb-24 pt-8 lg:pb-36">
        <FadeIn>
          <LandingFinalCta />
        </FadeIn>
      </SectionFrame>
    </>
  );
}
