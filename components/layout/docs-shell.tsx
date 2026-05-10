import type { SidebarGroup } from "@/lib/content/types";
import { SidebarNav } from "@/components/layout/sidebar-nav";

export function DocsShell({ children, sidebarGroups }: { children: React.ReactNode; sidebarGroups: SidebarGroup[] }) {
  return (
    <div className="mx-auto flex max-w-7xl">
      <SidebarNav groups={sidebarGroups} />
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
