"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { topNavigation } from "@/lib/content/navigation";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="ghost" size="icon" onClick={() => setOpen(true)} aria-label="打开导航">
        <Menu className="h-5 w-5" />
      </Button>
      {open ? (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-background/95 backdrop-blur lg:hidden">
          <div className="flex items-center justify-between border-b px-4 py-4">
            <div className="font-semibold">导航</div>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <nav className="flex flex-col gap-2 p-4">
            {topNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm hover:bg-secondary"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </>
  );
}
