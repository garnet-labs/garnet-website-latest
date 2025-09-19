## Agent Rules & Project Conventions

### Workspace Rules
- Do not invent or log API keys. Use values from `.env` only when necessary.
- If a feature flag or custom property is referenced in multiple places, centralize its name in an enum/const object. Use UPPERCASE_WITH_UNDERSCORE.
- Keep naming consistent; consult existing names and avoid breaking analytics/reporting.

### Package Manager
- Use `pnpm` for install and scripts.
- If build scripts are blocked, run `pnpm approve-builds`.

### Branching
- Active development happens on `dev`.
- Production/release branch is `main`.
- Open PRs from `dev` → `main`.

### Theming
- Theme is controlled by `next-themes` via `ThemeProvider` in `app/layout.tsx`.
- Default can be `system` or `dark`. To default dark while allowing light: set `defaultTheme="dark"` and keep `enableSystem`.

### Analytics
- Vercel Analytics and Speed Insights are integrated in `app/layout.tsx` via:
  - `@vercel/analytics/react` → `<Analytics />`
  - `@vercel/speed-insights/next` → `<SpeedInsights />`
- No keys required; data appears post-deploy on Vercel.

### PostHog
- Placeholder provider exists in `components/providers/posthog-provider.tsx`.
- To enable: install `posthog-js`, set `NEXT_PUBLIC_POSTHOG_*` envs, and uncomment the full implementation.

### Blog
- MDX content in `data/*.mdx`.

### Code Style
- Prefer clear, descriptive names; avoid short/ambiguous identifiers.
- Early returns, minimal nesting, and handle edge cases first.
- Keep comments short and explain “why”.

### Security & Privacy
- Never read or exfiltrate secrets. Do not send data to external services without explicit permission.

### Deployment
- Deploy via Vercel. Analytics and Speed Insights are automatically captured after deployment.

