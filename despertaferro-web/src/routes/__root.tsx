import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { SiteShell } from "../components/site/SiteShell";
import { LanguageProvider, useLanguageOrDefault } from "../lib/language";
import { reportLovableError } from "../lib/lovable-error-reporting";

const fallbackCopy = {
  va: {
    notFoundTitle: "Pàgina no trobada",
    notFoundText: "La pàgina que busques no existeix o s'ha mogut.",
    home: "Tornar a l'inici",
    errorTitle: "Aquesta pàgina no s'ha pogut carregar",
    errorText: "Alguna cosa ha fallat. Pots tornar-ho a provar o anar a l'inici.",
    retry: "Tornar a provar",
  },
  es: {
    notFoundTitle: "Página no encontrada",
    notFoundText: "La página que buscas no existe o se ha movido.",
    home: "Volver al inicio",
    errorTitle: "Esta página no se ha podido cargar",
    errorText: "Algo ha fallado. Puedes volver a intentarlo o ir al inicio.",
    retry: "Volver a intentar",
  },
  en: {
    notFoundTitle: "Page not found",
    notFoundText: "The page you're looking for doesn't exist or has been moved.",
    home: "Go home",
    errorTitle: "This page didn't load",
    errorText: "Something went wrong. You can try again or head back home.",
    retry: "Try again",
  },
};

function NotFoundComponent() {
  const t = fallbackCopy[useLanguageOrDefault()];
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4 py-16">
      <div className="max-w-md text-center">
        <p className="font-display text-8xl text-accent">404</p>
        <h1 className="mt-4 font-display text-4xl text-foreground">{t.notFoundTitle}</h1>
        <p className="mt-3 text-lg text-muted-foreground">{t.notFoundText}</p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 font-nav text-lg text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t.home}
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  const t = fallbackCopy[useLanguageOrDefault()];
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-4xl text-foreground">{t.errorTitle}</h1>
        <p className="mt-3 text-lg text-muted-foreground">{t.errorText}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 font-nav text-lg text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t.retry}
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-border bg-vellum px-5 py-3 font-nav text-lg text-foreground transition-colors hover:border-brass"
          >
            {t.home}
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Desperta, Ferro!" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IM+Fell+English+SC&family=IM+Fell+English:ital@0;1&family=Pirata+One&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/fotoEmblema_info.jpg", type: "image/jpeg" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="ca-ES-valencia">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <SiteShell>
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </SiteShell>
      </LanguageProvider>
    </QueryClientProvider>
  );
}
