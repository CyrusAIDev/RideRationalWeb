import { DiscoveryStepCard } from "@/components/discovery/discovery-step-card";
import { CategoryVisualCard } from "@/components/marketing/category-visual-card";
import { EditorialImageBlock } from "@/components/marketing/editorial-image-block";
import { MobileStickyCta, MobileStickyCtaSpacer } from "@/components/marketing/mobile-sticky-cta";
import { SectionEyebrow } from "@/components/marketing/section-eyebrow";
import { SectionFrame } from "@/components/layout/section-frame";
import { Button } from "@/components/ui/button";
import { getCategoryCardImage, getImageBySlot } from "@/content/image-library";
import { mockCategories } from "@/mocks/categories";

export default function DiscoverPage() {
  const ambient = getImageBySlot("discover-flow-ambient");

  return (
    <>
      <SectionFrame className="relative space-y-12 pb-28 sm:pb-24 lg:space-y-16">
        {ambient ? (
          <div className="-mt-4 hidden opacity-90 lg:block lg:max-h-[280px] lg:overflow-hidden">
            <EditorialImageBlock
              className="[&_figcaption]:hidden"
              entry={ambient}
              frameClassName="rounded-[28px]"
              sizes="(max-width: 1280px) 100vw, 1180px"
            />
          </div>
        ) : null}

        <div className="max-w-2xl space-y-4">
          <SectionEyebrow>Taste-first discovery</SectionEyebrow>
          <h1 className="text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
            Start with what excites you.
          </h1>
          <p className="text-base leading-7 text-[color:var(--color-text-muted)]">
            Category first—then how you buy. Monthly questions only arrive after that choice.
          </p>
        </div>

        <DiscoveryStepCard
          description="Pick up to two lanes in MVP—keep the brief honest."
          step={1}
          title="What kind of car excites you?"
          total={4}
        >
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {mockCategories.categories.map((category) => {
              const image = getCategoryCardImage(category.id);
              if (!image) {
                return (
                  <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4 text-sm text-[color:var(--color-text-muted)]" key={category.id}>
                    Missing image manifest entry for {category.id}.
                  </div>
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

          <div className="mt-10 hidden justify-end md:flex">
            <Button disabled size="lg" type="button">
              Continue to purchase mode
            </Button>
          </div>
          <p className="hidden text-right text-xs text-[color:var(--color-text-dim)] md:block">
            Purchase mode step not routed yet—see 14_BUILD_PROGRESS.md.
          </p>
        </DiscoveryStepCard>

        <MobileStickyCtaSpacer />
      </SectionFrame>

      <MobileStickyCta
        primaryDisabled
        footnote="Next step is not routed yet—discovery milestone will wire purchase mode."
        primaryLabel="Continue to purchase mode"
      />
    </>
  );
}
