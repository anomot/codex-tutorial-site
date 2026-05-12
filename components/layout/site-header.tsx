import Link from "next/link";
import { Command } from "lucide-react";
import { SearchBox } from "@/components/search/search-box";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { MobileNav } from "@/components/layout/mobile-nav";
import { topNavigation } from "@/lib/content/navigation";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto flex h-16 w-full max-w-[90rem] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <div className="lg:hidden">
          <MobileNav />
        </div>
        <Link href="/" className="flex min-w-0 items-center gap-2 font-semibold tracking-tight">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Command className="h-4 w-4" />
          </span>
          <span className="truncate">Codex 从 0 到 1</span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {topNavigation.slice(1, -1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-3">
          <SearchBox />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
