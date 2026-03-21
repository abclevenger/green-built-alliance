"use client";

import type { MegaMenuGroup, MegaMenuSpec, NavItem } from "@/lib/content-types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

function normalizeTrailingSlash(href: string): string {
  const [path] = href.split("#");
  if (path === "/" || path === "") return "/";
  return path.endsWith("/") ? path : `${path}/`;
}

const SECTION_PREFIX_HREFS: readonly string[] = [
  "/directory/",
  "/events/",
  "/green-built-homes/",
  "/green-building-news/",
  "/magazine/",
  "/news/",
  "/energysaversnetwork/",
  "/faq/",
  "/find-a-pro/",
  "/about-green-built-alliance/",
  "/support-our-work/",
  "/search/",
];

function isLinkActive(pathname: string, itemHref: string): boolean {
  const [path, hash] = itemHref.split("#");
  if (hash) return false;
  const normHref = normalizeTrailingSlash(path || "/");
  const normPath = normalizeTrailingSlash(pathname || "/");
  if (normPath === normHref) return true;
  if (SECTION_PREFIX_HREFS.includes(normHref) && normPath.startsWith(normHref)) return true;
  return false;
}

function isGroupActive(pathname: string, group: MegaMenuGroup): boolean {
  for (const col of group.columns) {
    for (const item of col.items) {
      if (isLinkActive(pathname, item.href)) return true;
    }
  }
  if (group.featured && isLinkActive(pathname, group.featured.href)) return true;
  return false;
}

function MegaMenuLink({
  item,
  onNavigate,
  className,
}: {
  item: NavItem;
  onNavigate?: () => void;
  className: string;
}) {
  const pathname = usePathname() ?? "/";
  const active = isLinkActive(pathname, item.href);
  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      className={
        active
          ? `${className} font-semibold text-[color:var(--gb-accent-deep)]`
          : `${className} text-[color:var(--gb-text)] hover:text-[color:var(--gb-accent-deep)]`
      }
      aria-current={active ? "page" : undefined}
    >
      {item.label}
    </Link>
  );
}

export function SiteHeaderClient({
  siteName,
  logoSrc,
  megaNav,
}: {
  siteName: string;
  logoSrc: string;
  megaNav: MegaMenuSpec;
}) {
  const pathname = usePathname() ?? "/";
  const [openId, setOpenId] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);
  const mobileCloseRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  const clearCloseTimer = useCallback(() => {
    if (closeTimer.current != null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    clearCloseTimer();
    closeTimer.current = window.setTimeout(() => setOpenId(null), 200);
  }, [clearCloseTimer]);

  const closeAll = useCallback(() => {
    clearCloseTimer();
    setOpenId(null);
    setMobileOpen(false);
  }, [clearCloseTimer]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAll();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [closeAll]);

  useEffect(() => {
    closeAll();
  }, [pathname, closeAll]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      mobileCloseRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!openId) return;
    const onPointerDown = (e: PointerEvent) => {
      const el = e.target;
      if (!(el instanceof Node)) return;
      if (headerRef.current && !headerRef.current.contains(el)) setOpenId(null);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [openId]);

  const openGroup = openId ? megaNav.groups.find((g) => g.id === openId) : null;

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 relative border-b border-[color:var(--gb-border)] bg-[color:var(--gb-surface)]/95 shadow-sm backdrop-blur-md backdrop-saturate-150"
      onMouseLeave={scheduleClose}
    >
      <div
        className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:gap-4"
        onMouseEnter={clearCloseTimer}
      >
        <Link
          href="/"
          className="flex min-h-11 min-w-0 shrink-0 items-center gap-2 rounded-md p-1 -m-1"
        >
          <Image
            src={logoSrc}
            alt={`${siteName} logo`}
            width={331}
            height={70}
            className="h-9 w-auto max-w-[min(100%,240px)] md:h-10 md:max-w-[280px]"
            priority
            sizes="(max-width: 768px) 200px, 280px"
          />
          <span className="sr-only">{siteName} home</span>
        </Link>

        <nav aria-label="Primary" className="hidden min-w-0 flex-1 justify-end lg:flex">
          <ul className="flex flex-wrap items-center justify-end gap-1">
            {megaNav.groups.map((group) => {
              const groupActive = isGroupActive(pathname, group);
              const expanded = openId === group.id;
              return (
                <li key={group.id} className="relative">
                  <button
                    type="button"
                    className={
                      expanded || groupActive
                        ? "inline-flex min-h-11 items-center rounded-md px-3 py-2 text-sm font-semibold text-[color:var(--gb-accent-deep)] ring-1 ring-[color:var(--gb-accent)]/35 ring-inset"
                        : "inline-flex min-h-11 items-center rounded-md px-3 py-2 text-sm font-semibold text-[color:var(--gb-text-muted)] transition hover:text-[color:var(--gb-accent-deep)]"
                    }
                    aria-expanded={expanded}
                    aria-controls={`mega-panel-${group.id}`}
                    aria-haspopup="true"
                    onMouseEnter={() => {
                      clearCloseTimer();
                      setOpenId(group.id);
                    }}
                    onFocus={() => {
                      clearCloseTimer();
                      setOpenId(group.id);
                    }}
                    onClick={() => setOpenId(expanded ? null : group.id)}
                  >
                    {group.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-[color:var(--gb-border)] bg-[color:var(--gb-surface)] text-sm font-bold text-[color:var(--gb-text)] lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-mega-menu"
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? (
            <span aria-hidden>✕</span>
          ) : (
            <span className="flex flex-col gap-1.5" aria-hidden>
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
            </span>
          )}
          <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      {openGroup ? (
        <div
          id={`mega-panel-${openGroup.id}`}
          role="region"
          aria-label={`${openGroup.label} submenu`}
          className="absolute left-0 right-0 top-full z-50 hidden border-t border-[color:var(--gb-border)] bg-[color:var(--gb-surface)] shadow-lg lg:block"
          onMouseEnter={clearCloseTimer}
        >
          <div className="mx-auto max-w-6xl px-4 py-8">
            <div
              className={
                openGroup.featured
                  ? "grid gap-10 lg:grid-cols-[1fr_minmax(12rem,16rem)]"
                  : "grid gap-8"
              }
            >
              <div
                className={`grid gap-8 ${openGroup.columns.length > 1 ? "sm:grid-cols-2 lg:grid-cols-3" : "max-w-xl"}`}
              >
                {openGroup.columns.map((col) => (
                  <div key={col.heading}>
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[color:var(--gb-text-muted)]">
                      {col.heading}
                    </p>
                    <ul className="mt-4 space-y-1">
                      {col.items.map((item) => (
                        <li key={item.href}>
                          <MegaMenuLink
                            item={item}
                            onNavigate={() => setOpenId(null)}
                            className="block rounded-md py-2.5 pr-2 text-sm leading-snug"
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              {openGroup.featured ? (
                <div className="rounded-2xl border border-[color:var(--gb-border)] bg-[color:var(--gb-surface-muted)]/80 p-6">
                  <p className="text-sm font-bold text-[color:var(--gb-text)]">{openGroup.featured.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--gb-text-muted)]">
                    {openGroup.featured.description}
                  </p>
                  <Link
                    href={openGroup.featured.href}
                    onClick={() => setOpenId(null)}
                    className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-[color:var(--gb-accent)] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[color:var(--gb-accent-deep)]"
                  >
                    {openGroup.featured.ctaLabel}
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}

      {mobileOpen ? (
        <div
          id="mobile-mega-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Main navigation"
          className="fixed inset-0 z-[60] flex flex-col bg-[color:var(--gb-surface)] lg:hidden"
        >
          <div className="flex items-center justify-between border-b border-[color:var(--gb-border)] px-4 py-3">
            <span className="text-sm font-bold text-[color:var(--gb-text)]">Menu</span>
            <button
              ref={mobileCloseRef}
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-[color:var(--gb-border)] text-lg font-bold"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 pb-16 pt-2">
            {megaNav.groups.map((group) => (
              <details key={group.id} className="group border-b border-[color:var(--gb-border)]">
                <summary className="cursor-pointer list-none py-4 text-base font-bold text-[color:var(--gb-text)] marker:hidden [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-2">
                    {group.label}
                    <span
                      className="text-[color:var(--gb-accent-deep)] transition group-open:rotate-180 motion-reduce:transition-none"
                      aria-hidden
                    >
                      ▼
                    </span>
                  </span>
                </summary>
                <div className="space-y-6 pb-6">
                  {group.columns.map((col) => (
                    <div key={col.heading}>
                      <p className="text-xs font-bold uppercase tracking-wide text-[color:var(--gb-text-muted)]">
                        {col.heading}
                      </p>
                      <ul className="mt-2 space-y-0">
                        {col.items.map((item) => (
                          <li key={item.href}>
                            <MegaMenuLink
                              item={item}
                              onNavigate={() => setMobileOpen(false)}
                              className="block border-b border-[color:var(--gb-border)]/60 py-3.5 text-base"
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  {group.featured ? (
                    <div className="rounded-xl border border-[color:var(--gb-border)] bg-[color:var(--gb-surface-muted)]/60 p-4">
                      <p className="font-bold text-[color:var(--gb-text)]">{group.featured.title}</p>
                      <p className="mt-1 text-sm text-[color:var(--gb-text-muted)]">{group.featured.description}</p>
                      <Link
                        href={group.featured.href}
                        className="mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[color:var(--gb-accent)] px-4 py-2 text-sm font-bold text-white"
                        onClick={() => setMobileOpen(false)}
                      >
                        {group.featured.ctaLabel}
                      </Link>
                    </div>
                  ) : null}
                </div>
              </details>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
