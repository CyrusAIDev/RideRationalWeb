import Link from "next/link";

import { HeroShell } from "@/components/marketing/hero-shell";
import { CategoryCard } from "@/components/marketing/category-card";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionFrame } from "@/components/layout/section-frame";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mockCategories } from "@/mocks/categories";

export default function LandingPage() {
  return (
    <>
      <SectionFrame className="pt-14 sm:pt-18 lg:pt-24">
        <HeroShell />
      </SectionFrame>

      <SectionFrame className="pt-0">
        <FadeIn className="grid gap-4 md:grid-cols-3">
          {[
            "Local listing hunting across the right sources",
            "Sweet-spot thinking grounded in ownership economics",
            "Daily email delivery instead of endless browsing",
          ].map((item) => (
            <div
              className="rounded-[24px] border border-white/8 bg-white/4 px-5 py-5 text-sm leading-6 text-[color:var(--color-text-muted)]"
              key={item}
            >
              {item}
            </div>
          ))}
        </FadeIn>
      </SectionFrame>

      <SectionFrame>
        <FadeIn className="space-y-6">
          <div className="max-w-3xl space-y-4">
            <Badge>Category-led discovery</Badge>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              Not every smart used choice is special. RideRational is built for the overlap.
            </h2>
            <p className="text-base leading-7 text-[color:var(--color-text-muted)]">
              The launch product is intentionally narrow: desirable categories, comfort-zone-aware inputs, teaser proof before signup, then daily email delivery.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {mockCategories.categories.map((category) => (
              <CategoryCard
                description={category.short_description}
                key={category.id}
                title={category.label}
              />
            ))}
          </div>
        </FadeIn>
      </SectionFrame>

      <SectionFrame className="pt-0">
        <FadeIn className="rounded-[28px] border border-[color:rgba(184,145,70,0.2)] bg-[color:rgba(184,145,70,0.08)] p-8 sm:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl space-y-4">
              <Badge>Foundation state</Badge>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                The premium landing page build comes next.
              </h2>
              <p className="text-base leading-7 text-[color:var(--color-text-muted)]">
                This route is a polished foundation shell that already reflects the product thesis, brand system, and information hierarchy without overcommitting to final copy too early.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/discover">
                <Button size="lg">Review discovery flow</Button>
              </Link>
              <Link href="/founder/progress">
                <Button size="lg" variant="secondary">
                  Open founder progress
                </Button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </SectionFrame>
    </>
  );
}
