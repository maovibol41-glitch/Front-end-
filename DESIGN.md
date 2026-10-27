---
version: alpha
name: Khmer Merchant Dashboard
description: Ledger-grade calm for Cambodian SME commerce — ink-dark surfaces, mulberry accent, and gold reserved as a Khmer-heritage semantic signal for money.
colors:
  primary: "#1B1B1F"
  secondary: "#6C7380"
  secondary-muted: "#656B76"
  tertiary: "#7E14FF"
  neutral: "#FAF9F7"
  on-primary: "#FFFFFF"
  on-tertiary: "#FFFFFF"
  surface: "#FFFFFF"
  surface-muted: "#F2F1EE"
  border: "#E4E1DC"
  success: "#1E7A46"
  caution-text: "#8A6A12"
  caution-bg: "#F5C542"
  danger: "#B3261E"
  on-dark-muted: "#A7ACB5"
typography:
  display:
    fontFamily: Inter
    fontSize: 2.25rem
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  h1:
    fontFamily: Inter
    fontSize: 1.75rem
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  h2:
    fontFamily: Inter
    fontSize: 1.25rem
    fontWeight: 600
    lineHeight: 1.3
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    lineHeight: 1.5
  body-sm:
    fontFamily: Inter
    fontSize: 0.875rem
    lineHeight: 1.45
  label-caps:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.06em"
  numeral-mono:
    fontFamily: "JetBrains Mono"
    fontSize: 1rem
    lineHeight: 1.4
    fontFeature: "tnum"
  currency-khr:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: 700
    lineHeight: 1.2
rounded:
  sm: 6px
  md: 8px
  lg: 16px
  xl: 24px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
elevation:
  card:
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05), 0 4px 12px -4px rgba(0, 0, 0, 0.06)"
  popover:
    boxShadow: "0 4px 8px -2px rgba(0, 0, 0, 0.08), 0 12px 28px -8px rgba(0, 0, 0, 0.14)"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: 12px
  button-primary-hover:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
  button-secondary:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: 12px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.lg}"
    padding: 24px
  card-muted:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.secondary-muted}"
    rounded: "{rounded.md}"
    padding: 16px
  badge-caution:
    backgroundColor: "{colors.caution-bg}"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    padding: 6px
  input-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: 10px
  nav-item:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.secondary}"
    rounded: "{rounded.sm}"
    padding: 8px
  nav-item-active:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.tertiary}"
    rounded: "{rounded.sm}"
    padding: 8px
  table-row-status-paid:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.success}"
    rounded: "{rounded.sm}"
    padding: 8px
  table-row-status-overdue:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.caution-text}"
    rounded: "{rounded.sm}"
    padding: 8px
  table-row-status-danger:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.danger}"
    rounded: "{rounded.sm}"
    padding: 8px
  data-point-on-dark:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark-muted}"
    rounded: "{rounded.sm}"
    padding: 8px
  panel-bordered:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.lg}"
    padding: 24px
  currency-chip-khr:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.caution-text}"
    rounded: "{rounded.full}"
    padding: 6px
---

## Overview

Khmer Merchant Dashboard is the back office for a Cambodian small business:
merchants track orders, stock, and money in US dollars and Cambodian riel. The
identity is **ledger-grade calm** — dense but never cluttered, ink-dark surfaces
that let numbers be the loudest thing on screen, and a single mulberry accent
that marks the one thing the merchant is meant to do next.

It borrows its discipline from accounting stationery: hairline rules instead of
heavy boxes, real tabular figures, generous line height for long order lists.
Khmer heritage enters only through money — gold appears as the accent for
currency, riel amounts, and payment state — never as decoration. The result
should feel like a well-kept ledger rather than a marketing page.

## Colors

- **Primary ({colors.primary}):** Near-black ink `#1B1B1F`. Carries body copy,
  headings, table text, and the primary button. It is the default foreground,
  not a background.
- **Secondary ({colors.secondary}):** Slate `#6C7380` for metadata, timestamps,
  column labels, and inactive nav items. Measured at 4.77:1 on white — the
  floor for anything a merchant reads at a glance.
- **Secondary-muted ({colors.secondary-muted}):** `#656B76`, a half-step
  darker. Use it for secondary text that sits on `{colors.surface-muted}`
  rather than on white — `#6C7380` drops to 4.22:1 on that darker surface,
  below the AA floor.
- **Tertiary ({colors.tertiary}):** Mulberry `#7E14FF`, taken from the hero
  mark's purple and pulled to a darker, more disciplined value so it clears
  WCAG AA on both white (6.12:1) and the warm neutral surface (5.82:1).
  It is the **only** interaction accent — links, focus rings, active nav
  state, and the hover fill of the primary button.
- **Neutral ({colors.neutral}):** Warm off-white `#FAF9F7`, a paper tint rather
  than clinical white. Used as the app shell background and as the secondary
  button fill.
- **Surface ({colors.surface}):** Pure white `#FFFFFF` for cards and inputs, so
  data surfaces sit a step brighter than the shell behind them.
- **Border ({colors.border}):** Hairline `#E4E1DC`. Rows and panel edges are
  separated by rules, not shadows. Deliberately below the 3:1 contrast floor —
  it is a decorative grouping cue, never the sole carrier of meaning.
- **Success ({colors.success}):** Green `#1E7A46` for paid / in-stock states
  (5.35:1 on white). Never paired with red as the only differentiator.
- **Caution text ({colors.caution-text}):** Dark gold `#8A6A12` for overdue and
  pending amounts (5.06:1 on white). This is the value to reach for when gold
  is *text*.
- **Caution background ({colors.caution-bg}):** Gold `#F5C542` — **fill only,
  never text.** At 1.62:1 on white it is illegible as copy. Use it as a badge,
  highlight, or riel-currency chip, always paired with
  `{colors.primary}` text (10.59:1).
- **Danger ({colors.danger}):** Red `#B3261E` for destructive actions and
  low-stock / cancelled states (6.54:1 on white).
- **On-dark muted ({colors.on-dark-muted}):** `#A7ACB5`, the only text color
  permitted on the dark sidebar or dark charts (5.47:1 on
  `{colors.primary}`).

The repo currently ships a purple `#AA3BFF` accent and a Vite landing page in
`src/index.css`; both are pre-dashboard scaffolding and are expected to be
replaced by these tokens.

## Typography

**Inter** for every UI role, loaded via Google Fonts with a `system-ui` /
`Segoe UI` fallback stack so the dashboard still renders correctly offline.
Hierarchy comes from weight and size, not from swapping families — there is
exactly one sans and one mono in the system.

- **Display ({typography.display}):** 36px / 700 / tight `-0.02em`. The
  greeting and the headline KPI number only.
- **H1 ({typography.h1}):** 28px / 700. Page titles.
- **H2 ({typography.h2}):** 20px / 600. Card and section titles.
- **Body-md ({typography.body-md}):** 16px / 1.5. Default reading size — this
  is a data product, so body text stays at a comfortable 16px rather than
  shrinking to 14px.
- **Body-sm ({typography.body-sm}):** 14px. Table rows, form fields, captions.
- **Label-caps ({typography.label-caps}):** 12px / 600 / `+0.06em`, uppercase.
  Column headers, filter labels, badge text. Always uppercase in the markup,
  never via `text-transform` on sentence-case data.
- **Numeral-mono ({typography.numeral-mono}):** JetBrains Mono with
  `font-feature-settings: "tnum"`. Every amount, quantity, and ID. Monospace
  tabular figures are the single most important typographic decision in this
  system: it keeps decimal points and column sums aligned in a table of
  dollar and riel values.
- **Currency-khr ({typography.currency-khr}):** 14px / 700. The `៛` symbol and
  riel amount, set apart from the USD figure so the two currencies never blur
  together.

## Layout

A 4px baseline grid, expressed through the `spacing` scale.

- `sm` (8px) — inline gaps inside a component: icon to label, chip to chip.
- `md` (16px) — gaps between sibling components within a card.
- `lg` (24px) — padding inside a card, and gaps between stacked cards.
- `xl` (32px) — gutters between major panels on desktop.
- `xxl` (48px) — section breaks and the top of the main content area.

Content is centred in a fixed **1126px** column (`#root` in `src/index.css`),
which is the maximum width a merchant's laptop can rely on; it collapses to
fluid below that. The shell is a persistent left sidebar (256px) with the
scrollable content column beside it, mirroring the dashboard layouts merchants
already know from Shopify and Meta Business Suite.

Breakpoints: 1024px (sidebar collapses to a top bar, two-column card grids
become one), 768px (single column, tables scroll horizontally inside their own
card rather than the page), 380px (minimum supported — Khmer mobile web is the
primary access path for many merchants).

## Elevation & Depth

Depth is expressed with hairline borders first and shadows second. Cards sit on
the surface with a `border` edge and the lightest possible shadow
(`elevation.card`); shadows are reserved for things that genuinely float above
the page — dropdowns, date pickers, and modals (`elevation.popover`).

Never stack a shadow on a card that also has a heavy border, and never use a
shadow alone to indicate an interactive state. Hover is communicated by a
background shift to `{colors.neutral}` plus a tertiary border, not by lifting.

## Shapes

- `sm` (6px) — inputs, chips, nav items. The workhorse radius.
- `md` (8px) — buttons and small cards.
- `lg` (16px) — panels and data cards.
- `xl` (24px) — modals and bottom sheets.
- `full` — badges, avatars, and the riel-currency pill. Nothing else.

Corners stay modest. The rounded-squircle language of the hero mark is for the
logo and illustration only; UI chrome is a disciplined rectangle family.

## Components

- `button-primary` is the only high-emphasis action per screen — "Mark as
  paid", "Add product". Filled with `{colors.primary}` ink; on hover it
  transitions to `{colors.tertiary}` mulberry, which is the one place the
  accent is used as a fill rather than a signal.
- `button-secondary` is the neutral outline sibling for "Cancel", "Export".
  It must never compete with the primary action on the same row.
- `card` is the default surface for any grouped data. White on the neutral
  shell, 16px radius, 24px padding, hairline border.
- `card-muted` is the recessed variant for nested or secondary blocks —
  summaries inside a detail view, filter trays.
- `badge-caution` is the gold pill: `{colors.caution-bg}` fill with
  `{colors.primary}` text, `full` radius. This is the canonical riel-currency
  and overdue-payment chip, and the model for every status badge — color plus
  a text label, never color alone.
- `input-field` is a white field on a neutral tray: 6px radius, 10px padding,
  and a `{colors.tertiary}` ring on `:focus-visible` with a 2px offset. Focus
  must be visible on every interactive element.
- `nav-item` / `nav-item-active` are the sidebar pair. Inactive items are
  `{colors.secondary}` on `{colors.surface}`; the active item inverts to
  `{colors.tertiary}` on `{colors.neutral}` so the current location is
  unmistakable without a shadow or an icon change.
- `table-row-status-paid`, `table-row-status-overdue`, and
  `table-row-status-danger` are the three status states of a data row. Each
  carries its color *and* a text label — the color is a scannable cue, the
  label is the source of truth.
- `data-point-on-dark` covers text on the dark sidebar, dark chart fills, and
  any ink-on-ink surface: `{colors.on-dark-muted}` on `{colors.primary}`.
- `panel-bordered` is the hairline-framed variant of `card` — a
  `{colors.border}` edge with no shadow, for layouts that separate regions by
  rules rather than by elevation. It is the reference for every row divider
  and panel edge.
- `currency-chip-khr` is the `៛` riel pill. Neutral fill, dark-gold text,
  `full` radius — deliberately not the gold badge, so riel amounts read as
  currency rather than as a warning.

Hairline dividers are expressed directly as `1px solid {colors.border}` in CSS
rather than as a component token, because `{colors.border}` is a decorative
rule and not a text/background pair — it sits at 1.30:1 by design, below the
contrast floor on purpose. It must never be the sole indicator of a boundary
that matters; pair it with spacing or a label.

## Do's and Don'ts

- **Do** use `{colors.numeral-mono}` for every number a merchant might add up.
  Aligned decimals are a correctness feature, not a stylistic one.
- **Do** pair gold with `{colors.primary}` text whenever it is a fill. Gold
  on white is 1.62:1 — it is a background, not a foreground.
- **Do** use `{colors.caution-text}` when gold needs to be read as text.
- **Do** keep the accent rationed. Mulberry marks one thing per screen; if two
  elements compete for it, one of them is not actually primary.
- **Do** reference tokens by path (`{colors.primary}`, `{rounded.md}`) in
  component definitions so the palette stays single-sourced.
- **Don't** introduce colors outside this palette — extend it first.
- **Don't** nest component variants. `button-primary-hover` is a sibling key,
  not a child of `button-primary`.
- **Don't** rely on color alone for status. Every badge carries a text label,
  and success/caution/danger each have a distinct shape or icon.
- **Don't** put Khmer script and Latin numerals in the same monospace run
  without testing line height — Khmer stacked consonants and vowel signs need
  roughly 1.5× the leading of Latin to avoid clipping.
