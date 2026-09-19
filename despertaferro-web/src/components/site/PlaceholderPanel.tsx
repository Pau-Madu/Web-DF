import type { ReactNode } from "react";

export function PlaceholderPanel({ label, children, compact = false }: { label: string; children?: ReactNode; compact?: boolean }) {
  return (
    <div className="relative overflow-hidden rounded-md border border-brass bg-vellum shadow-parchment">
      <div className="absolute inset-0 bg-rune-grid opacity-70" />
      <div className={`relative flex flex-col items-center justify-center text-center text-muted-foreground ${compact ? "min-h-52 gap-3 p-5" : "min-h-64 gap-4 p-8"}`}>
        {children}
        {label ? <p className="max-w-sm font-nav text-xl text-accent">{label}</p> : null}
      </div>
    </div>
  );
}
