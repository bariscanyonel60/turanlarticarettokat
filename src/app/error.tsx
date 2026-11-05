"use client";

export default function ErrorPage({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
      <h1 className="font-display text-4xl tracking-[-0.04em] text-navy">
        Sayfa şu an açılamadı
      </h1>
      <p className="mt-4 max-w-xl text-base leading-7 text-ink-soft">
        Bir sorun oluştu. Yeniden deneyebilir veya telefonla bize ulaşabilirsiniz.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 inline-flex min-h-12 items-center rounded-xl bg-navy px-5 text-sm font-semibold text-cream"
      >
        Yeniden dene
      </button>
    </div>
  );
}
