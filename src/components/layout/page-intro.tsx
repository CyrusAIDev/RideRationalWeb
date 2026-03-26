import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function PageIntro({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl space-y-4", className)}>
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
        {title}
      </h1>
      <p className="max-w-2xl text-base leading-7 text-[color:var(--color-text-muted)] sm:text-lg">
        {description}
      </p>
    </div>
  );
}
