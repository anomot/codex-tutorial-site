"use client";

import { useEffect, useState } from "react";

export function ProgressIndicator() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const value = total <= 0 ? 0 : (window.scrollY / total) * 100;
      setProgress(Math.min(100, Math.max(0, value)));
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sticky top-16 z-30 h-1 w-full bg-transparent">
      <div className="h-full bg-primary transition-[width] duration-150" style={{ width: `${progress}%` }} />
    </div>
  );
}
