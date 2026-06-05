import type { ReactNode } from "react";

export function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 px-5 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 max-w-3xl text-ink-muted">{subtitle}</p>
        )}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
