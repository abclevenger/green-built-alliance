import { NativeMarketingPageView } from "@/components/NativeMarketingPageView";
import { WordPressArticle } from "@/components/WordPressArticle";
import { resolveCatchAllRoute } from "@/lib/content-source";
import { pageMetadata } from "@/lib/seo";
import { segmentsToPath } from "@/lib/wordpress";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const revalidate = 300;

type Props = { params: Promise<{ slug: string[] }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const path = segmentsToPath(slug);
  const resolved = await resolveCatchAllRoute(slug);
  if (!resolved) return { title: "Not found" };

  if (resolved.kind === "native-marketing") {
    return pageMetadata(resolved.page.seo, { path });
  }

  return {
    title: resolved.doc.title,
    description: `${resolved.doc.title} — Green Built Alliance`,
    alternates: { canonical: path },
  };
}

export default async function CatchAllPage({ params }: Props) {
  const { slug } = await params;
  const resolved = await resolveCatchAllRoute(slug);
  if (!resolved) notFound();

  if (resolved.kind === "native-marketing") {
    return <NativeMarketingPageView page={resolved.page} />;
  }

  // TODO:WP_FALLBACK — delete this branch when all routes are native
  return <WordPressArticle html={resolved.doc.html} />;
}
