import { createFileRoute } from "@tanstack/react-router";

import { SectionPage } from "@/components/site/SectionPage";
import { routeMeta } from "@/lib/site-content";

export const Route = createFileRoute("/merchandising")({
  head: () => ({
    meta: [
      { title: routeMeta.merchandising.title },
      { name: "description", content: routeMeta.merchandising.description },
      { property: "og:title", content: routeMeta.merchandising.title },
      { property: "og:description", content: routeMeta.merchandising.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <SectionPage page="merchandising" />,
});
