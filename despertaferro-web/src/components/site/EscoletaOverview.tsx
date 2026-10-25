import { useLanguage } from "@/lib/language";
import { MapPin } from "lucide-react";
const copy = {
  va: {
    title: "Aprendre junts. Sonar com a grup.",
    register: "Sol·licitar inscripció",
    times: "Horaris",
    scheduleTitle: "Horaris",
    how: "Com funciona",
    tuition: "Quota mensual",
    pending: "Preu i possibles descomptes familiars per confirmar.",
    schedule: "A l’Ántic Quarter de Tetuán XIV, Castelló",
    start: "Inici previst: 14 de novembre de 2026.",
    slots: ["Primera franja: 10:00", "Segona franja: 11:00"],
    duration:
      "Duració pendent de concretar: 45–60 minuts. Nivell de cada franja per assignar.",
    levels:
      "Iniciació i avançat, segons l’observació dels professors. Aforament previst: 10–15 alumnes per grup, per concretar.",
    changes:
      "Les actuacions poden requerir canvis de dia o hora. Festius i recuperacions es comunicaran quan s’acorden.",
    steps: [
      "Inscriu-te o registra la teua família.",
      "L’escola revisa les places i assigna el grup.",
      "Paga la quota al principi de mes pel sistema que s’acorde.",
      "Vine a classe cada setmana, sense reservar cada sessió.",
    ],
    material: "Material",
    materialText:
      "Caixa sorda i suport recomanats; compra no obligatòria. Es treballarà també amb els instruments del cau. Disponibilitat de préstec per confirmar.",
    absence: "Absències i recuperacions",
    absenceText:
      "Si falta l’alumne, perd la classe. Si cancel·la l’organització, es recupera un altre dia.",
    join: "Incorporacions durant el curs, segons places. L’import del primer mes s’ajustarà si la incorporació és a mitjan mes.",
    mapLink: "Veure el lloc d’assaig a Google Maps",
    mapHint: "Obri la ubicació exacta",
  },
  es: {
    title: "Aprender juntos. Sonar como grupo.",
    register: "Solicitar inscripción",
    times: "Horarios",
    scheduleTitle: "Horarios",
    how: "Cómo funciona",
    tuition: "Cuota mensual",
    pending: "Precio y posibles descuentos familiares por confirmar.",
    schedule: "En el Antiguo Cuartel de Tetuán XIV, Castelló",
    start: "Inicio previsto: 14 de noviembre de 2026.",
    slots: ["Primera franja: 10:00", "Segunda franja: 11:00"],
    duration:
      "Duración pendiente de concretar: 45–60 minutos. Nivel de cada franja por asignar.",
    levels:
      "Iniciación y avanzado, según la observación de los profesores. Aforo previsto: 10–15 alumnos por grupo, por concretar.",
    changes:
      "Las actuaciones pueden requerir cambios de día u hora. Festivos y recuperaciones se comunicarán cuando se acuerden.",
    steps: [
      "Inscríbete o registra a tu familia.",
      "La escuela revisa las plazas y asigna el grupo.",
      "Paga la cuota al principio de mes mediante el sistema acordado.",
      "Acude cada semana, sin reservar cada sesión.",
    ],
    material: "Material",
    materialText:
      "Caja sorda y soporte recomendados; compra no obligatoria. También se trabajará con los instrumentos del cau. Disponibilidad de préstamo por confirmar.",
    absence: "Ausencias y recuperaciones",
    absenceText:
      "Si falta el alumno, pierde la clase. Si cancela la organización, se recupera otro día.",
    join: "Incorporaciones durante el curso, según plazas. El importe del primer mes se ajustará si la incorporación es a mitad de mes.",
    mapLink: "Ver el lugar de ensayo en Google Maps",
    mapHint: "Abrir ubicación exacta",
  },
  en: {
    title: "Learn together. Play as a group.",
    register: "Apply to join",
    times: "Timetable",
    scheduleTitle: "Timetable",
    how: "How it works",
    tuition: "Monthly tuition",
    pending: "Price and possible family discounts to be confirmed.",
    schedule: "At the Tetuán XIV Old Barracks, Castelló",
    start: "Planned start: 14 November 2026.",
    slots: ["First time slot: 10:00", "Second time slot: 11:00"],
    duration:
      "Duration to be confirmed: 45–60 minutes. Levels have not yet been assigned to time slots.",
    levels:
      "Beginner and advanced groups, assigned by the teachers. Planned capacity: 10–15 students per group, to be confirmed.",
    changes:
      "Performances may require schedule changes. Holidays and make-up classes will be announced once agreed.",
    steps: [
      "Apply for yourself or your family.",
      "The school reviews availability and assigns a group.",
      "Pay at the beginning of the month using the agreed payment method.",
      "Attend weekly, without booking individual sessions.",
    ],
    material: "Equipment",
    materialText:
      "A practice pad and stand are recommended; purchase is optional. Classes also use the group’s instruments. Loan availability is to be confirmed.",
    absence: "Absences and make-up classes",
    absenceText:
      "A student absence is not recovered. If the school cancels, the class will be rescheduled.",
    join: "Join during the course, subject to availability. The first monthly fee will be adjusted for a mid-month start.",
    mapLink: "View rehearsal location on Google Maps",
    mapHint: "Open exact location",
  },
};
export function EscoletaOverview() {
  const { language } = useLanguage();
  const t = copy[language];
  return (
    <div className="space-y-10">
      <div className="grid gap-6 md:grid-cols-[1fr_18rem]">
        <div>
          <h2 className="font-display text-4xl">{t.title}</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="escoleta-button" href="#inscripcion-escoleta">
              {t.register}
            </a>
            <a className="escoleta-button secondary" href="#horarios-escoleta">
              {t.times}
            </a>
            <a
              className="escoleta-button secondary"
              href="#funcionamiento-escoleta"
            >
              {t.how}
            </a>
          </div>
          <p className="mt-4 text-muted-foreground">{t.start}</p>
        </div>
        <div className="rounded-md border border-brass bg-vellum p-6">
          <h3 className="font-nav text-2xl">{t.tuition}</h3>
          <p className="mt-3">{t.pending}</p>
          <p className="mt-3 text-muted-foreground">{t.join}</p>
        </div>
      </div>
      <section
        id="horarios-escoleta"
        className="scroll-mt-6 rounded-md border border-border bg-vellum p-6 shadow-parchment"
      >
        <h2 className="font-display text-4xl">{t.scheduleTitle}</h2>
        <p className="mt-3 font-nav text-2xl text-accent">{t.schedule}</p>
        <div className="my-5 grid gap-4 sm:grid-cols-2">
          {t.slots.map((s) => (
            <div
              key={s}
              className="border border-border bg-background p-4 font-nav text-2xl"
            >
              {s}
            </div>
          ))}
        </div>
        <p>{t.duration}</p>
        <p className="mt-3">{t.levels}</p>
        <p className="mt-3 text-muted-foreground">{t.changes}</p>
        <a
          className="mt-5 inline-flex items-center gap-3 rounded-md border border-brass bg-primary px-5 py-4 text-primary-foreground shadow-parchment transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          href="https://maps.app.goo.gl/q5dHfANEdURG2xAv5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MapPin className="h-6 w-6 shrink-0 text-brass" aria-hidden="true" />
          <span>
            <span className="block font-nav text-lg">{t.mapLink}</span>
            <span className="block text-sm text-primary-foreground/75">
              {t.mapHint}
            </span>
          </span>
        </a>
      </section>
      <section id="funcionamiento-escoleta" className="scroll-mt-6">
        <h2 className="font-display text-4xl">{t.how}</h2>
        <ol className="mt-5 grid gap-4 sm:grid-cols-2">
          {t.steps.map((s, i) => (
            <li
              key={s}
              className="rounded-md border border-border bg-vellum p-5"
            >
              <span className="mr-3 font-display text-3xl text-accent">
                {i + 1}.
              </span>
              {s}
            </li>
          ))}
        </ol>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {[
            [t.material, t.materialText],
            [t.absence, t.absenceText],
          ].map(([title, text]) => (
            <article
              key={title}
              className="rounded-md border border-border bg-vellum p-5"
            >
              <h3 className="font-nav text-2xl">{title}</h3>
              <p className="mt-3">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
