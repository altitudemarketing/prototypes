# shadcn/ui to Basecoat Component Mapping

Complete reference for converting shadcn/ui React components to Basecoat vanilla HTML.

## Component Mapping Table

| shadcn Component | Basecoat HTML | Required JS | Notes |
|------------------|---------------|-------------|-------|
| `<Button>` | `<button class="btn">` | No | Add variant classes |
| `<Card>` | `<div class="card">` | No | Use card-* subclasses |
| `<CardHeader>` | `<div class="card-header">` | No | |
| `<CardTitle>` | `<h3 class="card-title">` | No | Use appropriate heading level |
| `<CardDescription>` | `<p class="card-description">` | No | |
| `<CardContent>` | `<div class="card-content">` | No | |
| `<CardFooter>` | `<div class="card-footer">` | No | |
| `<Input>` | `<input class="input">` | No | Native input |
| `<Label>` | `<label class="label">` | No | Native label |
| `<Textarea>` | `<textarea class="textarea">` | No | Native textarea |
| `<Select>` | `<select class="select">` | `select.min.js` | For custom styling |
| `<SelectTrigger>` | Part of select | Yes | |
| `<SelectContent>` | Part of select | Yes | |
| `<SelectItem>` | `<option>` | No | |
| `<Checkbox>` | `<input type="checkbox" class="checkbox">` | No | Native checkbox |
| `<RadioGroup>` | `<fieldset class="radio-group">` | No | Native fieldset |
| `<RadioGroupItem>` | `<input type="radio" class="radio">` | No | Native radio |
| `<Switch>` | `<button class="switch">` | `switch.min.js` | Toggle switch |
| `<Slider>` | `<input type="range" class="slider">` | No | Native range |
| `<Tabs>` | `<div class="tabs">` | `tabs.min.js` | Required for tab switching |
| `<TabsList>` | `<div class="tabs-list" role="tablist">` | Yes | |
| `<TabsTrigger>` | `<button class="tabs-trigger" role="tab">` | Yes | Add `data-value` |
| `<TabsContent>` | `<div class="tabs-content" role="tabpanel">` | Yes | Add `data-value` |
| `<Accordion>` | `<div class="accordion">` | `accordion.min.js` | Or use native `<details>` |
| `<AccordionItem>` | `<div class="accordion-item">` | Yes | |
| `<AccordionTrigger>` | `<button class="accordion-trigger">` | Yes | |
| `<AccordionContent>` | `<div class="accordion-content">` | Yes | |
| `<Dialog>` | `<dialog class="dialog">` | `dialog.min.js` | Native dialog element |
| `<DialogTrigger>` | `<button data-dialog-trigger>` | Yes | |
| `<DialogContent>` | `<div class="dialog-content">` | Yes | Inside dialog |
| `<DialogHeader>` | `<div class="dialog-header">` | No | |
| `<DialogTitle>` | `<h2 class="dialog-title">` | No | |
| `<DialogDescription>` | `<p class="dialog-description">` | No | |
| `<DialogFooter>` | `<div class="dialog-footer">` | No | |
| `<Sheet>` | `<div class="sheet">` | `sheet.min.js` | Slide-over panel |
| `<SheetTrigger>` | `<button data-sheet-trigger>` | Yes | |
| `<SheetContent>` | `<div class="sheet-content">` | Yes | Add `data-side` |
| `<DropdownMenu>` | `<div class="dropdown-menu">` | `dropdown-menu.min.js` | |
| `<DropdownMenuTrigger>` | `<button data-dropdown-trigger>` | Yes | |
| `<DropdownMenuContent>` | `<div class="dropdown-menu-content">` | Yes | |
| `<DropdownMenuItem>` | `<button class="dropdown-menu-item">` | Yes | |
| `<DropdownMenuSeparator>` | `<hr class="dropdown-menu-separator">` | No | |
| `<Popover>` | `<div class="popover">` | `popover.min.js` | |
| `<PopoverTrigger>` | `<button data-popover-trigger>` | Yes | |
| `<PopoverContent>` | `<div class="popover-content">` | Yes | |
| `<Tooltip>` | `<span class="tooltip">` | `tooltip.min.js` | |
| `<TooltipTrigger>` | `<button data-tooltip-trigger>` | Yes | |
| `<TooltipContent>` | `<span class="tooltip-content">` | Yes | |
| `<Alert>` | `<div class="alert" role="alert">` | No | |
| `<AlertTitle>` | `<h4 class="alert-title">` | No | |
| `<AlertDescription>` | `<p class="alert-description">` | No | |
| `<Badge>` | `<span class="badge">` | No | |
| `<Avatar>` | `<span class="avatar">` | No | |
| `<AvatarImage>` | `<img class="avatar-image">` | No | |
| `<AvatarFallback>` | `<span class="avatar-fallback">` | No | |
| `<Separator>` | `<hr class="separator">` | No | Or `<div class="separator">` |
| `<Skeleton>` | `<div class="skeleton">` | No | CSS-only animation |
| `<Progress>` | `<progress class="progress">` | No | Native progress |
| `<ScrollArea>` | `<div class="scroll-area">` | No | CSS overflow |
| `<Table>` | `<table class="table">` | No | |
| `<TableHeader>` | `<thead>` | No | |
| `<TableBody>` | `<tbody>` | No | |
| `<TableRow>` | `<tr>` | No | |
| `<TableHead>` | `<th>` | No | |
| `<TableCell>` | `<td>` | No | |
| `<AspectRatio>` | `<div class="aspect-ratio">` | No | CSS aspect-ratio |
| `<Collapsible>` | `<details class="collapsible">` | No | Native details |
| `<CollapsibleTrigger>` | `<summary>` | No | |
| `<CollapsibleContent>` | Content inside details | No | |

## Variant Mappings

### Button Variants

```jsx
// shadcn
<Button variant="default">Click</Button>
<Button variant="secondary">Click</Button>
<Button variant="destructive">Click</Button>
<Button variant="outline">Click</Button>
<Button variant="ghost">Click</Button>
<Button variant="link">Click</Button>
```

```html
<!-- Basecoat -->
<button class="btn btn-primary">Click</button>
<button class="btn btn-secondary">Click</button>
<button class="btn btn-destructive">Click</button>
<button class="btn btn-outline">Click</button>
<button class="btn btn-ghost">Click</button>
<button class="btn btn-link">Click</button>
```

### Button Sizes

```jsx
// shadcn
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon"><Icon /></Button>
```

```html
<!-- Basecoat -->
<button class="btn btn-sm">Small</button>
<button class="btn">Default</button>
<button class="btn btn-lg">Large</button>
<button class="btn btn-icon"><svg>...</svg></button>
```

### Badge Variants

```jsx
// shadcn
<Badge variant="default">Badge</Badge>
<Badge variant="secondary">Badge</Badge>
<Badge variant="destructive">Badge</Badge>
<Badge variant="outline">Badge</Badge>
```

```html
<!-- Basecoat -->
<span class="badge">Badge</span>
<span class="badge badge-secondary">Badge</span>
<span class="badge badge-destructive">Badge</span>
<span class="badge badge-outline">Badge</span>
```

### Alert Variants

```jsx
// shadcn
<Alert variant="default">...</Alert>
<Alert variant="destructive">...</Alert>
```

```html
<!-- Basecoat -->
<div class="alert" role="alert">...</div>
<div class="alert alert-destructive" role="alert">...</div>
```

## Interactive Component Patterns

### Tabs

```jsx
// shadcn React
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>
```

```html
<!-- Basecoat HTML -->
<div class="tabs" data-default-value="tab1">
  <div class="tabs-list" role="tablist">
    <button class="tabs-trigger" role="tab" data-value="tab1" aria-selected="true">Tab 1</button>
    <button class="tabs-trigger" role="tab" data-value="tab2">Tab 2</button>
  </div>
  <div class="tabs-content" role="tabpanel" data-value="tab1">Content 1</div>
  <div class="tabs-content" role="tabpanel" data-value="tab2" hidden>Content 2</div>
</div>
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@latest/dist/tabs.min.js" defer></script>
```

### Dialog/Modal

```jsx
// shadcn React
<Dialog>
  <DialogTrigger asChild>
    <Button>Open</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
    <p>Content</p>
    <DialogFooter>
      <Button>Save</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

```html
<!-- Basecoat HTML -->
<button class="btn btn-primary" data-dialog-trigger="my-dialog">Open</button>

<dialog class="dialog" id="my-dialog">
  <div class="dialog-content">
    <div class="dialog-header">
      <h2 class="dialog-title">Title</h2>
      <p class="dialog-description">Description</p>
    </div>
    <p>Content</p>
    <div class="dialog-footer">
      <button class="btn btn-primary">Save</button>
    </div>
    <button class="dialog-close" aria-label="Close">
      <svg><!-- X icon --></svg>
    </button>
  </div>
</dialog>
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@latest/dist/dialog.min.js" defer></script>
```

### Accordion

```jsx
// shadcn React
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Section 1</AccordionTrigger>
    <AccordionContent>Content 1</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Section 2</AccordionTrigger>
    <AccordionContent>Content 2</AccordionContent>
  </AccordionItem>
</Accordion>
```

```html
<!-- Option A: Basecoat Accordion with JS -->
<div class="accordion" data-type="single" data-collapsible="true">
  <div class="accordion-item" data-value="item-1">
    <button class="accordion-trigger">
      Section 1
      <svg class="accordion-icon"><!-- chevron --></svg>
    </button>
    <div class="accordion-content">Content 1</div>
  </div>
  <div class="accordion-item" data-value="item-2">
    <button class="accordion-trigger">
      Section 2
      <svg class="accordion-icon"><!-- chevron --></svg>
    </button>
    <div class="accordion-content">Content 2</div>
  </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@latest/dist/accordion.min.js" defer></script>

<!-- Option B: Native HTML details (no JS needed) -->
<div class="space-y-2">
  <details class="border rounded-lg">
    <summary class="p-4 cursor-pointer font-medium">Section 1</summary>
    <div class="p-4 pt-0">Content 1</div>
  </details>
  <details class="border rounded-lg">
    <summary class="p-4 cursor-pointer font-medium">Section 2</summary>
    <div class="p-4 pt-0">Content 2</div>
  </details>
</div>
```

### Dropdown Menu

```jsx
// shadcn React
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Logout</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

```html
<!-- Basecoat HTML -->
<div class="dropdown-menu">
  <button class="btn btn-outline" data-dropdown-trigger>Menu</button>
  <div class="dropdown-menu-content" hidden>
    <button class="dropdown-menu-item">Profile</button>
    <button class="dropdown-menu-item">Settings</button>
    <hr class="dropdown-menu-separator">
    <button class="dropdown-menu-item">Logout</button>
  </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@latest/dist/dropdown-menu.min.js" defer></script>
```

### Select

```jsx
// shadcn React
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="1">Option 1</SelectItem>
    <SelectItem value="2">Option 2</SelectItem>
    <SelectItem value="3">Option 3</SelectItem>
  </SelectContent>
</Select>
```

```html
<!-- Option A: Native select (simpler, recommended for forms) -->
<select class="select">
  <option value="" disabled selected>Select option</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</select>

<!-- Option B: Basecoat custom select (for styled dropdowns) -->
<div class="select-wrapper">
  <button class="select-trigger" data-select-trigger>
    <span class="select-value">Select option</span>
    <svg class="select-icon"><!-- chevron --></svg>
  </button>
  <div class="select-content" hidden>
    <button class="select-item" data-value="1">Option 1</button>
    <button class="select-item" data-value="2">Option 2</button>
    <button class="select-item" data-value="3">Option 3</button>
  </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/basecoat-css@latest/dist/select.min.js" defer></script>
```

## Prop to Class/Attribute Conversions

### Common Props

| React Prop | HTML Equivalent |
|------------|-----------------|
| `className="..."` | `class="..."` |
| `htmlFor="id"` | `for="id"` |
| `onClick={fn}` | `onclick="fn()"` |
| `onChange={fn}` | `onchange="fn()"` |
| `disabled` | `disabled` |
| `required` | `required` |
| `placeholder="..."` | `placeholder="..."` |
| `type="..."` | `type="..."` |
| `value={val}` | `value="val"` |
| `defaultValue={val}` | `value="val"` |
| `checked` | `checked` |
| `defaultChecked` | `checked` |
| `autoFocus` | `autofocus` |
| `tabIndex={0}` | `tabindex="0"` |
| `aria-label="..."` | `aria-label="..."` |
| `aria-describedby="..."` | `aria-describedby="..."` |
| `data-*={val}` | `data-*="val"` |

### Style Props

| React Style | Tailwind Class |
|-------------|----------------|
| `style={{width: '100%'}}` | `class="w-full"` |
| `style={{display: 'flex'}}` | `class="flex"` |
| `style={{gap: '1rem'}}` | `class="gap-4"` |
| `style={{padding: '1rem'}}` | `class="p-4"` |
| `style={{margin: '1rem'}}` | `class="m-4"` |

## Layout Utilities

Basecoat includes Tailwind CSS. Common patterns:

```html
<!-- Flex container -->
<div class="flex items-center justify-between gap-4">

<!-- Grid -->
<div class="grid grid-cols-2 md:grid-cols-3 gap-4">

<!-- Stack (vertical) -->
<div class="flex flex-col gap-4">

<!-- Centered content -->
<div class="flex items-center justify-center min-h-screen">

<!-- Container with max-width -->
<div class="container mx-auto px-4">

<!-- Responsive padding -->
<div class="p-4 md:p-6 lg:p-8">
```

## Icon Handling

shadcn uses Lucide icons. For Basecoat:

```html
<!-- Option 1: Inline SVG (recommended for prototypes) -->
<button class="btn btn-icon">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M5 12h14"/>
    <path d="m12 5 7 7-7 7"/>
  </svg>
</button>

<!-- Option 2: Lucide CDN -->
<script src="https://unpkg.com/lucide@latest"></script>
<script>lucide.createIcons();</script>

<button class="btn btn-icon">
  <i data-lucide="arrow-right"></i>
</button>

<!-- Option 3: Heroicons CDN alternative -->
<!-- Use heroicons.com and copy SVG -->
```

## Common Icon SVGs

```html
<!-- X / Close -->
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>

<!-- Chevron Down -->
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>

<!-- Chevron Right -->
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>

<!-- Check -->
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>

<!-- Menu / Hamburger -->
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>

<!-- Search -->
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>

<!-- User -->
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>

<!-- Settings / Gear -->
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>

<!-- Plus -->
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>

<!-- Arrow Right -->
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>

<!-- External Link -->
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
```
