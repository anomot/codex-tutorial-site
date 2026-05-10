import { Search } from "lucide-react";

export function SearchBox() {
  return (
    <form action="/search" className="hidden items-center md:flex">
      <label className="relative block">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          name="q"
          placeholder="搜索教程、案例、Wiki、Prompt..."
          className="h-10 w-72 rounded-lg border border-input bg-background pl-10 pr-4 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-primary"
        />
      </label>
    </form>
  );
}
