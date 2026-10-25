import { EscoletaRegistration } from "./EscoletaRegistration";
import { EscoletaOverview } from "./EscoletaOverview";
import { Link } from "@tanstack/react-router";
import {
  CalendarDays,
  Crown,
  Flag,
  ImageIcon,
  Mail,
  Music,
  School,
  ShoppingBag,
  Swords,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { PlaceholderPanel } from "@/components/site/PlaceholderPanel";
import { ImageLightbox } from "@/components/site/ImageLightbox";
import { content, type PageKey } from "@/lib/site-content";
import { useLanguage } from "@/lib/language";

export function SectionPage({ page }: { page: Exclude<PageKey, "home"> }) {
  const { language } = useLanguage();
  const pageContent = content[language].pages[page];

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="grid gap-8 border-b border-brass pb-10 lg:grid-cols-[1fr_20rem] lg:items-end">
        <div>
          <p className="font-nav text-2xl text-accent">{pageContent.eyebrow}</p>
          <h1 className="mt-3 font-display text-6xl leading-none text-foreground sm:text-7xl">{pageContent.title}</h1>
          <p className="mt-5 max-w-3xl text-xl leading-8 text-muted-foreground">{pageContent.lead}</p>
        </div>
        <PlaceholderPanel label={pageContent.title} compact>
          <PageIcon page={page} />
        </PlaceholderPanel>
      </header>

      <div className="py-10">{renderPageBody(page, pageContent)}</div>
    </div>
  );
}

type PageContent = (typeof content)[keyof typeof content]["pages"][Exclude<PageKey, "home">];

function renderPageBody(page: Exclude<PageKey, "home">, pageContent: PageContent) {
  if (page === "info") {
    const info = pageContent as (typeof content)[keyof typeof content]["pages"]["info"];
    return (
      <div className="space-y-12">
        <div className="space-y-10">
          {info.articles.map((article) => (
            <InfoArticle key={article.title} article={article} />
          ))}
        </div>

        <div className="grid gap-8 border-t border-brass pt-10 lg:grid-cols-[1fr_22rem]">
          <div className="grid gap-6 sm:grid-cols-3">
            {info.sections.map((item) => (
              <TextPanel key={item.title} title={item.title} text={item.text} />
            ))}
          </div>
          <SideList title="2012" items={info.timeline} />
        </div>
      </div>
    );
  }

  if (page === "components") {
    const data = pageContent as (typeof content)[keyof typeof content]["pages"]["components"];
    const [activeMembers, aspirantSection, substituteSection] = data.sections;
    return (
      <div className="grid gap-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {data.groups.map((item, index) => (
            <InstrumentCard key={item} title={item} index={index} />
          ))}
        </div>
        <div className="grid gap-8">
          <MemberGroup title={activeMembers.title} text={activeMembers.text} members={data.members} />
          <div className="grid gap-8 lg:grid-cols-2">
            <MemberGroup title={aspirantSection.title} text={aspirantSection.text} members={data.aspirants} />
            <MemberGroup title={substituteSection.title} text={substituteSection.text} members={data.substitutes} />
          </div>
        </div>
      </div>
    );
  }

  if (page === "actuacions") {
    const data = pageContent as (typeof content)[keyof typeof content]["pages"]["actuacions"];
    return (
      <div className="grid gap-5">
        {data.events.map((event) => (
          <article key={event.title} className="grid gap-4 rounded-md border border-border bg-vellum p-5 shadow-parchment sm:grid-cols-[8rem_1fr]">
            <div className="font-nav text-3xl text-accent">{event.day}</div>
            <div>
              <h2 className="font-nav text-3xl text-foreground">{event.title}</h2>
              <p className="mt-2 text-lg text-primary">{event.place}</p>
              <p className="mt-1 text-muted-foreground">{event.note}</p>
            </div>
          </article>
        ))}
      </div>
    );
  }

  if (page === "galeria") {
    const data = pageContent as (typeof content)[keyof typeof content]["pages"]["galeria"];
    const galleryImages = [
      "/fotoAnticsMembres_galeria.jpeg",
      "/fotoActuacions_galeria.jpeg",
      "/fotoEnsayo_galeria.jpeg",
      "/fotoMedieval_galeria.jpeg",
      "/fotoMagdalena_galeria.jpeg",
      "/fotoEscoleta_galeria.jpeg",
    ];

    return (
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {data.albums.map((album, index) => (
          <PlaceholderPanel key={album} label={album}>
            <div className="flex h-52 w-full items-center justify-center overflow-hidden rounded-md border border-border bg-background/50">
              <ImageLightbox
                src={galleryImages[index] ?? galleryImages[0]!}
                alt={album}
                className="h-full w-full rounded-none"
              >
                <img
                  src={galleryImages[index] ?? galleryImages[0]!}
                  alt={album}
                  className="h-full w-full object-cover"
                  style={{ objectPosition: index === 1 ? "48% 20%" : "center" }}
                />
              </ImageLightbox>
              <span className="sr-only">{index + 1}</span>
            </div>
          </PlaceholderPanel>
        ))}
      </div>
    );
  }

  if (page === "escola") {
    const data = pageContent as (typeof content)[keyof typeof content]["pages"]["escola"];
    return (
      <div className="space-y-12">
        <EscoletaOverview />
        <EscoletaRegistration />

        <div className="border-t border-brass pt-10">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-nav text-2xl text-accent">{data.mediaSection.kicker}</p>
              <h2 className="mt-2 font-display text-4xl leading-tight text-foreground sm:text-5xl">{data.mediaSection.title}</h2>
              <p className="mt-3 max-w-2xl text-lg leading-8 text-muted-foreground">{data.mediaSection.lead}</p>
            </div>
            <a
              href="https://www.youtube.com/@desperta.ferro_CS"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center self-start rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition hover:border-brass hover:text-primary"
            >
              {data.mediaSection.followText}
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {data.mediaSection.videos.map((video) => (
              <article key={video.url} className="overflow-hidden rounded-md border border-border bg-vellum shadow-parchment">
                <div className="aspect-video w-full bg-black">
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <div className="p-4">
                  <p className="font-nav text-xl text-primary">{video.title}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (page === "merchandising") {
    const data = pageContent as (typeof content)[keyof typeof content]["pages"]["merchandising"];
    return (
      <div className="grid gap-8">
        <div className="rounded-md border border-brass bg-primary p-5 font-nav text-3xl text-primary-foreground shadow-parchment">
          {data.notice}
        </div>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {data.products.map((product) => (
            <article key={product.title} className="overflow-hidden rounded-md border border-border bg-vellum shadow-parchment">
              {product.image ? (
                <div className="h-72 w-full overflow-hidden border-b border-border bg-white">
                  <ImageLightbox src={product.image} alt={product.title} className="h-full w-full rounded-none">
                    <img src={product.image} alt={product.title} className="h-full w-full object-contain" />
                  </ImageLightbox>
                </div>
              ) : (
                <div className="flex h-72 w-full items-center justify-center border-b border-border bg-background/60 px-6 text-center font-nav text-3xl text-accent">
                  {product.title}
                </div>
              )}
              <div className="p-5">
                <h2 className="font-nav text-3xl text-foreground">{product.title}</h2>
                {product.description ? <p className="mt-3 text-muted-foreground">{product.description}</p> : null}
                {"price" in product && product.price ? <p className="mt-4 font-nav text-2xl text-accent">{product.price}</p> : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    );
  }

  if (page === "contacte") {
    const data = pageContent as (typeof content)[keyof typeof content]["pages"]["contacte"];
    return (
      <div className="grid gap-8">
        <div className="rounded-md border border-brass bg-primary p-6 font-nav text-2xl leading-relaxed text-primary-foreground shadow-parchment sm:text-3xl">
          {data.schedule}
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {data.contactItems.map((item) => (
            <div key={item.title} className="rounded-md border border-border bg-vellum p-5 shadow-parchment">
              <p className="font-nav text-2xl text-primary">{item.title}</p>
              {item.value ? <p className="mt-2 font-bold text-foreground">{item.value}</p> : null}
              {item.href ? (
                <Button asChild variant="ember" className="mt-4">
                  <a href={item.href}>{item.actionLabel}</a>
                </Button>
              ) : null}
            </div>
          ))}
        </div>
        <div className="border-t border-border pt-5 text-sm leading-6 text-muted-foreground">
          {data.legal.map((line) => <p key={line}>{line}</p>)}
        </div>
      </div>
    );
  }

  return null;
}

function PageIcon({ page }: { page: Exclude<PageKey, "home"> }) {
  const classes = "h-16 w-16 text-accent";
  const icons = {
    info: <Swords className={classes} aria-hidden="true" />,
    components: <Users className={classes} aria-hidden="true" />,
    actuacions: <CalendarDays className={classes} aria-hidden="true" />,
    galeria: <ImageIcon className={classes} aria-hidden="true" />,
    escola: <School className={classes} aria-hidden="true" />,
    merchandising: <ShoppingBag className={classes} aria-hidden="true" />,
    contacte: <Mail className={classes} aria-hidden="true" />,
  };
  return icons[page];
}

function TextPanel({ title, text, linkUrl, linkLabel }: { title: string; text: string; linkUrl?: string; linkLabel?: string }) {
  return (
    <article className="rounded-md border border-border bg-vellum p-6 shadow-parchment">
      <h2 className="font-nav text-3xl text-foreground">{title}</h2>
      <p className="mt-3 text-lg leading-8 text-muted-foreground">{text}</p>
      {linkUrl && linkLabel ? (
        <Button asChild variant="ember" className="mt-6 w-full sm:w-auto">
          <a href={linkUrl} target="_blank" rel="noreferrer noopener">
            {linkLabel}
          </a>
        </Button>
      ) : null}
    </article>
  );
}

type InfoArticle = { title: string; paragraphs: readonly string[]; imageLabel?: string; imageLabels?: readonly string[] };

function InfoArticle({ article }: { article: InfoArticle }) {
  return (
    <article className="border-t-4 border-brass bg-vellum px-5 py-7 shadow-parchment sm:px-8">
      <h2 className="font-display text-4xl leading-tight text-foreground sm:text-5xl">{article.title}</h2>
      {article.imageLabel ? (
        <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-center">
          <div className="lg:col-start-2 lg:row-start-1">
            {article.title.toLowerCase().includes("indument") || article.title.toLowerCase().includes("clothing") ? (
              <div className="overflow-hidden rounded-md border border-border bg-iron shadow-parchment">
                <ImageLightbox src="/fotoIndumentaria_info.jpg" alt={article.imageLabel} className="w-full rounded-none">
                  <img
                    src="/fotoIndumentaria_info.jpg"
                    alt={article.imageLabel}
                    className="h-60 w-full object-cover sm:h-72 lg:h-80"
                  />
                </ImageLightbox>
              </div>
            ) : (
              <div className="aspect-[4/3] rounded-md border border-border bg-battle-scene" role="img" aria-label={article.imageLabel} />
            )}
          </div>
          <div className="lg:col-start-1 lg:row-start-1">
            <div className="space-y-5 text-lg leading-8 text-primary">
              {article.paragraphs.map((paragraph) => (
                <p key={paragraph} className="whitespace-pre-line">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-6 space-y-5 text-lg leading-8 text-primary">
          {article.paragraphs.map((paragraph) => (
            <p key={paragraph} className="whitespace-pre-line">
              {paragraph}
            </p>
          ))}
        </div>
      )}

      {article.imageLabels ? (
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {article.imageLabels.map((label, index) => {
            const images = [
              "/fotoPeno_info.png",
              "/fotoLogo_info.png",
              "/fotoEmblema_info.jpg",
            ];

            return (
              <div key={label} className="space-y-3">
                <div className={`flex aspect-[4/3] items-center justify-center overflow-hidden rounded-md border border-border shadow-parchment ${index === 1 ? "bg-white" : "bg-iron"}`}>
                  <ImageLightbox src={images[index] ?? images[0]!} alt={label} className="h-full w-full rounded-none">
                    <img
                      src={images[index] ?? images[0]!}
                      alt={label}
                      className={index < 2 ? "h-full w-full object-contain p-3" : "h-full w-full object-cover"}
                    />
                  </ImageLightbox>
                </div>
                <p className="font-nav text-xl text-accent">{label}</p>
              </div>
            );
          })}
        </div>
      ) : null}
    </article>
  );
}

function InstrumentCard({ title, index }: { title: string; index: number }) {
  return (
    <article className="rounded-md border border-border bg-iron p-5 text-iron-foreground shadow-medieval">
      <InstrumentIcon index={index} />
      <h2 className="font-nav text-3xl">{title}</h2>
    </article>
  );
}

function InstrumentIcon({ index }: { index: number }) {
  const classes = "mb-5 h-10 w-10 text-brass";

  if (index < 2) {
    return <Music className={classes} aria-hidden="true" />;
  }

  const icons = [
    <Flag key="flag" className={classes} aria-hidden="true" />,
    <Crown key="crown" className={classes} aria-hidden="true" />,
  ];

  return icons[index - 2] ?? <Music className={classes} aria-hidden="true" />;
}

function MemberCard({ name }: { name: string }) {
  const image = memberImages[name];

  return (
    <article className="overflow-hidden rounded-md border border-border bg-background/60 shadow-parchment">
      {image ? (
        <ImageLightbox src={image} alt={`Foto de ${name}`} className="aspect-[4/3] w-full border-b border-border">
          <img
            src={image}
            alt={`Foto de ${name}`}
            className="h-full w-full object-cover"
            style={{
              objectPosition:
                name === "Pablo"
                  ? "center 32%"
                  : name === "Aitana"
                    ? "center 34%"
                    : name === "Victor"
                      ? "center 34%"
                      : name === "Ruben"
                        ? "center 46%"
                        : name === "Gerard"
                          ? "center 45%"
                        : name === "Sergio"
                          ? "center 65%"
                          : name === "Pau"
                            ? "center 40%"
                            : name === "David"
                              ? "center 40%"
                              : "center",
            }}
          />
        </ImageLightbox>
      ) : (
        <div className="flex aspect-[4/3] items-center justify-center border-b border-border bg-battle-scene" role="img" aria-label={`Foto de ${name}`}>
          <Users className="h-12 w-12 text-brass/80" aria-hidden="true" />
        </div>
      )}
      <h3 className="px-4 py-4 text-center font-nav text-2xl text-primary">{name}</h3>
    </article>
  );
}

function MemberGroup({ title, text, members }: { title: string; text: string; members: readonly string[] }) {
  return (
    <section className="rounded-md border border-brass bg-vellum p-6 shadow-parchment sm:p-8">
      <div className="mb-6">
        <h2 className="font-display text-4xl leading-tight text-foreground sm:text-5xl">{title}</h2>
        <p className="mt-3 text-lg leading-8 text-muted-foreground">{text}</p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {members.map((member) => (
          <MemberCard key={member} name={member} />
        ))}
      </div>
    </section>
  );
}

const memberImages: Record<string, string> = {
  Sergio: "/Fotos-componentes/Serfio-DF.jpeg",
  Fernando: "/Fotos-componentes/Fer-DF.jpg",
  "Jose V.": "/Fotos-componentes/Jose%20V.-DF.jpeg",
  Pablo: "/Fotos-componentes/Pablo-DF.jpeg",
  "Jose M.": "/Fotos-componentes/Jose%20M.-DF.jpg",
  Gerard: "/Fotos-componentes/Gerard-DF.jpeg",
  Pau: "/Fotos-componentes/Pau-DF.jpeg",
  David: "/Fotos-componentes/David-DF.jpg",
  Liam: "/Fotos-componentes/Liam-DF.jpeg",
  Mariete: "/Fotos-componentes/Mariete-DF.jpg",
  Miguel: "/Fotos-componentes/Miguel-DF.jpg",
  Aitana: "/Fotos-componentes/Aitana-DF.jpeg",
  Victor: "/Fotos-componentes/Victor-DF.jpg",
  Ruben: "/Fotos-componentes/Ruben-DF.jpeg",
};

function SideList({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <aside className="rounded-md border border-brass bg-iron p-6 text-iron-foreground shadow-medieval">
      <h2 className="font-display text-5xl text-brass">{title}</h2>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item} className="border-b border-iron-foreground/20 pb-3 text-lg">
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}
