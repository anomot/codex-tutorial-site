import { cache } from "react";
import { getSectionFiles, parseDoc, sortDocs } from "@/lib/content/parser";
import { getSectionTitle, SECTION_DIRS } from "@/lib/content/config";
import type { ContentSection, Doc, SidebarGroup } from "@/lib/content/types";

export const getDocsBySection = cache(async (section: ContentSection) => {
  const files = await getSectionFiles(section);
  const docs = await Promise.all(files.map((file) => parseDoc(section, file)));
  return sortDocs(docs);
});

export const getAllDocs = cache(async () => {
  const collections = await Promise.all(SECTION_DIRS.map((section) => getDocsBySection(section)));
  return collections.flat();
});

export const getDocBySlug = cache(async (section: ContentSection, slug: string) => {
  const docs = await getDocsBySection(section);
  return docs.find((doc) => doc.slug === slug) ?? null;
});

export const getFeaturedDocs = cache(async () => {
  const [lessons, cases, wiki, prompts] = await Promise.all([
    getDocsBySection("lessons"),
    getDocsBySection("cases"),
    getDocsBySection("wiki"),
    getDocsBySection("prompts"),
  ]);

  return {
    lessons: lessons.slice(0, 3),
    cases: cases.slice(0, 3),
    wiki: wiki.slice(0, 3),
    prompts: prompts.slice(0, 3),
  };
});

export const getSidebarGroups = cache(async (): Promise<SidebarGroup[]> => {
  const lessons = await getDocsBySection("lessons");
  return [
    {
      title: "开始",
      items: [{ title: "首页", href: "/" }, { title: "学习路线", href: "/learning-path" }],
    },
    {
      title: "教程章节",
      items: lessons.map((doc) => ({ title: doc.title, href: doc.route })),
    },
    {
      title: "内容库",
      items: [
        { title: "案例库", href: "/cases" },
        { title: "资源库", href: "/resources" },
        { title: "Wiki", href: "/wiki" },
        { title: "Prompt 模板", href: "/prompts" },
        { title: "关于", href: "/about" },
      ],
    },
  ];
});

export const getAdjacentLessons = cache(async (slug: string) => {
  const lessons = await getDocsBySection("lessons");
  const index = lessons.findIndex((doc) => doc.slug === slug);
  if (index === -1) return { previous: null, next: null };
  return {
    previous: lessons[index - 1] ?? null,
    next: lessons[index + 1] ?? null,
  };
});

export async function getRelatedDocs(target: Doc, limit = 3) {
  const all = await getAllDocs();
  return all
    .filter((doc) => doc.slug !== target.slug)
    .map((doc) => ({
      doc,
      score: doc.tags.filter((tag) => target.tags.includes(tag)).length,
    }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((entry) => entry.doc);
}

export async function searchDocs(query: string) {
  const all = await getAllDocs();
  const value = query.trim().toLowerCase();
  if (!value) return [];

  return all.filter((doc) => {
    const haystack = [doc.title, doc.excerpt, doc.tags.join(" "), doc.content, getSectionTitle(doc.section)]
      .join(" ")
      .toLowerCase();
    return haystack.includes(value);
  });
}
