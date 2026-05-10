import { notFound } from "next/navigation";
import { DocDetailPage } from "@/components/content/doc-detail-page";
import { getAdjacentLessons, getDocBySlug, getRelatedDocs } from "@/lib/content/queries";

export default async function LessonDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = await getDocBySlug("lessons", slug);
  if (!doc) notFound();
  const related = await getRelatedDocs(doc);
  const adjacent = await getAdjacentLessons(slug);
  return <DocDetailPage doc={doc} related={related} previous={adjacent.previous} next={adjacent.next} />;
}
