import { notFound } from "next/navigation";
import { DocDetailPage } from "@/components/content/doc-detail-page";
import { getDocBySlug, getRelatedDocs } from "@/lib/content/queries";

export default async function ResourceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = await getDocBySlug("research", slug);
  if (!doc) notFound();
  const related = await getRelatedDocs(doc);
  return <DocDetailPage doc={doc} related={related} />;
}
