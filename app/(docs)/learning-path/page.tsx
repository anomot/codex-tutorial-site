import { SectionIndexPage } from "@/components/content/section-index-page";
import { getDocsBySection } from "@/lib/content/queries";

export default async function LearningPathPage() {
  const docs = await getDocsBySection("lessons");
  return (
    <SectionIndexPage
      title="学习路线"
      description="按章节推进，从 Codex 总览、CLI、slash commands 到工作流、MCP、前端、移动端和内容生产。"
      docs={docs}
      section="lessons"
    />
  );
}
