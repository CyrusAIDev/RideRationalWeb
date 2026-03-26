import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/6">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-4 px-5 py-8 text-sm text-[color:var(--color-text-muted)] sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <p>RideRational · Sweet-spot used-car discovery for Vancouver.</p>
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/login" className="transition hover:text-white">
            Sign in
          </Link>
          <Link href="/trial" className="transition hover:text-white">
            Trial terms
          </Link>
          <Link href="/founder/progress" className="transition hover:text-white">
            Founder progress
          </Link>
        </div>
      </div>
    </footer>
  );
}
