"use client";

import { Logo } from "@/components/brand/Logo";
import { useMenu } from "@/components/layout/Providers";
import { MediaCredit } from "@/components/shared/MediaCredit";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { business, hoursLabel } from "@/data/business";
import { isItemActive, isNavActive, navItems, type NavItem } from "@/data/navigation";
import { cn } from "@/lib/cn";
import { generalWhatsappUrl } from "@/lib/whatsapp";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type CSSProperties } from "react";

export function Header({ showGallery = true }: { showGallery?: boolean }) {
  const pathname = usePathname();
  const { open, setOpen } = useMenu();
  const [scrolled, setScrolled] = useState(false);
  const [corporateOpen, setCorporateOpen] = useState(false);
  const [seenPath, setSeenPath] = useState(pathname);
  const items = showGallery ? navItems : navItems.filter((item) => item.href !== "/galeri");

  if (seenPath !== pathname) {
    setSeenPath(pathname);
    setCorporateOpen(false);
  }

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    if (!corporateOpen) {
      return;
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setCorporateOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [corporateOpen]);

  const headerHeight = scrolled ? "4.35rem" : "5.15rem";

  return (
    <div className="sticky top-0 z-50" style={{ "--header-h": headerHeight } as CSSProperties}>
      <div className="hidden border-b border-white/10 bg-navy text-cream md:block">
        <Container className="flex h-11 items-center justify-between gap-4 text-sm font-semibold">
          <p className="truncate">
            Tokat Merkez · Her gün {hoursLabel()}
          </p>
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={`tel:${business.phoneTel}`}
              className="inline-flex min-h-9 items-center rounded-full bg-white/10 px-3"
            >
              Ara {business.phoneDisplay}
            </a>
            <a
              href={generalWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-9 items-center rounded-full bg-whatsapp px-3 text-white"
            >
              WhatsApp sipariş
            </a>
          </div>
        </Container>
      </div>
      <header
        className={cn(
          "border-b border-transparent bg-paper/90 backdrop-blur-md transition-[height,box-shadow,border-color] duration-300",
          scrolled && "border-navy/10 shadow-[0_18px_40px_-30px_rgba(12,35,72,0.9)]",
        )}
        style={{ height: "var(--header-h)" }}
      >
        <Container className="flex h-full items-center gap-3">
          <Link href="/" aria-label="Turanlar Ticaret ana sayfa" className="shrink-0">
            <Logo priority />
          </Link>
          <nav className="ml-auto hidden shrink-0 items-center gap-2 lg:flex xl:gap-3" aria-label="Ana menü">
            {items.map((item) => (
              <DesktopItem
                key={item.href}
                item={item}
                pathname={pathname}
                corporateOpen={corporateOpen}
                setCorporateOpen={setCorporateOpen}
              />
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-2 lg:ml-4">
            <a
              href={`tel:${business.phoneTel}`}
              className="grid size-11 place-items-center rounded-full text-navy transition-colors hover:bg-mist xl:hidden"
              aria-label={`Telefon: ${business.phoneDisplay}`}
            >
              <Phone className="size-5" aria-hidden />
            </a>
            <Button
              href={generalWhatsappUrl()}
              variant="navy"
              className="hidden px-3 text-base font-bold whitespace-nowrap sm:inline-flex xl:px-5"
            >
              Hemen Sipariş Ver
            </Button>
            <button
              type="button"
              className="grid size-11 place-items-center rounded-full text-navy lg:hidden"
              aria-expanded={open}
              aria-controls="mobil-menu"
              onClick={() => setOpen(!open)}
            >
              {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
              <span className="sr-only">{open ? "Menüyü kapat" : "Menüyü aç"}</span>
            </button>
          </div>
        </Container>
      </header>
      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobil-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 z-40 overflow-y-auto border-t border-navy/10 bg-paper px-4 pb-28 lg:hidden"
            style={{ top: "var(--header-h)", height: "calc(100dvh - var(--header-h))" }}
          >
            <nav className="mx-auto flex w-full max-w-6xl flex-col py-3" aria-label="Mobil menü">
              {items.map((item) =>
                "children" in item ? (
                  <div key={item.href} className="border-b border-navy/10">
                    <div className="flex min-h-14 items-center">
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="font-display text-2xl font-bold tracking-[-0.04em] text-navy"
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        className="ml-auto grid size-11 place-items-center rounded-full text-navy"
                        aria-expanded={corporateOpen}
                        onClick={() => setCorporateOpen(!corporateOpen)}
                      >
                        <ChevronDown
                          aria-hidden
                          className={cn("size-5 transition-transform", corporateOpen && "rotate-180")}
                        />
                        <span className="sr-only">Kurumsal alt menüsü</span>
                      </button>
                    </div>
                    {corporateOpen ? (
                      <ul className="mb-3 space-y-1 border-l border-navy/15 pl-4">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={() => setOpen(false)}
                              className="flex min-h-12 items-center text-lg font-bold text-ink"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isNavActive(pathname, item.href) ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex min-h-14 items-center border-b border-navy/10 font-display text-2xl font-bold tracking-[-0.04em] text-navy",
                      isNavActive(pathname, item.href) && "text-ink",
                    )}
                  >
                    {item.label}
                  </Link>
                ),
              )}
              <div className="mt-6 flex flex-col gap-3">
                <Button href={generalWhatsappUrl()} variant="whatsapp" className="w-full">
                  WhatsApp&apos;tan Sipariş Ver
                </Button>
                <Button href={`tel:${business.phoneTel}`} variant="line" className="w-full">
                  {business.phoneDisplay}
                </Button>
                <div className="mt-4">
                  <MediaCredit tone="onPaper" />
                </div>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function DesktopItem({
  item,
  pathname,
  corporateOpen,
  setCorporateOpen,
}: {
  item: NavItem;
  pathname: string;
  corporateOpen: boolean;
  setCorporateOpen: (open: boolean) => void;
}) {
  const children = "children" in item ? item.children : undefined;
  const active = isItemActive(pathname, item);

  if (!children) {
    return (
      <Link
        href={item.href}
        aria-current={active ? "page" : undefined}
        className={cn(
          "relative shrink-0 px-3 py-2 text-base font-bold whitespace-nowrap text-ink-soft transition-colors hover:text-navy xl:px-4",
          active && "text-navy",
        )}
      >
        {item.label}
        <span
          aria-hidden
          className={cn(
            "absolute right-3 bottom-1 left-3 h-px origin-left bg-navy transition-transform duration-300 xl:right-4 xl:left-4",
            active ? "scale-x-100" : "scale-x-0",
          )}
        />
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setCorporateOpen(true)}
      onMouseLeave={() => setCorporateOpen(false)}
    >
      <div
        className={cn(
          "relative flex shrink-0 items-center rounded-full pr-1 text-base font-bold whitespace-nowrap text-ink-soft transition-colors hover:text-navy",
          (active || corporateOpen) && "text-navy",
        )}
      >
        <Link href={item.href} className="px-3 py-2 xl:px-4" aria-current={active ? "page" : undefined}>
          {item.label}
        </Link>
        <button
          type="button"
          className="grid size-8 place-items-center rounded-full"
          aria-expanded={corporateOpen}
          aria-controls="kurumsal-menu"
          onClick={() => setCorporateOpen(!corporateOpen)}
        >
          <ChevronDown
            aria-hidden
            className={cn("size-4 transition-transform duration-200", corporateOpen && "rotate-180")}
          />
          <span className="sr-only">Kurumsal menüsünü aç</span>
        </button>
        <span
          aria-hidden
          className={cn(
            "absolute right-3 bottom-1 left-3 h-px origin-left bg-navy transition-transform duration-300 xl:right-4 xl:left-4",
            active || corporateOpen ? "scale-x-100" : "scale-x-0",
          )}
        />
      </div>
      {corporateOpen ? (
        <div id="kurumsal-menu" className="absolute top-full left-0 z-50 w-80 pt-3">
          <div className="rounded-2xl border border-navy/10 bg-paper p-2 shadow-[0_24px_50px_-28px_rgba(12,35,72,0.65)]">
            <p className="px-3 pt-2 pb-1 text-[0.68rem] font-semibold uppercase text-ink-soft">
              {`${business.foundedYear}'den bugüne`}
            </p>
            <ul>
              {children.map((child) => {
                const childActive = isNavActive(pathname, child.href);
                return (
                  <li key={child.href}>
                    <Link
                      href={child.href}
                      aria-current={childActive ? "page" : undefined}
                      onClick={() => setCorporateOpen(false)}
                      className={cn(
                        "block rounded-xl px-3 py-2.5 transition-colors hover:bg-cream",
                        childActive && "bg-cream",
                      )}
                    >
                      <span className="block text-base font-bold text-navy">{child.label}</span>
                      <span className="mt-0.5 block text-xs leading-5 text-ink-soft">
                        {child.description}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
}
