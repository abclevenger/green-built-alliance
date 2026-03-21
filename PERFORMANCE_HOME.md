# Homepage performance (mirrored HTML)

## Render path (updated)

1. Request `GET /`.
2. **`src/app/page.tsx`** fetches WordPress REST and renders HTML inside **`layout.tsx`** (header/footer + legacy CSS links).
3. The notes below about **mirror-only** behavior apply only if you **re-enable** `rewrites()` to `public/mirror/index.html`.

## Likely LCP element (mobile)

- **Primary candidate:** the mobile header logo (`ast-mobile-header-logo`, `gba-logo-vertical-150x108.png`) — it already had `fetchpriority="high"` in the mirror.
- **Secondary candidate:** the hero **H1** in the first Spectra/UAGB block (“Advancing sustainable living…”) if Lighthouse treats text as LCP; that metric is then gated by **font CSS** (Montserrat/Poppins) and render-blocking stylesheets.

## Single largest bottleneck addressed first

**Synchronous Font Awesome Kit** (`<script src="https://kit.fontawesome.com/...">` in `<head>`) ran before the bulk of the document and blocked HTML parsing while loading and executing third-party script — a common cause of high **FCP/LCP** and **TBT** on WordPress mirrors.

**Change:** load the kit with **`async`**.

## Other high-impact changes (same pass)

| Change | Why |
|--------|-----|
| **`preconnect`** to `greenbuilt.org`, `fonts.googleapis.com`, `fonts.gstatic.com` | Shorter connection setup for CSS, fonts, and images. |
| **`preload` + `media`** for mobile vs desktop header logo URLs | Earlier discovery of the likely LCP image per viewport. |
| **Astra Google Fonts:** `display=fallback` → **`display=swap`** | Reduces invisible-text period vs `fallback`. |
| **Poppins preload `woff2`** add **`crossorigin`** | Required for correct font preload behavior. |
| **reCAPTCHA** script **`defer`** | Not needed for first paint on the home page. |
| **WP Google Maps** `wpgmza_data.js` **`defer`** | Below-the-fold / non-critical for LCP. |

## After re-crawling the homepage

`npm run crawl` overwrites `public/mirror/index.html`. Re-apply patches:

```bash
npm run patch:home-perf
```

## What would still move the needle (later)

- **Reduce render-blocking CSS** from Astra, WooCommerce, Give, Spectra (large architectural change or a “critical CSS” pipeline).
- **Defer jQuery** and dependent stacks without breaking inline scripts (high risk on mirrored WP).
- **Self-host** or subset fonts; replace hero GIF with PNG/WebP on the **source** site, then re-crawl.
- A **dedicated Next.js homepage** built with `next/image` would require **removing the `/` rewrite** and implementing `src/app/page.tsx` — out of scope for a faithful static mirror.
