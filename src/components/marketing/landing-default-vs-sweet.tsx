import { Lock } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function LandingDefaultVsSweet() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch lg:gap-6">
      <Card className="relative overflow-hidden border-white/[0.08] bg-[linear-gradient(200deg,rgba(255,255,255,0.04),rgba(11,13,18,0.95))] transition duration-300 hover:-translate-y-0.5 hover:border-white/[0.12] motion-reduce:transform-none">
        <CardHeader>
          <p className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-text-dim)]">
            Benchmark / default
          </p>
          <CardTitle className="text-xl">The safe new choice</CardTitle>
          <CardDescription>
            High payment clarity, low surprise—and easy to justify on a spreadsheet.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm leading-6 text-[color:var(--color-text-muted)]">
          <p>Comfortable. Predictable. Often the path of least resistance when you are busy.</p>
          <div className="rounded-[14px] border border-dashed border-white/10 bg-black/20 px-3 py-2 text-xs text-[color:var(--color-text-dim)]">
            Typical front-loaded depreciation · familiar ownership story
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col items-center justify-center gap-3 px-2 text-center lg:max-w-[220px] lg:px-0">
        <div className="hidden h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block" />
        <p className="font-serif text-xl italic leading-snug text-[color:var(--color-accent-soft)] lg:text-[1.35rem]">
          The smart option does not have to be the boring one.
        </p>
        <p className="text-sm leading-6 text-[color:var(--color-text-muted)]">
          RideRational exists for the overlap—where a used sweet spot still feels like{" "}
          <span className="text-[color:var(--color-text)]">your</span> kind of car.
        </p>
        <div className="hidden h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block" />
      </div>

      <Card className="relative overflow-hidden border-[color:rgba(184,145,70,0.28)] bg-[linear-gradient(195deg,rgba(184,145,70,0.14),rgba(11,13,18,0.96))] shadow-[0_32px_80px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1 hover:border-[color:rgba(184,145,70,0.38)] motion-reduce:transform-none">
        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[color:rgba(184,145,70,0.55)] to-transparent" />
        <CardHeader>
          <p className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-accent-soft)]">
            Sweet-spot used
          </p>
          <CardTitle className="text-xl">More special for similar spend</CardTitle>
          <CardDescription className="text-[color:var(--color-text-muted)]">
            A different emotional contract: presence, pace, and personality—without asking you to
            become a depreciation hobbyist.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm leading-6 text-[color:var(--color-text-muted)]">
            We frame why a match is interesting—then deliver the ongoing hunt by email so you are
            not living inside listings.
          </p>
          <div className="flex items-center gap-2 rounded-[14px] border border-white/10 bg-black/30 px-3 py-2.5 text-xs text-[color:var(--color-text-dim)]">
            <Lock className="h-3.5 w-3.5 shrink-0 text-[color:var(--color-accent)]" aria-hidden />
            Full vehicle detail and shortlist depth unlock in trial—not on this page.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
