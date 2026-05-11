import { CopyButton } from "@/components/content/copy-button";
import { cn } from "@/lib/utils";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function highlightLine(line: string) {
  const escaped = escapeHtml(line);
  return escaped
    .replace(/(\b(const|let|var|function|return|if|else|for|while|await|async|import|export|from|type|interface|extends|class|new|try|catch|throw|switch|case|break|continue|default)\b)/g, '<span class="text-cyan-300">$1</span>')
    .replace(/(\b(true|false|null|undefined|NaN|Infinity)\b)/g, '<span class="text-amber-300">$1</span>')
    .replace(/("[^"]*"|'[^']*'|`[^`]*`)/g, '<span class="text-emerald-300">$1</span>')
    .replace(/(\b\d+(?:\.\d+)?\b)/g, '<span class="text-amber-200">$1</span>')
    .replace(/(\/\/.*$)/g, '<span class="text-slate-400">$1</span>');
}

function renderHighlighted(code: string) {
  return code
    .split("\n")
    .map((line, index) => `<span class="table-row"><span class="table-cell pr-4 select-none text-right text-slate-500">${index + 1}</span><span class="table-cell">${highlightLine(line || " ")}</span></span>`)
    .join("");
}

function detectVariant(code: string, language?: string) {
  const trimmed = code.trim();
  if (language && language !== "text") return "code" as const;
  if (/^(\/|codex\b|npm\b|pnpm\b|yarn\b|git\b|bun\b)/m.test(trimmed)) return "command" as const;
  if (/\{\{.+\}\}|^目标：|^上下文：|^约束：|^验证：|^完成标准：/m.test(trimmed)) return "prompt" as const;
  return "code" as const;
}

const variantMeta = {
  code: {
    label: "code",
    copyLabel: "复制代码",
    border: "border-border/70",
    header: "border-slate-800 text-slate-300",
  },
  command: {
    label: "command",
    copyLabel: "复制命令",
    border: "border-violet-500/30",
    header: "border-violet-500/20 text-violet-200",
  },
  prompt: {
    label: "prompt",
    copyLabel: "复制 Prompt",
    border: "border-emerald-500/30",
    header: "border-emerald-500/20 text-emerald-200",
  },
};

export function CodeBlock({ code, language }: { code: string; language?: string }) {
  const highlighted = renderHighlighted(code);
  const variant = detectVariant(code, language);
  const meta = variantMeta[variant];

  return (
    <div className={cn("my-6 overflow-hidden rounded-2xl bg-slate-950 text-slate-100", meta.border, "border")}>
      <div className={cn("flex items-center justify-between border-b px-4 py-2 text-xs", meta.header)}>
        <span>{language && language !== "text" ? language : meta.label}</span>
        <CopyButton value={code} label={meta.copyLabel} />
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-6"><code dangerouslySetInnerHTML={{ __html: highlighted }} /></pre>
    </div>
  );
}
