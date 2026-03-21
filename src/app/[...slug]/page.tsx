import { DirectoryCategoryView } from "@/components/directory/DirectoryCategoryView";
import { DirectoryMemberProfileView } from "@/components/directory/DirectoryMemberProfileView";
import { NativeMarketingPageView } from "@/components/NativeMarketingPageView";
import { NativePostView } from "@/components/posts/NativePostView";
import { WordPressArticle } from "@/components/WordPressArticle";
import { getNativePostByPath } from "@/content/posts";
import { resolveCatchAllRoute } from "@/lib/content-source";
import type { NativePost } from "@/lib/content-types";
import { pageMetadata } from "@/lib/seo";
import { segmentsToPath } from "@/lib/wordpress";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const revalidate = 300;

function pickMemberId(
  searchParams: Record<string, string | string[] | undefined> | undefined
): string | undefined {
  if (!searchParams) return undefined;
  const raw = searchParams["member-id"];
  if (raw == null) return undefined;
  return Array.isArray(raw) ? raw[0] : raw;
}

type Props = {
  params: Promise<{ slug: string[] }>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { slug } = await params;
  const sp = searchParams ? await searchParams : undefined;
  const path = segmentsToPath(slug);
  const resolved = await resolveCatchAllRoute(slug, { legacyMemberId: pickMemberId(sp) });
  if (!resolved) return { title: "Not found" };

  if (resolved.kind === "native-marketing") {
    return pageMetadata(resolved.page.seo, { path });
  }

  if (resolved.kind === "native-post") {
    const { post } = resolved;
    return pageMetadata(post.seo, {
      path,
      openGraphType: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
    });
  }

  if (resolved.kind === "native-directory-category") {
    return pageMetadata(resolved.category.seo, { path });
  }

  if (resolved.kind === "native-directory-member") {
    return pageMetadata(resolved.profile.seo, { path: resolved.profile.path });
  }

  return {
    title: resolved.doc.title,
    description: `${resolved.doc.title} — Green Built Alliance`,
    alternates: { canonical: path },
  };
}

export default async function CatchAllPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const sp = searchParams ? await searchParams : undefined;
  const resolved = await resolveCatchAllRoute(slug, { legacyMemberId: pickMemberId(sp) });
  if (!resolved) notFound();

  if (resolved.kind === "native-marketing") {
    return <NativeMarketingPageView page={resolved.page} />;
  }

  if (resolved.kind === "native-post") {
    return <NativePostView post={resolved.post} />;
  }

  if (resolved.kind === "native-directory-category") {
    const related = (resolved.category.relatedNativePostPaths ?? [])
      .map((p) => getNativePostByPath(p))
      .filter((p): p is NativePost => p != null);
    return <DirectoryCategoryView category={resolved.category} relatedPosts={related} />;
  }

  if (resolved.kind === "native-directory-member") {
    const related = (resolved.profile.relatedNativePostPaths ?? [])
      .map((p) => getNativePostByPath(p))
      .filter((p): p is NativePost => p != null);
    return <DirectoryMemberProfileView profile={resolved.profile} relatedPosts={related} />;
  }

  // Content-tail: unmigrated WP pages/posts. Plugin/checkout/login URLs are a different class — see
  // `plugin-hosted-paths.ts` + `docs/WORDPRESS_ENDGAME.md` (may still render here if REST matches).
  const articlePath = segmentsToPath(slug);
  return (
    <WordPressArticle
      html={resolved.doc.html}
      legacyKind={resolved.doc.kind}
      articlePath={articlePath}
    />
  );
}
