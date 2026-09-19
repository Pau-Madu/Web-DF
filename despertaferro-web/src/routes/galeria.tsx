import { createFileRoute } from "@tanstack/react-router";

import { SectionPage } from "@/components/site/SectionPage";
import { routeMeta } from "@/lib/site-content";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: routeMeta.galeria.title },
      { name: "description", content: routeMeta.galeria.description },
      { property: "og:title", content: routeMeta.galeria.title },
      { property: "og:description", content: routeMeta.galeria.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <SectionPage page="galeria" />,
});
