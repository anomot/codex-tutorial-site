import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl px-6 py-14 lg:px-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">关于这个项目</h1>
        <p className="text-lg text-muted-foreground">
          这是一个围绕 OpenAI Codex 的中文教程站骨架，目标是把学习路线、案例库、Wiki、Prompt 模板与调研内容整合到统一的信息架构里。
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader><CardTitle>为什么做这个站</CardTitle></CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>让 Codex 的知识不只停留在零散文档里，而是有完整的学习路径与工作流沉淀。</p>
            <p>既适合新手快速入门，也适合已经在做前端、移动端、MCP、内容生产的用户回查。</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>当前骨架目标</CardTitle></CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>先把 Next.js、内容层、导航、TOC、搜索、深色模式、复制按钮和进度体验搭起来。</p>
            <p>后续再逐步增强 MDX 能力、搜索体验、完成度追踪和可视化内容块。</p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
