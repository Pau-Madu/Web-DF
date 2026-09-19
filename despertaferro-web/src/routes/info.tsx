import { createFileRoute } from "@tanstack/react-router";

import { SectionPage } from "@/components/site/SectionPage";
import { routeMeta } from "@/lib/site-content";

export const Route = createFileRoute("/info")({
  head: () => ({
    meta: [
      { title: routeMeta.info.title },
      { name: "description", content: routeMeta.info.description },
      { property: "og:title", content: routeMeta.info.title },
      { property: "og:description", content: routeMeta.info.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <SectionPage page="info" />,
});
