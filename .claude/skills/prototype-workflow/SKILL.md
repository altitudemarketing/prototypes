---
name: prototype-workflow
description: End-to-end workflow for creating shareable prototypes from Figma designs. Use when creating HTML prototypes from Figma exports (via shadcndesign.com plugin), converting to Basecoat, and publishing to GitHub Pages. Covers the complete flow from design handoff to shareable client URL.
---

# Prototype Workflow: Figma → GitHub Pages

Complete workflow for creating shareable HTML prototypes from Figma designs.

## Workflow Overview

```
Figma Design → shadcndesign.com Plugin → React/shadcn Code
                                              ↓
                                    Claude Code Conversion
                                              ↓
                                    Basecoat HTML Prototype
                                              ↓
                                    GitHub Repository
                                              ↓
                                    GitHub Pages URL
```

## Prerequisites

1. **Figma**: Design ready in Figma
2. **shadcndesign.com Plugin**: Installed in Figma
3. **GitHub**: Repository set up for prototypes
4. **shadcn-to-basecoat skill**: Loaded for conversion

## Step 1: Export from Figma

### Using shadcndesign.com Plugin

1. Select frame in Figma
2. Run shadcndesign.com plugin
3. Click "Generate Code"
4. Copy the React/shadcn output

**Plugin outputs:**
- Complete React component with imports
- shadcn/ui components
- Tailwind CSS classes
- Lucide icons

## Step 2: Convert to Basecoat

Use the `shadcn-to-basecoat` skill:

1. Paste the React code
2. Request conversion to Basecoat HTML
3. Specify any customizations needed

**Conversion includes:**
- Remove React syntax
- Map components to Basecoat equivalents
- Add required JavaScript
- Wrap in HTML template

## Step 3: Create Prototype Files

### Single Page Prototype

```
client-name/
├── index.html      # Main prototype
└── assets/         # Images, fonts (if needed)
    └── images/
```

### Multi-Page Prototype

```
client-name/
├── index.html      # Home page
├── features.html   # Features page
├── pricing.html    # Pricing page
├── about.html      # About page
├── styles/
│   └── custom.css  # Shared custom styles
└── assets/
    └── images/
```

## Step 4: Publish to GitHub Pages

### Add New Prototype

```bash
# Clone repository
git clone https://github.com/ORG/prototypes.git
cd prototypes

# Create prototype directory
mkdir client-name

# Add files
cp path/to/converted/index.html client-name/

# Update landing page (optional)
# Add link to new prototype in root index.html

# Commit and push
git add .
git commit -m "Add client-name prototype"
git push origin main
```

### Resulting URLs

- Landing: `https://altitudemarketing.github.io/prototypes/`
- Prototype: `https://altitudemarketing.github.io/prototypes//client-name/`

## Quick Commands

### Create Prototype Directory

```bash
# Replace CLIENT with actual client name (lowercase, hyphenated)
mkdir -p prototypes/CLIENT/assets/images
```

### Copy Template

```bash
# Copy single-page template
cp template.html prototypes/CLIENT/index.html
```

### Deploy

```bash
cd prototypes
git add CLIENT/
git commit -m "Add CLIENT prototype"
git push
```

## Prototype Checklist

Before publishing:

- [ ] Title updated in `<title>` tag
- [ ] All placeholder text replaced
- [ ] Images optimized and added to assets
- [ ] Links updated (relative paths for multi-page)
- [ ] Mobile responsive verified
- [ ] Interactive elements working
- [ ] Dark mode tested (if applicable)

## Sharing with Clients

After deployment:

1. Wait 1-2 minutes for GitHub Pages to build
2. Verify URL loads correctly
3. Test on mobile device
4. Share link with client

**Professional tip**: Use a custom domain or URL shortener for client-facing links.

## Troubleshooting

### Page Not Loading

- Check GitHub Actions tab for build errors
- Verify Pages is enabled in repository settings
- Wait a few minutes for DNS propagation

### Styles Not Applying

- Verify Basecoat CDN link is correct
- Check browser console for 404 errors
- Ensure `defer` attribute on scripts

### JavaScript Not Working

- Include correct Basecoat JS files
- Check console for errors
- Verify `data-*` attributes on interactive elements

## Integration with Agent Hub (Future)

This workflow will integrate with Agent Hub's Letta agents:

1. **Design Agent**: Receives Figma frame URL
2. **Conversion Agent**: Transforms to Basecoat
3. **Publishing Agent**: Commits to GitHub
4. **Notification Agent**: Sends client URL via Slack/email

For now, manual workflow with Claude Code provides immediate value.
