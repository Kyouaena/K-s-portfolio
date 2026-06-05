# Conventions

## TypeScript / React

- Use `@/` path alias for imports.
- Prefer `"use client"` only when hooks or browser state are required.
- Section components consume `useLocale()`; layout stays server where possible.

## Styling

- Tailwind utility classes; theme tokens in `tailwind.config.ts` (`surface`, `accent`, `ink`).
- No CSS modules unless a component needs isolation.

## i18n

- All user-visible strings live in `content/zh.ts` and `content/en.ts`.
- Add fields to `content/types.ts` first, then both locale files.
- Section IDs in HTML: `about`, `publications`, `projects`, `agent-lab`, `contact`.

## Commits

- Conventional prefixes: `feat:`, `fix:`, `docs:`, `content:`.

## Files agents should not touch without ask

- `assets/source/*.pdf`
- User-specific deploy URLs in README (after first deploy)
