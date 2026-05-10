import type { ContentSection } from "@/lib/content/types";

export const SECTION_ROUTE_MAP: Record<ContentSection, string> = {
  lessons: "/learning-path",
  cases: "/cases",
  research: "/resources",
  wiki: "/wiki",
  prompts: "/prompts",
};

export const SECTION_TITLE_MAP: Record<ContentSection, string> = {
  lessons: "学习路线",
  cases: "案例库",
  research: "资源库",
  wiki: "Wiki",
  prompts: "Prompt 模板",
};

export const SECTION_DIRS = Object.keys(SECTION_ROUTE_MAP) as ContentSection[];

export function getSectionRoute(section: ContentSection) {
  return SECTION_ROUTE_MAP[section];
}

export function getSectionTitle(section: ContentSection) {
  return SECTION_TITLE_MAP[section];
}

export function routeForDoc(section: ContentSection, slug: string) {
  return `${getSectionRoute(section)}/${slug}`;
}
