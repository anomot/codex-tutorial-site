import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function SectionPageHeader({ title, description, count, note }: { title: string; description: string; count?: number; note?: string }) {
  return (
    <Card className="border-border/70 bg-gradient-to-br from-primary/5 via-background to-secondary/30 shadow-soft">
      <CardContent className="space-y-5 p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <Badge className="bg-primary/10 text-primary">内容库</Badge>
          {typeof count === "number" ? <Badge>{count} 条内容</Badge> : null}
        </div>
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
          <p className="max-w-4xl text-lg leading-8 text-muted-foreground">{description}</p>
          {note ? <p className="max-w-4xl text-sm leading-7 text-muted-foreground">{note}</p> : null}
        </div>
      </CardContent>
    </Card>
  );
}
