import type { Heading } from "@/lib/content/types";
import { slugify } from "@/lib/utils";

export function extractToc(content: string): Heading[] {
  const matches = [...content.matchAll(/^(#{2,4})\s+(.+)$/gm)];
  return matches.map((match) => ({
    level: match[1].length as 2 | 3 | 4,
    text: match[2].trim(),
    id: slugify(match[2].trim()),
  }));
}
