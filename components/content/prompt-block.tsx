import { CopyButton } from "@/components/content/copy-button";

export function PromptBlock({ value }: { value: string }) {
  return (
    <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div>
          <div className="text-sm font-semibold">Prompt 模板</div>
          <div className="text-xs text-muted-foreground">可以直接复制到 Codex 或其他 LLM 工具里。</div>
        </div>
        <CopyButton value={value} label="复制 Prompt" />
      </div>
      <pre className="overflow-x-auto whitespace-pre-wrap text-sm leading-6 text-foreground"><code>{value}</code></pre>
    </div>
  );
}
