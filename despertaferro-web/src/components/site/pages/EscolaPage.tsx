import { EscoletaOverview } from "@/components/site/EscoletaOverview";
import { EscoletaRegistration } from "@/components/site/EscoletaRegistration";
import { LiteYouTube } from "@/components/site/LiteYouTube";
import { TextPanel } from "./shared";
import { usePageContent } from "./use-page-content";

export function EscolaPage() {
  const data = usePageContent("escola");
  return (
    <div className="space-y-12">
      <div className="grid gap-5 md:grid-cols-2">
        {data.sections
          .filter((item) => !("linkUrl" in item))
          .map((item) => (
            <TextPanel key={item.title} title={item.title} text={item.text} />
          ))}
      </div>
      <EscoletaOverview />
      <EscoletaRegistration />

      <div className="reveal border-t border-brass pt-10">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-nav text-2xl text-accent">{data.mediaSection.kicker}</p>
            <h2 className="mt-2 font-display text-4xl leading-tight text-foreground sm:text-5xl">
              {data.mediaSection.title}
            </h2>
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
            <article
              key={video.url}
              className="card-lift overflow-hidden rounded-md border border-border bg-vellum shadow-parchment"
            >
              <LiteYouTube title={video.title} embedUrl={video.embedUrl} />
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
