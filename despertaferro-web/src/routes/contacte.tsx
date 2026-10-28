import { createFileRoute } from "@tanstack/react-router";

import { SectionPage } from "@/components/site/SectionPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/contacte")({
  head: () => pageHead("contacte"),
  component: () => <SectionPage page="contacte" />,
});
