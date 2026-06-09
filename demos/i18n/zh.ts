import type { DemoUiStrings } from "./types";

export const demoZh: DemoUiStrings = {
  back: "← 返回主页",
  runAnalysis: "运行 FinSec 检测",
  analyzing: "多阶段推理中…",
  selectScenario: "选择对话场景",
  layerLabels: {
    rules: "规则匹配层",
    deferred: "延迟风险推理",
    semantic: "语义安全判断",
    fusion: "风险融合",
  },
  verdictSafe: "安全 — 允许继续对话",
  verdictRisk: "风险 — 建议拦截",
  overallRisk: "综合风险分",
  triggered: "已触发",
  notTriggered: "未触发",
  simulate: "模拟消息流",
  simulating: "Agent 链路运行中…",
  passed: "通过 → Finance Agent",
  blocked: "拦截 — 危险执行已阻止",
  semanticRisk: "语义风险分",
  ruleLayer: "SAR 规则层",
  auditLayer: "LLM 语义审计",
  selectTweet: "选择社交文本样本",
  sentiment: "情绪分类",
  anomalyAlert: "异常波动预警",
  noAnomaly: "情绪正常区间",
  tradingGuidance: "交易建议",
  modelComparison: "AI vs 计量经济学预测",
  actualPrice: "实际价格",
  aiPrediction: "AI 模型",
  econometricPrediction: "计量经济学模型",
  metrics: "回测指标",
  rmseAi: "AI RMSE: 420",
  rmseEco: "计量 RMSE: 680",
  interactiveNote: "本演示使用论文中的固定评估样本，模拟真实模型输出，无需 API Key。",
  scenarios: {
    "safe-portfolio": "正常投资组合咨询",
    "injection-transfer": "多轮 Prompt Injection 攻击",
    "benign-query": "正常用户请求",
    "tool-injection": "工具输出间接注入",
  },
  summaries: {
    "safe-portfolio-summary":
      "四层检测一致判定为低风险。上下文语义稳定，无资金转移或规则覆盖意图。",
    "injection-transfer-summary":
      "检测到「忽略先前规则」覆盖短语 + 未授权转账指令。多层融合分 0.89，建议硬拦截。",
  },
  reasons: {
    "benign-query-reason": "规则层未命中；语义审计分 0.14，低于拦截阈值 0.55。",
    "tool-injection-reason":
      "SAR 规则命中未授权转账；语义层识别 SYSTEM 覆盖指令，DER 风险路径已切断。",
  },
  sentiments: {
    "very-negative": "极度看跌",
    neutral: "中性",
    "very-positive": "极度看涨",
  },
  guidances: {
    "btc-fear-guidance": "情绪异常 + 波动放大 → 建议降低杠杆敞口，观望 24–48h",
    "eth-neutral-guidance": "情绪平稳 → 维持现有仓位，关注链上活跃度变化",
    "bnb-bull-guidance": "积极情绪但未触发异常 → 可小幅增持，设置 5% 止损",
  },
  demos: {
    finsec: {
      title: "FinSec 金融对话安全检测",
      subtitle: "四层风险融合 · 多轮对话上下文建模 · 对抗推理",
      paper: "FinSec — Generative Defensive Agent (2026)",
    },
    "security-valve": {
      title: "Security Valve 多智能体防御",
      subtitle: "语义信道嵌入式拦截 · SAR 规则 + LLM 审计 · DER 评估",
      paper: "GlobeCom — Semantic Channel Security (2026)",
    },
    virinsight: {
      title: "VirInsight 情绪与异常检测",
      subtitle: "五分类情绪 · 社交文本 → 异常波动预警 · 交易建议",
      paper: "IEEE TCE — VirInsight (2025)",
    },
    "crypto-prediction": {
      title: "加密货币价格预测",
      subtitle: "AI 模型 vs 计量经济学 · 法币结算型虚拟资产",
      paper: "IEEE ICC 2024 / ISIPS 2023",
    },
  },
};
