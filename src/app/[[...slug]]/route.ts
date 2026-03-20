import { readFile } from "fs/promises";
import { join } from "path";
import { existsSync } from "fs";
import type { NextRequest } from "next/server";

export const runtime = "nodejs";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.greenbuilt.org";

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ slug?: string[] }> }
) {
  const { slug } = await context.params;
  const segments = slug ?? [];
  const base = join(process.cwd(), "public", "mirror");
  const filePath =
    segments.length === 0
      ? join(base, "index.html")
      : join(base, ...segments, "index.html");

  if (!existsSync(filePath)) {
    return new Response(
      `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"/><title>Not mirrored</title></head><body><main style="font-family:system-ui;padding:2rem"><h1>Page not in mirror yet</h1><p>This URL has not been crawled into <code>public/mirror/</code>. Run <code>npm run crawl</code> (see README).</p><p><a href="${SITE}/">View live site</a></p></main></body></html>`,
      { status: 404, headers: { "Content-Type": "text/html; charset=utf-8" } }
    );
  }

  const html = await readFile(filePath, "utf8");
  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
