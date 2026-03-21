import * as cheerio from "cheerio";
import DOMPurify from "isomorphic-dompurify";

/** Rewrite same-origin links to path-only so navigation stays on this deployment. */
export function rewriteWordPressLinks(html: string, wpOrigin: string): string {
  const o = wpOrigin.replace(/\/$/, "");
  const wrapped = `<div id="wp-link-root">${html}</div>`;
  const $ = cheerio.load(wrapped);
  $("#wp-link-root a[href]").each((_, el) => {
    const href = $(el).attr("href");
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:"))
      return;
    if (href.startsWith("/") && !href.startsWith("//")) return;
    try {
      const abs = href.startsWith("//") ? `https:${href}` : href;
      const u = new URL(abs);
      if (u.origin === o) {
        $(el).attr("href", `${u.pathname}${u.search}${u.hash}`);
      }
    } catch {
      /* keep */
    }
  });
  return $("#wp-link-root").html() ?? "";
}

export function sanitizeWordPressHtml(html: string, wpOrigin: string): string {
  const linked = rewriteWordPressLinks(html, wpOrigin);
  return DOMPurify.sanitize(linked, {
    ADD_TAGS: [
      "iframe",
      "source",
      "picture",
      "svg",
      "path",
      "figure",
      "figcaption",
    ],
    ADD_ATTR: [
      "allow",
      "allowfullscreen",
      "frameborder",
      "target",
      "rel",
      "loading",
      "decoding",
      "srcset",
      "sizes",
      "crossorigin",
      "fill",
      "viewBox",
      "xmlns",
      "d",
      "stroke",
      "stroke-width",
      "fill-rule",
      "clip-rule",
      "aria-hidden",
      "role",
    ],
    ALLOW_DATA_ATTR: true,
    WHOLE_DOCUMENT: false,
  });
}
