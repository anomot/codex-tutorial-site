import { SearchResults } from "@/components/search/search-results";
import { searchDocs } from "@/lib/content/queries";

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const params = await searchParams;
  const q = params.q ?? "";
  const results = await searchDocs(q);
  return <SearchResults query={q} results={results} />;
}
