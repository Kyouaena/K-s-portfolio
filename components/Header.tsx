"use client";

import { useLocale } from "./LocaleProvider";

const links = [
  { key: "about" as const, href: "#about" },
  { key: "publications" as const, href: "#publications" },
  { key: "projects" as const, href: "#projects" },
  { key: "agentLab" as const, href: "#agent-lab" },
  { key: "contact" as const, href: "#contact" },
];

export function Header() {
  const { locale, setLocale, content } = useLocale();
  const { nav, langToggle } = content;

  return (
    <header className="sticky top-0 z-50 border-b border-surface-border/80 bg-surface/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <a
          href="#"
          className="font-mono text-sm font-semibold tracking-tight text-accent-glow"
        >
          {content.hero.name}
        </a>
        <nav className="hidden items-center gap-6 text-sm text-ink-muted md:flex">
          {links.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              className="transition-colors hover:text-ink"
            >
              {nav[key]}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 rounded-full border border-surface-border bg-surface-raised p-1 text-xs font-medium">
          <button
            type="button"
            onClick={() => setLocale("zh")}
            className={`rounded-full px-3 py-1 transition-colors ${
              locale === "zh"
                ? "bg-accent/20 text-accent-glow"
                : "text-ink-muted hover:text-ink"
            }`}
          >
            {langToggle.zh}
          </button>
          <button
            type="button"
            onClick={() => setLocale("en")}
            className={`rounded-full px-3 py-1 transition-colors ${
              locale === "en"
                ? "bg-accent/20 text-accent-glow"
                : "text-ink-muted hover:text-ink"
            }`}
          >
            {langToggle.en}
          </button>
        </div>
      </div>
    </header>
  );
}
