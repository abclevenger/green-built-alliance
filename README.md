# Green Built Alliance — static mirror (Next.js)

Production Next.js 16 + TypeScript + App Router project that serves **byte-faithful HTML mirrors** of [greenbuilt.org](https://www.greenbuilt.org/) so layout, copy, scripts, and `<head>` metadata match the live WordPress site.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000/](http://localhost:3000/) (trailing slash enabled).

## How it works

| Piece | Role |
|-------|------|
| `public/mirror/**/index.html` | Full page HTML saved from the live site |
| `src/app/[[...slug]]/route.ts` | `GET` handler reads the matching `index.html` and returns it |
| `mirror/manifest.json` | Crawl manifest (source URL → file path) |
| `src/app/sitemap.ts` | Lists mirrored URLs for search engines |
| `src/app/robots.ts` | Robots rules aligned with production |

Mirrored pages load **styles, scripts, and media from `https://www.greenbuilt.org/...`** (see `ASSET_INVENTORY.md`). Offline/air-gapped hosting requires an additional asset download pass into `public/`.

## Populate / refresh mirrors

URL lists come from Yoast + Events Calendar sitemaps (`page-urls.txt`, `post-urls.txt`, `event-urls.txt`).

```bash
# All lists (respect robots crawl-delay unless you pass --delay=0)
npm run crawl

# Or stepwise
npm run crawl:pages
npm run crawl:posts
npm run crawl:events
```

Options (see `scripts/crawl.mjs`):

- `--max=N` — limit fetches
- `--delay=ms` — delay between requests (default 10000 ms)
- `--skip-existing` — skip URLs that already have `public/mirror/.../index.html`
- `--url-list=relative-path.txt` — single list file

## Environment

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Public site URL for `sitemap.xml` and `robots.txt` (default: `https://www.greenbuilt.org`) |
| `CANONICAL_BASE` | If set, `<link rel="canonical">` in saved HTML is rewritten to this origin during crawl |

## Documentation

- `MIGRATION_REPORT.md` — approach, limitations, WordPress-dependent features
- `ROUTE_MAP.md` — URL → mirror file mapping
- `ASSET_INVENTORY.md` — referenced asset paths (from HTML scan)
- `SEO_PRESERVATION_CHECKLIST.md` — SEO parity strategy
- `QA_CHECKLIST.md` — manual QA against production

## Tech note: `next/link` and `next/image`

This migration prioritizes **identical rendered output** from saved HTML. Internal navigation uses normal `<a href>` tags from the mirror, not React `Link`. Images keep original `<img>` / `srcset` from WordPress. That matches the requirement to avoid changing layout or loading behavior.
