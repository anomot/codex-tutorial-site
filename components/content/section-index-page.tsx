import type { ContentSection, Doc } from "@/lib/content/types";
import { DocCard } from "@/components/content/doc-card";
import { LearningPathProgress } from "@/components/content/learning-path-progress";
import { CaseBrowser } from "@/components/content/case-browser";
import { ResourceList } from "@/components/content/resource-list";
import { PromptCard } from "@/components/content/prompt-card";
import { SectionPageHeader } from "@/components/content/section-page-header";

export function SectionIndexPage({ title, description, docs, section }: { title: string; description: string; docs: Doc[]; section: ContentSection }) {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
      <div className="mb-10 space-y-4">
        <SectionPageHeader title={title} description={description} count={docs.length} />
        {section === "lessons" ? <LearningPathProgress total={docs.length} /> : null}
      </div>

      {section === "cases" ? (
        <CaseBrowser docs={docs} />
      ) : section === "research" ? (
        <ResourceList docs={docs} />
      ) : section === "prompts" ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
          {docs.map((doc) => (
            <PromptCard key={doc.slug} doc={doc} />
          ))}
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
          {docs.map((doc) => (
            <DocCard key={doc.slug} doc={doc} />
          ))}
        </div>
      )}
    </main>
  );
}
