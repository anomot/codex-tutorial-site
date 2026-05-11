import type { Metadata } from "next";
import { SectionIndexPage } from "@/components/content/section-index-page";
import { getDocsBySection } from "@/lib/content/queries";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "资源库 | Codex 从 0 到 1",
  description: "官方资料、社区信号、教程与调研沉淀，用来支撑课程和案例的长期更新。",
  alternates: { canonical: `${siteConfig.url}/resources` },
};

export default async function ResourcesPage() {
  const docs = await getDocsBySection("research");
  return (
    <SectionIndexPage
      title="资源库"
      description="官方资料、社区信号、教程与调研沉淀，用来支撑课程和案例的长期更新。"
      docs={docs}
      section="research"
    />
  );
}
