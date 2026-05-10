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
    <div className="prose prose-slate max-w-none dark:prose-invert">
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
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
