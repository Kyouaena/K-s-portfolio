# Vercel deployment

## Prerequisites

- GitHub account
- [Vercel](https://vercel.com) account (GitHub login)

## Steps

1. Push this repository to GitHub (e.g. `your-username/jiang-portfolio`).
2. In Vercel: **Add New Project** → Import the GitHub repo.
3. Framework preset: **Next.js** (auto-detected).
4. Build command: `npm run build` (default).
5. Install command: `npm install` (default).
6. Deploy.

## One-click clone

Use the **Deploy with Vercel** button in README after replacing `YOUR_GITHUB_USERNAME` in the URL.

## Environment variables

None required for the static portfolio. Future FinSec demo may need `OPENAI_API_KEY` in Vercel project settings only — never in git.

## Preview deployments

Every pull request gets a preview URL — use as harness feedback for UI agents.
