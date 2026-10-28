import { useLanguage, type Language } from "@/lib/language";

import "./EscoletaRegistration.css";

const registrationFormUrl = "https://forms.gle/8WobRHMvPFcpa6z66";
const embeddedRegistrationFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSccY6IKamqSlLBUdfvO5HbGIIpz2hmwGbI9-dJnKr56z_UNFQ/viewform?embedded=true";

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
    title: "Inscripció a l’Escoleta",
    introduction: "Completa el formulari oficial d’inscripció i ens posarem en contacte amb tu.",
    application: "Sol·licitud de plaça",
    start: "Iniciar inscripció",
    description: "Formulari d’inscripció a l’Escoleta. S’obri ací mateix.",
    open: "Obrir",
    openInNewTab: "Prefereixes obrir-lo en una altra pestanya?",
    openOfficialForm: "Obrir el formulari oficial",
  },
  es: {
    kicker: "Inscripción · Escoleta",
    title: "Inscripción a la Escoleta",
    introduction: "Rellena el formulario oficial de inscripción y nos pondremos en contacto contigo.",
    application: "Solicitud de plaza",
    start: "Iniciar inscripción",
    description: "Formulario de inscripción a la Escoleta. Se abre aquí mismo.",
    open: "Abrir",
    openInNewTab: "¿Prefieres abrirlo en otra pestaña?",
    openOfficialForm: "Abrir el formulario oficial",
  },
  en: {
    kicker: "Registration · Escoleta",
    title: "Escoleta registration",
    introduction: "Complete the official registration form and we will get in touch with you.",
    application: "Application for a place",
    start: "Start registration",
    description: "Registration form for the Escoleta. It opens right here.",
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
      className="reveal escoleta-registration scroll-mt-6"
      lang={language === "va" ? "ca-ES-valencia" : language}
      aria-labelledby="registration-heading"
    >
      <div className="mb-6">
        <p className="font-nav text-2xl text-accent">{t.kicker}</p>
        <h2 id="registration-heading" className="font-display text-4xl sm:text-5xl">
          {t.title}
        </h2>
        <p className="mt-3 text-lg text-muted-foreground">{t.introduction}</p>
      </div>

      <details className="escoleta-registration-card">
        <summary className="escoleta-registration-summary">
          <span>
            <span className="escoleta-registration-eyebrow">{t.application}</span>
            <span className="escoleta-registration-title">{t.start}</span>
            <span className="escoleta-registration-description">{t.description}</span>
          </span>
          <span className="escoleta-registration-action" aria-hidden="true">
            {t.open} <span className="escoleta-registration-chevron">⌄</span>
          </span>
        </summary>

        <div className="escoleta-form-content">
          <div className="escoleta-form-frame">
            <iframe
              src={embeddedRegistrationFormUrl}
              title="Formulario oficial de inscripción de la Escoleta Desperta, Ferro!"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          <p className="mt-4 text-muted-foreground">
            {t.openInNewTab}{" "}
            <a className="text-accent underline" href={registrationFormUrl} target="_blank" rel="noopener noreferrer">
              {t.openOfficialForm}
            </a>
            .
          </p>
        </div>
      </details>
    </section>
  );
}
