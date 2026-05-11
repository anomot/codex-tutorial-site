"use client";

import { useMemo, useState } from "react";
import type { Doc } from "@/lib/content/types";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CaseCard } from "@/components/content/case-card";

export function CaseBrowser({ docs }: { docs: Doc[] }) {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const tags = useMemo(() => [...new Set(docs.flatMap((doc) => doc.tags))].slice(0, 24), [docs]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return docs.filter((doc) => {
      const matchesQuery = !q || [doc.title, doc.excerpt, doc.tags.join(" "), doc.content].join(" ").toLowerCase().includes(q);
      const matchesTag = !activeTag || doc.tags.includes(activeTag);
      return matchesQuery && matchesTag;
    });
  }, [docs, query, activeTag]);

  return (
    <div className="space-y-6">
      <Card className="border-border/70 bg-card/80 shadow-soft">
        <CardContent className="space-y-5 p-5 md:p-6">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
            <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="搜索案例标题、标签或正文" />
            <div className="text-sm text-muted-foreground">
              <Badge className="bg-secondary text-secondary-foreground">{filtered.length} / {docs.length} 条</Badge>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              className={`rounded-full border px-3 py-1 text-sm transition-colors ${activeTag === null ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background hover:bg-secondary"}`}
              onClick={() => setActiveTag(null)}
            >
              全部
            </button>
            {tags.map((tag) => (
              <button
                key={tag}
                className={`rounded-full border px-3 py-1 text-sm transition-colors ${activeTag === tag ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background hover:bg-secondary"}`}
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
        {filtered.map((doc) => (
          <CaseCard key={doc.slug} doc={doc} />
        ))}
      </div>

      {!filtered.length ? <div className="rounded-2xl border border-border p-6 text-muted-foreground">没有找到符合条件的案例。</div> : null}
    </div>
  );
}
