# Vercel 部署没更新 — 修复步骤

## 症状

- GitHub `K-s-portfolio` 已有 `demos/` 和「体验模型」
- 线上网站仍有「Agent 实验室」
- Vercel Deployments 显示 **Initial commit**

## 原因

Vercel 项目连错了仓库，或连对后没有重新部署。

## 修复（约 2 分钟）

### 1. 确认 Git 连接

1. 打开 https://vercel.com → 进入你的项目（如 `ks-portfolio`）
2. **Settings** → **Git**
3. **Connected Git Repository** 必须是：

   `Kyouaena/K-s-portfolio`

   如果是 `Kyouaena/ks-portfolio`（无横杠）→ 点 **Disconnect** → 重新连接 `K-s-portfolio`

### 2. 手动部署最新代码

1. 顶部 **Deployments**
2. 右上角 **Deploy**（或 **Create Deployment**）
3. Branch 选 **main** → **Deploy**

### 3. 验证成功

Deployments 最新一条 commit 应为：

- `feat: force vercel redeploy` 或
- `chore: remove local PDFs...`

页脚应显示：**v2 交互演示**（没有 Agent 实验室）

---

## 可选：Deploy Hook（以后一键触发）

Settings → **Git** → **Deploy Hooks** → Create → Branch `main` → 复制 URL

在终端执行：

```bash
curl -X POST "你的_DEPLOY_HOOK_URL"
```

每次 push 后若 Vercel 没自动更新，运行上述命令即可。
