import { ImageLightbox } from "@/components/site/ImageLightbox";
import { PlaceholderPanel } from "@/components/site/PlaceholderPanel";
import { usePageContent } from "./use-page-content";

// Same order as the album names in site-content.
const galleryImages = [
  { src: "/fotoAnticsMembres_galeria.webp", position: "center" },
  { src: "/fotoActuacions_galeria.webp", position: "48% 20%" },
  { src: "/fotoEnsayo_galeria.webp", position: "center" },
  { src: "/fotoMedieval_galeria.webp", position: "center" },
  { src: "/fotoMagdalena_galeria.webp", position: "center" },
  { src: "/fotoEscoleta_galeria.webp", position: "center" },
];

export function GaleriaPage() {
  const data = usePageContent("galeria");
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {data.albums.map((album, index) => {
        const image = galleryImages[index] ?? galleryImages[0]!;
        return (
          <div key={album} className="reveal card-lift rounded-md">
            <PlaceholderPanel label={album}>
              <div className="flex h-52 w-full items-center justify-center overflow-hidden rounded-md border border-border bg-background/50">
                <ImageLightbox src={image.src} alt={album} className="h-full w-full rounded-none">
                  <img
                    src={image.src}
                    alt={album}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                    style={{ objectPosition: image.position }}
                  />
                </ImageLightbox>
              </div>
            </PlaceholderPanel>
          </div>
        );
      })}
    </div>
  );
}
