import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import type { ContentSection } from "@/lib/content/types";
import { routeFromMarkdownHref } from "@/lib/content/parser";
import { CodeBlock } from "@/components/content/code-block";

export function MarkdownRenderer({ content, section }: { content: string; section: ContentSection }) {
  return (
    <div className="prose prose-slate max-w-none dark:prose-invert prose-headings:scroll-mt-24">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSlug, [rehypeAutolinkHeadings, { behavior: "append" }]]}
        components={{
          a({ href = "", children }) {
            const nextHref = routeFromMarkdownHref(href, section);
            const external = nextHref.startsWith("http");
            if (external) {
              return <a href={nextHref} target="_blank" rel="noreferrer">{children}</a>;
            }
            return <Link href={nextHref}>{children}</Link>;
          },
          pre({ children }) {
            const child = children as React.ReactElement<{ children?: string; className?: string }>;
            const code = typeof child?.props?.children === "string" ? child.props.children.trimEnd() : "";
            const className = child?.props?.className ?? "";
            const language = className.replace("language-", "") || "text";
            return <CodeBlock code={code} language={language} />;
          },
          blockquote({ children }) {
            return <blockquote className="not-prose my-6 rounded-2xl border border-border/70 bg-secondary/40 px-5 py-4 text-sm leading-7 text-foreground">{children}</blockquote>;
          },
          ol({ children }) {
            return <ol className="space-y-3 pl-0">{children}</ol>;
          },
          ul({ children }) {
            return <ul className="space-y-2">{children}</ul>;
          },
          hr() {
            return <hr className="my-8 border-border" />;
          },
          table({ children }) {
            return <div className="overflow-x-auto"><table>{children}</table></div>;
          },
          code({ children, className }) {
            const language = className?.replace("language-", "");
            if (language) return <code className={className}>{children}</code>;
            return <code className="rounded bg-secondary px-1.5 py-0.5 text-[0.92em] text-foreground">{children}</code>;
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
