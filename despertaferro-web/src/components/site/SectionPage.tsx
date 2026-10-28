import { CalendarDays, ImageIcon, Mail, School, ShoppingBag, Swords, Users } from "lucide-react";
import type { ComponentType } from "react";

import { PlaceholderPanel } from "@/components/site/PlaceholderPanel";
import { content, type PageKey } from "@/lib/site-content";
import { useLanguage } from "@/lib/language";
import { ActuacionsPage } from "./pages/ActuacionsPage";
import { ComponentsPage } from "./pages/ComponentsPage";
import { ContactePage } from "./pages/ContactePage";
import { EscolaPage } from "./pages/EscolaPage";
import { GaleriaPage } from "./pages/GaleriaPage";
import { InfoPage } from "./pages/InfoPage";
import { MerchandisingPage } from "./pages/MerchandisingPage";

type SectionKey = Exclude<PageKey, "home">;

const pageBodies: Record<SectionKey, ComponentType> = {
  info: InfoPage,
  components: ComponentsPage,
  actuacions: ActuacionsPage,
  galeria: GaleriaPage,
  escola: EscolaPage,
  merchandising: MerchandisingPage,
  contacte: ContactePage,
};

const pageIcons: Record<SectionKey, ComponentType<{ className?: string }>> = {
  info: Swords,
  components: Users,
  actuacions: CalendarDays,
  galeria: ImageIcon,
  escola: School,
  merchandising: ShoppingBag,
  contacte: Mail,
};

/** Shared layout for every inner page: title header + the page's own body. */
export function SectionPage({ page }: { page: SectionKey }) {
  const { language } = useLanguage();
  const pageContent = content[language].pages[page];
  const Body = pageBodies[page];
  const Icon = pageIcons[page];

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="reveal grid gap-8 border-b border-brass pb-10 lg:grid-cols-[1fr_14rem] lg:items-end">
        <div>
          <p className="font-nav text-2xl text-accent">{pageContent.eyebrow}</p>
          <h1 className="mt-3 font-display text-6xl leading-none text-foreground sm:text-7xl">{pageContent.title}</h1>
          <p className="mt-5 max-w-3xl text-xl leading-8 text-muted-foreground">{pageContent.lead}</p>
        </div>
        <PlaceholderPanel label={pageContent.title} compact>
          <Icon className="h-11 w-11 text-accent" aria-hidden="true" />
        </PlaceholderPanel>
      </header>

      <div className="py-10">
        <Body />
      </div>
    </div>
  );
}
