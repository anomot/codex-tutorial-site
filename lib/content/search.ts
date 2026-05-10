import type { Doc } from "@/lib/content/types";

export function buildSearchBlob(doc: Doc) {
  return [doc.title, doc.excerpt, doc.tags.join(" "), doc.content].join(" ").toLowerCase();
}
