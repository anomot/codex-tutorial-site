import type { ContentSection, Doc } from "@/lib/content/types";
import { DocCard } from "@/components/content/doc-card";
import { LearningPathProgress } from "@/components/content/learning-path-progress";
import { CaseBrowser } from "@/components/content/case-browser";

export function SectionIndexPage({ title, description, docs, section }: { title: string; description: string; docs: Doc[]; section: ContentSection }) {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
      <div className="mb-10 space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
        <p className="max-w-3xl text-lg text-muted-foreground">{description}</p>
        {section === "lessons" ? <LearningPathProgress total={docs.length} /> : null}
      </div>

      {section === "cases" ? (
        <CaseBrowser docs={docs} />
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {docs.map((doc) => (
            <DocCard key={doc.slug} doc={doc} />
          ))}
        </div>
      )}
    </main>
  );
}
