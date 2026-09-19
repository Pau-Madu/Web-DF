import { createFileRoute } from "@tanstack/react-router";

import { SectionPage } from "@/components/site/SectionPage";
import { routeMeta } from "@/lib/site-content";

export const Route = createFileRoute("/contacte")({
  head: () => ({
    meta: [
      { title: routeMeta.contacte.title },
      { name: "description", content: routeMeta.contacte.description },
      { property: "og:title", content: routeMeta.contacte.title },
      { property: "og:description", content: routeMeta.contacte.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <SectionPage page="contacte" />,
});
