import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Doc } from "@/lib/content/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";

export function DocCard({ doc }: { doc: Doc }) {
  return (
    <Card className="h-full transition-colors hover:border-primary/40">
      <CardHeader className="space-y-3">
        <div className="flex flex-wrap gap-2">
          {doc.tags.slice(0, 3).map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <CardTitle className="text-xl leading-snug">
          <Link href={doc.route} className="hover:text-primary">
            {doc.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm leading-6 text-muted-foreground line-clamp-3">{doc.excerpt}</p>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{formatDate(doc.updated)}</span>
          <span>{doc.readingTime} 分钟</span>
        </div>
        <Link href={doc.route} className="inline-flex items-center text-sm font-medium text-primary">
          打开页面
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
}
