import Link from "next/link";

import { PageIntro } from "@/components/layout/page-intro";
import { SectionFrame } from "@/components/layout/section-frame";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function TrialPage() {
  return (
    <SectionFrame className="space-y-10">
      <PageIntro
        eyebrow="Trial and membership"
        title="The trial is where the real product starts."
        description="Teaser screens prove the idea. The membership delivers the ongoing value: daily local sweet-spot picks matched to your preferences."
      />

      <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
        <Card>
          <CardHeader>
            <CardTitle>What the membership does</CardTitle>
            <CardDescription>
              Designed for buyers who want the software to do the hunting.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-3">
            {[
              "Scans the right listing sources",
              "Frames sweet spots against obvious defaults",
              "Emails the strongest local opportunities daily",
            ].map((item) => (
              <div className="rounded-2xl border border-white/8 bg-white/4 px-4 py-4 text-sm text-[color:var(--color-text-muted)]" key={item}>
                {item}
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-[color:rgba(184,145,70,0.28)] bg-[color:rgba(184,145,70,0.08)]">
          <CardHeader>
            <CardTitle>7-day free trial</CardTitle>
            <CardDescription>
              Then continue on a paid monthly membership once billing is connected.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-text-dim)]">
                Placeholder pricing shell
              </p>
              <p className="mt-2 text-5xl font-semibold text-white">$29</p>
              <p className="mt-2 text-sm text-[color:var(--color-text-muted)]">
                Monthly after trial. Final pricing remains easy to revise because it is not duplicated across the app.
              </p>
            </div>
            <Link href="/account">
              <Button className="w-full" size="lg">
                Start free trial
              </Button>
            </Link>
            <p className="text-xs leading-6 text-[color:var(--color-text-muted)]">
              Calm commercial framing only. No fake scarcity, no overclaiming, and no implication that a dashboard unlock is the main value.
            </p>
          </CardContent>
        </Card>
      </div>
    </SectionFrame>
  );
}
