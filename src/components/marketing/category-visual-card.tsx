import Image from "next/image";

import type { ImageLibraryEntry } from "@/content/image-library";
import { resolveImageSrc } from "@/content/image-library";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

function isSvgPath(src: string) {
  return src.endsWith(".svg");
}

export function CategoryVisualCard({
  title,
  description,
  image,
  selected = false,
  onSelect,
  className,
}: {
  title: string;
  description: string;
  image: ImageLibraryEntry;
  selected?: boolean;
  onSelect?: () => void;
  className?: string;
}) {
  const desktopSrc = resolveImageSrc(image, "desktop");
  const mobileSrc = resolveImageSrc(image, "mobile");

  const body = (
    <>
      <div className="relative h-36 border-b border-white/[0.06] sm:h-40">
        <Image
          alt={image.alt}
          className="object-cover object-center sm:hidden"
          fill
          sizes="100vw"
          src={mobileSrc}
          unoptimized={isSvgPath(mobileSrc)}
        />
        <Image
          alt={image.alt}
          className="hidden object-cover object-center sm:block"
          fill
          sizes="(max-width: 1280px) 40vw, 520px"
          src={desktopSrc}
          unoptimized={isSvgPath(desktopSrc)}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(11,13,18,0.9)_100%)]"
        />
      </div>
      <CardHeader className="p-5 sm:p-6">
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription className="line-clamp-3">{description}</CardDescription>
      </CardHeader>
    </>
  );

  if (onSelect) {
    return (
      <button
        className={cn(
          "w-full rounded-[24px] border border-transparent text-left transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-ring)]",
          selected
            ? "ring-2 ring-[color:var(--color-ring)] ring-offset-2 ring-offset-[color:var(--color-bg)]"
            : "hover:-translate-y-0.5 motion-reduce:transform-none",
          className,
        )}
        onClick={onSelect}
        type="button"
      >
        <Card
          className={cn(
            "h-full overflow-hidden border-white/[0.08] p-0 transition duration-200",
            selected
              ? "border-[color:rgba(184,145,70,0.35)] bg-[color:rgba(184,145,70,0.06)]"
              : "hover:border-[color:rgba(184,145,70,0.28)]",
          )}
        >
          {body}
        </Card>
      </button>
    );
  }

  return (
    <Card
      className={cn(
        "group h-full overflow-hidden border-white/[0.08] p-0 transition duration-300 hover:-translate-y-1 hover:border-[color:rgba(184,145,70,0.28)] motion-reduce:transform-none",
        className,
      )}
    >
      {body}
    </Card>
  );
}
