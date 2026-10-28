import { Link, useRouterState } from "@tanstack/react-router";
import { Languages, Menu, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { content, languages, navItems } from "@/lib/site-content";
import { useLanguage } from "@/lib/language";
import { useRevealOnScroll } from "@/hooks/use-reveal-on-scroll";
import { MedievalLogo } from "./MedievalLogo";

export function SiteShell({ children }: { children: ReactNode }) {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const t = content[language];

  useRevealOnScroll(pathname);

  // Close the mobile menu whenever the page changes.
  useEffect(() => setOpen(false), [pathname]);

  const languageSwitch = (
    <div
      className="flex items-center gap-1 rounded-md border border-border bg-vellum p-1"
      aria-label={t.brand.language}
    >
      <Languages className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
      {languages.map((item) => (
        <Button
          key={item.code}
          type="button"
          size="sm"
          variant={language === item.code ? "ember" : "ghost"}
          onClick={() => setLanguage(item.code)}
          aria-pressed={language === item.code}
          className="h-7 px-2"
        >
          {item.short}
        </Button>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background bg-parchment-texture text-foreground">
      {/* Brand bar: fixed at the top on mobile, scrolls away on desktop. */}
      <header className="sticky top-0 z-40 border-b border-brass bg-background/90 shadow-parchment backdrop-blur lg:static lg:border-b-0 lg:bg-background/70 lg:shadow-none">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-2 sm:px-6 lg:gap-6 lg:py-4 lg:px-8">
          <MedievalLogo className="lg:w-20" />

          <Link
            to="/"
            className="relative mx-4 flex min-w-0 items-center bg-iron px-3 py-1.5 text-iron-foreground shadow-medieval lg:mx-5 lg:px-4 lg:py-2"
          >
            <span className="absolute left-0 h-full w-4 -translate-x-full bg-iron banner-tail-left lg:w-5" />
            <span className="absolute right-0 h-full w-4 translate-x-full bg-iron banner-tail-right lg:w-5" />
            <span className="whitespace-nowrap font-display text-2xl leading-none sm:text-3xl lg:text-4xl">
              {t.brand.nameA} {t.brand.nameB}
            </span>
          </Link>

          <div className="ml-4 hidden min-w-0 flex-1 flex-col gap-0.5 lg:flex">
            <p className="truncate font-display text-xl leading-tight text-accent">
              {t.brand.kickerLeft} <span className="text-primary">· {t.brand.since}</span>
            </p>
            <p className="truncate font-nav text-base leading-tight text-primary">
              {t.brand.kickerRight} · {t.brand.place}
            </p>
          </div>

          <div className="ml-auto flex items-center gap-2">
            <div className="hidden sm:block">{languageSwitch}</div>
            <Button
              type="button"
              size="icon"
              variant="parchment"
              className="lg:hidden"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? t.brand.close : t.brand.menu}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {open ? (
          <div
            id="mobile-menu"
            className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border px-4 pb-4 pt-3 sm:px-6 lg:hidden"
          >
            <div className="mb-3 flex flex-wrap gap-2 sm:hidden" aria-label={t.brand.language}>
              {languages.map((item) => (
                <Button
                  key={item.code}
                  type="button"
                  size="sm"
                  variant={language === item.code ? "ember" : "parchment"}
                  onClick={() => setLanguage(item.code)}
                  aria-pressed={language === item.code}
                >
                  {item.label}
                </Button>
              ))}
            </div>
            <nav className="grid gap-2 sm:grid-cols-2" aria-label="Principal mòbil">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.to}
                  className="rounded-md border border-border bg-vellum px-4 py-3 font-nav text-xl text-primary"
                  activeProps={{
                    className: "rounded-md border-brass bg-accent px-4 py-3 font-nav text-xl text-accent-foreground",
                  }}
                >
                  {t.nav[item.key]}
                </Link>
              ))}
            </nav>
          </div>
        ) : null}
      </header>

      {/* Desktop menu: stays fixed at the top while scrolling. */}
      <nav
        className="sticky top-0 z-40 hidden border-y border-brass bg-background/90 shadow-parchment backdrop-blur lg:block"
        aria-label="Principal"
      >
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-1 px-8 py-1.5">
          {navItems.map((item) => (
            <Link
              key={item.key}
              to={item.to}
              className="rounded-md border border-transparent px-2 py-1.5 font-nav text-lg text-primary transition-colors hover:border-brass hover:bg-vellum hover:text-accent xl:px-3"
              activeProps={{ className: "border-brass bg-vellum text-foreground" }}
            >
              {t.nav[item.key]}
            </Link>
          ))}
        </div>
      </nav>

      <main>{children}</main>

      <footer className="border-t border-brass bg-iron text-iron-foreground">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="space-y-1">
            <p className="font-display text-xl text-brass">
              {t.brand.kickerLeft} · {t.brand.since}
            </p>
            <p className="font-nav text-base text-iron-foreground/80">
              {t.brand.kickerRight} · {t.brand.place}
            </p>
            <p className="pt-2 font-serif text-sm text-iron-foreground/60">{t.brand.footer}</p>
          </div>
          <Button asChild variant="ember" className="self-start lg:self-auto">
            <Link to="/contacte">{t.brand.contactCta}</Link>
          </Button>
        </div>
      </footer>
    </div>
  );
}
