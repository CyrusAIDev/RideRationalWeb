import Image from "next/image";
import type { ReactNode } from "react";

import type { ImageLibraryEntry } from "@/content/image-library";
import { resolveImageSrc } from "@/content/image-library";
import { cn } from "@/lib/utils";

function isSvgPath(src: string) {
  return src.endsWith(".svg");
}

export function EditorialImageBlock({
  entry,
  className,
  frameClassName,
  sizes = "(max-width: 768px) 100vw, 56vw",
  priority = false,
  overlay,
  caption,
}: {
  entry: ImageLibraryEntry;
  className?: string;
  /** Outer wrapper — controls radius, border, shadow */
  frameClassName?: string;
  sizes?: string;
  priority?: boolean;
  overlay?: ReactNode;
  caption?: ReactNode;
}) {
  const desktopSrc = resolveImageSrc(entry, "desktop");
  const mobileSrc = resolveImageSrc(entry, "mobile");

  return (
    <figure className={cn("space-y-3", className)}>
      <div
        className={cn(
          "relative isolate overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#0b0d12] shadow-[0_40px_100px_rgba(0,0,0,0.45)]",
          frameClassName,
        )}
      >
        <div className="relative aspect-[4/5] w-full md:aspect-[16/10] lg:aspect-[5/4]">
          <Image
            alt={entry.alt}
            className="object-cover md:hidden"
            fill
            priority={priority}
            sizes="100vw"
            src={mobileSrc}
            unoptimized={isSvgPath(mobileSrc)}
          />
          <Image
            alt={entry.alt}
            className="hidden object-cover md:block"
            fill
            priority={priority}
            sizes={sizes}
            src={desktopSrc}
            unoptimized={isSvgPath(desktopSrc)}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(11,13,18,0.08)_0%,rgba(11,13,18,0.55)_88%,rgba(11,13,18,0.78)_100%)]"
          />
          {overlay ? <div className="absolute inset-0">{overlay}</div> : null}
        </div>
      </div>
      {caption ? (
        <figcaption className="text-xs leading-5 text-[color:var(--color-text-dim)]">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
