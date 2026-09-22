import { Link } from "@tanstack/react-router";
import { Languages, Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { content, languages, navItems } from "@/lib/site-content";
import { useLanguage } from "@/lib/language";
import { MedievalLogo } from "./MedievalLogo";

export function SiteShell({ children }: { children: ReactNode }) {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const t = content[language];

  return (
    <div className="min-h-screen bg-background bg-parchment-texture text-foreground">
      <header className="border-b border-brass bg-background/80 shadow-parchment backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <div className="hidden flex-1 sm:block">
              <div className="flex min-h-[8rem] items-center justify-center text-center">
                <div className="flex flex-col items-center gap-3">
                  <p className="font-display text-2xl text-accent lg:text-3xl">{t.brand.kickerLeft}</p>
                  <p className="font-display text-xl text-primary lg:text-2xl">{t.brand.since}</p>
                </div>
              </div>
            </div>

            <div className="group flex shrink-0 flex-col items-center gap-3 text-center">
              <MedievalLogo />
              <div className="relative flex w-full min-w-72 items-center justify-center bg-iron px-5 py-3 text-iron-foreground shadow-medieval sm:min-w-96">
                <span className="absolute left-0 h-full w-7 -translate-x-full bg-iron banner-tail-left" />
                <span className="absolute right-0 h-full w-7 translate-x-full bg-iron banner-tail-right" />
                <span className="font-display text-4xl leading-none sm:text-5xl lg:text-6xl">{t.brand.nameA}</span>
                <span className="mx-3 h-8 w-px bg-brass" />
                <span className="font-display text-4xl leading-none sm:text-5xl lg:text-6xl">{t.brand.nameB}</span>
              </div>
            </div>

            <div className="hidden flex-1 sm:block">
              <div className="flex min-h-[8rem] items-center justify-center text-center">
                <div className="flex flex-col items-center gap-3">
                  <p className="font-display text-2xl text-accent lg:text-3xl">{t.brand.kickerRight}</p>
                  <p className="font-display text-xl text-primary lg:text-2xl">{t.brand.place}</p>
                </div>
              </div>
            </div>

            <div className="absolute right-4 top-4 flex items-center gap-2 lg:right-8">
              <div className="hidden items-center gap-1 rounded-md border border-border bg-vellum p-1 sm:flex" aria-label={t.brand.language}>
                <Languages className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                {languages.map((item) => (
                  <Button
                    key={item.code}
                    type="button"
                    size="sm"
                    variant={language === item.code ? "ember" : "ghost"}
                    onClick={() => setLanguage(item.code)}
                    aria-pressed={language === item.code}
                  >
                    {item.short}
                  </Button>
                ))}
              </div>
              <Button
                type="button"
                size="icon"
                variant="parchment"
                className="lg:hidden"
                onClick={() => setOpen((value) => !value)}
                aria-label={open ? t.brand.close : t.brand.menu}
                aria-expanded={open}
              >
                {open ? <X /> : <Menu />}
              </Button>
            </div>
          </div>

          <nav className="hidden flex-wrap items-center justify-center gap-1 lg:flex" aria-label="Principal">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.to}
                className="rounded-md border border-transparent px-2 py-2 font-nav text-lg text-primary transition-colors hover:border-brass hover:bg-vellum hover:text-accent xl:px-3 xl:text-xl"
                activeProps={{ className: "border-brass bg-vellum text-foreground" }}
              >
                {t.nav[item.key]}
              </Link>
            ))}
          </nav>

          {open ? (
            <div className="grid gap-3 border-t border-border pt-4 lg:hidden">
              <div className="flex flex-wrap gap-2" aria-label={t.brand.language}>
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
              <nav className="grid gap-2" aria-label="Principal mòbil">
                {navItems.map((item) => (
                  <Link
                    key={item.key}
                    to={item.to}
                    className="rounded-md border border-border bg-vellum px-4 py-3 font-nav text-xl text-primary"
                    activeProps={{ className: "rounded-md border-brass bg-accent px-4 py-3 font-nav text-xl text-accent-foreground" }}
                    onClick={() => setOpen(false)}
                  >
                    {t.nav[item.key]}
                  </Link>
                ))}
              </nav>
            </div>
          ) : null}
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-brass bg-iron text-iron-foreground">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p className="font-serif text-sm text-iron-foreground/80">{t.brand.footer}</p>
          <Button asChild variant="ember">
            <Link to="/contacte">{t.brand.contactCta}</Link>
          </Button>
        </div>
      </footer>
    </div>
  );
}
