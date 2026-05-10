import { Input } from "@/components/ui/input";
import { DocCard } from "@/components/content/doc-card";
import type { Doc } from "@/lib/content/types";

export function SearchResults({ query, results }: { query: string; results: Doc[] }) {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
      <div className="mb-8 space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">搜索</h1>
        <p className="max-w-3xl text-muted-foreground">
          {query ? `关键词 “${query}” 共找到 ${results.length} 条结果。` : "输入关键词，搜索教程、案例、资源、Wiki 和 Prompt 模板。"}
        </p>
        <form action="/search" className="max-w-xl">
          <Input name="q" defaultValue={query} placeholder="继续搜索 Codex 内容" />
        </form>
      </div>
      {results.length ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {results.map((doc) => (
            <DocCard key={doc.slug} doc={doc} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-border p-6 text-muted-foreground">没有找到相关内容。</div>
      )}
    </main>
  );
}
