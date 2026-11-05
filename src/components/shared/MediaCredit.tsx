const mediaHref = "https://www.bariscanyonel.com";

type MediaCreditProps = {
  tone: "onNavy" | "onPaper";
};

export function MediaCredit({ tone }: MediaCreditProps) {
  return (
    <a
      href={mediaHref}
      target="_blank"
      rel="noopener noreferrer"
      className={
        tone === "onNavy"
          ? "inline-flex min-h-12 items-center justify-center rounded-full bg-cream px-6 text-base font-bold tracking-[0.04em] text-navy"
          : "inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-navy px-6 text-base font-bold tracking-[0.04em] text-cream"
      }
    >
      Media : BCY DİJİTAL
    </a>
  );
}
