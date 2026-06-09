"use client";

import { useState } from "react";
import { CRYPTO_SERIES } from "@/demos/scenarios";
import { getDemoUi } from "@/demos/i18n";
import { useLocale } from "../LocaleProvider";

export function CryptoPredictionDemo() {
  const { locale } = useLocale();
  const ui = getDemoUi(locale);
  const [model, setModel] = useState<"ai" | "econometric" | "both">("both");

  const max = Math.max(
    ...CRYPTO_SERIES.flatMap((p) => [p.actual, p.ai, p.econometric]),
  );
  const min = Math.min(
    ...CRYPTO_SERIES.flatMap((p) => [p.actual, p.ai, p.econometric]),
  );
  const range = max - min;

  const barHeight = (v: number) => `${((v - min) / range) * 100}%`;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {(
          [
            ["both", ui.modelComparison],
            ["ai", ui.aiPrediction],
            ["econometric", ui.econometricPrediction],
          ] as const
        ).map(([key, label]) => (
          <button
            key={key}
            type="button"
            onClick={() => setModel(key)}
            className={`rounded-lg border px-4 py-2 text-sm transition ${
              model === key
                ? "border-accent bg-accent/10 text-accent-glow"
                : "border-surface-border text-ink-muted hover:border-accent/40"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="rounded-xl border border-surface-border bg-surface-raised p-6">
        <div className="flex h-56 items-end justify-between gap-3">
          {CRYPTO_SERIES.map((point) => (
            <div
              key={point.date}
              className="flex flex-1 flex-col items-center gap-1"
            >
              <div className="flex h-44 w-full items-end justify-center gap-0.5">
                <div
                  className="w-2 rounded-t bg-ink-faint/60"
                  style={{ height: barHeight(point.actual) }}
                  title={`${ui.actualPrice}: ${point.actual}`}
                />
                {(model === "ai" || model === "both") && (
                  <div
                    className="w-2 rounded-t bg-accent"
                    style={{ height: barHeight(point.ai) }}
                    title={`${ui.aiPrediction}: ${point.ai}`}
                  />
                )}
                {(model === "econometric" || model === "both") && (
                  <div
                    className="w-2 rounded-t bg-amber-400/80"
                    style={{ height: barHeight(point.econometric) }}
                    title={`${ui.econometricPrediction}: ${point.econometric}`}
                  />
                )}
              </div>
              <span className="font-mono text-[10px] text-ink-faint">
                {point.date}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-4 text-xs text-ink-muted">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-sm bg-ink-faint/60" />
            {ui.actualPrice}
          </span>
          {(model === "ai" || model === "both") && (
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-sm bg-accent" />
              {ui.aiPrediction}
            </span>
          )}
          {(model === "econometric" || model === "both") && (
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-sm bg-amber-400/80" />
              {ui.econometricPrediction}
            </span>
          )}
        </div>
      </div>

      <div className="rounded-xl border border-surface-border bg-surface-raised p-5">
        <p className="text-sm font-medium text-ink">{ui.metrics}</p>
        <div className="mt-3 flex flex-wrap gap-6 font-mono text-sm">
          <span className="text-accent">{ui.rmseAi}</span>
          <span className="text-amber-300">{ui.rmseEco}</span>
        </div>
        <p className="mt-3 text-xs text-ink-faint">
          Green cryptocurrency network · fiat-settled virtual asset weekly close (USD)
        </p>
      </div>
    </div>
  );
}
