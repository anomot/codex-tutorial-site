import Link from "next/link";
import { ArrowRight, BookOpen, Compass, Library, Sparkles, Shield, Workflow } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getFeaturedDocs } from "@/lib/content/queries";

const featureCards = [
  {
    icon: Compass,
    title: "学习路线",
    description: "按章节推进，从总览、CLI、slash commands 到前端、移动端、MCP 和知识管理。",
  },
  {
    icon: Workflow,
    title: "真实案例",
    description: "围绕真实流程复盘，把 bug 修复、重构、自动化和内容生产讲清楚。",
  },
  {
    icon: Library,
    title: "资源与 Wiki",
    description: "官方资料、社区信号、命令、流程、坑点和方法论都能随时回查。",
  },
  {
    icon: Shield,
    title: "安全与验证",
    description: "强调安全边界、测试验证、上下文工程和可复用 Prompt，不只追求更快。",
  },
];

export default async function HomePage() {
  const featured = await getFeaturedDocs();

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <section className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary">
                Codex 最新版中文从 0 到 1 教程站
              </span>
              <h1 className="max-w-5xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                把 Codex 的学习、案例、Wiki 和 Prompt 模板整理成一个真正可持续迭代的教程站。
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
                帮你在 30 秒内理解这个站教什么、从哪里开始、学完能获得什么能力，以及如何把 Codex 真正用到开发、自媒体和知识管理中。
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/learning-path">
                  开始学习路线
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/prompts">查看 Prompt 模板</Link>
              </Button>
            </div>
          </div>

          <Card className="border-primary/10 bg-gradient-to-br from-primary/5 via-background to-secondary/40 shadow-soft">
            <CardHeader>
              <CardTitle>推荐学习顺序</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <div className="rounded-2xl border border-border/70 bg-background/70 p-4">
                <div className="font-medium text-foreground">1. 从学习路线开始</div>
                <div className="mt-1">先掌握 Codex 的基本心智模型、CLI、Prompt、工作流和安全边界。</div>
              </div>
              <div className="rounded-2xl border border-border/70 bg-background/70 p-4">
                <div className="font-medium text-foreground">2. 再看案例和模板</div>
                <div className="mt-1">用真实案例和可复制模板把知识转成可执行工作流。</div>
              </div>
              <div className="rounded-2xl border border-border/70 bg-background/70 p-4">
                <div className="font-medium text-foreground">3. 最后建立长期方法</div>
                <div className="mt-1">通过上下文工程、测试验证和知识管理，把 Codex 变成长期可复用的系统能力。</div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mt-16 space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-tight">站点结构</h2>
            <p className="max-w-3xl text-muted-foreground">不是堆文档，而是把学习、案例、验证与复用串成一个完整工作台。</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featureCards.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="border-border/70">
                  <CardHeader className="space-y-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm leading-7 text-muted-foreground">{item.description}</CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="mt-16 grid gap-6 xl:grid-cols-4">
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
