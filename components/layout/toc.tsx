"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Heading } from "@/lib/content/types";
import { cn } from "@/lib/utils";

export function TableOfContents({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState<string>(headings[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target instanceof HTMLElement) {
          setActiveId(visible.target.id);
        }
      },
      { rootMargin: "0px 0px -70% 0px", threshold: [0.1, 0.25, 0.5, 0.75] },
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (!headings.length) return null;

  return (
    <aside className="hidden 2xl:block 2xl:w-64 2xl:shrink-0">
      <div className="sticky top-24 rounded-lg border border-border/70 bg-card p-4">
        <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">目录</div>
        <div className="space-y-2 text-sm">
          {headings.map((heading) => {
            const active = activeId === heading.id;
            return (
              <Link
                key={heading.id}
                href={`#${heading.id}`}
                className={cn(
                  "block rounded-md py-1 text-muted-foreground transition-colors hover:text-foreground",
                  active && "text-foreground",
                )}
                style={{ paddingLeft: `${(heading.level - 2) * 12}px` }}
              >
                {heading.text}
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
