import { cn } from "@/lib/utils";

export function SectionFrame({
  className,
  children,
  id,
}: {
  className?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section
      className={cn("mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-8 lg:px-10 lg:py-24", className)}
      id={id}
    >
      {children}
    </section>
  );
}
