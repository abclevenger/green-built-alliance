import Link from "next/link";
import { getSiteSettings } from "@/lib/site-config";

export function SiteFooter() {
  const { siteName, tagline, footer, social } = getSiteSettings();
  return (
    <footer className="mt-auto border-t border-neutral-200 bg-neutral-100 py-10 text-sm text-neutral-600">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 md:flex-row md:justify-between">
        <div>
          <p className="font-bold text-neutral-800">{siteName}</p>
          <p className="mt-1 max-w-sm">{tagline}</p>
          {social.length > 0 ? (
            <ul className="mt-4 flex flex-wrap gap-3 text-xs">
              {social.map((s) => (
                <li key={s.platform}>
                  <a
                    href={s.href}
                    className="text-[#5a7c00] underline-offset-2 hover:underline"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {s.platform}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {footer.links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-[#5a7c00]">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-6xl px-4 text-xs text-neutral-500">
        Core pages and navigation are served from this site. Some inner pages may still
        load from WordPress until migration is complete; forms and checkout may post to
        third-party or legacy endpoints.
      </p>
    </footer>
  );
}
