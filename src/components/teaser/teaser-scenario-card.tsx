import { LockKeyhole } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function TeaserScenarioCard({
  benchmark,
  sweetSpot,
  narrative,
  opportunityCount,
}: {
  benchmark: string;
  sweetSpot: string;
  narrative: string;
  opportunityCount: number;
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <Card className="h-full">
        <CardHeader>
          <Badge>Expected default</Badge>
          <CardTitle>{benchmark}</CardTitle>
          <CardDescription>
            The obvious choice at this spend often feels responsible—but also emotionally flat.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className="border-[color:rgba(184,145,70,0.28)] bg-[color:rgba(184,145,70,0.08)]">
        <CardHeader>
          <Badge>RideRational sweet spot</Badge>
          <CardTitle>{sweetSpot}</CardTitle>
          <CardDescription>{narrative}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-text-dim)]">
              Potential matches nearby
            </p>
            <p className="mt-2 text-4xl font-semibold text-white">{opportunityCount}</p>
            <p className="mt-2 text-sm text-[color:var(--color-text-muted)]">
              Curated possibilities in your area, with deeper detail locked behind the trial.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {[1, 2, 3, 4].map((item) => (
              <div
                className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-sm text-[color:var(--color-text-muted)] blur-[1px]"
                key={item}
              >
                <LockKeyhole className="h-4 w-4 text-[color:var(--color-accent)]" />
                Locked match preview {item}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
