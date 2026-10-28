import { useEffect } from "react";

/**
 * Fades in every element with the `reveal` class the first time it scrolls into view.
 * Content stays visible if JavaScript fails or the visitor prefers reduced motion
 * (the hiding styles only apply once `reveal-ready` is set, see styles.css).
 */
export function useRevealOnScroll(pathname: string) {
  useEffect(() => {
    const root = document.documentElement;
    if (!("IntersectionObserver" in window)) return;
    root.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    const watch = () => {
      document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => observer.observe(el));
    };
    watch();

    // Pick up elements rendered later (lazy routes, language switch, opened sections).
    const mutations = new MutationObserver(watch);
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, [pathname]);
}
