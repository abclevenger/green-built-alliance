import Link from "next/link";
import { getSiteSettings } from "@/lib/site-config";

const linkClass =
  "inline-flex min-h-10 max-w-max items-center rounded-sm text-sm text-[color:var(--gb-text-muted)] transition-colors hover:text-[color:var(--gb-accent-deep)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--gb-accent-deep)]";

const columnTitleClass =
  "text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--gb-text-muted)]";

export function SiteFooter() {
  const { siteName, footer, social } = getSiteSettings();
  const year = new Date().getFullYear();

  return (
    <footer
      className="mt-auto border-t border-[color:var(--gb-border)] bg-[color:var(--gb-surface-muted)] text-[color:var(--gb-text)]"
      role="contentinfo"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className="font-serif text-xl font-semibold tracking-tight text-[color:var(--gb-text)]">
              {siteName}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[color:var(--gb-text-muted)]">
              {footer.blurb}
            </p>
            {social.length > 0 ? (
              <div className="mt-8">
                <p className={columnTitleClass}>Follow</p>
                <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                  {social.map((s) => (
                    <li key={s.platform}>
                      <a
                        href={s.href}
                        className={`${linkClass} underline-offset-4 hover:underline`}
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label={`${s.platform} (opens in new tab)`}
                      >
                        {s.platform}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8 lg:grid-cols-3 lg:gap-6">
            {footer.columns.map((col) => (
              <nav key={col.title} aria-labelledby={`footer-col-${slugify(col.title)}`}>
                <p id={`footer-col-${slugify(col.title)}`} className={columnTitleClass}>
                  {col.title}
                </p>
                <ul className="mt-4 space-y-1">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className={linkClass}>
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-[color:var(--gb-border)] pt-8 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
          <p className="max-w-2xl text-xs leading-relaxed text-[color:var(--gb-text-muted)]">
            {footer.checkoutTrustNote}
          </p>
          <p className="shrink-0 text-xs text-[color:var(--gb-text-muted)]">
            © {year} {siteName}
          </p>
        </div>
      </div>
    </footer>
  );
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
