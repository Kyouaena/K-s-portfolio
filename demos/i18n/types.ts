import type { DemoSlug } from "../types";

export interface DemoMeta {
  title: string;
  subtitle: string;
  paper: string;
}

export interface DemoUiStrings {
  back: string;
  runAnalysis: string;
  analyzing: string;
  selectScenario: string;
  layerLabels: Record<string, string>;
  verdictSafe: string;
  verdictRisk: string;
  overallRisk: string;
  triggered: string;
  notTriggered: string;
  simulate: string;
  simulating: string;
  passed: string;
  blocked: string;
  semanticRisk: string;
  ruleLayer: string;
  auditLayer: string;
  selectTweet: string;
  sentiment: string;
  anomalyAlert: string;
  noAnomaly: string;
  tradingGuidance: string;
  modelComparison: string;
  actualPrice: string;
  aiPrediction: string;
  econometricPrediction: string;
  metrics: string;
  rmseAi: string;
  rmseEco: string;
  interactiveNote: string;
  scenarios: Record<string, string>;
  summaries: Record<string, string>;
  reasons: Record<string, string>;
  sentiments: Record<string, string>;
  guidances: Record<string, string>;
  demos: Record<DemoSlug, DemoMeta>;
}
