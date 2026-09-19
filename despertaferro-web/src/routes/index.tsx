import { createFileRoute } from "@tanstack/react-router";

import { HomePage } from "@/components/site/HomePage";
import { routeMeta } from "@/lib/site-content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: routeMeta.home.title },
      { name: "description", content: routeMeta.home.description },
      { property: "og:title", content: routeMeta.home.title },
      { property: "og:description", content: routeMeta.home.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});
