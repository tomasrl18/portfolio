# Portfolio

Backend & Integrations portfolio for Tomás R., Software Developer.

## Structure
- `src/index.html`: main page and semantics
- `src/styles.scss`: tokens and utilities (spacing, radius, accents)
- `src/data/content.js`: all textual content // i18n keys
- `src/index.js`: DOM population, contact form, theme toggle and Weglot init
- `src/robots.txt` & `src/sitemap.xml`: SEO helpers

Assets reside in `src/assets/`.

## Editing content
Texts live in `src/data/content.js`. Update the relevant section and run `npm run build`.

To add a new case study, append an object to `content.projects.caseStudies` (or `content.projects.others`).
Replace `[POR_RELLENAR]` placeholders with real metrics or repository URLs.

## Development
```bash
npm install
npm run start
```

## Build
```bash
npm run build
```

## Theme
Respects `prefers-color-scheme` and can be toggled via the button in the top-right.

## Accessibility & performance
Run Lighthouse in Chrome DevTools (Incognito, Fast 3G). Aim for ≥90 in Performance, Best Practices and SEO.

## Weglot
Weglot is loaded from the CDN and initialized in `src/index.js`.
To verify translations, start the site, ensure all text comes from `content.js`, and switch languages via the Weglot selector.
