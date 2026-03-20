# SEO preservation checklist

Use this when comparing a deployed mirror to https://www.greenbuilt.org/ and when changing `NEXT_PUBLIC_SITE_URL` / `CANONICAL_BASE`.

## Per-page (mirrored HTML — primary source of truth)

For each high-value template (home, directory, single post, single event, shop):

- [ ] `<title>` matches production (allow for crawl-date drift if content changed since mirror).
- [ ] Meta description (`<meta name="description">`) present and matches.
- [ ] Canonical (`<link rel="canonical" href="...">`) — same as production **or** intentionally updated to new domain via `CANONICAL_BASE` + re-crawl.
- [ ] `robots` meta / `X-Robots-Tag` — compare View Source on both.
- [ ] Open Graph: `og:title`, `og:description`, `og:url`, `og:image` (and image URL resolves).
- [ ] Twitter card tags (`twitter:*`) if present on source.
- [ ] `application/ld+json` (Yoast `@graph`) validates in [Google Rich Results Test](https://search.google.com/test/rich-results) (spot-check).
- [ ] Heading order (`h1`–`h3`) matches source (accessibility + SEO).
- [ ] Image `alt` attributes unchanged from source.

## Site-level (Next.js metadata routes)

- [ ] `/sitemap.xml` lists all URLs from `mirror/manifest.json` with `NEXT_PUBLIC_SITE_URL` as host.
- [ ] `/robots.txt` allows indexing of public content and references `/sitemap.xml`.
- [ ] After changing production domain, update `NEXT_PUBLIC_SITE_URL` and re-crawl with desired `CANONICAL_BASE`.

## Internal linking

- [ ] Same-origin links in body use root-relative paths (`/path/`) after crawl rewrite.
- [ ] External links unchanged (e.g. partner sites, `cutmycarbon.org`).

## Items **not** duplicated from Yoast’s full index

Optional follow-up if full SEO parity with WordPress **category/author** archives is required:

- Category archive URLs (`category-sitemap.xml`).
- Author archive URLs (`author-sitemap.xml`).
- Recurring events (`tec_recurring_events-sitemap.xml`).

Add those URLs to a new list file and run `npm run crawl`.

## Search Console

- [ ] Submit new sitemap after launch.
- [ ] Monitor coverage and canonical selection when domain changes.
