import { readFile } from "node:fs/promises";
import path from "node:path";
import fg from "fast-glob";
import matter from "gray-matter";
import { getSectionRoute, routeForDoc, SECTION_DIRS } from "@/lib/content/config";
import type { ContentSection, Doc, Heading } from "@/lib/content/types";
import { readingTimeFromText, slugify, stripMarkdown } from "@/lib/utils";

const CONTENT_ROOT = path.join(process.cwd(), "content");

function extractHeadings(content: string): Heading[] {
  const matches = [...content.matchAll(/^(#{2,4})\s+(.+)$/gm)];
  return matches.map((match) => ({
    level: match[1].length as 2 | 3 | 4,
    text: match[2].trim(),
    id: slugify(match[2].trim()),
  }));
}

function extractPromptTemplate(content: string) {
  const match = content.match(/```(?:text|md|markdown)?\n([\s\S]*?)```/m);
  return match?.[1]?.trim();
}

function extractOrder(section: ContentSection, fileName: string) {
  if (section !== "lessons") return undefined;
  const match = fileName.match(/^(\d+)-/);
  return match ? Number(match[1]) : undefined;
}

function deriveSlug(section: ContentSection, fileName: string, frontmatterSlug?: string) {
  if (frontmatterSlug) return frontmatterSlug;
  const base = fileName.replace(/\.(md|mdx)$/, "");
  if (section === "lessons") return `lesson-${base}`;
  return base;
}

function excerptFromContent(content: string) {
  const lines = content.split(/\r?\n/);
  const relevantStart = lines.findIndex((line) => /^#\s*(核心观点|场景|适用场景|使用场景|核心要点|核心结论)/.test(line.trim()));
  const sourceLines = relevantStart >= 0 ? lines.slice(relevantStart + 1) : lines;
  const excerptLines: string[] = [];

  for (const line of sourceLines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    if (/^#/.test(trimmed)) break;
    if (/^```/.test(trimmed)) break;
    if (/^(来源链接|双向链接|Prompt 示例|可复制模板|可复制 Prompt)/.test(trimmed)) continue;
    excerptLines.push(trimmed);
    if (excerptLines.length >= 3) break;
  }

  const text = stripMarkdown(excerptLines.join(" ")) || stripMarkdown(content);
  return text.length > 100 ? `${text.slice(0, 100)}...` : text;
}

export async function getSectionFiles(section: ContentSection) {
  const pattern = path.join(CONTENT_ROOT, section, "*.{md,mdx}").replace(/\\/g, "/");
  return fg(pattern, { dot: false, onlyFiles: true });
}

export async function parseDoc(section: ContentSection, absolutePath: string): Promise<Doc> {
  const raw = await readFile(absolutePath, "utf8");
  const { data, content } = matter(raw);
  const fileName = path.basename(absolutePath);
  const slug = deriveSlug(section, fileName, typeof data.slug === "string" ? data.slug : undefined);
  const title = typeof data.title === "string" ? data.title : slug;
  const updated = typeof data.updated === "string" ? data.updated : "";
  const type = typeof data.type === "string" ? data.type : section;
  const tags = Array.isArray(data.tags) ? data.tags.map(String) : [];
  const excerpt = typeof data.excerpt === "string" ? data.excerpt : excerptFromContent(content);
  const order = extractOrder(section, fileName);

  return {
    title,
    type,
    slug,
    updated,
    tags,
    section,
    route: routeForDoc(section, slug),
    sourcePath: absolutePath,
    fileName,
    excerpt,
    readingTime: readingTimeFromText(content),
    content,
    headings: extractHeadings(content),
    promptTemplate: extractPromptTemplate(content),
    order,
  };
}

export async function parseAllDocs() {
  const docs: Doc[] = [];
  for (const section of SECTION_DIRS) {
    const files = await getSectionFiles(section);
    for (const file of files) {
      docs.push(await parseDoc(section, file));
    }
  }
  return docs;
}

export function sortDocs<T extends Doc>(docs: T[]) {
  return [...docs].sort((a, b) => {
    if (a.section === "lessons" && b.section === "lessons") {
      return (a.order ?? 9999) - (b.order ?? 9999);
    }
    return a.title.localeCompare(b.title, "zh-CN");
  });
}

export function routeFromMarkdownHref(href: string, currentSection: ContentSection) {
  if (!href || href.startsWith("http") || href.startsWith("#") || href.startsWith("mailto:")) {
    return href;
  }

  const [pathname, hash = ""] = href.split("#");
  const normalized = pathname.replace(/\\/g, "/");
  const withHash = (value: string) => (hash ? `${value}#${hash}` : value);

  const toRoute = (section: ContentSection, filename: string) => {
    const base = filename.replace(/\.(md|mdx)$/, "");
    const slug = section === "lessons" ? `lesson-${base}` : base;
    return withHash(`${getSectionRoute(section)}/${slug}`);
  };

  const match = normalized.match(/(?:\.\.\/|\.\/)?(lessons|cases|research|wiki|prompts)\/([^/]+\.(?:md|mdx))$/);
  if (match) return toRoute(match[1] as ContentSection, match[2]);

  const sameSectionMatch = normalized.match(/^\.\/([^/]+\.(?:md|mdx))$/);
  if (sameSectionMatch) return toRoute(currentSection, sameSectionMatch[1]);

  return href;
}
