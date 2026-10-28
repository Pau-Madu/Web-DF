import { useEffect, useState, type ReactNode } from "react";

import { X } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { cn } from "@/lib/utils";

const labels = {
  va: { open: "Ampliar imatge", dialog: "Imatge ampliada", close: "Tancar imatge ampliada" },
  es: { open: "Ampliar imagen", dialog: "Imagen ampliada", close: "Cerrar imagen ampliada" },
  en: { open: "Enlarge image", dialog: "Enlarged image", close: "Close enlarged image" },
};

type ImageLightboxProps = {
  alt: string;
  children: ReactNode;
  className?: string;
  src: string;
};

export function ImageLightbox({ alt, children, className, src }: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const t = labels[useLanguage().language];

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className={cn(
          "group relative block cursor-zoom-in overflow-hidden rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          className,
        )}
        aria-label={`${t.open}: ${alt}`}
        onClick={() => setIsOpen(true)}
      >
        {children}
        <span className="pointer-events-none absolute inset-0 bg-iron/0 transition-colors group-hover:bg-iron/10" />
      </button>

      {/* Rendered in place on purpose: a portal to document.body freezes the page here,
          because the root route renders <html>/<body> itself (React event loop never ends). */}
      {isOpen ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-iron/80 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${t.dialog}: ${alt}`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
        >
          <button
            type="button"
            className="absolute right-4 top-4 z-10 rounded-sm p-2 text-iron-foreground transition-opacity hover:opacity-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass"
            aria-label={t.close}
            onClick={() => setIsOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>
          <img src={src} alt={alt} className="max-h-[78vh] max-w-[88vw] object-contain" />
        </div>
      ) : null}
    </>
  );
}
