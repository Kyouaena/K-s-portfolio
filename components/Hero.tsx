"use client";

import { useLocale } from "./LocaleProvider";

export function Hero() {
  const { content } = useLocale();
  const { hero } = content;

  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-16 md:pt-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(61, 214, 198, 0.25), transparent)",
        }}
      />
      <div className="relative mx-auto max-w-6xl">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Waseda University · Ph.D. Research
        </p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-ink md:text-5xl lg:text-6xl">
          {hero.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-accent-glow md:text-xl">
          {hero.tagline}
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted">
          {hero.subtitle}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#publications"
            className="inline-flex items-center rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-surface transition hover:bg-accent-glow"
          >
            {hero.ctaResearch}
          </a>
          <a
            href="#projects"
            className="inline-flex items-center rounded-lg border border-surface-border px-5 py-2.5 text-sm font-medium text-ink transition hover:border-accent/50 hover:text-accent-glow"
          >
            {hero.ctaProjects}
          </a>
        </div>
      </div>
    </section>
  );
}
