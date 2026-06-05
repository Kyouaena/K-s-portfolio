"use client";

import { useLocale } from "./LocaleProvider";

export function Footer() {
  const { content } = useLocale();
  const { footer } = content;

  return (
    <footer className="border-t border-surface-border px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 text-center text-sm text-ink-faint md:flex-row md:justify-between md:text-left">
        <p>{footer.builtWith}</p>
        <p className="font-mono text-xs">{footer.harnessNote}</p>
      </div>
    </footer>
  );
}
