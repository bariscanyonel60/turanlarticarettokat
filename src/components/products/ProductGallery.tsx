"use client";

import type { ProductPhoto } from "@/types/product";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

export function ProductGallery({ photos }: { photos: ProductPhoto[] }) {
  const scroller = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const multiple = photos.length > 1;

  function scrollToIndex(next: number) {
    const root = scroller.current;
    if (!root) {
      return;
    }
    const bounded = (next + photos.length) % photos.length;
    root.scrollTo({ left: bounded * root.clientWidth, behavior: "smooth" });
    setIndex(bounded);
  }

  function syncIndex() {
    const root = scroller.current;
    if (!root || root.clientWidth === 0) {
      return;
    }
    setIndex(Math.round(root.scrollLeft / root.clientWidth));
  }

  return (
    <div>
      <div className="relative">
        <div
          ref={scroller}
          onScroll={syncIndex}
          className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-roledescription="carousel"
          aria-label="Ürün görselleri"
        >
          {photos.map((photo, photoIndex) => (
            <div
              key={photo.src}
              className="relative aspect-square w-full shrink-0 snap-center"
              aria-hidden={photoIndex === index ? undefined : true}
            >
              <div className="absolute inset-4 sm:inset-8">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  priority={photoIndex === 0}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
        {multiple ? (
          <>
            <button
              type="button"
              aria-label="Önceki görsel"
              onClick={() => scrollToIndex(index - 1)}
              className="absolute left-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white text-navy shadow-[0_10px_24px_-16px_rgba(12,35,72,0.9)]"
            >
              <ChevronLeft aria-hidden className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Sonraki görsel"
              onClick={() => scrollToIndex(index + 1)}
              className="absolute right-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white text-navy shadow-[0_10px_24px_-16px_rgba(12,35,72,0.9)]"
            >
              <ChevronRight aria-hidden className="size-5" />
            </button>
            <p className="absolute right-3 top-3 rounded-full bg-navy px-3 py-1 text-xs font-bold tracking-[0.08em] text-white">
              {index + 1} / {photos.length}
            </p>
          </>
        ) : null}
      </div>
      {multiple ? (
        <div className="flex gap-2 overflow-x-auto px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {photos.map((photo, photoIndex) => {
            const selected = photoIndex === index;
            return (
              <button
                key={photo.src}
                type="button"
                aria-label={photo.alt}
                aria-current={selected ? "true" : undefined}
                onClick={() => scrollToIndex(photoIndex)}
                className={
                  selected
                    ? "relative size-16 shrink-0 overflow-hidden rounded-xl border-2 border-navy bg-white"
                    : "relative size-16 shrink-0 overflow-hidden rounded-xl border border-navy/15 bg-white opacity-70"
                }
              >
                <Image
                  src={photo.src}
                  alt=""
                  fill
                  sizes="64px"
                  className="object-contain p-1"
                />
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
