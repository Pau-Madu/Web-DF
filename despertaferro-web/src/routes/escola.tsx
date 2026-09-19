import { createFileRoute } from "@tanstack/react-router";

import { SectionPage } from "@/components/site/SectionPage";
import { routeMeta } from "@/lib/site-content";

export const Route = createFileRoute("/escola")({
  head: () => ({
    meta: [
      { title: routeMeta.escola.title },
      { name: "description", content: routeMeta.escola.description },
      { property: "og:title", content: routeMeta.escola.title },
      { property: "og:description", content: routeMeta.escola.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <SectionPage page="escola" />,
});
