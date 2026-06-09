"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import type { DemoSlug } from "@/demos/types";
import { getDemoUi } from "@/demos/i18n";
import { useLocale } from "../LocaleProvider";

export function DemoShell({
  slug,
  children,
}: {
  slug: DemoSlug;
  children: ReactNode;
}) {
  const { locale, setLocale, content } = useLocale();
  const ui = getDemoUi(locale);
  const meta = ui.demos[slug];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-surface-border/80 bg-surface/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4">
          <Link
            href="/"
            className="text-sm text-ink-muted transition hover:text-accent-glow"
          >
            {ui.back}
          </Link>
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
              {content.langToggle.zh}
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
              {content.langToggle.en}
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 py-10">
        <p className="font-mono text-xs uppercase tracking-wider text-accent">
          {meta.paper}
        </p>
        <h1 className="mt-2 text-3xl font-bold text-ink md:text-4xl">
          {meta.title}
        </h1>
        <p className="mt-3 max-w-2xl text-ink-muted">{meta.subtitle}</p>
        <p className="mt-4 rounded-lg border border-surface-border bg-surface-raised px-4 py-3 text-xs text-ink-faint">
          {ui.interactiveNote}
        </p>
        <div className="mt-10">{children}</div>
      </main>
    </div>
  );
}
