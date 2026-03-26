import { CarFront } from "lucide-react";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function CategoryCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Card className="h-full transition duration-200 hover:-translate-y-1 hover:border-[color:rgba(184,145,70,0.3)]">
      <CardHeader>
        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/6">
          <CarFront className="h-5 w-5 text-[color:var(--color-accent)]" />
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
