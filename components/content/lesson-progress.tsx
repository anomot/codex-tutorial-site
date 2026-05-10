"use client";

import { useEffect, useMemo, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "codex-lessons-completed";

export function LessonProgress({ slug, total, currentIndex }: { slug: string; total: number; currentIndex: number }) {
  const [completed, setCompleted] = useState<string[]>([]);

  useEffect(() => {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) setCompleted(JSON.parse(raw));
  }, []);

  const done = useMemo(() => completed.includes(slug), [completed, slug]);

  function toggle() {
    const next = done ? completed.filter((item) => item !== slug) : [...completed, slug];
    setCompleted(next);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }

  return (
    <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-border/70 bg-card p-4 text-sm">
      <div className="text-muted-foreground">课程进度：第 {currentIndex + 1} / {total} 课</div>
      <Button variant={done ? "secondary" : "outline"} size="sm" onClick={toggle} className="gap-2">
        <CheckCircle2 className="h-4 w-4" />
        {done ? "已标记完成" : "标记为完成"}
      </Button>
    </div>
  );
}
