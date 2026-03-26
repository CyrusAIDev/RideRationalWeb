import { DiscoveryStepCard } from "@/components/discovery/discovery-step-card";
import { PageIntro } from "@/components/layout/page-intro";
import { SectionFrame } from "@/components/layout/section-frame";
import { CategoryCard } from "@/components/marketing/category-card";
import { Button } from "@/components/ui/button";
import { mockCategories } from "@/mocks/categories";

export default function DiscoverPage() {
  return (
    <SectionFrame className="space-y-10">
      <PageIntro
        eyebrow="Taste-first discovery"
        title="The funnel starts with what excites you."
        description="This placeholder route locks in the correct MVP order: category first, purchase mode second, comfort zone third, Vancouver context last."
      />

      <DiscoveryStepCard
        step={1}
        total={4}
        title="What kind of car excites you?"
        description="The discovery flow should feel personal and desirable before it starts feeling financial."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {mockCategories.categories.map((category) => (
            <CategoryCard
              description={category.short_description}
              key={category.id}
              title={category.label}
            />
          ))}
        </div>

        <div className="mt-6 flex justify-end">
          <Button>Continue to purchase mode</Button>
        </div>
      </DiscoveryStepCard>
    </SectionFrame>
  );
}
