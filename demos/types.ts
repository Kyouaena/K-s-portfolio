export type DemoSlug =
  | "finsec"
  | "security-valve"
  | "virinsight"
  | "crypto-prediction";

export interface LayerScore {
  id: string;
  score: number;
  triggered: boolean;
  detail: string;
}

export interface FinSecTurn {
  role: "user" | "agent";
  text: string;
}

export interface FinSecScenario {
  id: string;
  label: string;
  turns: FinSecTurn[];
  layers: LayerScore[];
  verdict: "safe" | "risk";
  overallScore: number;
  summary: string;
}

export interface SecurityValveScenario {
  id: string;
  label: string;
  message: string;
  source: string;
  ruleHit: boolean;
  semanticRisk: number;
  action: "pass" | "block";
  reason: string;
}

export interface VirInsightSample {
  id: string;
  coin: string;
  text: string;
  sentiment: string;
  sentimentScore: number;
  anomaly: boolean;
  guidance: string;
}

export interface CryptoModelPoint {
  date: string;
  actual: number;
  ai: number;
  econometric: number;
}
