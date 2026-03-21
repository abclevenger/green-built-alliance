import { listNativeDirectoryCategories } from "@/content/directory/categories";
import { listNativeDirectoryMemberProfiles } from "@/content/directory/members/registry";
import type { NativeDirectoryMemberProfile, PageCta } from "@/lib/content-types";

/** User-facing goals — maps to directory categories + example members (deterministic). */
export type MatchIntentId =
  | "new-home"
  | "remodel"
  | "save-energy"
  | "design"
  | "rate-verify"
  | "hvac-mechanical"
  | "solar-renewables"
  | "not-sure";

export const MATCH_INTENT_OPTIONS: readonly {
  id: MatchIntentId;
  title: string;
  description: string;
}[] = [
  {
    id: "new-home",
    title: "Build or buy a new home",
    description: "Custom, spec, or community—you want a high-performance new home in WNC.",
  },
  {
    id: "remodel",
    title: "Remodel or upgrade",
    description: "Improve comfort, efficiency, or durability in an existing home.",
  },
  {
    id: "save-energy",
    title: "Save energy & lower bills",
    description: "Practical upgrades, audits, and guidance—Energy Savers territory.",
  },
  {
    id: "design",
    title: "Design & planning",
    description: "Architecture, engineering, or design-build before you break ground.",
  },
  {
    id: "rate-verify",
    title: "Test, rate, or verify performance",
    description: "HERS, blower door, code compliance, or third-party verification.",
  },
  {
    id: "hvac-mechanical",
    title: "Heating, cooling & ventilation",
    description: "Right-sized HVAC, ventilation, and electrification-ready mechanical.",
  },
  {
    id: "solar-renewables",
    title: "Solar or renewables",
    description: "PV, storage, and partners who pair well with an efficient envelope.",
  },
  {
    id: "not-sure",
    title: "Not sure yet",
    description: "Start broad—we’ll point you to builders, consultants, and programs.",
  },
] as const;

type IntentRoute = {
  categorySlugs: readonly string[];
  /** Preferred member legacy IDs (subset of native registry) */
  memberIds: readonly string[];
  programCtas: readonly PageCta[];
};

const INTENT_ROUTING: Record<MatchIntentId, IntentRoute> = {
  "new-home": {
    categorySlugs: ["builders", "architects", "home-energy-raters"],
    memberIds: ["290", "401", "257", "40", "938"],
    programCtas: [
      { href: "/green-built-homes/", label: "Green Built Homes program" },
      { href: "/directory/builders/", label: "Browse certified builders" },
    ],
  },
  remodel: {
    categorySlugs: ["renovators-remodelers", "builders", "architects"],
    memberIds: ["257", "726", "290", "71"],
    programCtas: [
      { href: "/green-building-resources/remodeling/", label: "Remodeling resources" },
      { href: "/directory/renovators-remodelers/", label: "Renovation pros" },
    ],
  },
  "save-energy": {
    categorySlugs: ["home-energy-raters", "hvac-installers", "renewable-energy"],
    memberIds: ["40", "895", "887"],
    programCtas: [
      { href: "/energysaversnetwork/", label: "Energy Savers Network" },
      { href: "/directory/home-energy-raters/", label: "Home energy raters" },
    ],
  },
  design: {
    categorySlugs: ["architects", "engineers", "consultants"],
    memberIds: ["938", "71", "34", "40"],
    programCtas: [
      { href: "/directory/architects/", label: "Architects" },
      { href: "/green-built-homes/", label: "Certification paths" },
    ],
  },
  "rate-verify": {
    categorySlugs: ["home-energy-raters", "home-inspectors", "engineers"],
    memberIds: ["40", "887"],
    programCtas: [
      { href: "/directory/home-energy-raters/", label: "Raters & verification" },
      { href: "/green-built-homes/", label: "Green Built Homes" },
    ],
  },
  "hvac-mechanical": {
    categorySlugs: ["hvac-installers", "electricians", "nc-licensed-plumbers"],
    memberIds: ["895", "967", "944"],
    programCtas: [
      { href: "/directory/hvac-installers/", label: "HVAC installers" },
      { href: "/green-building-resources/heating-cooling-systems/", label: "Heating & cooling guide" },
    ],
  },
  "solar-renewables": {
    categorySlugs: ["renewable-energy", "electricians", "home-energy-raters"],
    memberIds: ["40", "887"],
    programCtas: [
      { href: "/directory/renewable-energy/", label: "Renewable energy partners" },
      { href: "/green-building-resources/alternative-renewable-energy/", label: "Renewables resources" },
    ],
  },
  "not-sure": {
    categorySlugs: ["builders", "consultants", "home-energy-raters"],
    memberIds: ["290", "887", "40"],
    programCtas: [
      { href: "/directory/", label: "Browse directory" },
      { href: "/energysaversnetwork/", label: "Energy Savers Network" },
    ],
  },
};

export type MatchmakingMemberCard = {
  legacyMemberId: string;
  organizationName: string;
  roleLabel: string;
  path: string;
  location?: string;
  featured?: boolean;
  badges?: readonly string[];
};

function sortMembers(a: NativeDirectoryMemberProfile, b: NativeDirectoryMemberProfile): number {
  const fa = a.featured ? 0 : 1;
  const fb = b.featured ? 0 : 1;
  if (fa !== fb) return fa - fb;
  return (a.listingPriority ?? 100) - (b.listingPriority ?? 100);
}

/** Resolve recommended members for an intent (native registry only). */
export function getRecommendedMembersForIntent(intent: MatchIntentId): NativeDirectoryMemberProfile[] {
  const route = INTENT_ROUTING[intent];
  const byId = new Map(listNativeDirectoryMemberProfiles().map((m) => [m.legacyMemberId, m]));
  const picked: NativeDirectoryMemberProfile[] = [];
  for (const id of route.memberIds) {
    const m = byId.get(id);
    if (m) picked.push(m);
  }
  return [...picked].sort(sortMembers).slice(0, 6);
}

export function getCategoryLinksForIntent(intent: MatchIntentId): { slug: string; title: string; path: string }[] {
  const route = INTENT_ROUTING[intent];
  const all = listNativeDirectoryCategories();
  return route.categorySlugs
    .map((slug) => all.find((c) => c.slug === slug))
    .filter((c): c is NonNullable<typeof c> => c != null)
    .map((c) => ({ slug: c.slug, title: c.title, path: c.path }));
}

export function getProgramCtasForIntent(intent: MatchIntentId): PageCta[] {
  return [...INTENT_ROUTING[intent].programCtas];
}

export function toMatchmakingMemberCard(m: NativeDirectoryMemberProfile): MatchmakingMemberCard {
  return {
    legacyMemberId: m.legacyMemberId,
    organizationName: m.organizationName,
    roleLabel: m.roleLabel,
    path: m.path,
    location: m.location,
    featured: m.featured,
    badges: m.badges,
  };
}

export function isMatchIntentId(v: string | null | undefined): v is MatchIntentId {
  return v != null && Object.hasOwn(INTENT_ROUTING, v);
}

/** Pre-select matchmaking from a directory category hub. */
export function suggestedIntentForDirectorySlug(slug: string): MatchIntentId {
  const map: Record<string, MatchIntentId> = {
    builders: "new-home",
    architects: "design",
    "renovators-remodelers": "remodel",
    "home-energy-raters": "rate-verify",
    "hvac-installers": "hvac-mechanical",
    "renewable-energy": "solar-renewables",
    "home-inspectors": "rate-verify",
    consultants: "not-sure",
    engineers: "design",
    electricians: "hvac-mechanical",
  };
  return map[slug] ?? "not-sure";
}
