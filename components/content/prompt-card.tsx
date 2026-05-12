import Link from "next/link";
import type { Doc } from "@/lib/content/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PromptBlock } from "@/components/content/prompt-block";

export function PromptCard({ doc }: { doc: Doc }) {
  return (
    <Card className="h-full overflow-hidden border-border/70 transition-colors hover:border-primary/40">
      <CardHeader className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Badge className="bg-primary/10 text-primary">Prompt 模板</Badge>
          {doc.tags.slice(0, 3).map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <div className="space-y-2">
          <CardTitle className="text-2xl leading-tight">
            <Link href={doc.route} className="hover:text-primary">
              {doc.title}
            </Link>
          </CardTitle>
          <p className="text-sm leading-6 text-muted-foreground">{doc.excerpt}</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-5">
        {doc.promptTemplate ? (
          <div className="rounded-lg border border-border/70 bg-secondary/40 p-3">
            <div className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">模板预览</div>
            <div className="max-h-40 overflow-hidden text-sm leading-6 text-foreground whitespace-pre-wrap">{doc.promptTemplate}</div>
          </div>
        ) : null}

        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{doc.readingTime} 分钟</span>
          <Link href={doc.route} className="font-medium text-primary hover:underline">
            打开页面
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
