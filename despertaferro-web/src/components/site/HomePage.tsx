import { Link } from "@tanstack/react-router";
import { CalendarDays, Music, ScrollText, Swords } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PlaceholderPanel } from "@/components/site/PlaceholderPanel";
import { content } from "@/lib/site-content";
import { useLanguage } from "@/lib/language";
import { ImageLightbox } from "./ImageLightbox";

export function HomePage() {
  const { language } = useLanguage();
  const t = content[language].home;

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="grid gap-8 lg:grid-cols-[1fr_22rem] lg:items-end">
        <div className="space-y-6">
          <PlaceholderPanel label={t.heroCaption}>
            <div className="relative h-52 w-full max-w-3xl overflow-hidden rounded-md border border-border bg-iron text-iron-foreground shadow-medieval">
              <ImageLightbox src="/Img_Inicio.jpeg" alt={t.heroAlt} className="h-full w-full rounded-none">
                <img src="/Img_Inicio.jpeg" alt={t.heroAlt} className="h-full w-full object-cover object-center [object-position:center_20%]" />
              </ImageLightbox>
            </div>
          </PlaceholderPanel>
          <ul className="grid border-y border-brass/70 bg-vellum/40 sm:grid-cols-2 lg:grid-cols-4">
            {t.highlights.map((item) => (
              <li
                key={item}
                className="border-b border-border/70 px-4 py-5 text-center last:border-b-0 sm:border-r sm:even:border-r-0 lg:border-b-0 lg:even:border-r lg:last:border-r-0"
              >
                <span className="font-display text-2xl text-primary sm:text-3xl">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="border-l-4 border-brass bg-vellum p-6 shadow-parchment">
          <Swords className="mb-4 h-8 w-8 text-accent" aria-hidden="true" />
          <h1 className="font-display text-4xl leading-tight text-foreground sm:text-5xl">{t.introTitle}</h1>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">{t.introText}</p>
        </aside>
      </section>

      <section className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_24rem]">
        <div>
          <SectionTitle icon={<ScrollText aria-hidden="true" />} title={t.newsTitle} />
          <div className="space-y-8 py-8">
            {t.news.map((item) => (
              <article key={item.title} className="grid gap-4 border-b border-border pb-8 sm:grid-cols-[4rem_1fr]">
                <div className="font-nav text-3xl text-accent">{item.month}</div>
                <div>
                  <h2 className="font-nav text-3xl leading-tight text-foreground">{item.title}</h2>
                  <div className="mt-4 space-y-4 text-lg leading-8 text-primary">
                    {item.text.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <SectionTitle icon={<CalendarDays aria-hidden="true" />} title={t.datesTitle} />
            <div className="mt-6 space-y-3">
              {t.dates.map((item) => (
                <div key={item} className="rounded-md border border-border bg-vellum p-4 text-primary shadow-parchment">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionTitle icon={<Music aria-hidden="true" />} title={t.moreTitle} />
            <div className="mt-6 flex justify-center p-2">
              <Button asChild variant="ember" className="w-full sm:w-auto">
                <Link to="/actuacions" className="inline-flex items-center justify-center">
                  {t.viewAll}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionTitle({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3 bg-primary px-4 py-3 text-primary-foreground shadow-parchment">
      <span className="[&_svg]:h-6 [&_svg]:w-6">{icon}</span>
      <h2 className="font-nav text-3xl leading-none">{title}</h2>
    </div>
  );
}
