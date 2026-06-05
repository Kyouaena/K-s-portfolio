"use client";

import { Section } from "./Section";
import { useLocale } from "./LocaleProvider";

export function Contact() {
  const { content } = useLocale();
  const { contact } = content;

  return (
    <Section id="contact" title={contact.title}>
      <div className="max-w-xl space-y-4 rounded-2xl border border-surface-border bg-surface-raised p-8">
        <p>
          <a
            href={`mailto:${contact.email}`}
            className="text-lg font-medium text-accent-glow transition hover:underline"
          >
            {contact.email}
          </a>
        </p>
        <p className="text-ink-muted">{contact.location}</p>
        <p className="border-t border-surface-border pt-4 text-sm text-ink-faint">
          {contact.deployHint}
        </p>
      </div>
    </Section>
  );
}
