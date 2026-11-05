"use client";

import type { TubeCategoryId } from "@/types/product";
import { useId } from "react";

type Glyph = {
  cx: number;
  top: number;
  width: number;
  height: number;
  light: string;
  mid: string;
  dark: string;
  cap: string;
  guard: number;
};

function CylinderGlyph({ glyph, gradientId }: { glyph: Glyph; gradientId: string }) {
  const rx = glyph.width / 2;
  const ry = Math.max(9, glyph.width * 0.13);
  const left = glyph.cx - rx;

  return (
    <g>
      <ellipse
        cx={glyph.cx}
        cy={glyph.top + glyph.height + 18}
        rx={rx * 0.78}
        ry={11}
        fill="rgba(12,35,72,0.16)"
      />
      <ellipse cx={glyph.cx} cy={glyph.top + glyph.height} rx={rx} ry={ry} fill={glyph.dark} />
      <rect
        x={left}
        y={glyph.top}
        width={glyph.width}
        height={glyph.height}
        fill={`url(#${gradientId})`}
      />
      <rect
        x={left + glyph.width * 0.16}
        y={glyph.top + 10}
        width={Math.max(8, glyph.width * 0.1)}
        height={glyph.height - 18}
        rx={8}
        fill="white"
        opacity="0.28"
      />
      <path
        d={`M ${left - 6} ${glyph.top + glyph.guard} H ${left + glyph.width + 6}`}
        stroke={glyph.dark}
        strokeWidth={glyph.width > 130 ? 9 : 6}
        strokeLinecap="round"
        opacity="0.45"
      />
      <ellipse cx={glyph.cx} cy={glyph.top} rx={rx} ry={ry} fill={glyph.cap} />
      <ellipse cx={glyph.cx} cy={glyph.top} rx={rx * 0.46} ry={ry * 0.5} fill={glyph.dark} />
      <rect
        x={glyph.cx - 7}
        y={glyph.top - ry - 20}
        width={14}
        height={20}
        rx={2}
        fill="#0C2348"
      />
      <rect
        x={glyph.cx - 12}
        y={glyph.top - ry - 26}
        width={24}
        height={7}
        rx={2}
        fill="#D5D8DE"
      />
    </g>
  );
}

const singleGlyphs: Record<TubeCategoryId, Glyph> = {
  "ev-tipi": {
    cx: 120,
    top: 78,
    width: 128,
    height: 188,
    light: "#f3f4f6",
    mid: "#d5d8de",
    dark: "#0c2348",
    cap: "#ffffff",
    guard: 36,
  },
  piknik: {
    cx: 120,
    top: 118,
    width: 156,
    height: 112,
    light: "#ffffff",
    mid: "#e6e8ec",
    dark: "#0c2348",
    cap: "#f3f4f6",
    guard: 28,
  },
  sanayi: {
    cx: 120,
    top: 52,
    width: 104,
    height: 236,
    light: "#e6e8ec",
    mid: "#d5d8de",
    dark: "#081830",
    cap: "#ffffff",
    guard: 42,
  },
  ticari: {
    cx: 120,
    top: 70,
    width: 138,
    height: 196,
    light: "#f3f4f6",
    mid: "#d5d8de",
    dark: "#0c2348",
    cap: "#ffffff",
    guard: 34,
  },
  diger: {
    cx: 120,
    top: 86,
    width: 92,
    height: 168,
    light: "#f3f4f6",
    mid: "#e6e8ec",
    dark: "#0c2348",
    cap: "#ffffff",
    guard: 30,
  },
};

export function CylinderArt({
  variant,
  className,
}: {
  variant: TubeCategoryId;
  className?: string;
}) {
  const rawId = useId().replace(/:/g, "");
  const primary = singleGlyphs[variant];
  const secondary: Glyph | null =
    variant === "diger"
      ? {
          ...singleGlyphs.piknik,
          cx: 168,
          top: 132,
          width: 78,
          height: 96,
          guard: 22,
        }
      : null;
  const shiftedPrimary =
    variant === "diger" ? { ...primary, cx: 86, width: 86, height: 150, top: 96 } : primary;

  return (
    <svg
      viewBox="0 0 240 340"
      className={className}
      role="img"
      aria-hidden
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id={`${rawId}-a`} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor={shiftedPrimary.dark} />
          <stop offset="42%" stopColor={shiftedPrimary.light} />
          <stop offset="100%" stopColor={shiftedPrimary.mid} />
        </linearGradient>
        {secondary ? (
          <linearGradient id={`${rawId}-b`} x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor={secondary.dark} />
            <stop offset="45%" stopColor={secondary.light} />
            <stop offset="100%" stopColor={secondary.mid} />
          </linearGradient>
        ) : null}
      </defs>
      <rect width="240" height="340" fill="transparent" />
      <CylinderGlyph glyph={shiftedPrimary} gradientId={`${rawId}-a`} />
      {secondary ? <CylinderGlyph glyph={secondary} gradientId={`${rawId}-b`} /> : null}
    </svg>
  );
}

const heroGlyphs: Glyph[] = [
  {
    cx: 390,
    top: 78,
    width: 118,
    height: 360,
    light: "#e6e8ec",
    mid: "#d5d8de",
    dark: "#081830",
    cap: "#ffffff",
    guard: 48,
  },
  {
    cx: 250,
    top: 168,
    width: 156,
    height: 292,
    light: "#ffffff",
    mid: "#e6e8ec",
    dark: "#0c2348",
    cap: "#f3f4f6",
    guard: 40,
  },
  {
    cx: 132,
    top: 392,
    width: 168,
    height: 128,
    light: "#f3f4f6",
    mid: "#d5d8de",
    dark: "#0c2348",
    cap: "#ffffff",
    guard: 30,
  },
];

export function HeroComposition({ className }: { className?: string }) {
  const rawId = useId().replace(/:/g, "");

  return (
    <svg
      viewBox="0 0 560 620"
      className={className}
      role="img"
      aria-label="Ev tipi, piknik tipi ve sanayi tipi tüpleri ayırt eden illüstrasyon"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        {heroGlyphs.map((glyph, index) => (
          <linearGradient
            key={glyph.cx}
            id={`${rawId}-${index}`}
            x1="0"
            x2="1"
            y1="0"
            y2="0"
          >
            <stop offset="0%" stopColor={glyph.dark} />
            <stop offset="40%" stopColor={glyph.light} />
            <stop offset="100%" stopColor={glyph.mid} />
          </linearGradient>
        ))}
      </defs>
      <ellipse cx="280" cy="548" rx="210" ry="28" fill="rgba(12,35,72,0.1)" />
      {heroGlyphs.map((glyph, index) => (
        <CylinderGlyph key={glyph.cx} glyph={glyph} gradientId={`${rawId}-${index}`} />
      ))}
    </svg>
  );
}
