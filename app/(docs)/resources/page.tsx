import { SectionIndexPage } from "@/components/content/section-index-page";
import { getDocsBySection } from "@/lib/content/queries";

export default async function ResourcesPage() {
  const docs = await getDocsBySection("research");
  return (
    <SectionIndexPage
      title="资源库"
      description="官方资料、社区信号、教程与调研沉淀，用来支撑课程与案例的长期更新。"
      docs={docs}
      section="research"
    />
  );
}
