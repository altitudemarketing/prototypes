# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Altitude Prototypes is a static website hub for hosting and linking to client site prototypes. It deploys automatically to GitHub Pages.

## Development Workflow

This is a static HTML project with no build system or package manager. To develop:

1. Create prototype subdirectories (e.g., `/client-name/index.html`)
2. Add links to new prototypes in the main `index.html`
3. Push to `main` branch to trigger automatic GitHub Pages deployment

## Tech Stack

- **CSS Framework**: Basecoat CSS (v0.3.10-beta.2) - utility-first CSS framework loaded via CDN
- **JS**: Basecoat JS for interactive components
- **Deployment**: GitHub Actions workflow (`.github/workflows/deploy.yml`) deploys to GitHub Pages on push to main

## Architecture

```
/
├── index.html              # Main landing page with prototype links
├── /[prototype-name]/      # Each prototype lives in its own subdirectory
└── .github/workflows/      # GitHub Pages deployment automation
```

Each prototype should be self-contained in its own directory with its own `index.html` entry point.
