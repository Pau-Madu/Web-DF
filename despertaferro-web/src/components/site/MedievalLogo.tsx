import { Link } from "@tanstack/react-router";

export function MedievalLogo() {
  return (
    <div className="relative flex aspect-square w-32 items-center justify-center overflow-hidden rounded-full border-8 border-iron bg-iron text-iron-foreground shadow-medieval sm:w-44 lg:w-56">
      <Link
        to="/"
        className="group relative block h-full w-full cursor-pointer overflow-hidden rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        aria-label="Ir a la pagina de inicio"
      >
        <img
          src="/LogoAntiguo.png"
          alt="Desperta, Ferro!"
          className="h-full w-full object-cover"
        />
        <span className="pointer-events-none absolute inset-0 bg-iron/0 transition-colors group-hover:bg-iron/10" />
      </Link>
    </div>
  );
}
