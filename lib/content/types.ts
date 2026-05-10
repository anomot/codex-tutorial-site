export type ContentSection = "lessons" | "cases" | "research" | "wiki" | "prompts";

export type Heading = {
  id: string;
  text: string;
  level: 2 | 3 | 4;
};

export type Doc = {
  title: string;
  type: string;
  slug: string;
  updated: string;
  tags: string[];
  section: ContentSection;
  route: string;
  sourcePath: string;
  fileName: string;
  excerpt: string;
  readingTime: number;
  order?: number;
  content: string;
  headings: Heading[];
  promptTemplate?: string;
};

export type SidebarGroup = {
  title: string;
  items: Array<{
    title: string;
    href: string;
  }>;
};
