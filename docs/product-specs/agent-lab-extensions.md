# Agent Lab extensions

## Goals

Enable conference demos and recruiting without manual UI coding for every content change.

## P1 — PDF index

- Copy papers to `public/papers/`
- Link from publication cards
- Metadata in `docs/generated/publications.json`

## P2 — FinSec demo

- Static multi-turn examples
- Mock scores per layer (rules, deferred, semantic, fusion)
- No live OpenAI calls in production build

## P3 — i18n CI

- `scripts/check-i18n.ts` walks `SiteContent` shape across zh/en

## Acceptance

- `npm run build` passes
- No secrets in repo
- AGENTS.md unchanged in length by more than ~20 lines per feature
