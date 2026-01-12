# GitHub Pages Deployment Workflow

## Automatic Deployment with GitHub Actions

Create this file at `.github/workflows/deploy.yml` in your prototypes repository.

```yaml
name: Deploy to GitHub Pages

on:
  # Trigger on push to main branch
  push:
    branches: ["main"]
  
  # Allow manual trigger from Actions tab
  workflow_dispatch:

# Set permissions for GitHub Pages deployment
permissions:
  contents: read
  pages: write
  id-token: write

# Prevent concurrent deployments
concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
      
      - name: Setup GitHub Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          # Upload entire repository root
          path: '.'
      
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## Repository Settings

### Enable GitHub Pages

1. Go to repository **Settings**
2. Click **Pages** in left sidebar
3. Under "Build and deployment":
   - Source: **GitHub Actions**
4. Save

### Verify Deployment

After pushing:
1. Go to **Actions** tab
2. Click latest workflow run
3. Wait for green checkmark
4. Click "github-pages" environment link

## Alternative: Branch-Based Deployment

If you prefer simpler setup without Actions:

1. Go to repository **Settings** → **Pages**
2. Under "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
3. Save

This deploys automatically but with fewer customization options.

## Custom Domain (Optional)

### Add Custom Domain

1. Go to **Settings** → **Pages**
2. Under "Custom domain", enter your domain
3. Click **Save**

### DNS Configuration

Add these records to your DNS:

**For apex domain (example.com):**
```
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
```

**For subdomain (prototypes.example.com):**
```
CNAME prototypes ORG.github.io
```

### CNAME File

Create `CNAME` file in repository root:
```
prototypes.example.com
```

## Repository Structure

Recommended structure for prototype repository:

```
altitude-prototypes/
├── .github/
│   └── workflows/
│       └── deploy.yml        # Deployment workflow
├── index.html                 # Landing page listing all prototypes
├── CNAME                      # Custom domain (optional)
├── client-a/
│   ├── index.html
│   └── assets/
├── client-b/
│   ├── index.html
│   ├── features.html
│   ├── pricing.html
│   └── styles/
│       └── custom.css
└── README.md
```

## Landing Page Template

Create `index.html` at repository root:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Altitude Prototypes</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/basecoat-css@latest/dist/basecoat.cdn.min.css">
</head>
<body class="min-h-screen bg-background text-foreground">
  <div class="container mx-auto px-4 py-12">
    <header class="mb-12">
      <h1 class="text-3xl font-bold mb-2">Altitude Prototypes</h1>
      <p class="text-muted-foreground">Client design prototypes for review</p>
    </header>
    
    <main>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        
        <!-- Prototype Card Template -->
        <a href="./client-name/" class="card p-6 hover:bg-muted/50 transition-colors group">
          <h2 class="font-semibold group-hover:text-primary">Client Name</h2>
          <p class="text-sm text-muted-foreground mt-1">Project description</p>
          <p class="text-xs text-muted-foreground mt-4">Updated: Jan 2025</p>
        </a>
        
        <!-- Add more prototype cards here -->
        
      </div>
    </main>
    
    <footer class="mt-16 pt-8 border-t">
      <p class="text-sm text-muted-foreground">
        © 2025 Altitude Marketing. Internal use only.
      </p>
    </footer>
  </div>
</body>
</html>
```

## Troubleshooting

### Build Fails

Check the Actions tab for error details. Common issues:

- Invalid HTML syntax
- Missing files referenced in HTML
- File permissions issues

### 404 After Deployment

- Verify the path matches exactly (case-sensitive)
- Wait a few minutes for CDN propagation
- Clear browser cache

### CSS/JS Not Loading

- Use absolute CDN URLs (not relative)
- Check for HTTPS mixed content issues
- Verify file exists at specified path

### Custom Domain Not Working

- DNS propagation can take up to 48 hours
- Verify CNAME file exists and is correct
- Check DNS records with `dig` or online tools
