import { Link } from "@tanstack/react-router";

import { useLanguage } from "@/lib/language";
import { cn } from "@/lib/utils";

const homeLabel = { va: "Anar a l'inici", es: "Ir a la página de inicio", en: "Go to the home page" };

export function MedievalLogo({ className }: { className?: string }) {
  const { language } = useLanguage();
  return (
    <div
      className={cn(
        "relative flex aspect-square w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border-4 border-iron bg-iron text-iron-foreground shadow-medieval",
        className,
      )}
    >
      <Link
        to="/"
        className="group relative block h-full w-full cursor-pointer overflow-hidden rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        aria-label={homeLabel[language]}
      >
        <img src="/LogoAntiguo.png" alt="Desperta, Ferro!" className="h-full w-full object-cover" />
        <span className="pointer-events-none absolute inset-0 bg-iron/0 transition-colors group-hover:bg-iron/10" />
      </Link>
    </div>
  );
}
