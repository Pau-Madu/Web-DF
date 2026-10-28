import { useLanguage } from "@/lib/language";
import { content } from "@/lib/site-content";

type Pages = (typeof content)[keyof typeof content]["pages"];

/** Content of one page in the visitor's current language. */
export function usePageContent<K extends keyof Pages>(page: K): Pages[K] {
  const { language } = useLanguage();
  return content[language].pages[page] as Pages[K];
}
