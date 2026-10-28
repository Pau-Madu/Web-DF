import { Crown, Flag, Lock, Music, Users } from "lucide-react";
import type { ReactNode } from "react";

import { ImageLightbox } from "@/components/site/ImageLightbox";
import { usePageContent } from "./use-page-content";

// Mientras falten fotos de componentes, la página se muestra borrosa con un aviso de "Pròximament".
// Cuando estén todas, cambiar a false para publicarla.
const COMPONENTS_PAGE_LOCKED = true;

const memberImages: Record<string, string> = {
  Sergio: "/Fotos-componentes/Sergio-DF.webp",
  Fernando: "/Fotos-componentes/Fer-DF.webp",
  "Jose V.": "/Fotos-componentes/Jose%20V.-DF.webp",
  Pablo: "/Fotos-componentes/Pablo-DF.webp",
  "Jose M.": "/Fotos-componentes/Jose%20M.-DF.webp",
  Gerard: "/Fotos-componentes/Gerard-DF.webp",
  Pau: "/Fotos-componentes/Pau-DF.webp",
  David: "/Fotos-componentes/David-DF.webp",
  Liam: "/Fotos-componentes/Liam-DF.webp",
  Mariete: "/Fotos-componentes/Mariete-DF.webp",
  Miguel: "/Fotos-componentes/Miguel-DF.webp",
  Aitana: "/Fotos-componentes/Aitana-DF.webp",
  Victor: "/Fotos-componentes/Victor-DF.webp",
  Ruben: "/Fotos-componentes/Ruben-DF.webp",
};

// Vertical framing of each photo so faces stay visible in the card crop.
const memberPhotoPosition: Record<string, string> = {
  Pablo: "center 32%",
  Aitana: "center 34%",
  Victor: "center 34%",
  Ruben: "center 46%",
  Gerard: "center 45%",
  Sergio: "center 65%",
  Pau: "center 40%",
  David: "center 40%",
};

export function ComponentsPage() {
  const data = usePageContent("components");
  const [activeMembers, aspirantSection, substituteSection] = data.sections;

  const body = (
    <div className="grid gap-8">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.groups.map((item, index) => (
          <InstrumentCard key={item} title={item} index={index} />
        ))}
      </div>
      <div className="grid gap-8">
        <MemberGroup title={activeMembers.title} text={activeMembers.text} members={data.members} />
        <div className="grid gap-8 lg:grid-cols-2">
          <MemberGroup title={aspirantSection.title} text={aspirantSection.text} members={data.aspirants} />
          <MemberGroup title={substituteSection.title} text={substituteSection.text} members={data.substitutes} />
        </div>
      </div>
    </div>
  );

  return COMPONENTS_PAGE_LOCKED ? <LockedPreview copy={data.locked}>{body}</LockedPreview> : body;
}

const instrumentIcons = [Music, Music, Flag, Crown];

function InstrumentCard({ title, index }: { title: string; index: number }) {
  const Icon = instrumentIcons[index] ?? Music;
  return (
    <article className="reveal card-lift rounded-md border border-border bg-iron p-5 text-iron-foreground shadow-medieval">
      <Icon className="mb-5 h-10 w-10 text-brass" aria-hidden="true" />
      <h2 className="font-nav text-3xl">{title}</h2>
    </article>
  );
}

function MemberCard({ name }: { name: string }) {
  const image = memberImages[name];
  return (
    <article className="card-lift overflow-hidden rounded-md border border-border bg-background/60 shadow-parchment">
      {image ? (
        <ImageLightbox src={image} alt={`Foto de ${name}`} className="aspect-[4/3] w-full border-b border-border">
          <img
            src={image}
            alt={`Foto de ${name}`}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
            style={{ objectPosition: memberPhotoPosition[name] ?? "center" }}
          />
        </ImageLightbox>
      ) : (
        <div
          className="flex aspect-[4/3] items-center justify-center border-b border-border bg-battle-scene"
          role="img"
          aria-label={`Foto de ${name}`}
        >
          <Users className="h-12 w-12 text-brass/80" aria-hidden="true" />
        </div>
      )}
      <h3 className="px-4 py-4 text-center font-nav text-2xl text-primary">{name}</h3>
    </article>
  );
}

function MemberGroup({ title, text, members }: { title: string; text: string; members: readonly string[] }) {
  return (
    <section className="reveal rounded-md border border-brass bg-vellum p-6 shadow-parchment sm:p-8">
      <div className="mb-6">
        <h2 className="font-display text-4xl leading-tight text-foreground sm:text-5xl">{title}</h2>
        <p className="mt-3 text-lg leading-8 text-muted-foreground">{text}</p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {members.map((member) => (
          <MemberCard key={member} name={member} />
        ))}
      </div>
    </section>
  );
}

/** Blurred, non-interactive preview with a "coming soon" notice on top. */
function LockedPreview({
  copy,
  children,
}: {
  copy: { badge: string; title: string; text: string };
  children: ReactNode;
}) {
  return (
    <div className="relative">
      <div
        className="pointer-events-none max-h-[44rem] select-none overflow-hidden blur-md saturate-50 [mask-image:linear-gradient(to_bottom,black_55%,transparent)]"
        aria-hidden="true"
        inert
      >
        {children}
      </div>
      <div className="absolute inset-0 flex items-start justify-center px-4 pt-16 sm:pt-24">
        <div className="reveal max-w-md rounded-md border-2 border-brass bg-vellum/95 p-8 text-center shadow-medieval backdrop-blur-sm">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-brass bg-iron text-brass">
            <Lock className="h-7 w-7" aria-hidden="true" />
          </span>
          <p className="mt-5 font-nav text-xl uppercase tracking-wide text-accent">{copy.badge}</p>
          <h2 className="mt-2 font-display text-4xl leading-tight text-foreground">{copy.title}</h2>
          <p className="mt-3 text-lg leading-7 text-muted-foreground">{copy.text}</p>
        </div>
      </div>
    </div>
  );
}
