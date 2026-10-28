import { usePageContent } from "./use-page-content";

export function ActuacionsPage() {
  const data = usePageContent("actuacions");
  return (
    <div className="grid gap-5">
      {data.events.map((event) => (
        <article
          key={`${event.day}-${event.title}`}
          className="reveal card-lift grid gap-4 rounded-md border border-border bg-vellum p-5 shadow-parchment sm:grid-cols-[8rem_1fr]"
        >
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
