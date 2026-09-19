import { createFileRoute } from "@tanstack/react-router";

import { SectionPage } from "@/components/site/SectionPage";
import { routeMeta } from "@/lib/site-content";

export const Route = createFileRoute("/actuacions")({
  head: () => ({
    meta: [
      { title: routeMeta.actuacions.title },
      { name: "description", content: routeMeta.actuacions.description },
      { property: "og:title", content: routeMeta.actuacions.title },
      { property: "og:description", content: routeMeta.actuacions.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <SectionPage page="actuacions" />,
});
