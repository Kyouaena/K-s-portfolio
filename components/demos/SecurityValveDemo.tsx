"use client";

import { useState } from "react";
import { SECURITY_VALVE_SCENARIOS } from "@/demos/scenarios";
import { getDemoUi } from "@/demos/i18n";
import { useLocale } from "../LocaleProvider";

const FLOW_NODES = [
  "User",
  "Commander",
  "Thinker",
  "Security Valve",
  "Finance Agent",
] as const;

export function SecurityValveDemo() {
  const { locale } = useLocale();
  const ui = getDemoUi(locale);
  const [scenarioId, setScenarioId] = useState(SECURITY_VALVE_SCENARIOS[0].id);
  const [step, setStep] = useState(-1);
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);

  const scenario =
    SECURITY_VALVE_SCENARIOS.find((s) => s.id === scenarioId) ??
    SECURITY_VALVE_SCENARIOS[0];

  const simulate = () => {
    setDone(false);
    setStep(-1);
    setRunning(true);
    let current = 0;
    const interval = setInterval(() => {
      setStep(current);
      current += 1;
      if (current >= FLOW_NODES.length) {
        clearInterval(interval);
        setRunning(false);
        setDone(true);
      }
    }, 700);
  };

  const blockedAt = scenario.action === "block" ? 3 : -1;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {SECURITY_VALVE_SCENARIOS.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => {
              setScenarioId(s.id);
              setStep(-1);
              setDone(false);
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

      <div className="overflow-x-auto rounded-xl border border-surface-border bg-surface-raised p-6">
        <div className="flex min-w-[600px] items-center justify-between gap-2">
          {FLOW_NODES.map((node, i) => {
            const active = step >= i;
            const isBlock = done && i === blockedAt;
            return (
              <div key={node} className="flex flex-1 items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full border-2 text-[10px] font-semibold transition-all ${
                      isBlock
                        ? "border-red-400 bg-red-500/20 text-red-300"
                        : active
                          ? "border-accent bg-accent/20 text-accent-glow"
                          : "border-surface-border text-ink-faint"
                    }`}
                  >
                    {isBlock ? "✕" : i + 1}
                  </div>
                  <span className="mt-2 max-w-[80px] text-center text-[10px] text-ink-muted">
                    {node}
                  </span>
                </div>
                {i < FLOW_NODES.length - 1 && (
                  <div
                    className={`mx-1 h-0.5 flex-1 transition-colors ${
                      step > i
                        ? isBlock && i === blockedAt - 1
                          ? "bg-red-400"
                          : "bg-accent"
                        : "bg-surface-border"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="rounded-xl border border-surface-border bg-surface-raised p-5">
        <p className="font-mono text-xs text-accent">{scenario.source}</p>
        <p className="mt-2 text-sm leading-relaxed text-ink">{scenario.message}</p>
      </div>

      <button
        type="button"
        onClick={simulate}
        disabled={running}
        className="rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-surface transition hover:bg-accent-glow disabled:opacity-60"
      >
        {running ? ui.simulating : ui.simulate}
      </button>

      {done && (
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-surface-border bg-surface-raised p-4">
            <p className="text-xs uppercase tracking-wider text-ink-faint">
              {ui.ruleLayer}
            </p>
            <p className="mt-2 text-lg font-semibold text-ink">
              {scenario.ruleHit ? ui.triggered : ui.notTriggered}
            </p>
          </div>
          <div className="rounded-xl border border-surface-border bg-surface-raised p-4">
            <p className="text-xs uppercase tracking-wider text-ink-faint">
              {ui.auditLayer}
            </p>
            <p className="mt-2 text-lg font-semibold text-ink">
              {ui.semanticRisk}: {(scenario.semanticRisk * 100).toFixed(0)}%
            </p>
          </div>
          <div
            className={`md:col-span-2 rounded-xl border p-5 ${
              scenario.action === "block"
                ? "border-red-500/50 bg-red-500/10"
                : "border-emerald-500/50 bg-emerald-500/10"
            }`}
          >
            <p className="text-lg font-semibold">
              {scenario.action === "block" ? ui.blocked : ui.passed}
            </p>
            <p className="mt-2 text-sm text-ink-muted">
              {ui.reasons[scenario.reason]}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
