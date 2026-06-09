"use client";

import { useState } from "react";
import { VIRINSIGHT_SAMPLES } from "@/demos/scenarios";
import { getDemoUi } from "@/demos/i18n";
import { useLocale } from "../LocaleProvider";

const SENTIMENT_COLORS: Record<string, string> = {
  "very-negative": "bg-red-500/20 text-red-300 border-red-500/40",
  neutral: "bg-slate-500/20 text-slate-300 border-slate-500/40",
  "very-positive": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
};

export function VirInsightDemo() {
  const { locale } = useLocale();
  const ui = getDemoUi(locale);
  const [sampleId, setSampleId] = useState(VIRINSIGHT_SAMPLES[0].id);
  const [analyzed, setAnalyzed] = useState(true);

  const sample =
    VIRINSIGHT_SAMPLES.find((s) => s.id === sampleId) ?? VIRINSIGHT_SAMPLES[0];

  return (
    <div className="space-y-6">
      <p className="text-sm font-medium text-ink-muted">{ui.selectTweet}</p>
      <div className="grid gap-3">
        {VIRINSIGHT_SAMPLES.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => {
              setSampleId(s.id);
              setAnalyzed(false);
              setTimeout(() => setAnalyzed(true), 600);
            }}
            className={`rounded-xl border p-4 text-left transition ${
              sampleId === s.id
                ? "border-accent bg-accent/5"
                : "border-surface-border bg-surface-raised hover:border-accent/30"
            }`}
          >
            <span className="font-mono text-xs text-accent">{s.coin}</span>
            <p className="mt-2 text-sm text-ink-muted">{s.text}</p>
          </button>
        ))}
      </div>

      {analyzed && (
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-surface-border bg-surface-raised p-5">
            <p className="text-xs uppercase tracking-wider text-ink-faint">
              {ui.sentiment}
            </p>
            <p
              className={`mt-3 inline-block rounded-lg border px-3 py-1 text-sm font-medium ${SENTIMENT_COLORS[sample.sentiment]}`}
            >
              {ui.sentiments[sample.sentiment]}
            </p>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-surface">
              <div
                className="h-full rounded-full bg-accent transition-all"
                style={{ width: `${sample.sentimentScore * 100}%` }}
              />
            </div>
            <p className="mt-2 font-mono text-xs text-ink-faint">
              Vir-Llama confidence: {(sample.sentimentScore * 100).toFixed(1)}%
            </p>
          </div>

          <div
            className={`rounded-xl border p-5 ${
              sample.anomaly
                ? "border-amber-500/50 bg-amber-500/10"
                : "border-surface-border bg-surface-raised"
            }`}
          >
            <p className="text-xs uppercase tracking-wider text-ink-faint">
              {sample.anomaly ? ui.anomalyAlert : ui.noAnomaly}
            </p>
            <p className="mt-3 text-2xl">{sample.anomaly ? "⚠" : "✓"}</p>
            {sample.anomaly && (
              <p className="mt-2 text-sm text-ink-muted">
                ARIMAX + Granger: sentiment spike precedes volatility (p &lt; 0.05)
              </p>
            )}
          </div>

          <div className="rounded-xl border border-accent/30 bg-accent/5 p-5">
            <p className="text-xs uppercase tracking-wider text-ink-faint">
              {ui.tradingGuidance}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink">
              {ui.guidances[sample.guidance]}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
