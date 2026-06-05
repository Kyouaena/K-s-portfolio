# 姜晓彤 / Xiaotong Jiang — Research Portfolio

中英文双语个人研究站点，介绍论文、项目与 Agent 可扩展方向。采用 [Harness Engineering](https://openai.com/index/harness-engineering/) 仓库结构（`AGENTS.md` + `docs/` 作为单一事实来源），部署于 **Vercel**。

## 本地开发

```bash
npm install
npm run dev
```

浏览器打开 [http://localhost:3000](http://localhost:3000)。

## 一键部署到 Vercel

### 方式 A：Deploy 按钮（推荐）

1. 将本文件夹推送到你的 GitHub 仓库（见下方「推送到 GitHub」）。
2. 把下面按钮链接里的 `YOUR_GITHUB_USERNAME` 和 `YOUR_REPO_NAME` 改成你的仓库，然后点击部署：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Kyouaena/K-s-portfolio&project-name=K-s-portfolio&repository-name=K-s-portfolio)

3. 使用 GitHub 登录 Vercel，保持默认 **Next.js** 设置，点击 Deploy。
4. 之后每次推送到 `main` 分支会自动重新部署。

### 方式 B：Vercel 控制台

1. [vercel.com](https://vercel.com) → **Add New** → **Project**
2. Import 你的 GitHub 仓库
3. Framework: **Next.js**（自动识别）
4. Deploy

详细说明见 [docs/references/vercel-deploy.md](./docs/references/vercel-deploy.md)。

## 推送到 GitHub

在 `sitetry` 目录执行：

```bash
git init
git add .
git commit -m "feat: bilingual research portfolio with harness engineering structure"
git branch -M main
git remote add origin https://github.com/Kyouaena/K-s-portfolio.git
git push -u origin main
```

> **提示**：根目录下的 PDF/PPTX 为原始简历与论文素材（体积较大）。若不想纳入 Git，可在 `.gitignore` 中取消注释 `# assets/source/` 相关规则，或只提交 Web 代码。

## 仓库结构（Harness Engineering）

| 路径 | 作用 |
|------|------|
| `AGENTS.md` | Agent 入口地图（≈100 行） |
| `ARCHITECTURE.md` / `CONVENTIONS.md` | 架构与编码约定 |
| `docs/` | 深度文档（profile、产品规格、设计稿） |
| `content/` | 中英文站点文案 |
| `app/` + `components/` | Next.js 前端 |

## 更新内容

编辑 `content/zh.ts` 与 `content/en.ts`（保持字段一致），然后 `npm run build` 验证，推送到 GitHub 即可自动上线。

## 原始素材

- `JiangXiaotong_CV.pdf` / `姜晓彤_简历.pdf`
- `项目经历.docx`
- 论文 PDF（FinSec、VirInsight、GlobeCom 等）

站点文案已从这些材料提取；后续可由 Agent 根据 `docs/profile/` 同步更新。
