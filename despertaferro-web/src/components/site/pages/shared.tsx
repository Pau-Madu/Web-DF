import { Button } from "@/components/ui/button";

export function TextPanel({
  title,
  text,
  linkUrl,
  linkLabel,
}: {
  title: string;
  text: string;
  linkUrl?: string;
  linkLabel?: string;
}) {
  return (
    <article className="reveal card-lift rounded-md border border-border bg-vellum p-6 shadow-parchment">
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
