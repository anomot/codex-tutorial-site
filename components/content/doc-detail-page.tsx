import Link from "next/link";
import type { Doc } from "@/lib/content/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import { MarkdownRenderer } from "@/components/content/markdown-renderer";
import { TableOfContents } from "@/components/layout/toc";
import { ProgressIndicator } from "@/components/content/progress-indicator";
import { PromptBlock } from "@/components/content/prompt-block";
import { LessonProgress } from "@/components/content/lesson-progress";
import { getSectionTitle } from "@/lib/content/config";

export function DocDetailPage({ doc, related, previous, next, lessonTotal }: { doc: Doc; related: Doc[]; previous?: Doc | null; next?: Doc | null; lessonTotal?: number }) {
  return (
    <>
      <ProgressIndicator />
      <main className="mx-auto flex max-w-7xl gap-10 px-6 py-10 lg:px-8">
        <article className="min-w-0 flex-1">
          <header className="mb-8 space-y-6">
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-primary/10 text-primary">{getSectionTitle(doc.section)}</Badge>
              {doc.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{doc.title}</h1>
              <p className="max-w-3xl text-lg leading-8 text-muted-foreground">{doc.excerpt}</p>
            </div>

            <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-start">
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span>更新于 {formatDate(doc.updated)}</span>
                <span>{doc.readingTime} 分钟阅读</span>
                <span>{doc.fileName}</span>
              </div>
              {doc.section === "lessons" ? (
                <LessonProgress slug={doc.slug} total={lessonTotal ?? 0} currentIndex={doc.order ?? 0} />
              ) : null}
            </div>

            {doc.promptTemplate ? <PromptBlock value={doc.promptTemplate} /> : null}
          </header>

          <MarkdownRenderer content={doc.content} section={doc.section} />

          {(previous || next) ? (
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {previous ? (
                <Link href={previous.route} className="rounded-2xl border border-border p-4 hover:bg-secondary">
                  <div className="text-xs text-muted-foreground">上一课</div>
                  <div className="mt-1 font-medium">{previous.title}</div>
                </Link>
              ) : <div />}
              {next ? (
                <Link href={next.route} className="rounded-2xl border border-border p-4 text-right hover:bg-secondary">
                  <div className="text-xs text-muted-foreground">下一课</div>
                  <div className="mt-1 font-medium">{next.title}</div>
                </Link>
              ) : null}
            </div>
          ) : null}

          {related.length ? (
            <section className="mt-12">
              <h2 className="mb-4 text-2xl font-semibold">相关内容</h2>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {related.map((item) => (
                  <Card key={item.slug}>
                    <CardHeader>
                      <CardTitle className="text-base">
                        <Link href={item.route} className="hover:text-primary">{item.title}</Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">{item.excerpt}</CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ) : null}
        </article>
        <TableOfContents headings={doc.headings} />
      </main>
    </>
  );
}

