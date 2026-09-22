import { useEffect, useState, type ReactNode } from "react";

import { X } from "lucide-react";
import { cn } from "@/lib/utils";

type ImageLightboxProps = {
  alt: string;
  children: ReactNode;
  className?: string;
  src: string;
};

export function ImageLightbox({
  alt,
  children,
  className,
  src,
}: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);

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
        aria-label={`Ampliar imagen: ${alt}`}
        onClick={() => setIsOpen(true)}
      >
        {children}
        <span className="pointer-events-none absolute inset-0 bg-iron/0 transition-colors group-hover:bg-iron/10" />
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-iron/80 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`Imagen ampliada: ${alt}`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
        >
          <button
            type="button"
            className="absolute right-4 top-4 z-10 rounded-sm p-2 text-iron-foreground transition-opacity hover:opacity-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass"
            aria-label="Cerrar imagen ampliada"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={src}
            alt={alt}
            className="max-h-[78vh] max-w-[88vw] object-contain"
          />
        </div>
      ) : null}
    </>
  );
}
