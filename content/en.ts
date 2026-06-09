import type { SiteContent } from "./types";

export const en: SiteContent = {
  meta: {
    title: "Xiaotong Jiang | Financial AI Security & Agents",
    description:
      "Ph.D. candidate at Waseda University. Research on LLM agent security, semantic-channel defense in multi-agent systems, and crypto sentiment analytics.",
  },
  nav: {
    about: "About",
    publications: "Publications",
    projects: "Projects",
    contact: "Contact",
  },
  hero: {
    name: "Xiaotong Jiang",
    tagline: "Financial AI Security · Multi-Agent Systems · Virtual Asset Analytics",
    subtitle:
      "Ph.D. student at Waseda University Graduate School of Information, Production and Systems. I work on semantic-channel security for AI-native agent networks, generative financial dialogue defense, and social-sentiment-driven market anomaly detection.",
    ctaResearch: "Publications",
    ctaProjects: "Projects",
  },
  about: {
    title: "About",
    education: [
      {
        period: "2024 – 2027 (expected)",
        school: "Waseda University · Ph.D.",
        detail:
          "Research: Financial AI agent security, LLM-based risk detection, AI-native network security.",
      },
      {
        period: "2022 – 2024",
        school: "Waseda University · M.Sc.",
        detail: "Research: Cryptocurrency security and price prediction.",
      },
      {
        period: "2017 – 2021",
        school: "Beijing University of Technology · B.Econ.",
        detail: "Information Management and Information Systems.",
      },
    ],
    focus: [
      "Embedded Security Valve for multi-agent prompt injection defense",
      "FinSec multi-stage financial dialogue security framework",
      "VirInsight social sentiment and virtual-asset anomaly detection",
      "AI + econometrics for fiat-settled crypto price forecasting",
    ],
    skills: [
      {
        category: "LLM & Agents",
        items: "LLM agents, MAS, prompt-injection defense, dialogue safety pipelines",
      },
      {
        category: "Engineering",
        items: "Python, OpenAI API, Discord API, OpenClaw, data pipelines",
      },
      {
        category: "AI & Analytics",
        items: "NLP, sentiment classification, time series, anomaly detection",
      },
      {
        category: "Languages",
        items: "Chinese (native), Japanese JLPT N1, English TOEIC 805, Korean basic",
      },
    ],
    awards:
      "W-Spring Fellowship (2024–2027): JST next-generation researcher program, Waseda University.",
  },
  publications: {
    title: "Research & Publications",
    subtitle:
      "Journal and conference work spanning agent security, sentiment analytics, and price prediction. Click to try interactive demos.",
    tryDemo: "Try demo →",
    journal: "Journals & manuscripts",
    conference: "Conferences",
    items: [
      {
        id: "finsec-journal",
        title:
          "FinSec: A Generative Defensive Agent for Financial Dialogue Security via Multi-Stage Rollout",
        venue: "Manuscript under review",
        year: "2026",
        status: "Under review",
        tags: ["Dialogue security", "Multi-stage detection"],
        demoSlug: "finsec",
      },
      {
        id: "virinsight-tce",
        title:
          "Text-Only Virtual Currency LLM for Consumer Electronics: Social Sentiment Anomaly Detection and Trading Guidance",
        venue: "IEEE Transactions on Consumer Electronics (TCE)",
        year: "2025",
        status: "Accepted",
        tags: ["VirInsight", "Sentiment", "Anomaly detection"],
        demoSlug: "virinsight",
      },
      {
        id: "finsec-ieice",
        title:
          "Few-Shot Financial Agents Security Risk Detection and Validity Verification Based on FinSec",
        venue: "IEICE General Conference 2026, Fukuoka",
        year: "2026",
        status: "Accepted",
        tags: ["FinSec", "Few-shot"],
        demoSlug: "finsec",
      },
      {
        id: "security-valve-globecom",
        title:
          "Securing Semantic Channels in AI-Native Multi-Agent Wireless Networks: Case Study of Financial LLM Agents",
        venue: "IEEE GlobeCom (under submission)",
        year: "2026",
        status: "Under submission",
        tags: ["Security Valve", "Semantic channel", "DER"],
        demoSlug: "security-valve",
      },
      {
        id: "icc-2024",
        title:
          "Optimized AI and Econometric Model Empowered Virtual-Fiat Settled Price Prediction in Green Cryptocurrency Networks",
        venue: "IEEE ICC 2024, Denver",
        year: "2024",
        status: "Published",
        tags: ["Price prediction", "Green crypto"],
        demoSlug: "crypto-prediction",
      },
      {
        id: "isips-2023",
        title:
          "Performance Analysis of Econometrics Model and AI Empowered Forecasting Fiat-Settled Cryptocurrency Price",
        venue: "ISIPS 2023",
        year: "2023",
        status: "Published",
        tags: ["Econometrics", "AI forecasting"],
        demoSlug: "crypto-prediction",
      },
    ],
  },
  projects: {
    title: "Projects",
    subtitle:
      "From embedded multi-agent defense to financial dialogue security and sentiment-driven market analytics. Click to try interactive demos.",
    tryDemo: "Try demo →",
    items: [
      {
        id: "security-valve",
        name: "Security Valve — Multi-Agent Defense",
        period: "Jan 2026 – May 2026",
        role: "System design & development",
        summary:
          "Embedded defense for indirect prompt injection in AI-native multi-agent pipelines: SAR-inspired rules plus LLM semantic auditing upstream of the Finance Agent, evaluated with DER for security–usability trade-offs.",
        responsibilities: [
          "OpenClaw-based Commander / Thinker / Safety Checker architecture",
          "Discord API messaging and task orchestration",
          "Message-flow safety checks and financial attack simulations",
          "Evaluation with DER, ASR, and FRR across configurations",
        ],
        outcomes: [
          "DER (dangerous execution rate) reduced to 0% in experiments",
          "Effective interception while preserving usability",
          "GlobeCom manuscript in progress",
        ],
        stack: ["Python", "OpenAI API", "Discord API", "OpenClaw"],
        demoSlug: "security-valve",
      },
      {
        id: "finsec",
        name: "FinSec — Financial Dialogue Security",
        period: "Mar 2025 – May 2026",
        role: "Lead / core researcher",
        summary:
          "Multi-stage generative framework for financial LLM agent risk: rule matching, deferred risk reasoning, semantic judgment, and risk fusion for multi-turn dialogue attacks.",
        responsibilities: [
          "Four-layer detection architecture and dialogue pipeline",
          "Adversarial reasoning for complex attacks",
          "Metrics: AUPRC, ASR, F1",
        ],
        outcomes: [
          "F1 90.13%, AUPRC 0.9189, ASR 9.09%",
          "Journal submission in progress; IEICE 2026 accepted",
        ],
        stack: ["Python", "OpenAI API", "NLP", "Multi-Agent"],
        demoSlug: "finsec",
      },
      {
        id: "virinsight",
        name: "VirInsight — Sentiment & Anomaly Detection",
        period: "Apr 2024 – Mar 2026",
        role: "Algorithm research & modeling",
        summary:
          "VirInsight integrates five-class sentiment (Vir-Llama), transaction anomaly detection, and trading guidance on 12k+ VirSent tweets for BTC, ETH, and BNB.",
        responsibilities: [
          "Dataset construction and five-class labeling",
          "Llama3.1-8B + LoRA fine-tuning; Random Forest baselines",
          "ARIMAX / Granger causality for volatility anomalies",
        ],
        outcomes: [
          "Sentiment F1 71.3%; BTC anomaly accuracy 55.8% → 82.2%",
          "IEEE TCE accepted (IF ≈ 10.3)",
        ],
        stack: ["Python", "NLP", "ARIMA", "LoRA", "Random Forest"],
        demoSlug: "virinsight",
      },
      {
        id: "crypto-prediction",
        name: "AI + Econometrics Crypto Price Prediction",
        period: "Apr 2023 – May 2024",
        role: "Research lead",
        summary:
          "Combines machine learning and econometric models for virtual-fiat settled cryptocurrency price forecasting.",
        responsibilities: [
          "Time-series and ML model comparison",
          "Data processing, visualization, and paper writing",
        ],
        outcomes: ["Published at IEEE ICC 2024"],
        stack: ["Python", "Econometrics", "Machine learning"],
        demoSlug: "crypto-prediction",
      },
    ],
  },
  contact: {
    title: "Contact",
    email: "jiang.kyou@ruri.waseda.jp",
    location: "Japan · Fukuoka / Tokyo (Waseda University)",
    deployHint:
      "Fork to GitHub and use Deploy with Vercel in the README; pushes to main auto-deploy.",
  },
  footer: {
    builtWith: "Next.js · Tailwind · Vercel",
  },
  langToggle: { zh: "中文", en: "EN" },
};
