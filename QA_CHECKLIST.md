# QA checklist — mirror vs production

**Baseline:** https://www.greenbuilt.org/  
**Test:** your deployment (e.g. `http://localhost:3000/` or staging URL)

## Global

- [ ] `trailingSlash` — all internal routes use trailing `/` like WordPress.
- [ ] Home `/` loads without 404; hero, nav, footer visible.
- [ ] CSS/JS: pages render correctly when **online** (default: assets load from live `greenbuilt.org`).
- [ ] No mixed-content warnings if served over HTTPS (asset URLs are https).

## Navigation

- [ ] Primary mega-menu opens and links resolve (desktop + mobile breakpoint).
- [ ] Footer columns and legal links open correct paths on the **mirror host**.
- [ ] Logo(s) load.

## Templates (spot-check each type)

| Template | Example path | Check |
|----------|----------------|-------|
| Home | `/` | Hero, programs, testimonials, partner logos, news/events blocks |
| Static page | `/about-green-built-alliance/` | Body copy, sidebar if any |
| Directory hub | `/directory/` | Category grid/list |
| Resource hub | `/green-building-resources/` | Cards/links |
| Blog index | `/news/` | Pagination if present |
| Single post | (pick from manifest) | Content, author, related posts |
| Event | `/event/.../` | Date, venue, calendar exports |
| WooCommerce | `/shop/` | Product grids load (data from live API) |
| Forms | `/support-our-work/` or Give pages | Submit behavior (may POST to live site) |

## Responsive

- [ ] 375px, 768px, 1280px — layout matches production (no global CSS from Next conflicting; mirror supplies WP CSS).

## Functional (expect limitations)

- [ ] Search — if `/search/` relies on WordPress, confirm behavior (may redirect or use live endpoint).
- [ ] Login / My Account — expect redirect or cookie against live WordPress.
- [ ] Cart / checkout — verify policy with client (often must remain on live domain).

## Regression after re-crawl

- [ ] Run `npm run build` succeeds.
- [ ] Random sample of 20 URLs from `manifest.json` return 200.

## Automated smoke (optional)

```bash
# Example: verify manifest URLs return 200 on localhost (PowerShell)
$base = "http://localhost:3000"
Get-Content mirror/manifest.json | ConvertFrom-Json | Select-Object -First 50 | ForEach-Object {
  $u = ([uri]$_.sourceUrl).PathAndQuery
  Invoke-WebRequest -Uri "$base$u" -UseBasicParsing -Method Head
}
```

Adjust for trailing-slash redirects.
