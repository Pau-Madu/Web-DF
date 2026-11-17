import { CalendarDays, Gift, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language";

// Vídeo vertical de Liam (9:16). Copiar el archivo a public/ con este nombre.
const VIDEO_SRC = "/escoleta-liam-primera-classe.mp4";
const POSTER_SRC = "/Fotos-componentes/Liam-DF.webp";

const copy = {
  va: {
    kicker: "Vine a provar",
    title: "La primera classe és gratuïta",
    text: "Liam, el nostre professor de l'Escoleta, t'ho explica: la primera classe de cada alumne és gratuïta i sense compromís, perquè els xiquets, i els no tan xiquets, vegen com és abans de decidir-se.",
    condition: "Només cal inscriure's abans al formulari.",
    date: "Primera classe: dissabte 21 de novembre, a les 10:00",
    place: "Antic Quarter de Tetuán XIV, Castelló",
    cta: "Inscriu-te per a la classe gratuïta",
    videoLabel: "Vídeo: Liam presenta la primera classe gratuïta de l'Escoleta",
    videoNote: "Vídeo en castellà.",
    fallback: "El teu navegador no pot reproduir aquest vídeo.",
  },
  es: {
    kicker: "Ven a probar",
    title: "La primera clase es gratuita",
    text: "Liam, nuestro profesor de la Escoleta, te lo cuenta: la primera clase de cada alumno es gratuita y sin compromiso, para que los pequeños, y los no tan pequeños, vean cómo es antes de decidirse.",
    condition: "Solo hay que inscribirse antes en el formulario.",
    date: "Primera clase: sábado 21 de noviembre, a las 10:00",
    place: "Antiguo Cuartel de Tetuán XIV, Castelló",
    cta: "Inscríbete para la clase gratuita",
    videoLabel: "Vídeo: Liam presenta la primera clase gratuita de la Escoleta",
    videoNote: "",
    fallback: "Tu navegador no puede reproducir este vídeo.",
  },
  en: {
    kicker: "Come and try",
    title: "Your first class is free",
    text: "Liam, our Escoleta teacher, explains: every student's first class is free and with no commitment, so children, and grown-ups too, can see what it's like before deciding.",
    condition: "You just need to sign up on the form beforehand.",
    date: "First class: Saturday 21 November, 10:00",
    place: "Tetuán XIV Old Barracks, Castelló",
    cta: "Sign up for your free class",
    videoLabel: "Video: Liam presents the Escoleta's free first class",
    videoNote: "Video in Spanish.",
    fallback: "Your browser can't play this video.",
  },
};

export function EscoletaFreeClass() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <section
      aria-labelledby="escoleta-free-class"
      className="reveal grid items-center gap-8 rounded-md border-2 border-brass bg-vellum p-6 shadow-parchment sm:p-8 md:grid-cols-[minmax(0,1fr)_minmax(0,13rem)] lg:grid-cols-[minmax(0,1fr)_15rem]"
    >
      <div>
        <p className="flex items-center gap-2 font-nav text-2xl text-accent">
          <Gift className="h-6 w-6" aria-hidden="true" />
          {t.kicker}
        </p>
        <h2 id="escoleta-free-class" className="mt-2 font-display text-5xl leading-none text-foreground sm:text-6xl">
          {t.title}
        </h2>
        <p className="mt-5 text-lg leading-8 text-primary">{t.text}</p>
        <p className="mt-3 text-lg font-semibold leading-8 text-foreground">{t.condition}</p>

        <ul className="mt-5 space-y-2 text-lg text-primary">
          <li className="flex items-start gap-3">
            <CalendarDays className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
            {t.date}
          </li>
          <li className="flex items-start gap-3">
            <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
            {t.place}
          </li>
        </ul>

        <Button asChild variant="ember" className="mt-6">
          <a href="#inscripcion-escoleta">{t.cta}</a>
        </Button>
      </div>

      <figure className="mx-auto w-full max-w-[15rem]">
        <video
          className="aspect-[9/16] w-full rounded-md border border-border bg-iron object-cover shadow-medieval"
          controls
          playsInline
          preload="none"
          poster={POSTER_SRC}
          aria-label={t.videoLabel}
        >
          <source src={VIDEO_SRC} type="video/mp4" />
          {t.fallback}
        </video>
        {t.videoNote ? (
          <figcaption className="mt-2 text-center text-sm text-muted-foreground">{t.videoNote}</figcaption>
        ) : null}
      </figure>
    </section>
  );
}
