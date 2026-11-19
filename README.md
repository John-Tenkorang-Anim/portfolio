# John Tenkorang Anim · Portfolio

A fast, static portfolio site. No framework and no package dependencies. One small optional script; the page works without it.

## Structure

```
index.html            Page content and section order
src/index.css         All styles (design tokens at the top)
src/main.js           Optional enhancements: active nav highlight, local clock
public/               Static assets copied as-is into the build
  favicon.svg
  john-anim-portrait.jpg
  projects/           Project screenshots (900×570)
  resume/             Résumé PDF linked from the header and footer
scripts/build.mjs     Copies index.html, src/, and public/ into dist/
```

## Design

- **Type:** Space Grotesk (headings), IBM Plex Sans (text), IBM Plex Mono (labels), loaded from Google Fonts.
- **Colors and spacing:** defined as CSS custom properties in `:root` in `src/index.css`.

## Commands

```sh
npm run build     # generate dist/
npm run preview   # build and serve at http://127.0.0.1:5173 (requires Python 3)
```

Deploy `dist/` to any static host (Vercel, Netlify, GitHub Pages).
