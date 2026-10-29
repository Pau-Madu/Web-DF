import { routeMeta, type PageKey } from "./site-content";

export const SITE_URL = "https://despertaferro-cs.web.app";
export const OG_IMAGE = `${SITE_URL}/og-image.jpg?v=2`;

const paths: Record<PageKey, string> = {
  home: "/",
  info: "/info",
  components: "/components",
  actuacions: "/actuacions",
  galeria: "/galeria",
  escola: "/escola",
  merchandising: "/merchandising",
  contacte: "/contacte",
};

/** Title, description, social-preview tags and canonical link for one page. */
export function pageHead(page: PageKey) {
  const { title, description } = routeMeta[page];
  const url = `${SITE_URL}${paths[page]}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:site_name", content: "Desperta, Ferro!" },
      { property: "og:locale", content: "ca_ES" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
