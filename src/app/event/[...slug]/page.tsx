import { EventDetailView } from "@/components/events/EventDetailView";
import { EventJsonLd } from "@/components/seo/EventJsonLd";
import { fetchEventDetail } from "@/lib/tribe-events";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const revalidate = 300;

function eventPathFromSlugParts(slug: string[]): string {
  const parts = slug.map((s) => decodeURIComponent(s));
  const joined = parts.join("/");
  return `/event/${joined}/`;
}

type Props = { params: Promise<{ slug: string[] }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const detail = await fetchEventDetail(slug);
  if (!detail) return { title: "Event not found" };
  const path = eventPathFromSlugParts(slug);
  const description =
    detail.excerptPlain.length > 155 ? `${detail.excerptPlain.slice(0, 152)}…` : detail.excerptPlain;
  return pageMetadata(
    {
      title: `${detail.title} | Green Built Alliance`,
      description: description || `Event — ${detail.title}`,
      ogImage: detail.imageUrl,
    },
    {
      path,
      openGraphType: "article",
      publishedTime: detail.startAt,
      modifiedTime: detail.endAt ?? detail.startAt,
    }
  );
}

/** Native single event — Tribe REST + sanitized body; registration on `legacyRegistrationUrl`. */
export default async function EventSinglePage({ params }: Props) {
  const { slug } = await params;
  const detail = await fetchEventDetail(slug);
  if (!detail) notFound();
  const path = eventPathFromSlugParts(slug);
  return (
    <>
      <EventJsonLd detail={detail} path={path} />
      <EventDetailView detail={detail} />
    </>
  );
}
