import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Language = "va" | "es" | "en";

const STORAGE_KEY = "df-language";

// Valencian uses the BCP 47 tag for Catalan with the Valencian variant.
const htmlLang: Record<Language, string> = { va: "ca-ES-valencia", es: "es", en: "en" };

function isLanguage(value: unknown): value is Language {
  return value === "va" || value === "es" || value === "en";
}

function readStoredLanguage(): Language {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLanguage(stored)) return stored;
  } catch {
    // Storage can be blocked (private mode, cookies disabled): fall back to Valencian.
  }
  return "va";
}

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
} | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() =>
    typeof window === "undefined" ? "va" : readStoredLanguage(),
  );

  useEffect(() => {
    document.documentElement.lang = htmlLang[language];
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // Ignore: the choice just won't be remembered.
    }
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}

/** For screens that may render outside the provider (404, error page). */
export function useLanguageOrDefault(): Language {
  const context = useContext(LanguageContext);
  if (context) return context.language;
  return typeof window === "undefined" ? "va" : readStoredLanguage();
}
