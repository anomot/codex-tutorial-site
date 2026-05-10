import { SectionIndexPage } from "@/components/content/section-index-page";
import { getDocsBySection } from "@/lib/content/queries";

export default async function PromptsPage() {
  const docs = await getDocsBySection("prompts");
  return (
    <SectionIndexPage
      title="Prompt 模板"
      description="围绕 bugfix、review、frontend、MCP、图片/视频与自媒体整理的可复制模板。"
      docs={docs}
      section="prompts"
    />
  );
}
