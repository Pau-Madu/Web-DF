import { CheckCircle2 } from "lucide-react";

import { useLanguage } from "@/lib/language";
import { usePageContent } from "./use-page-content";

const labels = {
  va: { past: "Ja realitzades", done: "Realitzada" },
  es: { past: "Ya realizadas", done: "Realizada" },
  en: { past: "Already performed", done: "Done" },
};

type Event = { day: string; date: string; title: string; place: string; note: string };

/** Today's date as YYYY-MM-DD in the visitor's time zone. */
function todayIso() {
  const now = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
}

export function ActuacionsPage() {
  const data = usePageContent("actuacions");
  const t = labels[useLanguage().language];

  // An event counts as past from the day after it happens. Events without a
  // date ("Març", "Aviat"...) always stay in the upcoming list.
  const today = todayIso();
  const events: readonly Event[] = data.events;
  const upcoming = events.filter((event) => !event.date || event.date >= today);
  const past = events.filter((event) => event.date && event.date < today).reverse();

  return (
    <div className="grid gap-12">
      <div className="grid gap-5">
        {upcoming.map((event) => (
          <EventCard key={`${event.day}-${event.title}`} event={event} />
        ))}
      </div>

      {past.length > 0 ? (
        <section aria-labelledby="past-events" className="grid gap-4 border-t border-brass pt-10">
          <h2 id="past-events" className="font-display text-4xl text-muted-foreground">
            {t.past}
          </h2>
          {past.map((event) => (
            <EventCard key={`${event.day}-${event.title}`} event={event} doneLabel={t.done} />
          ))}
        </section>
      ) : null}
    </div>
  );
}

function EventCard({ event, doneLabel }: { event: Event; doneLabel?: string }) {
  const isPast = Boolean(doneLabel);
  return (
    <article
      className={
        isPast
          ? "reveal grid gap-3 rounded-md border border-dashed border-border bg-muted/30 p-4 text-muted-foreground sm:grid-cols-[8rem_1fr]"
          : "reveal card-lift grid gap-4 rounded-md border border-border bg-vellum p-5 shadow-parchment sm:grid-cols-[8rem_1fr]"
      }
    >
      <div className={`font-nav ${isPast ? "text-2xl" : "text-3xl text-accent"}`}>{event.day}</div>
      <div>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <h3 className={`font-nav ${isPast ? "text-2xl" : "text-3xl text-foreground"}`}>
            {event.title}
          </h3>
          {isPast ? (
            <span className="inline-flex items-center gap-1 rounded-sm border border-border px-2 py-0.5 font-nav text-sm uppercase tracking-wide">
              <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
              {doneLabel}
            </span>
          ) : null}
        </div>
        <p className={isPast ? "mt-1" : "mt-2 text-lg text-primary"}>{event.place}</p>
        {isPast ? null : <p className="mt-1 text-muted-foreground">{event.note}</p>}
      </div>
    </article>
  );
}
