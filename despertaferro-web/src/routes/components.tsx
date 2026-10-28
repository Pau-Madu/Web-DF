import { createFileRoute } from "@tanstack/react-router";

import { SectionPage } from "@/components/site/SectionPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/components")({
  head: () => pageHead("components"),
  component: () => <SectionPage page="components" />,
});
