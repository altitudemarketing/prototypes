# Altitude Prototypes

Static website hub for hosting and linking to client site prototypes. Deploys automatically to GitHub Pages.

## Overview

- Purpose: central index for prototype links
- Stack: Basecoat CSS + Basecoat JS (loaded via CDN)
- Deployment: GitHub Actions to GitHub Pages on `main`

## Project Layout

```
/
├── index.html              # Landing page with prototype links
├── /[prototype-name]/      # Each prototype in its own folder
└── .github/workflows/      # GitHub Pages deployment automation
```

Each prototype is self-contained with its own `index.html` entry point.

## Workflow

1. Create a new prototype directory (e.g., `/client-name/index.html`).
2. Add the prototype link to the main `index.html`.
3. Push to `main` to trigger GitHub Pages deployment.

## Notes

This is a static HTML project with no build system or package manager.
