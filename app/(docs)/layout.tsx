import { DocsShell } from "@/components/layout/docs-shell";
import { getSidebarGroups } from "@/lib/content/queries";

export default async function DocsLayout({ children }: { children: React.ReactNode }) {
  const sidebarGroups = await getSidebarGroups();

  return <DocsShell sidebarGroups={sidebarGroups}>{children}</DocsShell>;
}
