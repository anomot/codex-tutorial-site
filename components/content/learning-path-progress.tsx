"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "codex-lessons-completed";

export function LearningPathProgress({ total }: { total: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      setCount((JSON.parse(raw) as string[]).length);
    }
  }, []);

  return (
    <div className="rounded-2xl border border-border/70 bg-card p-4 text-sm text-muted-foreground">
      当前已完成 {count} / {total} 节课
    </div>
  );
}
