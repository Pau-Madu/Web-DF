import { useLanguage, type Language } from "@/lib/language";

import "./EscoletaRegistration.css";

const registrationFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLScjnDxA942uZuY6jEN7cpwT5ndLY1DJdx4xYohCN5RlMxx0uw/viewform";

const copy: Record<
  Language,
  {
    kicker: string;
    title: string;
    introduction: string;
    application: string;
    start: string;
    description: string;
    open: string;
    openInNewTab: string;
    openOfficialForm: string;
  }
> = {
  va: {
    kicker: "Inscripció · Escoleta",
    title: "Una sol·licitud per a tota la família",
    introduction:
      "Completa el formulari oficial d’inscripció. Pots inscriure’t com a persona adulta, registrar menors o enviar una sol·licitud familiar.",
    application: "Sol·licitud de plaça",
    start: "Iniciar inscripció",
    description:
      "Per a persones adultes, menors i famílies. El formulari s’obri ací mateix.",
    open: "Obrir",
    openInNewTab: "Prefereixes obrir-lo en una altra pestanya?",
    openOfficialForm: "Obrir el formulari oficial",
  },
  es: {
    kicker: "Inscripción · Escoleta",
    title: "Una solicitud para toda la familia",
    introduction:
      "Completa el formulario oficial de inscripción. Puedes inscribirte como adulto, registrar menores o enviar una solicitud familiar.",
    application: "Solicitud de plaza",
    start: "Iniciar inscripción",
    description:
      "Para adultos, menores y familias. El formulario se abre aquí mismo.",
    open: "Abrir",
    openInNewTab: "¿Prefieres abrirlo en otra pestaña?",
    openOfficialForm: "Abrir el formulario oficial",
  },
  en: {
    kicker: "Registration · Escoleta",
    title: "One application for the whole family",
    introduction:
      "Complete the official registration form. You can register as an adult, register children, or submit one application for your family.",
    application: "Application for a place",
    start: "Start registration",
    description:
      "For adults, children, and families. The form opens right here.",
    open: "Open",
    openInNewTab: "Would you prefer to open it in a new tab?",
    openOfficialForm: "Open the official form",
  },
};

export function EscoletaRegistration() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <section
      id="inscripcion-escoleta"
      className="escoleta-registration scroll-mt-6"
      lang={language}
      aria-labelledby="registration-heading"
    >
      <div className="mb-6">
        <p className="font-nav text-2xl text-accent">{t.kicker}</p>
        <h2
          id="registration-heading"
          className="font-display text-4xl sm:text-5xl"
        >
          {t.title}
        </h2>
        <p className="mt-3 text-lg text-muted-foreground">{t.introduction}</p>
      </div>

      <details className="escoleta-registration-card">
        <summary className="escoleta-registration-summary">
          <span>
            <span className="escoleta-registration-eyebrow">
              {t.application}
            </span>
            <span className="escoleta-registration-title">{t.start}</span>
            <span className="escoleta-registration-description">
              {t.description}
            </span>
          </span>
          <span className="escoleta-registration-action" aria-hidden="true">
            {t.open} <span className="escoleta-registration-chevron">⌄</span>
          </span>
        </summary>

        <div className="escoleta-form-content">
          <div className="escoleta-form-frame">
            <iframe
              src={`${registrationFormUrl}?embedded=true`}
              title="Formulario oficial de inscripción de la Escoleta Desperta, Ferro!"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          <p className="mt-4 text-muted-foreground">
            {t.openInNewTab}{" "}
            <a
              className="text-accent underline"
              href={registrationFormUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.openOfficialForm}
            </a>
            .
          </p>
        </div>
      </details>
    </section>
  );
}
