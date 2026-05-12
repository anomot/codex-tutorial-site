import Link from "next/link";
import { CheckCircle2, Scale, Shield, Sparkles, Workflow } from "lucide-react";
import type { Doc } from "@/lib/content/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PromptBlock } from "@/components/content/prompt-block";
import { MarkdownRenderer } from "@/components/content/markdown-renderer";

const compareRows = [
  ["工具", "定位", "优势", "注意点"],
  ["Codex", "结构化 coding workflow", "更适合从任务、验证到沉淀的完整流程", "需要建立稳定的上下文和验证习惯"],
  ["Claude Code", "强交互式 coding assistant", "在复杂解释、对话推进和工具编排上很强", "需要清晰控制任务边界和上下文长度"],
  ["Cursor", "IDE 内增强编辑", "编辑回路短，上手快", "更偏 IDE 体验，不等于完整工作流系统"],
  ["GitHub Copilot", "代码补全和轻量协作", "补全与常规开发配合自然", "复杂任务拆解和流程控制较弱"],
  ["Devin / 其他代理", "更强调自动化委托", "适合长任务想象空间", "稳定性、透明度、验证链条要单独评估"],
];

const selectionCards = [
  {
    icon: Workflow,
    title: "如果你重视流程闭环",
    description: "优先考虑 Codex，因为它更适合把计划、执行、验证和沉淀串起来。",
  },
  {
    icon: Sparkles,
    title: "如果你重视即时编辑体验",
    description: "Cursor / Copilot 更适合轻量级、快速反馈的 IDE 内工作。",
  },
  {
    icon: Shield,
    title: "如果你重视边界控制",
    description: "选择可以明确管理权限、验证、分支和规则文件的工具组合。",
  },
];

export function ComparisonPage({ doc }: { doc: Doc }) {
  return (
    <main className="w-full px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <div className="space-y-6">
        <div className="space-y-4">
          <Badge className="bg-primary/10 text-primary">选型指南</Badge>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{doc.title}</h1>
          <p className="max-w-3xl text-lg leading-8 text-muted-foreground">{doc.excerpt}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {selectionCards.map((item) => {
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

        <Card className="border-border/70 shadow-soft">
          <CardHeader>
            <CardTitle>快速选型矩阵</CardTitle>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr>
                  {compareRows[0].map((cell) => (
                    <th key={cell} className="border-b border-border px-4 py-3 text-left font-semibold text-foreground">{cell}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compareRows.slice(1).map((row) => (
                  <tr key={row[0]} className="align-top">
                    {row.map((cell, index) => (
                      <td key={cell + index} className="border-b border-border px-4 py-3 text-muted-foreground">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        {doc.promptTemplate ? <PromptBlock value={doc.promptTemplate} /> : null}

        <Card className="border-border/70">
          <CardHeader>
            <CardTitle>如何使用这页</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-7 text-muted-foreground">
            <div className="flex items-start gap-3"><CheckCircle2 className="mt-1 h-4 w-4 text-primary" />先根据自己的使用场景，而不是只看模型名做判断。</div>
            <div className="flex items-start gap-3"><CheckCircle2 className="mt-1 h-4 w-4 text-primary" />把入口、上下文、验证、扩展、协作和成本作为固定比较维度。</div>
            <div className="flex items-start gap-3"><CheckCircle2 className="mt-1 h-4 w-4 text-primary" />最终选型要落到“我接下来 30 天会怎么真正使用它”。</div>
          </CardContent>
        </Card>

        <div className="rounded-lg border border-border/70 bg-card p-6">
          <MarkdownRenderer content={doc.content} section={doc.section} />
        </div>

        <div className="flex flex-wrap gap-3">
          <Link href="/resources" className="rounded-lg border border-border px-4 py-2 text-sm hover:bg-secondary">返回资源库</Link>
          <Link href="/learning-path" className="rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground hover:opacity-90">开始学习路线</Link>
        </div>
      </div>
    </main>
  );
}
