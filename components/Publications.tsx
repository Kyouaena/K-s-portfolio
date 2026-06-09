"use client";

import Link from "next/link";
import { Section } from "./Section";
import { useLocale } from "./LocaleProvider";

function statusColor(status: string) {
  if (
    status.includes("接收") ||
    status.includes("Accepted") ||
    status.includes("发表") ||
    status.includes("Published")
  ) {
    return "bg-emerald-500/15 text-emerald-300";
  }
  if (status.includes("投稿") || status.includes("review") || status.includes("submission")) {
    return "bg-amber-500/15 text-amber-300";
  }
  return "bg-slate-500/15 text-slate-300";
}

export function Publications() {
  const { content } = useLocale();
  const { publications } = content;

  return (
    <Section
      id="publications"
      title={publications.title}
      subtitle={publications.subtitle}
    >
      <div className="grid gap-4">
        {publications.items.map((pub) => {
          const inner = (
            <>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <span className="font-mono text-xs text-ink-faint">{pub.year}</span>
                <div className="flex flex-wrap items-center gap-2">
                  {pub.demoSlug && (
                    <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-medium text-accent-glow">
                      {publications.tryDemo}
                    </span>
                  )}
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${statusColor(pub.status)}`}
                  >
                    {pub.status}
                  </span>
                </div>
              </div>
              <h3 className="mt-3 text-base font-semibold leading-snug text-ink group-hover:text-accent-glow md:text-lg">
                {pub.title}
              </h3>
              <p className="mt-2 text-sm text-ink-muted">{pub.venue}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {pub.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-surface-border px-2 py-0.5 text-xs text-ink-faint"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </>
          );

          if (pub.demoSlug) {
            return (
              <Link
                key={pub.id}
                href={`/demo/${pub.demoSlug}`}
                className="group block rounded-xl border border-surface-border bg-surface-raised p-6 transition hover:border-accent/50 hover:shadow-[0_0_24px_rgba(61,214,198,0.08)]"
              >
                {inner}
              </Link>
            );
          }

          return (
            <article
              key={pub.id}
              className="rounded-xl border border-surface-border bg-surface-raised p-6"
            >
              {inner}
            </article>
          );
        })}
      </div>
    </Section>
  );
}
