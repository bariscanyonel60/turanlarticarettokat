"use client";

import { cn } from "@/lib/cn";
import { ZoomIn } from "lucide-react";
import { useState, type MouseEvent, type ReactNode } from "react";

export function HoverZoom({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const [point, setPoint] = useState<{ x: number; y: number } | null>(null);

  function track(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) {
      return;
    }
    setPoint({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    });
  }

  return (
    <div
      className={cn("group/zoom relative h-full w-full cursor-zoom-in overflow-hidden", className)}
      onMouseEnter={track}
      onMouseMove={track}
      onMouseLeave={() => setPoint(null)}
    >
      <div
        className={cn(
          "h-full w-full",
          point ? undefined : "transition-transform duration-200 motion-reduce:transition-none",
        )}
        style={
          point
            ? { transform: "scale(1.85)", transformOrigin: `${point.x}% ${point.y}%` }
            : undefined
        }
      >
        {children}
      </div>
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute right-3 bottom-3 z-10 hidden items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-navy shadow-[0_10px_24px_-16px_rgba(12,35,72,0.9)] transition-opacity md:inline-flex",
          point ? "opacity-100" : "opacity-0 group-hover/zoom:opacity-100",
        )}
      >
        <ZoomIn aria-hidden className="size-3.5" />
        Yakınlaştır
      </span>
    </div>
  );
}
