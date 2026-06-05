# Architecture

## Layers

```
┌─────────────────────────────────────────┐
│  app/ + components/   (presentation)    │
├─────────────────────────────────────────┤
│  content/             (i18n data)       │
├─────────────────────────────────────────┤
│  docs/                (system of record)│
├─────────────────────────────────────────┤
│  assets/source/       (PDFs, offline)   │
└─────────────────────────────────────────┘
```

## Runtime

- Single page (`app/page.tsx`) with section anchors.
- `LocaleProvider` holds `zh` | `en` and injects `SiteContent`.
- No backend; static generation compatible with Vercel.

## Deployment

- Build: `next build`
- Output: Next.js default (not static export) — supports future API routes if needed.

## Extension points

See `docs/product-specs/index.md` for agent-driven features (FinSec demo, PDF index, i18n CI).
