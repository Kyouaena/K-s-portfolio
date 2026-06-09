"use client";

import { useState } from "react";
import { FINSEC_SCENARIOS } from "@/demos/scenarios";
import { getDemoUi } from "@/demos/i18n";
import { useLocale } from "../LocaleProvider";

export function FinSecDemo() {
  const { locale } = useLocale();
  const ui = getDemoUi(locale);
  const [scenarioId, setScenarioId] = useState(FINSEC_SCENARIOS[0].id);
  const [running, setRunning] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const scenario =
    FINSEC_SCENARIOS.find((s) => s.id === scenarioId) ?? FINSEC_SCENARIOS[0];

  const run = () => {
    setShowResult(false);
    setRunning(true);
    setTimeout(() => {
      setRunning(false);
      setShowResult(true);
    }, 1400);
  };

  return (
    <div className="space-y-6">
      <div>
        <p className="mb-3 text-sm font-medium text-ink-muted">
          {ui.selectScenario}
        </p>
        <div className="flex flex-wrap gap-2">
          {FINSEC_SCENARIOS.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => {
                setScenarioId(s.id);
                setShowResult(false);
              }}
              className={`rounded-lg border px-4 py-2 text-sm transition ${
                scenarioId === s.id
                  ? "border-accent bg-accent/10 text-accent-glow"
                  : "border-surface-border text-ink-muted hover:border-accent/40"
              }`}
            >
              {ui.scenarios[s.label]}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-surface-border bg-surface-raised p-5">
        <div className="space-y-3">
          {scenario.turns.map((turn, i) => (
            <div
              key={i}
              className={`flex ${turn.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-xl px-4 py-2.5 text-sm ${
                  turn.role === "user"
                    ? "bg-accent/15 text-ink"
                    : "bg-surface text-ink-muted"
                }`}
              >
                <span className="mb-1 block font-mono text-[10px] uppercase text-ink-faint">
                  {turn.role}
                </span>
                {turn.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={run}
        disabled={running}
        className="rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-surface transition hover:bg-accent-glow disabled:opacity-60"
      >
        {running ? ui.analyzing : ui.runAnalysis}
      </button>

      {showResult && (
        <div className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-2">
            {scenario.layers.map((layer) => (
              <div
                key={layer.id}
                className={`rounded-xl border p-4 ${
                  layer.triggered
                    ? "border-red-500/40 bg-red-500/5"
                    : "border-surface-border bg-surface-raised"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-ink">
                    {ui.layerLabels[layer.id]}
                  </span>
                  <span
                    className={`text-xs font-mono ${
                      layer.triggered ? "text-red-300" : "text-emerald-300"
                    }`}
                  >
                    {(layer.score * 100).toFixed(0)}%
                  </span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-surface">
                  <div
                    className={`h-full rounded-full transition-all ${
                      layer.triggered ? "bg-red-400" : "bg-emerald-400"
                    }`}
                    style={{ width: `${layer.score * 100}%` }}
                  />
                </div>
                <p className="mt-2 text-xs text-ink-faint">{layer.detail}</p>
                <p className="mt-1 text-xs text-ink-muted">
                  {layer.triggered ? ui.triggered : ui.notTriggered}
                </p>
              </div>
            ))}
          </div>

          <div
            className={`rounded-xl border p-5 ${
              scenario.verdict === "risk"
                ? "border-red-500/50 bg-red-500/10"
                : "border-emerald-500/50 bg-emerald-500/10"
            }`}
          >
            <p className="text-lg font-semibold">
              {scenario.verdict === "risk" ? ui.verdictRisk : ui.verdictSafe}
            </p>
            <p className="mt-1 text-sm text-ink-muted">
              {ui.overallRisk}: {(scenario.overallScore * 100).toFixed(0)}%
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              {ui.summaries[scenario.summary]}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
