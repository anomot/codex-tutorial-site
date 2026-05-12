import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
const fontData = readFileSync("/System/Library/Fonts/Supplemental/Arial Unicode.ttf");

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #111827 0%, #0f172a 55%, #1d4ed8 100%)",
          color: "white",
          fontFamily: "ArialUnicode",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 900, padding: 48 }}>
          <div style={{ fontSize: 30, opacity: 0.8 }}>Codex 从 0 到 1 教程网站</div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 72, lineHeight: 1.08, fontWeight: 800 }}>
            <div>学 Codex，</div>
            <div>不只学怎么生成代码，</div>
            <div>还要学怎么验证与沉淀。</div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "ArialUnicode", data: fontData, weight: 400 }],
    },
  );
}
