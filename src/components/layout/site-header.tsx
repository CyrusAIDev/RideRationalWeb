import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { publicEnv } from "@/lib/env";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/6 bg-[color:rgba(11,13,18,0.72)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold text-white">
            RR
          </div>
          <div>
            <p className="text-sm font-semibold text-white">{siteConfig.name}</p>
            <p className="text-xs text-[color:var(--color-text-muted)]">
              Vancouver launch · Email-first
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-6 lg:flex">
          {siteConfig.nav.map((item) => (
            <Link
              className="text-sm text-[color:var(--color-text-muted)] transition hover:text-white"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {publicEnv.NEXT_PUBLIC_SHOW_FOUNDER_PROGRESS === "true" ? (
            <Link href="/founder/progress">
              <Badge>Founder view</Badge>
            </Link>
          ) : null}
          <Link href="/signup" className="hidden sm:block">
            <Button size="sm">Start trial</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
