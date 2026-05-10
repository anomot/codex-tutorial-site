import Link from "next/link";
import { ArrowRight, BookOpen, Compass, Library, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getFeaturedDocs } from "@/lib/content/queries";

export default async function HomePage() {
  const featured = await getFeaturedDocs();

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <section className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex rounded-full border border-border bg-secondary px-3 py-1 text-sm text-muted-foreground">
              Codex 最新版中文从 0 到 1 教程站
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              把 Codex 的学习、案例、Wiki 和 Prompt 模板整理成一个可持续迭代的网站骨架。
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              这是一套面向真实工作流的教程站：先学 CLI 和 slash commands，再进入前端、移动端、MCP、Skills、浏览器操作、知识管理、图片/视频和自媒体场景。
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/learning-path">
                  开始学习路线
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/prompts">查看 Prompt 模板</Link>
              </Button>
            </div>
          </div>

          <Card className="border-border/70 bg-card/70 shadow-soft backdrop-blur">
            <CardHeader>
              <CardTitle>站点结构</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <Compass className="mt-0.5 h-4 w-4 text-primary" />
                <div>学习路线：按章节推进，从入门到复杂工作流。</div>
              </div>
              <div className="flex items-start gap-3">
                <BookOpen className="mt-0.5 h-4 w-4 text-primary" />
                <div>案例库：真实流程复盘，包括前端、移动端、MCP、内容生产。</div>
              </div>
              <div className="flex items-start gap-3">
                <Library className="mt-0.5 h-4 w-4 text-primary" />
                <div>资源库与 Wiki：概念、调研、命令、工作流和坑点都能回查。</div>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="mt-0.5 h-4 w-4 text-primary" />
                <div>Prompt 模板：每页都带可复制内容，方便直接复用。</div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <Card>
            <CardHeader><CardTitle>推荐教程</CardTitle></CardHeader>
            <CardContent className="space-y-2 text-sm">
              {featured.lessons.map((doc) => (
                <Link key={doc.slug} href={doc.route} className="block rounded-md px-3 py-2 hover:bg-secondary">
                  {doc.title}
                </Link>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>推荐案例</CardTitle></CardHeader>
            <CardContent className="space-y-2 text-sm">
              {featured.cases.map((doc) => (
                <Link key={doc.slug} href={doc.route} className="block rounded-md px-3 py-2 hover:bg-secondary">
                  {doc.title}
                </Link>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>推荐 Wiki</CardTitle></CardHeader>
            <CardContent className="space-y-2 text-sm">
              {featured.wiki.map((doc) => (
                <Link key={doc.slug} href={doc.route} className="block rounded-md px-3 py-2 hover:bg-secondary">
                  {doc.title}
                </Link>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>推荐模板</CardTitle></CardHeader>
            <CardContent className="space-y-2 text-sm">
              {featured.prompts.map((doc) => (
                <Link key={doc.slug} href={doc.route} className="block rounded-md px-3 py-2 hover:bg-secondary">
                  {doc.title}
                </Link>
              ))}
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
