import { createFileRoute } from "@tanstack/react-router";

import { SectionPage } from "@/components/site/SectionPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/actuacions")({
  head: () => pageHead("actuacions"),
  component: () => <SectionPage page="actuacions" />,
});
