---
name: shadcn-to-basecoat
description: Convert shadcn/ui React components to Basecoat vanilla HTML/CSS/JS. Use when converting React/shadcn code (from Figma plugins like shadcndesign.com, v0.dev exports, or manual shadcn components) to framework-free HTML prototypes using Basecoat UI library. Handles component mapping, class translation, accessibility attributes, and JavaScript initialization for interactive elements.
---

# shadcn/ui to Basecoat Converter

Convert React/shadcn components to vanilla HTML using Basecoat UI library.

## When to Use

- Converting shadcndesign.com Figma plugin output to HTML
- Creating static prototypes from React component designs
- Building framework-free demos for client review
- Converting v0.dev exports to vanilla HTML

## Conversion Process

### 1. Analyze Input

Identify shadcn components used:
- Import statements reveal component names
- JSX elements map to Basecoat equivalents
- Props translate to HTML attributes or classes

### 2. Apply Mapping

See `references/component-mapping.md` for complete mapping table.

**Core transformations:**
```
<Button variant="default"> → <button class="btn btn-primary">
<Card>                     → <div class="card">
<Input>                    → <input class="input">
<Tabs>                     → <div class="tabs"> + tabs.min.js
<Dialog>                   → <dialog class="dialog"> + dialog.min.js
```

### 3. Handle React-Specific Syntax

Remove/convert:
- `import` statements → delete
- `useState`, `useEffect` → vanilla JS or remove
- `className` → `class`
- `htmlFor` → `for`
- `onClick={fn}` → `onclick="fn()"` or addEventListener
- JSX expressions `{variable}` → static values or template literals
- Fragments `<>...</>` → remove wrapper

### 4. Add Basecoat Dependencies

**Always include in `<head>`:**
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/basecoat-css@latest/dist/basecoat.cdn.min.css">
```

**Include JS only for interactive components:**
```html
<!-- Full bundle (includes all interactive components) -->
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@latest/dist/basecoat.min.js" defer></script>

<!-- Or cherry-pick specific components -->
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@latest/dist/tabs.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@latest/dist/dialog.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@latest/dist/select.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@latest/dist/dropdown-menu.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@latest/dist/accordion.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@latest/dist/popover.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@latest/dist/tooltip.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@latest/dist/sheet.min.js" defer></script>
```

### 5. Ensure Accessibility

Preserve ARIA attributes from shadcn output. Add when missing:
- `role="tablist"`, `role="tab"`, `role="tabpanel"` for tabs
- `role="alert"` for alerts
- `aria-label` for icon-only buttons
- `aria-expanded`, `aria-controls` for expandable elements

## Output Template

Use `assets/prototype-template.html` as the base structure.

## Quick Reference

### Button Variants
| shadcn | Basecoat |
|--------|----------|
| `variant="default"` | `btn btn-primary` |
| `variant="secondary"` | `btn btn-secondary` |
| `variant="destructive"` | `btn btn-destructive` |
| `variant="outline"` | `btn btn-outline` |
| `variant="ghost"` | `btn btn-ghost` |
| `variant="link"` | `btn btn-link` |
| `size="sm"` | `btn-sm` |
| `size="lg"` | `btn-lg` |
| `size="icon"` | `btn-icon` |

### Card Structure
```html
<div class="card">
  <div class="card-header">
    <h3 class="card-title">Title</h3>
    <p class="card-description">Description</p>
  </div>
  <div class="card-content">Content</div>
  <div class="card-footer">Footer</div>
</div>
```

### Form Elements
```html
<div class="grid gap-2">
  <label class="label" for="email">Email</label>
  <input class="input" id="email" type="email" placeholder="Enter email">
  <p class="text-sm text-muted-foreground">Helper text</p>
</div>
```

## Resources

- **Complete mapping**: `references/component-mapping.md`
- **Conversion examples**: `references/conversion-examples.md`
- **HTML template**: `assets/prototype-template.html`
- **Multi-page template**: `assets/multi-page-template/`

## Validation Checklist

Before output:
- [ ] All imports removed
- [ ] React hooks removed or converted
- [ ] className → class
- [ ] htmlFor → for
- [ ] Interactive components have required JS
- [ ] ARIA attributes present
- [ ] Valid HTML structure
- [ ] Basecoat CSS linked
- [ ] Template wrapper used
