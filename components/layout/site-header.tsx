import Link from "next/link";
import { Command } from "lucide-react";
import { SearchBox } from "@/components/search/search-box";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { MobileNav } from "@/components/layout/mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <div className="lg:hidden">
          <MobileNav />
        </div>
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="rounded-lg bg-primary/10 p-2 text-primary">
            <Command className="h-4 w-4" />
          </span>
          <span>Codex 从 0 到 1</span>
        </Link>
        <div className="ml-auto flex items-center gap-3">
          <SearchBox />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
