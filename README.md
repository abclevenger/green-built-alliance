# Green Built Alliance — Next.js + WordPress (headless)

Production **Next.js 16** + **TypeScript** + **App Router** frontend. Public pages are **React** (`layout`, `page`, `[...slug]`). **Body content** is loaded from the **WordPress REST API** at build/runtime, sanitized, and rendered inside a shared shell (header/footer + legacy block CSS from WordPress).

The old **static HTML mirror** under `public/mirror/` is **optional** (crawl output for reference or audits); it is **not** used to serve the site unless you restore `rewrites()` in `next.config.ts`.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000/](http://localhost:3000/) (`trailingSlash: true`).

**Build** calls WordPress for the homepage prerender; CI needs network access to `WORDPRESS_ORIGIN` (default `https://www.greenbuilt.org`).

## Architecture

| Piece | Role |
|-------|------|
| `src/app/page.tsx` | Home: `GET /wp-json/wp/v2/pages/{id}` (default page `2114`) |
| `src/app/[...slug]/page.tsx` | Resolves **pages**, **posts**, and **Tribe events** (`/event/{slug}/`) via REST |
| `src/lib/wordpress.ts` | Fetch + match logic (path must match WP `link`) |
| `src/lib/wp-html.ts` | Rewrites internal links to path-only + **DOMPurify** |
| `src/components/WpLegacyStyles.tsx` | Block library + Astra CSS from WordPress (layout parity, not pixel-perfect) |
| `src/app/sitemap.ts` | Still driven by `mirror/manifest.json` URL list (same paths as before) |

## Environment

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical host for `sitemap.xml` / `robots.txt` |
| `WORDPRESS_ORIGIN` | WordPress base URL (default `https://www.greenbuilt.org`) |
| `WORDPRESS_HOME_PAGE_ID` | REST page ID for `/` (default `2114`) |

## Optional: refresh HTML mirrors (audits only)

```bash
npm run crawl
npm run patch:home-perf   # only if you still use mirror HTML for something
```

## Limitations

- **Custom post types** not exposed as `pages` or `posts` may **404** until you extend `resolveWordPressRoute`.
- **Yoast JSON-LD** from mirrored HTML is **not** replicated; add `generateMetadata` / `jsonLd` later if needed.
- **Plugin-specific CSS** (Spectra, WooCommerce, etc.) may be missing on some routes—extend `WpLegacyStyles` or move to `next/font` + Tailwind over time.
- **Forms / checkout** that POST to WordPress still target `greenbuilt.org` if embedded HTML keeps absolute actions.

See **`HEADLESS.md`** for details.

## Docs

- `HEADLESS.md` — headless model, gaps, next steps  
- `MIGRATION_REPORT.md` — historical mirror approach  
- `PERFORMANCE_HOME.md` — homepage performance notes (partly superseded)  
- `CX_PLAYBOOK.md` — CX checklist  
