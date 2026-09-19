import { createFileRoute } from "@tanstack/react-router";

import { SectionPage } from "@/components/site/SectionPage";
import { routeMeta } from "@/lib/site-content";

export const Route = createFileRoute("/components")({
  head: () => ({
    meta: [
      { title: routeMeta.components.title },
      { name: "description", content: routeMeta.components.description },
      { property: "og:title", content: routeMeta.components.title },
      { property: "og:description", content: routeMeta.components.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <SectionPage page="components" />,
});
