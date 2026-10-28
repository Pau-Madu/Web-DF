import { Instagram, Lock, Mail, MessageCircle, Music, Phone, Youtube } from "lucide-react";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { usePageContent } from "./use-page-content";

export function ContactePage() {
  const data = usePageContent("contacte");
  return (
    <div className="grid gap-8">
      <div className="reveal rounded-md border border-brass bg-primary p-6 font-nav text-2xl leading-relaxed text-primary-foreground shadow-parchment sm:text-3xl">
        {data.schedule}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.contactItems.map((item) => (
          <ContactCard key={item.kind} item={item} />
        ))}
      </div>
      <div className="border-t border-border pt-5 text-sm leading-6 text-muted-foreground">
        {data.legal.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </div>
  );
}

type ContactItem = {
  kind: string;
  title: string;
  value: string;
  href: string;
  actionLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
  locked: boolean;
};

const contactIcons: Record<string, ReactNode> = {
  email: <Mail className="h-6 w-6" aria-hidden="true" />,
  phone: <Phone className="h-6 w-6" aria-hidden="true" />,
  instagram: <Instagram className="h-6 w-6" aria-hidden="true" />,
  youtube: <Youtube className="h-6 w-6" aria-hidden="true" />,
  tiktok: <Music className="h-6 w-6" aria-hidden="true" />,
};

function ContactCard({ item }: { item: ContactItem }) {
  const external = item.href.startsWith("http");
  return (
    <div
      className={`reveal flex flex-col rounded-md border p-5 shadow-parchment ${
        item.locked
          ? "border-dashed border-border bg-muted/40 text-muted-foreground"
          : "card-lift border-border bg-vellum"
      }`}
    >
      <div className="flex items-center gap-3">
        <span className={item.locked ? "text-muted-foreground" : "text-accent"}>{contactIcons[item.kind]}</span>
        <p className="font-nav text-2xl text-primary">{item.title}</p>
        {item.locked ? <Lock className="ml-auto h-5 w-5" aria-hidden="true" /> : null}
      </div>
      <p className={`mt-2 break-words ${item.locked ? "italic" : "font-bold text-foreground"}`}>{item.value}</p>
      {item.href || item.secondaryHref ? (
        <div className="mt-auto flex flex-wrap gap-2 pt-4">
          {item.href ? (
            <Button asChild variant="ember">
              <a href={item.href} {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}>
                {item.actionLabel}
              </a>
            </Button>
          ) : null}
          {item.secondaryHref ? (
            <Button asChild className="bg-[#1f7a4a] text-white hover:bg-[#1f7a4a]/90">
              <a href={item.secondaryHref} target="_blank" rel="noreferrer noopener">
                <MessageCircle aria-hidden="true" />
                {item.secondaryLabel}
              </a>
            </Button>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
