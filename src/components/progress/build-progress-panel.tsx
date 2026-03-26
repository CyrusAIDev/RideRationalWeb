import Link from "next/link";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { buildProgress } from "@/mocks/progress";

export function BuildProgressPanel() {
  return (
    <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
      <Card>
        <CardHeader>
          <CardTitle>Build progress</CardTitle>
          <CardDescription>
            Mirrors the founder-facing milestone view in <code>14_BUILD_PROGRESS.md</code>.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="mb-2 text-sm text-[color:var(--color-text-muted)]">
              Overall completion
            </p>
            <Progress value={buildProgress.overallPercent} />
            <p className="mt-2 text-2xl font-semibold text-white">
              {buildProgress.overallPercent}%
            </p>
          </div>

          <div className="rounded-2xl border border-white/8 bg-white/4 p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-text-dim)]">
              Current milestone
            </p>
            <p className="mt-2 text-lg font-medium text-white">
              {buildProgress.currentMilestone}
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex text-sm text-[color:var(--color-accent-soft)] transition hover:text-white"
          >
            Back to customer-facing routes
          </Link>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Milestone checklist</CardTitle>
          <CardDescription>
            Use this panel with the QA guide before moving into the next major build phase.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-medium text-white">Completed</p>
            <ul className="space-y-3 text-sm text-[color:var(--color-text-muted)]">
              {buildProgress.completed.map((item) => (
                <li className="rounded-2xl border border-white/8 bg-white/4 px-4 py-3" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 text-sm font-medium text-white">Next up</p>
            <ul className="space-y-3 text-sm text-[color:var(--color-text-muted)]">
              {buildProgress.next.map((item) => (
                <li className="rounded-2xl border border-white/8 bg-white/4 px-4 py-3" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
