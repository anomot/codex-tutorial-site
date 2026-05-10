"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { SidebarGroup } from "@/lib/content/types";
import { cn } from "@/lib/utils";

export function SidebarNav({ groups }: { groups: SidebarGroup[] }) {
  const pathname = usePathname();

  return (
    <aside className="hidden w-72 shrink-0 border-r border-border/70 lg:block">
      <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto px-4 py-6">
        {groups.map((group) => (
          <div key={group.title} className="mb-8 last:mb-0">
            <div className="mb-3 px-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {group.title}
            </div>
            <div className="space-y-1">
              {group.items.map((item) => {
                const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "block rounded-lg px-3 py-2 text-sm transition-colors hover:bg-secondary",
                      active && "bg-secondary text-foreground",
                    )}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
