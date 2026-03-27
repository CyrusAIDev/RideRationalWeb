import Image from "next/image";

import type { ImageLibraryEntry } from "@/content/image-library";
import { resolveImageSrc } from "@/content/image-library";
import { SectionEyebrow } from "@/components/marketing/section-eyebrow";
import { cn } from "@/lib/utils";

function isSvgPath(src: string) {
  return src.endsWith(".svg");
}

function MediaPane({
  label,
  entry,
  tone,
}: {
  label: string;
  entry: ImageLibraryEntry;
  tone: "calm" | "elevated";
}) {
  const desktopSrc = resolveImageSrc(entry, "desktop");
  const mobileSrc = resolveImageSrc(entry, "mobile");

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[24px] border bg-[#0b0d12] shadow-[0_28px_70px_rgba(0,0,0,0.35)]",
        tone === "elevated"
          ? "border-[color:rgba(184,145,70,0.28)]"
          : "border-white/[0.08]",
      )}
    >
      <div className="relative aspect-[16/11] w-full sm:aspect-[21/10] lg:aspect-[16/10]">
        <Image
          alt={entry.alt}
          className="object-cover md:hidden"
          fill
          sizes="100vw"
          src={mobileSrc}
          unoptimized={isSvgPath(mobileSrc)}
        />
        <Image
          alt={entry.alt}
          className="hidden object-cover md:block"
          fill
          sizes="(max-width: 1280px) 45vw, 560px"
          src={desktopSrc}
          unoptimized={isSvgPath(desktopSrc)}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,rgba(11,13,18,0.72)_100%)]"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
          <SectionEyebrow
            className={cn(
              tone === "elevated"
                ? "text-[color:var(--color-accent-soft)]"
                : "text-[color:var(--color-text-dim)]",
            )}
          >
            {label}
          </SectionEyebrow>
        </div>
      </div>
    </div>
  );
}

export function ScenarioSplitMedia({
  benchmarkEntry,
  sweetSpotEntry,
  benchmarkLabel = "Expected default",
  sweetSpotLabel = "Sweet-spot direction",
}: {
  benchmarkEntry: ImageLibraryEntry;
  sweetSpotEntry: ImageLibraryEntry;
  benchmarkLabel?: string;
  sweetSpotLabel?: string;
}) {
  return (
    <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
      <MediaPane entry={benchmarkEntry} label={benchmarkLabel} tone="calm" />
      <MediaPane entry={sweetSpotEntry} label={sweetSpotLabel} tone="elevated" />
    </div>
  );
}
