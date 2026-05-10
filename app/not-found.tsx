import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-bold">页面不存在</h1>
      <p className="mt-4 text-muted-foreground">这个内容可能还没接入路由，或者 slug 已经变化。</p>
      <Button asChild className="mt-6">
        <Link href="/">回到首页</Link>
      </Button>
    </main>
  );
}
