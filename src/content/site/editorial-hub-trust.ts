import type { HomeStat } from "@/lib/content-types";

/**
 * Compact credibility row for /news/ and /green-building-news/ hubs.
 * Reuses messaging aligned with homepage — adjust numbers only after verification.
 */
export const editorialHubImpactStats: HomeStat[] = [
  { value: "Since 2001", label: "Regional nonprofit", detail: "Education, certification & network" },
  { value: "WNC", label: "Primary footprint", detail: "Builders, raters & energy pros" },
  { value: "One hub", label: "Articles → action", detail: "Directory, GBH, Energy Savers, CE" },
];
