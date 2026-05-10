import { SectionIndexPage } from "@/components/content/section-index-page";
import { getDocsBySection } from "@/lib/content/queries";

export default async function CasesPage() {
  const docs = await getDocsBySection("cases");
  return (
    <SectionIndexPage
      title="案例库"
      description="围绕真实工作流整理的案例页，强调从目标、步骤到验证的完整闭环。"
      docs={docs}
      section="cases"
    />
  );
}
