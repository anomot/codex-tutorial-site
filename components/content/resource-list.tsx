import Link from "next/link";
import type { Doc } from "@/lib/content/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";

export function ResourceList({ docs }: { docs: Doc[] }) {
  return (
    <div className="space-y-4">
      {docs.map((doc) => (
        <Card key={doc.slug} className="transition-colors hover:border-primary/40">
          <CardHeader className="space-y-3">
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-primary/10 text-primary">资源库</Badge>
              {doc.tags.slice(0, 4).map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
            <CardTitle className="text-2xl leading-snug">
              <Link href={doc.route} className="hover:text-primary">{doc.title}</Link>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="max-w-4xl text-sm leading-7 text-muted-foreground">{doc.excerpt}</p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
              <span>{formatDate(doc.updated)}</span>
              <span>{doc.readingTime} 分钟阅读</span>
              <span>{doc.fileName}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
