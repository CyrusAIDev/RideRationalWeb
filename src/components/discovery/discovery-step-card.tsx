import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function DiscoveryStepCard({
  step,
  total,
  title,
  description,
  children,
}: {
  step: number;
  total: number;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <Card className="mx-auto max-w-4xl">
      <CardHeader>
        <div className="space-y-3">
          <p className="text-sm text-[color:var(--color-text-muted)]">
            Step {step} of {total}
          </p>
          <Progress value={(step / total) * 100} />
        </div>
        <CardTitle className="pt-2 text-3xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
