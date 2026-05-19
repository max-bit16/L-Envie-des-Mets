# L'Envie des Mets — Claude Code Instructions

## Stack
- Vite 8 + React 19 + TypeScript + Tailwind CSS 3
- No routing (single-page), no animation library
- CSS-first design system via `src/index.css` custom properties

## Architecture
- `src/App.tsx` — root, scroll/IO logic, section order
- `src/components/` — one file per section: Nav, Hero, Chef, Valeurs, Carte, Reserver, Footer, StickyBar
- `src/index.css` — single source of truth for all tokens and component styles
- `public/` — static assets (favicon.svg, icons.svg)

## Rules
- `npm run build` → 0 errors, 0 warnings before any push
- Never use Tailwind utility classes for layout or typography — use CSS custom classes from index.css
- Tailwind colors/fonts are defined in tailwind.config.js as aliases to CSS tokens — use them only in className if needed
- All new sections follow the `.section > .frame` pattern
- Scroll/intersection animations use `.reveal` + `.is-in` classes — never add JS-driven inline styles for entrance
- Hero and Footer backgrounds use Unsplash URLs — replace with real photos before production
- Images: always include `alt`, use `aspect-ratio` containers from index.css
- Accessibility: all interactive elements need `focus-visible` styles, skip-link exists in App.tsx

## Assets
- `src/assets/hero.png` — placeholder, replace with real photo
- `public/icons.svg` — sprite sheet for all SVG icons (use `<use href="/icons.svg#...">`)

## Commit convention
`feat:`, `fix:`, `chore:`, `style:`, `refactor:` — lowercase, imperative
