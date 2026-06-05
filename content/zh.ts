import type { SiteContent } from "./types";

export const zh: SiteContent = {
  meta: {
    title: "姜晓彤 | 金融 AI 安全与智能体研究",
    description:
      "早稻田大学博士在读，研究方向：金融 LLM Agent 安全、多智能体语义信道防御、加密货币情绪分析与风控。",
  },
  nav: {
    about: "关于",
    publications: "论文",
    projects: "项目",
    agentLab: "Agent 实验室",
    contact: "联系",
  },
  hero: {
    name: "姜晓彤",
    tagline: "金融 AI 安全 · 多智能体系统 · 虚拟资产分析",
    subtitle:
      "早稻田大学信息生产系统研究生院博士在读。研究聚焦 AI-Native 多智能体网络中的语义信道安全、金融对话风险检测，以及基于社交情绪的市场异常分析。",
    ctaResearch: "查看论文",
    ctaProjects: "探索项目",
  },
  about: {
    title: "关于我",
    education: [
      {
        period: "2024.04 – 2027.09（预计）",
        school: "早稻田大学 · 博士",
        detail:
          "信息生产系统研究生院。方向：金融 AI Agent 安全、LLM 风险检测、AI-Native 网络安全。",
      },
      {
        period: "2022.04 – 2024.03",
        school: "早稻田大学 · 工学硕士",
        detail: "研究方向：加密货币安全与价格预测。",
      },
      {
        period: "2017.09 – 2021.06",
        school: "北京工业大学 · 学士",
        detail:
          "信息管理与信息系统；日语双学位（外国语学院）。",
      },
    ],
    focus: [
      "多智能体 Prompt Injection 防御与嵌入式 Security Valve",
      "FinSec 多阶段金融对话安全检测",
      "VirInsight 社交情绪与虚拟资产异常检测",
      "AI 与计量经济学融合的加密货币价格预测",
    ],
    skills: [
      {
        category: "大模型与 Agent",
        items: "LLM Agent、MAS、Prompt Injection 防御、对话安全 Pipeline",
      },
      {
        category: "开发与工程",
        items: "Python、OpenAI API、Discord API、OpenClaw、数据处理",
      },
      {
        category: "AI 与数据分析",
        items: "NLP、情绪分类、时间序列、异常检测、Random Forest、ARIMA",
      },
      {
        category: "语言",
        items: "中文（母语）、日语 JLPT N1、英语 TOEIC 805、韩语基础",
      },
    ],
    awards:
      "W-Spring Fellowship（2024–2027）：JST 次世代研究者项目 S 级奖学金，早稻田大学。",
  },
  publications: {
    title: "研究与论文",
    subtitle: "期刊与会议成果，涵盖金融 Agent 安全、情绪分析与价格预测。",
    journal: "期刊 / 在投",
    conference: "会议",
    items: [
      {
        id: "finsec-journal",
        title:
          "FinSec: A Generative Defensive Agent for Financial Dialogue Security via Multi-Stage Rollout",
        venue: "Manuscript under review",
        year: "2026",
        status: "投稿中",
        tags: ["金融对话安全", "多阶段检测", "对抗推理"],
      },
      {
        id: "virinsight-tce",
        title:
          "Text-Only Virtual Currency LLM for Consumer Electronics: Social Sentiment Anomaly Detection and Trading Guidance",
        venue: "IEEE Transactions on Consumer Electronics (TCE)",
        year: "2025",
        status: "已接收",
        tags: ["VirInsight", "情绪分析", "异常检测"],
      },
      {
        id: "finsec-ieice",
        title:
          "Few-Shot Financial Agents Security Risk Detection and Validity Verification Based on FinSec",
        venue: "IEICE General Conference 2026, Fukuoka",
        year: "2026",
        status: "已接收",
        tags: ["FinSec", "少样本检测"],
      },
      {
        id: "security-valve-globecom",
        title:
          "Securing Semantic Channels in AI-Native Multi-Agent Wireless Networks: Case Study of Financial LLM Agents",
        venue: "IEEE GlobeCom (投稿中)",
        year: "2026",
        status: "投稿中",
        tags: ["Security Valve", "语义信道", "DER"],
      },
      {
        id: "icc-2024",
        title:
          "Optimized AI and Econometric Model Empowered Virtual-Fiat Settled Price Prediction in Green Cryptocurrency Networks",
        venue: "IEEE ICC 2024, Denver",
        year: "2024",
        status: "已发表",
        tags: ["价格预测", "绿色加密货币"],
      },
      {
        id: "isips-2023",
        title:
          "Performance Analysis of Econometrics Model and AI Empowered Forecasting Fiat-Settled Cryptocurrency Price",
        venue: "ISIPS 2023",
        year: "2023",
        status: "已发表",
        tags: ["计量经济学", "AI 预测"],
      },
    ],
  },
  projects: {
    title: "项目经历",
    subtitle: "从嵌入式多智能体防御到金融对话安全与情绪分析系统的完整研究链路。",
    items: [
      {
        id: "security-valve",
        name: "Security Valve 多智能体安全防御系统",
        period: "2026.01 – 2026.05",
        role: "系统设计与开发",
        summary:
          "针对 AI-Native 多智能体系统中的间接 Prompt Injection，设计嵌入执行链路的 Security Valve：SAR 启发规则层 + LLM 语义审计层，在 Finance Agent 上游强制拦截，并以 DER 衡量安全-可用性权衡。",
        responsibilities: [
          "基于 OpenClaw 构建 Commander / Thinker / Safety Checker 协作架构",
          "通过 Discord API 实现 Agent 消息交互与任务调度",
          "设计消息流安全检查与金融场景攻击模拟环境",
          "引入 DER、ASR、FRR 等指标完成多配置评估",
        ],
        outcomes: [
          "实验环境中 DER（危险执行率）降至 0%",
          "在保持可用性的同时实现攻击请求有效拦截",
          "GlobeCom 论文撰写与投稿进行中",
        ],
        stack: ["Python", "OpenAI API", "Discord API", "OpenClaw"],
      },
      {
        id: "finsec",
        name: "FinSec：金融对话安全检测框架",
        period: "2025.03 – 2026.05",
        role: "负责人 / 核心研究者",
        summary:
          "面向金融场景 LLM Agent 的多阶段生成式安全检测框架，结合规则匹配、延迟风险推理、语义判断与风险融合，识别多轮对话中的 Prompt Injection 等复杂攻击。",
        responsibilities: [
          "设计四层风险检测架构与多轮对话分析 Pipeline",
          "引入对抗推理机制增强复杂攻击识别",
          "使用 AUPRC、ASR、F1 完成实验评估",
        ],
        outcomes: [
          "F1 达 90.13%，AUPRC 0.9189",
          "攻击成功率 ASR 降至 9.09%",
          "期刊论文投稿中；IEICE 2026 会议论文已接收",
        ],
        stack: ["Python", "OpenAI API", "NLP", "Multi-Agent"],
      },
      {
        id: "virinsight",
        name: "VirInsight：加密货币情绪分析与异常检测",
        period: "2024.04 – 2026.03",
        role: "算法研究与模型开发",
        summary:
          "基于社交媒体文本构建 VirInsight：细粒度五分类情绪、交易异常检测与交易建议，VirSent 数据集 12,000+ 条，Vir-Llama 微调。",
        responsibilities: [
          "构建 BTC/ETH/BNB 数据集并完成五分类标注",
          "Llama3.1-8B + LoRA 微调与 Random Forest 基线",
          "ARIMAX / Granger 因果进行异常波动分析",
        ],
        outcomes: [
          "五分类情绪 F1 71.3%",
          "BTC 异常检测准确率由 55.8% 提升至 82.2%",
          "IEEE TCE（IF≈10.3）已接收",
        ],
        stack: ["Python", "NLP", "ARIMA", "LoRA", "Random Forest"],
      },
      {
        id: "crypto-prediction",
        name: "AI + 计量经济学加密货币价格预测",
        period: "2023.04 – 2024.05",
        role: "研究负责人",
        summary:
          "融合机器学习与计量经济学方法，对法币结算型加密货币价格进行预测与对比分析。",
        responsibilities: [
          "时间序列与 ML 模型构建及对比实验",
          "数据处理、可视化与论文撰写",
        ],
        outcomes: ["IEEE ICC 2024 论文发表"],
        stack: ["Python", "计量经济学", "机器学习"],
      },
    ],
  },
  agentLab: {
    title: "Agent 实验室 · 可扩展方向",
    subtitle:
      "本站点采用 Harness Engineering 组织知识：仓库即单一事实来源，便于 Codex / Cursor 等 Agent 在此基础上迭代功能。",
    harnessIntro:
      "Harness Engineering 的核心不是「写更多提示词」，而是为 Agent 设计可验证的环境：结构化 docs/、短 AGENTS.md 目录、明确的前端约定与部署反馈环（Vercel Preview）。人类定义意图与边界，Agent 在约束内实现功能。",
    ideas: [
      {
        title: "实时论文与项目仪表板",
        description:
          "从 docs/product-specs 读取结构化 JSON，自动生成时间线与引用卡片；Agent 只需更新 Markdown/JSON，无需改 UI 代码。",
        harnessNotes:
          "在 docs/generated/ 维护 publications.json，CI 校验 schema；前端纯展示层。",
      },
      {
        title: "FinSec 演示沙箱（只读）",
        description:
          "嵌入多轮对话样例与风险评分可视化，展示四层检测如何融合——适合会议 Demo 与招生说明。",
        harnessNotes:
          "Mock API + 固定 eval 数据集；禁止真实 API Key 入库，密钥走 Vercel Environment。",
      },
      {
        title: "双语内容协同编辑流",
        description:
          "content/zh.ts 与 content/en.ts 由 Agent 对照 docs/profile 双语稿同步，PR 时运行 parity 检查确保字段一一对应。",
        harnessNotes:
          "scripts/check-i18n.ts 对比 key 路径；违背则 CI 失败。",
      },
      {
        title: "Security Valve 交互拓扑图",
        description:
          "用可动画的 Mermaid/Canvas 展示 Commander → Thinker → Security Valve → Finance Agent 消息流与拦截点。",
        harnessNotes:
          "设计稿存 docs/design-docs/security-valve-flow.md，组件只渲染不承载业务规则。",
      },
      {
        title: "PDF 文献一键索引",
        description:
          "将 assets/ 下论文 PDF 链接到 publications 卡片，Vercel 静态托管；Agent 更新元数据即可。",
        harnessNotes:
          "public/papers/ 存文件；docs/references 记录 DOI 与摘要，避免重复解析 PDF。",
      },
    ],
  },
  contact: {
    title: "联系",
    email: "jiang.kyou@ruri.waseda.jp",
    location: "日本 · 福冈 / 东京（早稻田大学）",
    deployHint:
      "Fork 本仓库至 GitHub，点击 README 中的 Deploy with Vercel 即可一键上线；推送 main 分支自动触发部署。",
  },
  footer: {
    builtWith: "Next.js · Tailwind · Vercel",
    harnessNote: "Repository structured for Harness Engineering — see AGENTS.md",
  },
  langToggle: { zh: "中文", en: "EN" },
};
