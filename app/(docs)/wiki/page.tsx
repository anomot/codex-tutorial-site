import { SectionIndexPage } from "@/components/content/section-index-page";
import { getDocsBySection } from "@/lib/content/queries";

export default async function WikiPage() {
  const docs = await getDocsBySection("wiki");
  return (
    <SectionIndexPage
      title="Wiki"
      description="概念页、命令页、工作流页和常见坑页，适合在学习路线之外独立回查。"
      docs={docs}
      section="wiki"
    />
  );
}
