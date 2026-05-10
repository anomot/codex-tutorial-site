import { CopyButton } from "@/components/content/copy-button";

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

export function CodeBlock({ code, language }: { code: string; language?: string }) {
  const highlighted = renderHighlighted(code);

  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-border/70 bg-slate-950 text-slate-100">
      <div className="flex items-center justify-between border-b border-slate-800 px-4 py-2 text-xs text-slate-300">
        <span>{language || "text"}</span>
        <CopyButton value={code} label="复制代码" />
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-6"><code dangerouslySetInnerHTML={{ __html: highlighted }} /></pre>
    </div>
  );
}
