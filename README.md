## Garnet Website

A Next.js 15 App Router project with React 19, Tailwind CSS v4, MDX-powered blog, Vercel Analytics, and Vercel Speed Insights.

### Tech Stack
- Next.js App Router (15)
- React 19
- Tailwind CSS v4
- MDX for blog content (`data/*.mdx`)
- Vercel Analytics and Speed Insights
- next-themes for dark/light mode

### Local Development
```bash
pnpm install
pnpm dev
```

The dev server runs on http://localhost:3000. This repo uses pnpm; please prefer it for installs and scripts.

If pnpm warns about ignored build scripts, run:
```bash
pnpm approve-builds
```

### Theming
Theme is managed by `next-themes` via `ThemeProvider` in `app/layout.tsx`.
- Current default: system theme
- To default to dark while still allowing light: set `defaultTheme="dark"` and keep `enableSystem` in the `ThemeProvider` props.

### Analytics & Speed Insights (Vercel)
Integrated per Vercel docs. Components are rendered in `app/layout.tsx`:
- `@vercel/analytics` → `<Analytics />`
- `@vercel/speed-insights` → `<SpeedInsights />`

Notes:
- No API keys are required; data appears automatically on Vercel after deploy.
- See Vercel docs: `https://vercel.com/docs/analytics` and `https://vercel.com/docs/speed-insights`.

### PostHog (Optional)
`components/providers/posthog-provider.tsx` includes a placeholder and commented full implementation.
To enable:
1) `pnpm add posthog-js`
2) Set `NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST` in `.env`
3) Uncomment the full implementation block in the provider

### Blog Content
MDX articles live in `data/*.mdx`. The blog routes render from these files.

### Branching & PRs
- Active development branch: `dev`
- Release branch: `main`

Create a PR from `dev` → `main` (GitHub CLI):
```bash
gh pr create --base main --head dev --title "Release" --body "Merge dev into main"
```

### Environment & Secrets
- Never commit secrets. Use `.env` for local only.
- The app reads public envs via `process.env.NEXT_PUBLIC_*` only when required. Avoid server-only secrets in client code.

### Deployment
Deploy via Vercel. After merging to `main`, Vercel will build and surface Analytics and Speed Insights automatically.
