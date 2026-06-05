# Agent map (Harness Engineering)

This repository is a **research portfolio site** structured for agent-first development. Read this file first; follow pointers for deeper context.

## Quick facts

| Item | Value |
|------|--------|
| Stack | Next.js 15 (App Router), React 19, Tailwind CSS 3 |
| Deploy | Vercel (zero config); root `package.json` |
| i18n | `content/zh.ts` + `content/en.ts` — keys must stay in parity |
| UI | `app/`, `components/` — client components use `useLocale()` |

## Where to look

- **Architecture** → [ARCHITECTURE.md](./ARCHITECTURE.md)
- **Coding conventions** → [CONVENTIONS.md](./CONVENTIONS.md)
- **Profile source (human)** → [docs/profile/](./docs/profile/)
- **Product / extension specs** → [docs/product-specs/](./docs/product-specs/)
- **Design notes** → [docs/design-docs/](./docs/design-docs/)
- **Deploy** → [docs/references/vercel-deploy.md](./docs/references/vercel-deploy.md)

## Common tasks

1. **Update bio or projects** — Edit `content/zh.ts` and `content/en.ts` together; mirror changes in `docs/profile/` if long-form.
2. **Add a publication** — Append to both locale files under `publications.items`; optional JSON in `docs/generated/publications.json` (future).
3. **New UI section** — Add component under `components/`, wire in `HomePage.tsx`, add nav key in `content/types.ts` + both locale files.
4. **Verify** — Run `npm run build` before opening a PR.

## Guardrails

- Do not commit API keys or `.env.local`.
- Do not overwrite user PDFs in `assets/source/` without explicit request.
- Keep `AGENTS.md` under ~120 lines; put long prose in `docs/`.

## Human vs agent

Humans steer (content, research narrative, deploy). Agents execute (UI tweaks, i18n parity, docs sync, CI checks) within this map.
