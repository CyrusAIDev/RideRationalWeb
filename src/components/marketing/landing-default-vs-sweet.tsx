import { Lock } from "lucide-react";

import { getImageBySlot } from "@/content/image-library";
import { EditorialImageBlock } from "@/components/marketing/editorial-image-block";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function LandingDefaultVsSweet() {
  const proofVisual = getImageBySlot("landing-default-vs-sweet");

  return (
    <div className="space-y-10 lg:space-y-14">
      {proofVisual ? (
        <EditorialImageBlock
          caption="Editorial frame for contrast—not a guarantee about any specific listing."
          entry={proofVisual}
          sizes="(max-width: 1280px) 100vw, 1180px"
        />
      ) : null}

      <div className="grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch lg:gap-8">
        <Card className="relative overflow-hidden border-white/[0.08] bg-[color:rgba(18,23,34,0.55)] transition duration-300 hover:-translate-y-0.5 hover:border-white/[0.12] motion-reduce:transform-none">
          <CardHeader>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-text-dim)]">
              Benchmark / default
            </p>
            <CardTitle className="text-xl">The safe new choice</CardTitle>
            <CardDescription>Easy to justify. Often emotionally flat.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-6 text-[color:var(--color-text-muted)]">
            <div className="rounded-[14px] border border-dashed border-white/10 bg-black/20 px-3 py-2 text-xs text-[color:var(--color-text-dim)]">
              Front-loaded depreciation · familiar story
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col items-center justify-center gap-3 px-2 text-center lg:max-w-[240px] lg:px-0">
          <p className="font-serif text-xl italic leading-snug text-[color:var(--color-accent-soft)] lg:text-[1.35rem]">
            The smart option does not have to be the boring one.
          </p>
          <p className="text-sm leading-6 text-[color:var(--color-text-muted)]">
            RideRational hunts the overlap—special, still rational.
          </p>
        </div>

        <Card className="relative overflow-hidden border-[color:rgba(184,145,70,0.28)] bg-[color:rgba(18,23,34,0.65)] shadow-[0_32px_80px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1 hover:border-[color:rgba(184,145,70,0.38)] motion-reduce:transform-none">
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[color:rgba(184,145,70,0.55)] to-transparent" />
          <CardHeader>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-accent-soft)]">
              Sweet-spot used
            </p>
            <CardTitle className="text-xl">More special for similar spend</CardTitle>
            <CardDescription className="text-[color:var(--color-text-muted)]">
              Presence and pace—without becoming a depreciation hobbyist.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2 rounded-[14px] border border-white/10 bg-black/30 px-3 py-2.5 text-xs text-[color:var(--color-text-dim)]">
              <Lock className="h-3.5 w-3.5 shrink-0 text-[color:var(--color-accent)]" aria-hidden />
              Full vehicle detail unlocks in trial—not a public shortlist.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
