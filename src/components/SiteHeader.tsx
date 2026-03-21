import Link from "next/link";
import { getSiteSettings } from "@/lib/site-config";

export function SiteHeader() {
  const { siteName, nav } = getSiteSettings();
  return (
    <header className="border-b border-neutral-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-3">
        <Link
          href="/"
          className="text-base font-extrabold tracking-tight text-[#5a7c00] md:text-lg"
        >
          {siteName}
        </Link>
        <nav
          aria-label="Primary"
          className="flex max-w-full flex-wrap gap-x-4 gap-y-2 text-sm font-semibold text-neutral-700"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap hover:text-[#e34d0c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5a7c00]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
