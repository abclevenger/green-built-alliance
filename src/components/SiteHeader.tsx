import { mediaUrl } from "@/content/assets/native-media-catalog";
import { getSiteSettings } from "@/lib/site-config";
import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  const { siteName, nav } = getSiteSettings();
  const logoSrc = mediaUrl("ogGbaLogoVertical");

  return (
    <header className="border-b border-[color:var(--gb-border)] bg-[color:var(--gb-surface)] shadow-sm">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex shrink-0 items-center gap-2 rounded-sm">
          <Image
            src={logoSrc}
            alt=""
            width={300}
            height={216}
            className="h-9 w-auto md:h-10"
            priority
            sizes="(max-width: 768px) 140px, 160px"
          />
          <span className="sr-only">{siteName}</span>
        </Link>
        <nav
          aria-label="Primary"
          className="-mx-1 flex max-w-full gap-x-1 gap-y-2 overflow-x-auto overflow-y-hidden overscroll-x-contain px-1 pb-1 text-sm font-semibold text-[color:var(--gb-text-muted)] sm:flex-wrap sm:overflow-visible sm:gap-x-4"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex shrink-0 items-center rounded-md px-2 py-2 whitespace-nowrap hover:text-[color:var(--gb-accent-deep)] sm:px-0"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
