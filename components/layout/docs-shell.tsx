import type { SidebarGroup } from "@/lib/content/types";
import { SidebarNav } from "@/components/layout/sidebar-nav";

export function DocsShell({ children, sidebarGroups }: { children: React.ReactNode; sidebarGroups: SidebarGroup[] }) {
  return (
    <div className="mx-auto flex w-full max-w-[90rem]">
      <SidebarNav groups={sidebarGroups} />
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
