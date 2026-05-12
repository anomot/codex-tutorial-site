import Link from "next/link";
import { topNavigation } from "@/lib/content/navigation";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-background">
      <div className="mx-auto flex w-full max-w-[90rem] flex-col gap-4 px-4 py-8 text-sm text-muted-foreground sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>Codex 从 0 到 1 中文教程站</p>
        <nav className="flex flex-wrap gap-x-4 gap-y-2">
          {topNavigation.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-foreground">
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
