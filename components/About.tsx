"use client";

import { Section } from "./Section";
import { useLocale } from "./LocaleProvider";

export function About() {
  const { content } = useLocale();
  const { about } = content;

  return (
    <Section id="about" title={about.title}>
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
            Education
          </h3>
          <ul className="space-y-5">
            {about.education.map((item) => (
              <li
                key={item.period}
                className="rounded-xl border border-surface-border bg-surface-raised p-5"
              >
                <p className="font-mono text-xs text-ink-faint">{item.period}</p>
                <p className="mt-1 font-semibold text-ink">{item.school}</p>
                <p className="mt-2 text-sm text-ink-muted">{item.detail}</p>
              </li>
            ))}
          </ul>
          <p className="rounded-xl border border-accent/30 bg-accent/5 p-4 text-sm text-ink-muted">
            {about.awards}
          </p>
        </div>
        <div className="space-y-8">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Research focus
            </h3>
            <ul className="mt-4 space-y-2">
              {about.focus.map((item) => (
                <li
                  key={item}
                  className="flex gap-2 text-sm text-ink-muted before:text-accent before:content-['▸']"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Skills
            </h3>
            <dl className="mt-4 space-y-4">
              {about.skills.map((skill) => (
                <div key={skill.category}>
                  <dt className="text-sm font-medium text-ink">
                    {skill.category}
                  </dt>
                  <dd className="mt-1 text-sm text-ink-muted">{skill.items}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </Section>
  );
}
