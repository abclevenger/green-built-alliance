# Customer experience (CX) playbook

The **live UX** is the **Next.js App Router** shell plus WordPress REST HTML (`src/app/page.tsx`, `src/app/[...slug]/page.tsx`). **`public/mirror/`** is optional crawl output for audits, not the default renderer. CX changes can happen in **React components** (`SiteHeader`, `SiteFooter`, `not-found`) or in **WordPress** content.

## What “good CX” means here

1. **Visitors know where they are** (home vs directory vs program vs donate).  
2. **The next click is obvious** (one primary job per page).  
3. **Dead ends are rare** (fixed links, helpful 404).  
4. **Mobile and slow networks don’t punish** (performance, tap targets).  
5. **Trust appears at the moment of action** (forms, checkout, donate).

---

## Implemented in this repo

| Item | Location |
|------|----------|
| Helpful **404** with common destinations + “report broken link” path | `src/app/not-found.tsx` |
| **Global nav / footer** | `src/components/SiteHeader.tsx`, `SiteFooter.tsx` |
| **Homepage performance** (mirror-era) | `public/mirror/index.html` + `npm run patch:home-perf` (only if you still use mirror rewrites) |

### UX rollout — link Phase 2 (copy & trust language)

Phase 2 extended the Phase 1 homepage/footer/event work with a **medium sweep**: fewer generic CTAs (“Explore” / “Discover”), no visitor-facing migration jargon, and neutral directory listing blurbs.

| Area | Source files |
|------|----------------|
| Events hub meta | [src/content/site/events-hub.ts](src/content/site/events-hub.ts) |
| Marketing page CTA copy | [src/content/pages/marketing.ts](src/content/pages/marketing.ts) |
| Green Built Homes supplemental pages | [src/content/pages/green-built-homes-supplemental-pages.ts](src/content/pages/green-built-homes-supplemental-pages.ts) |
| Green building resources CTAs | [src/content/pages/green-building-resources-pages.ts](src/content/pages/green-building-resources-pages.ts) |
| Magazine archives intro | [src/content/site/magazine-hub.ts](src/content/site/magazine-hub.ts) |
| Client satisfaction / feedback hero | [src/content/pages/content-tail-marketing-pages.ts](src/content/pages/content-tail-marketing-pages.ts) |
| Editorial posts & long-tail batches | [src/content/posts/indoor-air-plus-certification.ts](src/content/posts/indoor-air-plus-certification.ts), [what-is-a-net-zero-energy-home.ts](src/content/posts/what-is-a-net-zero-energy-home.ts), [green-built-nc-beyond-energy-star.ts](src/content/posts/green-built-nc-beyond-energy-star.ts), [what-is-a-net-zero-ready-home.ts](src/content/posts/what-is-a-net-zero-ready-home.ts), [long-tail-editorial-batch-two.ts](src/content/posts/long-tail-editorial-batch-two.ts), [long-tail-editorial-batch-three.ts](src/content/posts/long-tail-editorial-batch-three.ts), [long-tail-editorial-batch-four.ts](src/content/posts/long-tail-editorial-batch-four.ts) |
| Directory category SEO + spotlight summaries | [src/content/directory/categories.ts](src/content/directory/categories.ts) |

**Related:** Phase 1 (hero/CTAs, credibility, collaborator strip, stats list, event/footer copy) lives mainly in [src/content/site/home.ts](src/content/site/home.ts), [src/components/home/HomePageView.tsx](src/components/home/HomePageView.tsx), [src/components/trust/CollaboratorStrip.tsx](src/components/trust/CollaboratorStrip.tsx), [src/components/trust/ImpactStatStrip.tsx](src/components/trust/ImpactStatStrip.tsx), [src/components/SiteFooter.tsx](src/components/SiteFooter.tsx), [src/components/events/EventDetailView.tsx](src/components/events/EventDetailView.tsx), [src/app/page.tsx](src/app/page.tsx). Phase 3 (interactive): [src/components/matchmaking/MatchmakingWizard.tsx](src/components/matchmaking/MatchmakingWizard.tsx), [src/components/directory/DirectorySpotlightSection.tsx](src/components/directory/DirectorySpotlightSection.tsx), [src/components/directory/DirectoryCategoryView.tsx](src/components/directory/DirectoryCategoryView.tsx), [src/components/home/HomePathSelector.tsx](src/components/home/HomePathSelector.tsx).

---

## Quick wins (same day)

- **Above each long form:** one sentence *why* you’re asking and *what happens next*.  
- **Directory:** short “How to use this list” + what “member” or “certified” means in one paragraph.  
- **Donate / checkout:** reduce fields where legal; show **trust line** (secure, nonprofit EIN link to About).  
- **Search results:** if WP search is weak, push **directory** + **key hubs** in copy.  
- **Fix known broken internal links** on the **source** site, then re-crawl (mirrors inherit broken links).

## Medium (1–2 weeks)

- **Segment paths** on the homepage: “I’m hiring” vs “I’m a pro” (copy + two prominent buttons).  
- **Sticky or repeated utility** on mobile: “Find a pro” / “Classes” in header or bottom bar (requires theme or mirror edit).  
- **Event dates** near CE CTAs (real urgency).  
- **FAQ** on high-friction pages (membership, certification, donate).

## Larger (strategy + build)

- **Dedicated landing pages** per audience (from ads/email).  
- **Logged-in / member** UX stays on WordPress until you headless or SSO—call that out so expectations match reality.

---

## After `npm run crawl`

Run **`npm run patch:home-perf`** so homepage perf patches are re-applied.

---

## How to measure CX

- **404 rate** and top missing URLs (Vercel analytics or server logs).  
- **Scroll / click** on homepage segments (if you add events).  
- **Form abandon**, **directory outbound clicks**, **class signups** (source analytics).
