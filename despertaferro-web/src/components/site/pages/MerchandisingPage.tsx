import { ImageLightbox } from "@/components/site/ImageLightbox";
import { usePageContent } from "./use-page-content";

export function MerchandisingPage() {
  const data = usePageContent("merchandising");
  return (
    <div className="grid gap-8">
      <div className="reveal rounded-md border border-brass bg-primary p-5 font-nav text-3xl text-primary-foreground shadow-parchment">
        {data.notice}
      </div>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {data.products.map((product) => (
          <article
            key={product.title}
            className="reveal card-lift overflow-hidden rounded-md border border-border bg-vellum shadow-parchment"
          >
            {product.image ? (
              <div className="h-72 w-full overflow-hidden border-b border-border bg-white">
                <ImageLightbox src={product.image} alt={product.title} className="h-full w-full rounded-none">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </ImageLightbox>
              </div>
            ) : (
              <div className="flex h-72 w-full items-center justify-center border-b border-border bg-background/60 px-6 text-center font-nav text-3xl text-accent">
                {product.title}
              </div>
            )}
            <div className="p-5">
              <h2 className="font-nav text-3xl text-foreground">{product.title}</h2>
              {product.description ? <p className="mt-3 text-muted-foreground">{product.description}</p> : null}
              {"price" in product && product.price ? (
                <p className="mt-4 font-nav text-2xl text-accent">{product.price}</p>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
