"use client";

import { useLocale } from "./LocaleProvider";

export function Footer() {
  const { content } = useLocale();
  const { footer } = content;

  return (
    <footer className="border-t border-surface-border px-5 py-10">
      <div className="mx-auto max-w-6xl text-center text-sm text-ink-faint md:text-left">
        <p>{footer.builtWith}</p>
      </div>
    </footer>
  );
}
