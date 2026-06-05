"use client";

import { Section } from "./Section";
import { useLocale } from "./LocaleProvider";

export function Projects() {
  const { content } = useLocale();
  const { projects } = content;

  return (
    <Section
      id="projects"
      title={projects.title}
      subtitle={projects.subtitle}
    >
      <div className="space-y-8">
        {projects.items.map((project, index) => (
          <article
            key={project.id}
            className="rounded-2xl border border-surface-border bg-gradient-to-br from-surface-raised to-surface p-6 md:p-8"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <span className="font-mono text-3xl font-bold text-surface-border">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-mono text-xs text-ink-faint">
                {project.period}
              </span>
            </div>
            <h3 className="mt-2 text-xl font-bold text-ink md:text-2xl">
              {project.name}
            </h3>
            <p className="mt-1 text-sm text-accent">{project.role}</p>
            <p className="mt-4 leading-relaxed text-ink-muted">
              {project.summary}
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-faint">
                  Responsibilities
                </h4>
                <ul className="mt-2 space-y-1.5 text-sm text-ink-muted">
                  {project.responsibilities.map((r) => (
                    <li key={r} className="flex gap-2">
                      <span className="text-accent">·</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-faint">
                  Outcomes
                </h4>
                <ul className="mt-2 space-y-1.5 text-sm text-ink">
                  {project.outcomes.map((o) => (
                    <li key={o} className="flex gap-2">
                      <span className="text-accent-glow">✓</span>
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-surface px-2.5 py-1 font-mono text-xs text-accent"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
