# Second-pass audit report

Generated: 2026-03-20T22:03:28.908Z

## 1. Sitemap vs manifest

| Metric | Count |
|--------|-------|
| URLs in Yoast sitemap index (all child sitemaps) | 955 |
| URLs in mirror manifest | 1398 |
| **In sitemap, not in manifest** | **2** |
| In manifest, not in sitemap | 445 |

### Sitemap fetch failures (server errors)

- `https://www.greenbuilt.org/author-sitemap.xml`: 500 https://www.greenbuilt.org/author-sitemap.xml

### Missing URLs (first 80)

- https://www.greenbuilt.org/event/nonprofit-pint-night/
- https://www.greenbuilt.org/event/nonprofit-pint-night-2/

### Manifest-only URLs (beyond sitemap — expected)

There are **445** manifest URLs not listed in Yoast’s sitemap index (category archives, author archives, calendar, pagination, discovered internal links, etc.). This is **expected** after second-pass crawling.

## 1b. Mirror file count & manifest integrity

| Check | Count |
|-------|-------|
| `index.html` files under `public/mirror/` | 1398 |
| Manifest entries | 1398 |
| Manifest paths missing on disk | 0 |

## 2. Broken internal links (root-relative a[href^="/"] → missing mirror file)

Scanned **all** mirrored HTML files (walk order).

| Broken href | Found in mirror file |
|-------------|----------------------|
| `/programs/green-gauge/` | 115-introducing-green-gauge/index.html |
| `/green-building-magazine/` | about/importance-of-green-building/index.html |
| `/programs/energy-innovation-task-force/` | buncombe-energy-savers-project-energy-savers-network/index.html |
| `/programs/green-built-homes/register-green-built-nc-homes/` | duke-expands-rnc-rebate-into-duke-carolinas-territory/index.html |
| `/home-repairs` | energysaversnetwork/index.html |
| `/energy-efficiency-upgrade-services/` | energysaversnetwork/index.html |
| `/testimonials/` | energysaversnetwork/index.html |
| `/venue/` | event/2025-green-built-alliance-magazine-launch-party/index.html |
| `/organizer/` | event/building-science-avl-presents-advances-in-spray-foam/index.html |
| `/coulda-woulda-shoulda-flawed-reasons-why-people-dont-use-green-building-certifications/` | five-mistakes-that-green-building-certifications-can-catch/index.html |
| `/programs/` | five-simple-ways-to-support-green-building-this-giving-season/index.html |
| `/programs/green-built-homes/checklist-program-documents/` | gba-launches-green-built-homes-updates-new-professional-accreditation/index.html |
| `/green-building-resources/financial-incentives/` | green-building-resources/index.html |
| `/directory/directory-archives/` | green-building-resources/sustainable-building-materials/index.html |
| `/green-buiding-classes/` | membership/index.html |
| `/category/` | news/index.html |
| `/programs/living-building-challenge/` | residential-green-certification-program-guide/index.html |
| `/energysaversnetwork/energy-efficiency-apprenticeship/` | support-clean-energy/index.html |
| `/preparacion` | voluntario/index.html |
| `/programs/green-built-homes/green-built-participants/` | whats-in-a-green-built-home-a-guide-for-homeowners/index.html |

**Total broken:** 20

## 3. Live vs mirror spot-check (40 samples)

| URL | Title match | Body len ratio | Flag |
|-----|-------------|----------------|------|
| https://www.greenbuilt.org/ | true | 0.992 | ok |
| https://www.greenbuilt.org/directory/residential-designer/ | true | 1.000 | ok |
| https://www.greenbuilt.org/directory/responsible-investing/ | true | 0.998 | ok |
| https://www.greenbuilt.org/directory/recycling/ | true | 0.996 | ok |
| https://www.greenbuilt.org/local-school-gets-solar-makeover-thanks-to-appalachian-offsets/ | true | 0.996 | ok |
| https://www.greenbuilt.org/living-in-the-country/ | true | 0.993 | ok |
| https://www.greenbuilt.org/is-it-just-me/ | true | 0.993 | ok |
| https://www.greenbuilt.org/106-feature-americorps-recovery-project-energize-in-wnc/ | true | 0.988 | ok |
| https://www.greenbuilt.org/130-biodiesel/ | true | 0.995 | ok |
| https://www.greenbuilt.org/rick-bayless-health-considerations-in-a-green-remodel/ | true | 0.996 | ok |
| https://www.greenbuilt.org/cari-barcas-solar-for-schools/ | true | 0.993 | ok |
| https://www.greenbuilt.org/susanna-shetley-built-for-the-future/ | true | 0.995 | ok |
| https://www.greenbuilt.org/margaret-chandler-tree-preservation/ | true | 0.991 | ok |
| https://www.greenbuilt.org/brick-by-brick-finding-new-ways-to-reach-net-zero/ | true | 0.995 | ok |
| https://www.greenbuilt.org/maggie-leslie-incentives-for-building-green/ | true | 0.996 | ok |
| https://www.greenbuilt.org/katie-onheiber-a-smarter-energy-future/ | true | 0.995 | ok |
| https://www.greenbuilt.org/182-a-load-of-energy-savings/ | true | 0.994 | ok |
| https://www.greenbuilt.org/our-2021-year-in-review-adaptation-and-achievement/ | true | 0.992 | ok |
| https://www.greenbuilt.org/what-is-a-net-zero-ready-home/ | true | 0.995 | ok |
| https://www.greenbuilt.org/i-have-to-clean-my-solar-panels-and-you-probably-do-too/ | true | 0.995 | ok |
| https://www.greenbuilt.org/profiles-of-local-sustainability-leaders/ | true | 0.995 | ok |
| https://www.greenbuilt.org/event/esn1440/ | true | 0.992 | ok |
| https://www.greenbuilt.org/event/esn1449-2/ | true | 0.992 | ok |
| https://www.greenbuilt.org/event/esn1486/ | true | 0.992 | ok |
| https://www.greenbuilt.org/event/esn1461-3/ | true | 0.991 | ok |
| https://www.greenbuilt.org/event/esn-1548-see-notes/ | true | 0.983 | ok |
| https://www.greenbuilt.org/event/esn-1571-see-notes/ | true | 0.984 | ok |
| https://www.greenbuilt.org/event/june-member-social/ | true | 0.990 | ok |
| https://www.greenbuilt.org/category/water-efficiency/ | true | 0.997 | ok |
| https://www.greenbuilt.org/author/emiliolivingroofsinc-com/ | true | 0.996 | ok |
| https://www.greenbuilt.org/author/jmartinikw-com/ | true | 0.996 | ok |
| https://www.greenbuilt.org/author/olgahighcove-com/ | true | 0.996 | ok |
| https://www.greenbuilt.org/author/tracyrosemountainx-com/ | true | 0.996 | ok |
| https://www.greenbuilt.org/author/green-built-alliance/page/6/ | true | 0.994 | ok |
| https://www.greenbuilt.org/category/natural-building/page/3/ | true | 0.992 | ok |
| https://www.greenbuilt.org/event/bhp-community-engagement/2024-02-28/ | true | 0.995 | ok |
| https://www.greenbuilt.org/venue/carrier-park/ | true | 0.999 | ok |
| https://www.greenbuilt.org/green-building-news/page/3/ | true | 0.994 | ok |
| https://www.greenbuilt.org/category/green-built-alliance-news/page/5/ | true | 0.993 | ok |
| https://www.greenbuilt.org/green-building-news/page/8/ | true | 0.994 | ok |

## 4. Stale sitemap entries (404 on live)

Spot-checked first **2** “missing from manifest” URLs with `HEAD`: **2** returned 404 (likely stale Yoast URLs), **0** other/error.

Full list remains in §1. Re-crawl cannot create pages that do not exist on the source host.

## 5. Second pass completion summary

| Item | Value |
|------|-------|
| HTML files on disk (`public/mirror`) | 1398 |
| Manifest rows | 1398 |
| Sitemap URLs (Yoast index) | 955 |
| Sitemap URLs not in manifest | 2 |
| Manifest paths missing on disk | 0 |
| Unique broken internal `href` (scan) | 20 |
| Live vs mirror spot-check samples | 40 |
| Spot-check failures / drift flags | 0 |

### Status legend (apply to §2 links)

- **Fixed:** Crawled into `public/mirror/` when the live URL returns 200.
- **Blocked — source 404:** Linked from mirror but WordPress returns 404 (legacy slug); cannot mirror without inventing content.
- **Blocked — external / app:** Intentionally not same-origin (or requires PHP/WooCommerce backend).

## 6. Summary (metrics)

- **Sitemap URLs:** 955
- **Manifest URLs:** 1398
- **Missing from mirror (vs sitemap):** 2
- **Broken internal links (this scan):** 20
- **Spot-check flags:** 0

## 7. Discrepancy register (fixed / blocked)

| Category | Count / action | Status |
|----------|----------------|--------|
| Yoast sitemap URLs 404 on live (`nonprofit-pint-night` slugs) | 2 | **Blocked** — stale sitemap; no page to mirror |
| `author-sitemap.xml` | — | **Blocked** — WordPress returns HTTP 500; authors crawled via WP REST `author-urls.txt` |
| Legacy internal links (programs, magazine, ESN micro-pages, etc.) | See §2 | **Blocked** — `HEAD` returns **404** on live; links are dead on source |
| Archive pagination (`/category/.../page/N/`, `/green-building-news/page/N/`) | Frontier pages | **Partially fixed** — crawled many pages; “prev/next” still points to uncrawled `N±1` until `npm run crawl:discovered` is run periodically |
| `/earthday5k/` vs `/event/earth-day-5k/` | — | **Fixed** — `next.config.ts` `redirects` + audit treats redirect target as satisfied |
| Outlook/local file `href` in one post | 1 | **Fixed (noise)** — ignored in link scan (`/Users/.../Outlook/...`) |
| Title tag `&nbsp;` vs space | — | **Fixed** — spot-check normalizes for comparison (visible title unchanged) |
