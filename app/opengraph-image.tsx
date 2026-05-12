import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
const fontData = readFileSync("/System/Library/Fonts/Supplemental/Arial Unicode.ttf");

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background:
            "radial-gradient(circle at top left, rgba(59,130,246,0.25), transparent 36%), radial-gradient(circle at bottom right, rgba(99,102,241,0.25), transparent 36%), linear-gradient(135deg, #0f172a 0%, #111827 50%, #030712 100%)",
          color: "white",
          fontFamily: "ArialUnicode",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 920 }}>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              padding: "10px 18px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.08)",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            {siteConfig.name}
          </div>
          <h1 style={{ fontSize: 68, lineHeight: 1.08, margin: 0, fontWeight: 800 }}>
            把 Codex 的学习、案例、Wiki 和 Prompt 模板整理成一个可持续迭代的网站。
          </h1>
          <p style={{ fontSize: 28, lineHeight: 1.5, margin: 0, color: "rgba(255,255,255,0.82)" }}>
            从 CLI、slash commands、MCP、测试验证到知识管理，建立真正可复用的 AI Coding 工作流。
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "rgba(255,255,255,0.72)" }}>
          <span>Codex Tutorial Site</span>
          <span>0 → 1</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "ArialUnicode", data: fontData, weight: 400 }],
    },
  );
}
