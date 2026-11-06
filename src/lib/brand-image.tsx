import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const imageSize = { width: 1200, height: 630 };
export const imageContentType = "image/png";
export const imageAlt = "Tokat Tüp | Turanlar Ticaret, Tokat Merkez tüp hizmeti";

const jakartaBold = readFileSync(
  join(process.cwd(), "src/assets/fonts/PlusJakartaSans-Bold.ttf"),
);

export function createBrandImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FFFFFF",
          padding: "72px",
          fontFamily: "Jakarta",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: 4,
            color: "#0C2348",
          }}
        >
          TURANLAR TİCARET · TOKAT MERKEZ
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 76,
            lineHeight: 1.02,
            color: "#0C2348",
          }}
        >
          <div style={{ display: "flex" }}>Tokat tüp</div>
          <div style={{ display: "flex" }}>siparişi</div>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#4E5968" }}>
          1977&apos;den beri Tokat Merkez
        </div>
      </div>
    ),
    {
      ...imageSize,
      fonts: [
        {
          name: "Jakarta",
          data: jakartaBold,
          weight: 700,
          style: "normal",
        },
      ],
    },
  );
}
