import type { ReactNode } from "react";
import { CodeBlock } from "@/components/content/code-block";

export function useMDXComponents(components: Record<string, any> = {}) {
  return {
    ...components,
    pre(props: { children?: ReactNode }) {
      const child = props.children as any;
      const code = typeof child?.props?.children === "string" ? child.props.children : "";
      return <CodeBlock code={code} />;
    },
  };
}
