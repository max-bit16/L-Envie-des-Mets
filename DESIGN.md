# L'Envie des Mets — Design System

## Identity
Restaurant gastronomique à Grenoble. Carte courte, produits locaux, cuisine de marché.
Ton : sobre, chaud, artisanal. Jamais clinquant.

## Color Tokens
| Token | Hex | Usage |
|---|---|---|
| `--bg` | `#FAF7F2` | Page background, warm off-white |
| `--ink` | `#1A1A1A` | Body text, primary ink |
| `--forest` | `#2A3A2E` | Primary brand, CTAs, accents |
| `--forest-deep` | `#1D2A21` | Hover state for forest |
| `--wood` | `#A87B5D` | Secondary accent, underlines, stars |
| `--cream` | `#EFE8DC` | Menus bg, card fills, subtle surfaces |
| `--stone` | `#6B6258` | Muted text, eyebrows, captions |
| `--rule` | `rgba(42,58,46,0.18)` | Borders, dividers |

## Typography
- **Serif** — Fraunces (Google Fonts) — headings, quotes, price figures, wordmark
- **Sans** — Outfit (Google Fonts) — body, labels, buttons, nav
- Body: 17px / 1.65 — `font-weight: 400`
- H1: `clamp(40px, 6.4vw, 84px)` — weight 400
- H2: `clamp(30px, 4.2vw, 52px)` — weight 400
- H3: `clamp(22px, 2.4vw, 30px)` — weight 500
- Eyebrow: 12px / 500 / 0.18em letterspacing / uppercase

## Layout
- `--frame: 1200px` — max-width container
- `.frame` — `max-width: frame; margin: 0 auto; padding: 0 32px`
- `.section` — `padding: 128px 0` (desktop) / 96px (tablet) / 72px (mobile)

## Components

### Buttons
- `.btn--primary` — forest bg, cream text
- `.btn--secondary` — transparent, cream border (for use on dark backgrounds)
- Border-radius: `2px` — intentionally minimal

### Nav
- Fixed, transparent over hero, transitions to frosted glass (`is-scrolled`)
- `is-light` state: white text while over hero photo
- 3-column grid: links left · wordmark center · phone right
- Collapses to wordmark + phone at ≤900px

### Sticky Bar
- Mobile only (≤768px), fixed bottom
- Call button + directions link, forest green bg

### Reveal Animation
- `.reveal` → `.is-in` on intersection
- `opacity 0→1` + `translateY(12px→0)`, 600ms ease
- Always respect `prefers-reduced-motion`

## Photography
- Hero: full-bleed, `88vh`, parallax (`translate3d`)
- Chef portrait: `4/5` ratio
- Values: `4/5` ratio per card
- Gallery: large `4/5` + small `4/3`
- Transition band: `60vh` full-bleed quote image

## Do / Don't
- ✅ Italic `<em>` in headings for editorial weight contrast
- ✅ Serif for prices, quotes, signatures
- ✅ Wood for decorative rules and underlines
- ✅ `.reveal` on every section intro
- ✗ No shadows (box-shadow) on cards — use borders
- ✗ No border-radius > 2px on interactive elements
- ✗ No gradients except photo overlays
- ✗ No bold serif — always font-weight 300 or 400
