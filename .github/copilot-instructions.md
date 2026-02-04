# Copilot Instructions for byteCare Website

## Commands

```bash
# Development
npm run dev          # Start dev server at localhost:5173
npm run build        # Build static site to build/

# Linting & Type checking
npm run lint         # Run Prettier + ESLint
npm run format       # Auto-format with Prettier
npm run check        # TypeScript/Svelte type checking

# Testing (Playwright)
npm run test                           # Run all E2E tests
npx playwright test tests/base.spec.ts # Run single test file
npx playwright test -g "page loads"    # Run test by name
```

## Architecture

This is a **static SvelteKit site** using `adapter-static`, deployed to GitHub Pages.

### Internationalization (i18n)

- Uses `svelte-i18n` with locale-based routing (`/en/`, `/de/`)
- Root route (`/`) redirects to user's preferred locale via `Accept-Language` header
- Translations live in `src/lib/locales/{en,de}.json`
- Locale is set in `src/routes/[locale]/+layout.ts` and applied to HTML via `src/hooks.server.ts`

### Route Structure

```
src/routes/
├── +page.server.ts     # Root redirect to preferred locale
├── [locale]/           # Locale-prefixed routes (actual content)
│   ├── +layout.ts      # Initializes svelte-i18n for locale
│   └── +page.svelte    # Main landing page
├── imprint/            # Legal pages (no locale prefix)
└── privacy/
```

### Component Organization

- Page sections: `src/lib/{Hero,Services,About,Contact}.svelte`
- Reusable components: `src/lib/components/`
- Types: `src/lib/types.ts`

## Conventions

- Use `$_("key.path")` from `svelte-i18n` for all user-facing text
- Add new translations to both `en.json` and `de.json`
- Icons use `lucide-svelte`
- Styling via Tailwind CSS classes
