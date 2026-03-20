# Second-pass audit report

Generated: 2026-03-20T21:30:36.267Z

## 1. Sitemap vs manifest

| Metric | Count |
|--------|-------|
| URLs in Yoast sitemap index (all child sitemaps) | 955 |
| URLs in mirror manifest | 1124 |
| **In sitemap, not in manifest** | **2** |
| In manifest, not in sitemap | 171 |

### Sitemap fetch failures (server errors)

- `https://www.greenbuilt.org/author-sitemap.xml`: 500 https://www.greenbuilt.org/author-sitemap.xml

### Missing URLs (first 80)

- https://www.greenbuilt.org/event/nonprofit-pint-night/
- https://www.greenbuilt.org/event/nonprofit-pint-night-2/

## 2. Broken internal links (root-relative a[href^="/"] → missing mirror file)

Scanned first **5000** mirrored HTML files (alphabetically by walk order).

| Broken href | Found in mirror file |
|-------------|----------------------|
| `/programs/green-gauge/` | 115-introducing-green-gauge/index.html |
| `/green-building-magazine/` | about/importance-of-green-building/index.html |
| `/programs/energy-innovation-task-force/` | buncombe-energy-savers-project-energy-savers-network/index.html |
| `/calendar/list/` | calendar/index.html |
| `/calendar/map/` | calendar/index.html |
| `/programs/green-built-homes/` | catch-up-with-videos-of-our-2019-regenerative-design-workshops/index.html |
| `/category/alternative-renewable-energy/page/2/` | category/alternative-renewable-energy/index.html |
| `/category/alternative-renewable-energy/page/6/` | category/alternative-renewable-energy/index.html |
| `/category/appliances-lighting/page/2/` | category/appliances-lighting/index.html |
| `/category/articles/page/2/` | category/articles/index.html |
| `/category/articles/page/36/` | category/articles/index.html |
| `/category/building-envelope/page/2/` | category/building-envelope/index.html |
| `/category/case-studies/page/2/` | category/case-studies/index.html |
| `/category/case-studies/page/9/` | category/case-studies/index.html |
| `/category/energy-efficiency-air-sealing/page/2/` | category/energy-efficiency-air-sealing/index.html |
| `/category/energy-efficiency-air-sealing/page/9/` | category/energy-efficiency-air-sealing/index.html |
| `/category/energy-tax-credits/page/2/` | category/energy-tax-credits/index.html |
| `/category/energy-tax-credits/page/3/` | category/energy-tax-credits/index.html |
| `/category/equity-the-green-economy/page/2/` | category/equity-the-green-economy/index.html |
| `/category/equity-the-green-economy/page/4/` | category/equity-the-green-economy/index.html |
| `/category/government-resources/page/2/` | category/government-resources/index.html |
| `/category/green-building/page/2/` | category/green-building/index.html |
| `/category/green-building/page/15/` | category/green-building/index.html |
| `/category/green-built-alliance-news/page/2/` | category/green-built-alliance-news/index.html |
| `/category/green-built-alliance-news/page/21/` | category/green-built-alliance-news/index.html |
| `/category/green-built-alliance-news/member-news/page/2/` | category/green-built-alliance-news/member-news/index.html |
| `/category/green-built-alliance-news/member-news/page/17/` | category/green-built-alliance-news/member-news/index.html |
| `/category/green-built-homes/page/2/` | category/green-built-homes/index.html |
| `/category/green-built-homes/page/6/` | category/green-built-homes/index.html |
| `/category/green-real-estate/page/2/` | category/green-real-estate/index.html |
| `/category/green-remodeling/page/2/` | category/green-remodeling/index.html |
| `/category/green-remodeling/page/3/` | category/green-remodeling/index.html |
| `/category/health-indoor-air-quality/page/2/` | category/health-indoor-air-quality/index.html |
| `/category/health-indoor-air-quality/page/3/` | category/health-indoor-air-quality/index.html |
| `/category/heating-cooling-systems/page/2/` | category/heating-cooling-systems/index.html |
| `/category/natural-building/page/2/` | category/natural-building/index.html |
| `/category/natural-building/page/3/` | category/natural-building/index.html |
| `/category/net-zero-energy-homes/page/2/` | category/net-zero-energy-homes/index.html |
| `/category/site-landscape/page/2/` | category/site-landscape/index.html |
| `/category/site-landscape/page/4/` | category/site-landscape/index.html |
| `/category/smart-growth/page/2/` | category/smart-growth/index.html |
| `/category/smart-growth/page/5/` | category/smart-growth/index.html |
| `/category/sustainable-building-materials/page/2/` | category/sustainable-building-materials/index.html |
| `/category/sustainable-building-materials/page/4/` | category/sustainable-building-materials/index.html |
| `/category/technical-checklists/page/2/` | category/technical-checklists/index.html |
| `/category/technical-checklists/page/3/` | category/technical-checklists/index.html |
| `/category/water-efficiency/page/2/` | category/water-efficiency/index.html |
| `/category/water-efficiency/page/3/` | category/water-efficiency/index.html |
| `/donate` | client-satisfaction-survey/index.html |
| `/volunteer/` | client-satisfaction-survey/index.html |
| `/programs/green-built-homes/register-green-built-nc-homes/` | duke-expands-rnc-rebate-into-duke-carolinas-territory/index.html |
| `/venue/` | event/2025-green-built-alliance-magazine-launch-party/index.html |
| `/event/bhp-community-council/2025-02-05/` | event/2025-green-built-alliance-magazine-launch-party/index.html |
| `/venue/wedge-brewery-at-foundation/` | event/annual-member-appreciation-networking-party/index.html |
| `/venue/mccormick-field/` | event/asheville-tourists-nonprofit-night/index.html |
| `/event/bhp-community-engagement/2023-08-23/` | event/asheville-tourists-nonprofit-night/index.html |
| `/series/blue-horizons-project-community-council-2/` | event/bhp-community-council/2023-09-06/index.html |
| `/series/bhpcc-community-engagement-subcommittee-2/` | event/bhp-community-engagement/2023-07-26/index.html |
| `/series/bhpcc-initiatives-subcommittee/` | event/bhp-initiatives-committee/index.html |
| `/series/blue-horizons-project-community-council/` | event/blue-horizons-project-community-council/index.html |
| `/organizer/` | event/building-science-avl-presents-advances-in-spray-foam/index.html |
| `/venue/rad-brewing-company/` | event/building-science-avl-presents-advances-in-spray-foam/index.html |
| `/event/bhp-community-council/2024-07-03/` | event/community-outreach/index.html |
| `/event/bhp-community-engagement/2024-07-24/` | event/community-outreach-3/index.html |
| `/earthday5k/` | event/earth-day-5k/index.html |
| `/venue/carrier-park/` | event/earth-day-5k/index.html |
| `/programs/continuing-education/regenerative-professional-accreditation/` | event/edible-and-native-plants-of-wnc/index.html |
| `/energysaversnetwork/volunteer/preparation/` | event/esn/index.html |
| `/venue/arden-nc-28704/` | event/esn/index.html |
| `/venue/asheville-nc-28803/` | event/esn-1363/index.html |
| `/event/bhp-community-engagement/2024-08-28/` | event/esn-1363/index.html |
| `/venue/swannanoa-nc-28778/` | event/esn-1504/index.html |
| `/event/bhp-community-engagement/2024-03-27/` | event/esn-1506-see-notes/index.html |
| `/event/bhp-community-council/2024-04-03/` | event/esn-1541-see-notes/index.html |
| `/venue/weaverville-nc-28787/` | event/esn-1545/index.html |
| `/event/bhp-community-engagement/2024-04-24/` | event/esn-1547/index.html |
| `/event/bhp-community-council/2024-05-01/` | event/esn-1559-see-notes/index.html |
| `/event/bhp-community-engagement/2024-05-22/` | event/esn-1566/index.html |
| `/event/bhp-community-council/2024-06-05/` | event/esn-1571-see-notes/index.html |
| `/event/bhp-community-engagement/2024-06-26/` | event/esn-1574/index.html |
| `/event/bhp-community-council/2024-09-04/` | event/esn-1612-see-notes/index.html |
| `/event/bhp-community-engagement/2023-12-27/` | event/esn-360/index.html |
| `/event/bhp-community-engagement/2023-10-25/` | event/esn-4/index.html |
| `/event/bhp-community-engagement/2024-09-25/` | event/esn-job/index.html |
| `/event/bhp-community-engagement/2024-10-23/` | event/esn-job-11/index.html |
| `/event/bhp-community-council/2024-10-02/` | event/esn-job-7/index.html |
| `/venue/hi-wire-brewing-rad-beer-garden/` | event/esn-volunteer-appreciation-2023-party/index.html |
| `/venue/fairview-nc-28730/` | event/esn126/index.html |
| `/venue/candler-nc/` | event/esn1419/index.html |
| `/event/bhp-community-council/2023-11-01/` | event/esn1448-2/index.html |
| `/event/bhp-community-engagement/2023-11-22/` | event/esn1467/index.html |
| `/event/bhp-community-council/2023-12-06/` | event/esn1476/index.html |
| `/event/bhp-community-engagement/2024-01-24/` | event/esn1486-2/index.html |
| `/event/bhp-community-council/2024-01-03/` | event/esn1487/index.html |
| `/event/bhp-community-council/2024-02-07/` | event/esn1514/index.html |
| `/event/bhp-community-engagement/2024-02-28/` | event/esn1528/index.html |
| `/event/bhp-community-council/2024-03-06/` | event/esn1530/index.html |
| `/venue/new-belgium-brewing/` | event/gba-fall-happy-hour-meetup/index.html |
| `/series/happy-hour-meetup-2/` | event/summer-2023-happy-hour-meetup/index.html |
| `/event/bhp-community-council/2024-08-07/` | event/summer-happy-hour-meetup/index.html |
| `/venue/12-baskets-cafe/` | event/windows-workshop/index.html |
| `/series/happy-hour-meetup/` | event/winter-2024-happy-hour-meetup/index.html |
| `/regenerative-certification/` | events/regenerative-professional-accreditation/index.html |
| `/coulda-woulda-shoulda-flawed-reasons-why-people-dont-use-green-building-certifications/` | five-mistakes-that-green-building-certifications-can-catch/index.html |
| `/programs/` | five-simple-ways-to-support-green-building-this-giving-season/index.html |
| `/programs/green-built-homes` | gba-launches-green-built-homes-updates-new-professional-accreditation/index.html |
| `/programs/green-built-homes/checklist-program-documents/` | gba-launches-green-built-homes-updates-new-professional-accreditation/index.html |
| `/programs/continuing-education/` | gba-launches-green-built-homes-updates-new-professional-accreditation/index.html |
| `/donate/` | giving-tuesday-2017-appalachian-offsets-isaac-dickson-matching-grant-asheville/index.html |
| `/green-building-news/page/2/` | green-building-news/index.html |
| `/green-building-news/page/57/` | green-building-news/index.html |
| `/resources/videos/` | green-building-resources/education/index.html |
| `/reduceandelectrify` | green-building-resources/energy-tax-credits/index.html |
| `/resources/alternative-renewable-energy/` | green-building-resources/index.html |
| `/green-building-resources/financial-incentives/` | green-building-resources/index.html |
| `/directory/directory-archives/` | green-building-resources/sustainable-building-materials/index.html |
| `/green-built-homes/green-built-certifications/` | green-built-homes/green-built-certification-levels/index.html |
| `/green-built-homes/green-built-certifications` | green-built-homes/green-built-certifications-current/index.html |
| `/Users/groutta/AppData/Local/Microsoft/Windows/Temporary%20Internet%20Files/Content.Outlook/1J0Z2SME/regulations.gov` | is-it-just-me/index.html |
| `/green-buiding-classes/` | membership/index.html |
| `/my-account/lost-password/` | my-account/index.html |
| `/category/` | news/index.html |
| `/resources/homeowner/` | news/index.html |
| `/map` | our-2021-year-in-review-adaptation-and-achievement/index.html |
| `/programs/continuing-education/current-class-schedule/` | our-2021-year-in-review-adaptation-and-achievement/index.html |
| `/programs/living-building-challenge/` | residential-green-certification-program-guide/index.html |
| `/energysaversnetwork` | save-energy/index.html |
| `/energysaversnetwork/volunteer/` | support-clean-energy/index.html |
| `/energysaversnetwork/energy-efficiency-apprenticeship/` | support-clean-energy/index.html |
| `/resources/` | the-importance-of-building-science/index.html |
| `/programs/green-built-homes/green-built-participants/` | whats-in-a-green-built-home-a-guide-for-homeowners/index.html |

**Total broken:** 131

## 3. Live vs mirror spot-check (30 samples)

| URL | Title match | Body len ratio | Flag |
|-----|-------------|----------------|------|
| https://www.greenbuilt.org/ | true | 0.992 | ok |
| https://www.greenbuilt.org/directory/wall-system-installers/ | true | 0.997 | ok |
| https://www.greenbuilt.org/green-building-resources/electric-vehicles/ | true | 0.997 | ok |
| https://www.greenbuilt.org/directory/green-restaurants/ | true | 0.997 | ok |
| https://www.greenbuilt.org/share-your-projects-and-expertise-in-2018-green-building-directory/ | false | 0.990 | **REVIEW** |
| https://www.greenbuilt.org/choosing-windows-part2-quantities-and-orientation/ | true | 0.993 | ok |
| https://www.greenbuilt.org/life-on-the-farm-2/ | true | 0.993 | ok |
| https://www.greenbuilt.org/154-indoor-air-quality-is-important-for-buildings/ | true | 0.996 | ok |
| https://www.greenbuilt.org/is-your-kitchen-the-worlds-tiniest-fast-food-restaurant/ | false | 0.990 | **REVIEW** |
| https://www.greenbuilt.org/scott-mcgehee-a-tale-of-two-practices/ | true | 0.996 | ok |
| https://www.greenbuilt.org/hannah-egan-new-opportunities-for-energy-savers-network/ | true | 0.995 | ok |
| https://www.greenbuilt.org/margaret-chandler-fontana-lake-residence/ | true | 0.995 | ok |
| https://www.greenbuilt.org/bridging-sustainable-and-social-gaps-earth-care-fair-share-and-people-care-at-echo-hills-cottages/ | true | 0.995 | ok |
| https://www.greenbuilt.org/tika-vales-caldwell-balancing-nature-and-technology/ | true | 0.995 | ok |
| https://www.greenbuilt.org/198-a-cabin-in-the-woods-green-renovation-meets-historical-preservation/ | true | 0.996 | ok |
| https://www.greenbuilt.org/110-go-with-the-flow/ | true | 0.996 | ok |
| https://www.greenbuilt.org/wordy-words-and-the-wordy-nerds-who-use-them/ | false | 0.996 | **REVIEW** |
| https://www.greenbuilt.org/hot-water-recirculating-loops-the-most-problematic-green-feature-out-there-right-now/ | true | 0.996 | ok |
| https://www.greenbuilt.org/ira-new-clean-electric-vehicle-tax-credit/ | false | 0.989 | **REVIEW** |
| https://www.greenbuilt.org/event/bhp-community-engagement/2023-07-26/ | true | 0.995 | ok |
| https://www.greenbuilt.org/event/esn-4/ | true | 0.992 | ok |
| https://www.greenbuilt.org/event/nonprofit-pint-night-at-hi-wire-rad-beer-garden/ | true | 0.995 | ok |
| https://www.greenbuilt.org/event/esn1522/ | true | 0.991 | ok |
| https://www.greenbuilt.org/event/esn-1549/ | true | 0.991 | ok |
| https://www.greenbuilt.org/event/community-outreach-3/ | true | 0.994 | ok |
| https://www.greenbuilt.org/event/winter-member-social/ | true | 0.994 | ok |
| https://www.greenbuilt.org/author/benjaminashevilledrainage-com/ | true | 0.996 | ok |
| https://www.greenbuilt.org/author/hannahsmokymountainnews-com/ | true | 0.996 | ok |
| https://www.greenbuilt.org/author/laurayummyyards-com/ | true | 0.996 | ok |
| https://www.greenbuilt.org/author/smaherexactwater-com/ | true | 0.996 | ok |

## 4. Summary

- **Sitemap URLs:** 955
- **Manifest URLs:** 1124
- **Missing from mirror:** 2
- **Broken internal links (sample scan):** 131
- **Spot-check flags:** 4
