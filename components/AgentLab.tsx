"use client";

import { Section } from "./Section";
import { useLocale } from "./LocaleProvider";

export function AgentLab() {
  const { content } = useLocale();
  const { agentLab } = content;

  return (
    <Section
      id="agent-lab"
      title={agentLab.title}
      subtitle={agentLab.subtitle}
    >
      <div className="rounded-xl border border-accent/30 bg-accent/5 p-6 text-sm leading-relaxed text-ink-muted">
        {agentLab.harnessIntro}
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {agentLab.ideas.map((idea) => (
          <div
            key={idea.title}
            className="flex flex-col rounded-xl border border-surface-border bg-surface-raised p-5"
          >
            <h3 className="font-semibold text-ink">{idea.title}</h3>
            <p className="mt-2 flex-1 text-sm text-ink-muted">
              {idea.description}
            </p>
            <p className="mt-4 border-t border-surface-border pt-4 font-mono text-xs leading-relaxed text-ink-faint">
              <span className="text-accent">harness → </span>
              {idea.harnessNotes}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
