import type { DemoUiStrings } from "./types";

export const demoEn: DemoUiStrings = {
  back: "← Back to home",
  runAnalysis: "Run FinSec analysis",
  analyzing: "Multi-stage rollout…",
  selectScenario: "Select dialogue scenario",
  layerLabels: {
    rules: "Rule matching",
    deferred: "Deferred risk reasoning",
    semantic: "Semantic safety",
    fusion: "Risk fusion",
  },
  verdictSafe: "Safe — continue dialogue",
  verdictRisk: "Risk — recommend block",
  overallRisk: "Overall risk score",
  triggered: "Triggered",
  notTriggered: "Not triggered",
  simulate: "Simulate message flow",
  simulating: "Running agent pipeline…",
  passed: "Pass → Finance Agent",
  blocked: "Blocked — dangerous execution prevented",
  semanticRisk: "Semantic risk",
  ruleLayer: "SAR rule layer",
  auditLayer: "LLM semantic audit",
  selectTweet: "Select social text sample",
  sentiment: "Sentiment class",
  anomalyAlert: "Volatility anomaly alert",
  noAnomaly: "Within normal sentiment band",
  tradingGuidance: "Trading guidance",
  modelComparison: "AI vs econometric forecast",
  actualPrice: "Actual price",
  aiPrediction: "AI model",
  econometricPrediction: "Econometric model",
  metrics: "Backtest metrics",
  rmseAi: "AI RMSE: 420",
  rmseEco: "Econometric RMSE: 680",
  interactiveNote:
    "This demo uses fixed evaluation samples from the papers. Outputs are simulated — no API key required.",
  scenarios: {
    "safe-portfolio": "Benign portfolio inquiry",
    "injection-transfer": "Multi-turn prompt injection",
    "benign-query": "Benign user request",
    "tool-injection": "Indirect tool-output injection",
  },
  summaries: {
    "safe-portfolio-summary":
      "All four layers agree: low risk. Stable intent, no transfer or rule-override patterns.",
    "injection-transfer-summary":
      "Detected rule-override phrase plus unauthorized transfer. Fusion score 0.89 — hard block recommended.",
  },
  reasons: {
    "benign-query-reason":
      "No rule hit; semantic audit 0.14, below block threshold 0.55.",
    "tool-injection-reason":
      "SAR rule matched unauthorized transfer; SYSTEM override in semantic layer — DER path cut.",
  },
  sentiments: {
    "very-negative": "Very bearish",
    neutral: "Neutral",
    "very-positive": "Very bullish",
  },
  guidances: {
    "btc-fear-guidance":
      "Sentiment anomaly + volatility spike → reduce leverage, wait 24–48h",
    "eth-neutral-guidance":
      "Stable sentiment → hold position, watch on-chain activity",
    "bnb-bull-guidance":
      "Positive but no anomaly → small add OK with 5% stop-loss",
  },
  demos: {
    finsec: {
      title: "FinSec — Financial Dialogue Security",
      subtitle: "Four-layer fusion · multi-turn context · adversarial reasoning",
      paper: "FinSec — Generative Defensive Agent (2026)",
    },
    "security-valve": {
      title: "Security Valve — Multi-Agent Defense",
      subtitle: "Embedded semantic-channel guard · SAR + LLM audit · DER metrics",
      paper: "GlobeCom — Semantic Channel Security (2026)",
    },
    virinsight: {
      title: "VirInsight — Sentiment & Anomaly Detection",
      subtitle: "Five-class sentiment · social text → volatility alert · trading guidance",
      paper: "IEEE TCE — VirInsight (2025)",
    },
    "crypto-prediction": {
      title: "Cryptocurrency Price Prediction",
      subtitle: "AI vs econometrics · fiat-settled virtual assets",
      paper: "IEEE ICC 2024 / ISIPS 2023",
    },
  },
};
