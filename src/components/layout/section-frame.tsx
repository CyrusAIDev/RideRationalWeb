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
      className={cn(
        "mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32",
        className,
      )}
      id={id}
    >
      {children}
    </section>
  );
}
