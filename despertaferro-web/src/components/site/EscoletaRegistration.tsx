import "./EscoletaRegistration.css";

const registrationFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLScjnDxA942uZuY6jEN7cpwT5ndLY1DJdx4xYohCN5RlMxx0uw/viewform";

export function EscoletaRegistration() {
  return (
    <section
      id="inscripcion-escoleta"
      className="escoleta-registration scroll-mt-6"
      lang="es"
      aria-labelledby="registration-heading"
    >
      <div className="mb-6">
        <p className="font-nav text-2xl text-accent">Inscripción · Escoleta</p>
        <h2
          id="registration-heading"
          className="font-display text-4xl sm:text-5xl"
        >
          Una solicitud para toda la familia
        </h2>
        <p className="mt-3 text-lg text-muted-foreground">
          Completa el formulario oficial de inscripción. Puedes inscribirte como
          adulto, registrar menores o enviar una solicitud familiar.
        </p>
      </div>

      <details className="escoleta-registration-card">
        <summary className="escoleta-registration-summary">
          <span>
            <span className="escoleta-registration-eyebrow">
              Solicitud de plaza
            </span>
            <span className="escoleta-registration-title">
              Iniciar inscripción
            </span>
            <span className="escoleta-registration-description">
              Para adultos, menores y familias. El formulario se abre aquí
              mismo.
            </span>
          </span>
          <span className="escoleta-registration-action" aria-hidden="true">
            Abrir <span className="escoleta-registration-chevron">⌄</span>
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
            ¿Prefieres abrirlo en otra pestaña?{" "}
            <a
              className="text-accent underline"
              href={registrationFormUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir el formulario oficial
            </a>
            .
          </p>
        </div>
      </details>
    </section>
  );
}
