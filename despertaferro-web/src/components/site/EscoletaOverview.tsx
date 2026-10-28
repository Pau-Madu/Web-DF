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
    price: "40 € / mes per persona",
    discount:
      "30 € / mes per persona per a socis de la Germandat dels Cavallers de la Conquesta o per a dos o més membres de la mateixa unitat familiar.",
    payment: "Pagament en efectiu el primer assaig de cada mes.",
    schedule: "Dissabtes de 10:00 a 12:00 — Antic Quarter de Tetuán XIV (junt al circuit de seguretat vial), Castelló",
    start: "Inici previst: 14 de novembre de 2026.",
    slots: ["Primera franja: 10:00", "Segona franja: 11:00"],
    duration: "Classes d’uns 45 minuts. Els grups i les franges es concretaran pels professors.",
    levels:
      "Grups d’iniciació i avançat, segons l’observació dels professors. Màxim de 10–15 alumnes per grup; s’estudiarà ampliar grups segons la participació.",
    changes: "Les classes poden canviar de dia o hora si coincideixen amb una actuació de la secció titular.",
    steps: [
      "Ompli el formulari d’inscripció.",
      "Els professors assignen el grup segons el nivell.",
      "Paga la quota en efectiu el primer assaig de cada mes.",
      "Vine a classe cada dissabte, sense reservar cada sessió.",
    ],
    material: "Material",
    materialText:
      "No cal comprar un tambor o bombo professional. Sí és necessari comprar una caixa sorda + suport per a practicar a classe i a casa (t’informarem d’on comprar-la). Quan el professorat ho indique, es practicarà amb els instruments propis de la secció.",
    absence: "Absències i recuperacions",
    absenceText: [
      "Si falta l’alumne, la classe compta com a perduda.",
      "Si cancel·la l’organització, es recuperarà la classe un altre dia.",
    ],
    parades: "Desfilades",
    paradesText:
      "Els alumnes podran acompanyar la secció titular a les desfilades portant estendards, banderes i escuts. Tocaran amb la secció quan els professors ho consideren oportú, i sí ho faran al Pregó infantil de la Magdalena i a les actuacions pròpies de l’Escoleta. T’informarem de com fer-te la indumentària medieval.",
    membership: "Soci de la Germandat",
    membershipText:
      "Com a secció interna de la Germandat dels Cavallers de la Conquesta, caldrà inscriure’s com a soci de l’associació quan ho indique l’organització de la secció.",
    join: "La primera quota serà proporcional a les classes que queden del mes d’inici.",
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
    price: "40 € / mes por persona",
    discount:
      "30 € / mes por persona para socios de la Germandat dels Cavallers de la Conquesta o para dos o más miembros de la misma unidad familiar.",
    payment: "Pago en efectivo el primer ensayo de cada mes.",
    schedule:
      "Sábados de 10:00 a 12:00 — Antiguo Cuartel de Tetuán XIV (junto al circuito de seguridad vial), Castelló",
    start: "Inicio previsto: 14 de noviembre de 2026.",
    slots: ["Primera franja: 10:00", "Segunda franja: 11:00"],
    duration: "Clases de unos 45 minutos. Los grupos y las franjas los concretarán los profesores.",
    levels:
      "Grupos de iniciación y avanzado, según la observación de los profesores. Máximo de 10–15 alumnos por grupo; se estudiará ampliar grupos según la participación.",
    changes: "Las clases pueden cambiar de día u hora si coinciden con una actuación de la sección titular.",
    steps: [
      "Rellena el formulario de inscripción.",
      "Los profesores asignan el grupo según el nivel.",
      "Paga la cuota en efectivo el primer ensayo de cada mes.",
      "Acude a clase cada sábado, sin reservar cada sesión.",
    ],
    material: "Material",
    materialText:
      "No hace falta comprar un tambor o bombo profesional. Sí es necesario comprar una caja sorda + soporte para practicar en clase y en casa (te informaremos de dónde comprarla). Cuando el profesorado lo indique, se practicará con los instrumentos propios de la sección.",
    absence: "Ausencias y recuperaciones",
    absenceText: [
      "Si falta el alumno, la clase cuenta como perdida.",
      "Si cancela la organización, se recuperará la clase otro día.",
    ],
    parades: "Desfiles",
    paradesText:
      "Los alumnos podrán acompañar a la sección titular en los desfiles portando estandartes, banderas y escudos. Tocarán con la sección cuando los profesores lo consideren oportuno, y sí lo harán en el Pregó infantil de la Magdalena y en las actuaciones propias de la Escoleta. Te informaremos de cómo hacerte la indumentaria medieval.",
    membership: "Socio de la Germandat",
    membershipText:
      "Como sección interna de la Germandat dels Cavallers de la Conquesta, será necesario inscribirse como socio de la asociación cuando lo indique la organización de la sección.",
    join: "La primera cuota será proporcional a las clases que queden del mes de inicio.",
    mapLink: "Ver el lugar de ensayo en Google Maps",
    mapHint: "Abrir ubicación exacta",
  },
  en: {
    title: "Learn together. Play as a group.",
    register: "Apply to join",
    times: "Timetable",
    scheduleTitle: "Timetable",
    how: "How it works",
    tuition: "Monthly fee",
    price: "€40 / month per person",
    discount:
      "€30 / month per person for members of the Germandat dels Cavallers de la Conquesta, or for two or more members of the same family.",
    payment: "Paid in cash at the first class of each month.",
    schedule: "Saturdays 10:00–12:00 — Tetuán XIV Old Barracks (next to the road safety circuit), Castelló",
    start: "Planned start: 14 November 2026.",
    slots: ["First time slot: 10:00", "Second time slot: 11:00"],
    duration: "Classes last about 45 minutes. Groups and time slots will be set by the teachers.",
    levels:
      "Beginner and advanced groups, assigned by the teachers. Up to 10–15 students per group; more groups may be added depending on demand.",
    changes: "Classes may change day or time if they clash with a performance by the main section.",
    steps: [
      "Fill in the registration form.",
      "The teachers assign your group based on level.",
      "Pay the fee in cash at the first class of each month.",
      "Come to class every Saturday, no need to book each session.",
    ],
    material: "Equipment",
    materialText:
      "You don’t need a professional drum. You do need to buy a practice pad + stand to practise in class and at home (we’ll tell you where to buy it). When the teachers say so, classes will use the section’s own instruments.",
    absence: "Absences and make-up classes",
    absenceText: [
      "If a student misses a class, it is not recovered.",
      "If the school cancels, the class will be rescheduled.",
    ],
    parades: "Parades",
    paradesText:
      "Students may join the main section in parades carrying banners, flags and crests. They will play with the section when the teachers see fit, and will play at the children’s Pregó of the Magdalena festival and at the Escoleta’s own performances. We’ll explain how to get the medieval outfit.",
    membership: "Germandat membership",
    membershipText:
      "As an internal section of the Germandat dels Cavallers de la Conquesta, students will need to join the association as members when the section asks.",
    join: "The first fee is prorated to the classes remaining in the starting month.",
    mapLink: "View rehearsal location on Google Maps",
    mapHint: "Open exact location",
  },
};
export function EscoletaOverview() {
  const { language } = useLanguage();
  const t = copy[language];
  return (
    <div className="space-y-10">
      <div className="reveal grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:items-center">
        <div>
          <h2 className="font-display text-4xl">{t.title}</h2>
          <nav className="escoleta-overview-actions" aria-label={t.title}>
            <a className="escoleta-button escoleta-button-primary" href="#inscripcion-escoleta">
              {t.register}
            </a>
            <a className="escoleta-button escoleta-button-secondary" href="#horarios-escoleta">
              {t.times}
            </a>
            <a className="escoleta-button escoleta-button-secondary" href="#funcionamiento-escoleta">
              {t.how}
            </a>
          </nav>
          <p className="mt-4 text-muted-foreground">{t.start}</p>
        </div>
        <div className="rounded-md border border-brass bg-vellum p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <h3 className="font-nav text-2xl">{t.tuition}</h3>
            <p className="font-display text-3xl text-accent">{t.price}</p>
          </div>
          <div className="mt-4 grid gap-x-6 gap-y-3 border-t border-border pt-4 sm:grid-cols-2">
            <p>{t.discount}</p>
            <div className="space-y-3">
              <p>{t.payment}</p>
              <p className="text-muted-foreground">{t.join}</p>
            </div>
          </div>
        </div>
      </div>
      <section
        id="horarios-escoleta"
        className="reveal scroll-mt-6 rounded-md border border-border bg-vellum p-6 shadow-parchment"
      >
        <h2 className="font-display text-4xl">{t.scheduleTitle}</h2>
        <p className="mt-3 font-nav text-2xl text-accent">{t.schedule}</p>
        <div className="my-5 grid gap-4 sm:grid-cols-2">
          {t.slots.map((s) => (
            <div key={s} className="border border-border bg-background p-4 font-nav text-2xl">
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
            <span className="block text-sm text-primary-foreground/75">{t.mapHint}</span>
          </span>
        </a>
      </section>
      <section id="funcionamiento-escoleta" className="scroll-mt-6">
        <h2 className="font-display text-4xl">{t.how}</h2>
        <ol className="mt-5 grid gap-4 sm:grid-cols-2">
          {t.steps.map((s, i) => (
            <li key={s} className="reveal card-lift rounded-md border border-border bg-vellum p-5">
              <span className="mr-3 font-display text-3xl text-accent">{i + 1}.</span>
              {s}
            </li>
          ))}
        </ol>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {(
            [
              [t.material, t.materialText],
              [t.parades, t.paradesText],
              [t.absence, t.absenceText],
              [t.membership, t.membershipText],
            ] as [string, string | string[]][]
          ).map(([title, text]) => (
            <article key={title} className="reveal card-lift rounded-md border border-border bg-vellum p-5">
              <h3 className="font-nav text-2xl">{title}</h3>
              {Array.isArray(text) ? (
                <ul className="mt-3 list-disc space-y-2 pl-5">
                  {text.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3">{text}</p>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
