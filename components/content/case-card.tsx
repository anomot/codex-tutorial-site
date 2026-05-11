import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Doc } from "@/lib/content/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";

export function CaseCard({ doc }: { doc: Doc }) {
  return (
    <Card className="group h-full overflow-hidden border-border/70 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-soft">
      <CardHeader className="space-y-4 p-6">
        <div className="flex flex-wrap gap-2">
          <Badge className="bg-primary/10 text-primary">案例复盘</Badge>
          {doc.tags.slice(0, 3).map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <CardTitle className="text-2xl leading-tight md:text-[1.65rem]">
          <Link href={doc.route} className="hover:text-primary">
            {doc.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-5 px-6 pb-6">
        <p className="text-sm leading-7 text-muted-foreground line-clamp-3">{doc.excerpt}</p>
        <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
          <span>{formatDate(doc.updated)}</span>
          <span>{doc.readingTime} 分钟</span>
          <span>{doc.fileName}</span>
        </div>
        <Link href={doc.route} className="inline-flex items-center text-sm font-medium text-primary hover:underline">
          查看案例
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
}
