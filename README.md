# Portfolio

Backend & Integrations portfolio for Tomás R., Software Developer.

## Structure
- `src/index.html`: main page and semantics
- `src/styles.scss`: minimal styling tokens
- `src/data/content.js`: all textual content // i18n keys
- `src/index.js`: DOM population, contact form and Weglot init

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

## Accessibility & performance
Run Lighthouse in Chrome DevTools. Aim for ≥90 in Performance, Best Practices and SEO.

## Weglot
Weglot is loaded from the CDN and initialized in `src/index.js`.
To verify translations, start the site and switch languages via the Weglot selector.
