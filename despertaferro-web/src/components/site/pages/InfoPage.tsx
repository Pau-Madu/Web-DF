import { ImageLightbox } from "@/components/site/ImageLightbox";
import { TextPanel } from "./shared";
import { usePageContent } from "./use-page-content";

const insigniaImages = ["/fotoPeno_info.png", "/fotoLogo_info.png", "/fotoEmblema_info.jpg"];

export function InfoPage() {
  const info = usePageContent("info");
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
        <Timeline title="2012" items={info.timeline} />
      </div>
    </div>
  );
}

type Article = {
  title: string;
  paragraphs: readonly string[];
  imageLabel?: string;
  imageLabels?: readonly string[];
};

function Paragraphs({ paragraphs, className = "" }: { paragraphs: readonly string[]; className?: string }) {
  return (
    <div className={`space-y-5 text-lg leading-8 text-primary ${className}`}>
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className="whitespace-pre-line">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

function InfoArticle({ article }: { article: Article }) {
  return (
    <article className="reveal border-t-4 border-brass bg-vellum px-5 py-7 shadow-parchment sm:px-8">
      <h2 className="font-display text-4xl leading-tight text-foreground sm:text-5xl">{article.title}</h2>

      {article.imageLabel ? (
        <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-center">
          <div className="overflow-hidden rounded-md border border-border bg-iron shadow-parchment lg:col-start-2 lg:row-start-1">
            <ImageLightbox src="/fotoIndumentaria_info.jpg" alt={article.imageLabel} className="w-full rounded-none">
              <img
                src="/fotoIndumentaria_info.jpg"
                alt={article.imageLabel}
                loading="lazy"
                decoding="async"
                className="h-60 w-full object-cover sm:h-72 lg:h-80"
              />
            </ImageLightbox>
          </div>
          <Paragraphs paragraphs={article.paragraphs} className="lg:col-start-1 lg:row-start-1" />
        </div>
      ) : (
        <Paragraphs paragraphs={article.paragraphs} className="mt-6" />
      )}

      {article.imageLabels ? (
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {article.imageLabels.map((label, index) => {
            const src = insigniaImages[index] ?? insigniaImages[0]!;
            return (
              <div key={label} className="space-y-3">
                <div
                  className={`card-lift flex aspect-[4/3] items-center justify-center overflow-hidden rounded-md border border-border shadow-parchment ${index === 1 ? "bg-white" : "bg-iron"}`}
                >
                  <ImageLightbox src={src} alt={label} className="h-full w-full rounded-none">
                    <img
                      src={src}
                      alt={label}
                      loading="lazy"
                      decoding="async"
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

function Timeline({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <aside className="reveal rounded-md border border-brass bg-iron p-6 text-iron-foreground shadow-medieval">
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
