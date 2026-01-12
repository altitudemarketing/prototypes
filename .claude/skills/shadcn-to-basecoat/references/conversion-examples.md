# shadcn to Basecoat Conversion Examples

Real-world examples of converting shadcn/ui React components to Basecoat HTML.

## Example 1: Navigation Header

### shadcn/React Input

```jsx
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <span className="hidden font-bold sm:inline-block">Acme Inc</span>
          </a>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="/features">Features</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/pricing">Pricing</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/about">About</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="flex flex-col gap-4">
              <a href="/features">Features</a>
              <a href="/pricing">Pricing</a>
              <a href="/about">About</a>
            </nav>
          </SheetContent>
        </Sheet>
        
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button variant="ghost">Log in</Button>
          <Button>Sign up</Button>
        </div>
      </div>
    </header>
  )
}
```

### Basecoat HTML Output

```html
<header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
  <div class="container flex h-14 items-center">
    <!-- Desktop Navigation -->
    <div class="mr-4 hidden md:flex">
      <a class="mr-6 flex items-center space-x-2" href="/">
        <span class="hidden font-bold sm:inline-block">Acme Inc</span>
      </a>
      <nav class="flex items-center space-x-6 text-sm font-medium">
        <a href="/features" class="transition-colors hover:text-foreground/80">Features</a>
        <a href="/pricing" class="transition-colors hover:text-foreground/80">Pricing</a>
        <a href="/about" class="transition-colors hover:text-foreground/80">About</a>
      </nav>
    </div>
    
    <!-- Mobile Menu Button -->
    <button class="btn btn-ghost mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent md:hidden" data-sheet-trigger="mobile-nav">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
      <span class="sr-only">Toggle Menu</span>
    </button>
    
    <!-- Mobile Sheet -->
    <div class="sheet" id="mobile-nav" data-side="left" hidden>
      <div class="sheet-content">
        <nav class="flex flex-col gap-4 mt-8">
          <a href="/features" class="text-lg">Features</a>
          <a href="/pricing" class="text-lg">Pricing</a>
          <a href="/about" class="text-lg">About</a>
        </nav>
      </div>
    </div>
    
    <!-- Right Side Actions -->
    <div class="flex flex-1 items-center justify-end space-x-2">
      <button class="btn btn-ghost">Log in</button>
      <button class="btn btn-primary">Sign up</button>
    </div>
  </div>
</header>

<script src="https://cdn.jsdelivr.net/npm/basecoat-css@latest/dist/sheet.min.js" defer></script>
```

---

## Example 2: Hero Section

### shadcn/React Input

```jsx
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <Badge variant="secondary" className="mb-4">
            <span className="mr-2">🎉</span> Now Available
          </Badge>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Build faster with our platform
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Create beautiful websites in minutes. No coding required. 
              Start your free trial today.
            </p>
          </div>
          <div className="space-x-4">
            <Button size="lg">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
```

### Basecoat HTML Output

```html
<section class="w-full py-12 md:py-24 lg:py-32 xl:py-48">
  <div class="container px-4 md:px-6">
    <div class="flex flex-col items-center space-y-4 text-center">
      <span class="badge badge-secondary mb-4">
        <span class="mr-2">🎉</span> Now Available
      </span>
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
          Build faster with our platform
        </h1>
        <p class="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Create beautiful websites in minutes. No coding required. 
          Start your free trial today.
        </p>
      </div>
      <div class="space-x-4">
        <button class="btn btn-primary btn-lg">
          Get Started
          <svg class="ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </button>
        <button class="btn btn-outline btn-lg">
          <svg class="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="6 3 20 12 6 21 6 3"/></svg>
          Watch Demo
        </button>
      </div>
    </div>
  </div>
</section>
```

---

## Example 3: Feature Grid

### shadcn/React Input

```jsx
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Zap, Shield, Smartphone, Cloud, Users, BarChart } from "lucide-react"

const features = [
  { icon: Zap, title: "Lightning Fast", description: "Optimized for speed and performance" },
  { icon: Shield, title: "Secure by Default", description: "Enterprise-grade security built in" },
  { icon: Smartphone, title: "Mobile First", description: "Responsive design that works everywhere" },
  { icon: Cloud, title: "Cloud Native", description: "Scale effortlessly with cloud infrastructure" },
  { icon: Users, title: "Team Collaboration", description: "Work together in real-time" },
  { icon: BarChart, title: "Analytics", description: "Insights to drive your business" },
]

export function FeatureGrid() {
  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Everything you need
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Powerful features to help you build faster
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Card key={i}>
              <CardHeader>
                <feature.icon className="h-10 w-10 mb-4 text-primary" />
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
```

### Basecoat HTML Output

```html
<section class="py-12 md:py-24">
  <div class="container px-4 md:px-6">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        Everything you need
      </h2>
      <p class="mt-4 text-muted-foreground md:text-xl">
        Powerful features to help you build faster
      </p>
    </div>
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <!-- Feature 1 -->
      <div class="card">
        <div class="card-header">
          <svg class="h-10 w-10 mb-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>
          <h3 class="card-title">Lightning Fast</h3>
          <p class="card-description">Optimized for speed and performance</p>
        </div>
      </div>
      
      <!-- Feature 2 -->
      <div class="card">
        <div class="card-header">
          <svg class="h-10 w-10 mb-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
          <h3 class="card-title">Secure by Default</h3>
          <p class="card-description">Enterprise-grade security built in</p>
        </div>
      </div>
      
      <!-- Feature 3 -->
      <div class="card">
        <div class="card-header">
          <svg class="h-10 w-10 mb-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
          <h3 class="card-title">Mobile First</h3>
          <p class="card-description">Responsive design that works everywhere</p>
        </div>
      </div>
      
      <!-- Feature 4 -->
      <div class="card">
        <div class="card-header">
          <svg class="h-10 w-10 mb-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
          <h3 class="card-title">Cloud Native</h3>
          <p class="card-description">Scale effortlessly with cloud infrastructure</p>
        </div>
      </div>
      
      <!-- Feature 5 -->
      <div class="card">
        <div class="card-header">
          <svg class="h-10 w-10 mb-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          <h3 class="card-title">Team Collaboration</h3>
          <p class="card-description">Work together in real-time</p>
        </div>
      </div>
      
      <!-- Feature 6 -->
      <div class="card">
        <div class="card-header">
          <svg class="h-10 w-10 mb-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>
          <h3 class="card-title">Analytics</h3>
          <p class="card-description">Insights to drive your business</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## Example 4: Login Form with Validation States

### shadcn/React Input

```jsx
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Checkbox } from "@/components/ui/checkbox"
import { AlertCircle, Loader2 } from "lucide-react"

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  return (
    <Card className="w-[400px]">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Sign in</CardTitle>
        <CardDescription>Enter your email and password to access your account</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="name@example.com"
                required
                disabled={isLoading}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <a href="/forgot-password" className="text-sm text-muted-foreground hover:text-primary">
                  Forgot password?
                </a>
              </div>
              <Input 
                id="password" 
                type="password"
                required
                disabled={isLoading}
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember" className="text-sm font-normal">
                Remember me for 30 days
              </Label>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col">
        <Button className="w-full" disabled={isLoading}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Sign in
        </Button>
        <p className="mt-4 text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <a href="/signup" className="text-primary hover:underline">
            Sign up
          </a>
        </p>
      </CardFooter>
    </Card>
  )
}
```

### Basecoat HTML Output

```html
<div class="card w-[400px]">
  <div class="card-header space-y-1">
    <h2 class="card-title text-2xl">Sign in</h2>
    <p class="card-description">Enter your email and password to access your account</p>
  </div>
  <div class="card-content">
    <form>
      <!-- Error Alert (shown conditionally) -->
      <div class="alert alert-destructive mb-4" role="alert" id="error-alert" hidden>
        <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
        <p class="alert-description" id="error-message">Invalid email or password</p>
      </div>
      
      <div class="grid gap-4">
        <div class="grid gap-2">
          <label class="label" for="email">Email</label>
          <input 
            class="input" 
            id="email" 
            type="email" 
            placeholder="name@example.com"
            required
          >
        </div>
        <div class="grid gap-2">
          <div class="flex items-center justify-between">
            <label class="label" for="password">Password</label>
            <a href="/forgot-password" class="text-sm text-muted-foreground hover:text-primary">
              Forgot password?
            </a>
          </div>
          <input 
            class="input" 
            id="password" 
            type="password"
            required
          >
        </div>
        <div class="flex items-center space-x-2">
          <input type="checkbox" class="checkbox" id="remember">
          <label for="remember" class="text-sm font-normal">
            Remember me for 30 days
          </label>
        </div>
      </div>
    </form>
  </div>
  <div class="card-footer flex flex-col">
    <button class="btn btn-primary w-full" id="submit-btn">
      Sign in
    </button>
    <p class="mt-4 text-center text-sm text-muted-foreground">
      Don't have an account?
      <a href="/signup" class="text-primary hover:underline">Sign up</a>
    </p>
  </div>
</div>

<script>
  // Simple form handling for prototype
  document.getElementById('submit-btn').addEventListener('click', function(e) {
    e.preventDefault();
    const btn = this;
    
    // Show loading state
    btn.disabled = true;
    btn.innerHTML = `
      <svg class="mr-2 h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
      Signing in...
    `;
    
    // Simulate API call
    setTimeout(() => {
      btn.disabled = false;
      btn.textContent = 'Sign in';
      // Show error for demo
      document.getElementById('error-alert').hidden = false;
    }, 2000);
  });
</script>
```

---

## Example 5: Footer

### shadcn/React Input

```jsx
import { Separator } from "@/components/ui/separator"

const footerLinks = {
  product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Integrations", href: "/integrations" },
    { label: "Changelog", href: "/changelog" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Cookies", href: "/cookies" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Acme Inc</h3>
            <p className="text-sm text-muted-foreground">
              Building the future of web development.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2025 Acme Inc. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="https://twitter.com" className="text-muted-foreground hover:text-foreground">
              Twitter
            </a>
            <a href="https://github.com" className="text-muted-foreground hover:text-foreground">
              GitHub
            </a>
            <a href="https://linkedin.com" className="text-muted-foreground hover:text-foreground">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
```

### Basecoat HTML Output

```html
<footer class="border-t bg-background">
  <div class="container px-4 py-12 md:px-6">
    <div class="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
      <!-- Brand -->
      <div class="space-y-4">
        <h3 class="text-lg font-semibold">Acme Inc</h3>
        <p class="text-sm text-muted-foreground">
          Building the future of web development.
        </p>
      </div>
      
      <!-- Product Links -->
      <div class="space-y-4">
        <h4 class="text-sm font-semibold">Product</h4>
        <ul class="space-y-2">
          <li><a href="/features" class="text-sm text-muted-foreground hover:text-foreground">Features</a></li>
          <li><a href="/pricing" class="text-sm text-muted-foreground hover:text-foreground">Pricing</a></li>
          <li><a href="/integrations" class="text-sm text-muted-foreground hover:text-foreground">Integrations</a></li>
          <li><a href="/changelog" class="text-sm text-muted-foreground hover:text-foreground">Changelog</a></li>
        </ul>
      </div>
      
      <!-- Company Links -->
      <div class="space-y-4">
        <h4 class="text-sm font-semibold">Company</h4>
        <ul class="space-y-2">
          <li><a href="/about" class="text-sm text-muted-foreground hover:text-foreground">About</a></li>
          <li><a href="/blog" class="text-sm text-muted-foreground hover:text-foreground">Blog</a></li>
          <li><a href="/careers" class="text-sm text-muted-foreground hover:text-foreground">Careers</a></li>
          <li><a href="/contact" class="text-sm text-muted-foreground hover:text-foreground">Contact</a></li>
        </ul>
      </div>
      
      <!-- Legal Links -->
      <div class="space-y-4">
        <h4 class="text-sm font-semibold">Legal</h4>
        <ul class="space-y-2">
          <li><a href="/privacy" class="text-sm text-muted-foreground hover:text-foreground">Privacy</a></li>
          <li><a href="/terms" class="text-sm text-muted-foreground hover:text-foreground">Terms</a></li>
          <li><a href="/cookies" class="text-sm text-muted-foreground hover:text-foreground">Cookies</a></li>
        </ul>
      </div>
    </div>
    
    <hr class="separator my-8">
    
    <div class="flex flex-col items-center justify-between gap-4 sm:flex-row">
      <p class="text-sm text-muted-foreground">
        © 2025 Acme Inc. All rights reserved.
      </p>
      <div class="flex gap-4">
        <a href="https://twitter.com" class="text-muted-foreground hover:text-foreground">Twitter</a>
        <a href="https://github.com" class="text-muted-foreground hover:text-foreground">GitHub</a>
        <a href="https://linkedin.com" class="text-muted-foreground hover:text-foreground">LinkedIn</a>
      </div>
    </div>
  </div>
</footer>
```

---

## Example 6: Pricing Cards with Tabs

### shadcn/React Input

```jsx
import { useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

export function PricingSection() {
  const [billing, setBilling] = useState("monthly")
  
  const plans = [
    {
      name: "Starter",
      monthly: 9,
      yearly: 90,
      features: ["5 Projects", "10GB Storage", "Email Support"],
    },
    {
      name: "Pro",
      monthly: 29,
      yearly: 290,
      popular: true,
      features: ["Unlimited Projects", "100GB Storage", "Priority Support", "Advanced Analytics"],
    },
    {
      name: "Enterprise",
      monthly: 99,
      yearly: 990,
      features: ["Everything in Pro", "Dedicated Account Manager", "Custom Integrations", "SLA"],
    },
  ]

  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Simple, transparent pricing</h2>
          <p className="mt-4 text-muted-foreground">Choose the plan that's right for you</p>
        </div>
        
        <div className="flex justify-center mb-8">
          <Tabs value={billing} onValueChange={setBilling}>
            <TabsList>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="yearly">Yearly (Save 20%)</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name} className={plan.popular ? "border-primary" : ""}>
              <CardHeader>
                {plan.popular && <Badge className="w-fit mb-2">Most Popular</Badge>}
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>
                  <span className="text-3xl font-bold">
                    ${billing === "monthly" ? plan.monthly : plan.yearly}
                  </span>
                  /{billing === "monthly" ? "mo" : "yr"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
```

### Basecoat HTML Output

```html
<section class="py-12 md:py-24">
  <div class="container px-4 md:px-6">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold">Simple, transparent pricing</h2>
      <p class="mt-4 text-muted-foreground">Choose the plan that's right for you</p>
    </div>
    
    <!-- Billing Toggle -->
    <div class="flex justify-center mb-8">
      <div class="tabs" id="billing-tabs" data-default-value="monthly">
        <div class="tabs-list" role="tablist">
          <button class="tabs-trigger" role="tab" data-value="monthly" aria-selected="true">Monthly</button>
          <button class="tabs-trigger" role="tab" data-value="yearly">Yearly (Save 20%)</button>
        </div>
      </div>
    </div>
    
    <!-- Pricing Cards -->
    <div class="grid gap-6 md:grid-cols-3">
      <!-- Starter -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Starter</h3>
          <p class="card-description">
            <span class="text-3xl font-bold price-display" data-monthly="$9" data-yearly="$90">$9</span>
            <span class="billing-period" data-monthly="/mo" data-yearly="/yr">/mo</span>
          </p>
        </div>
        <div class="card-content">
          <ul class="space-y-2">
            <li class="flex items-center gap-2">
              <svg class="h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              <span class="text-sm">5 Projects</span>
            </li>
            <li class="flex items-center gap-2">
              <svg class="h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              <span class="text-sm">10GB Storage</span>
            </li>
            <li class="flex items-center gap-2">
              <svg class="h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              <span class="text-sm">Email Support</span>
            </li>
          </ul>
        </div>
        <div class="card-footer">
          <button class="btn btn-outline w-full">Get Started</button>
        </div>
      </div>
      
      <!-- Pro (Popular) -->
      <div class="card border-primary">
        <div class="card-header">
          <span class="badge w-fit mb-2">Most Popular</span>
          <h3 class="card-title">Pro</h3>
          <p class="card-description">
            <span class="text-3xl font-bold price-display" data-monthly="$29" data-yearly="$290">$29</span>
            <span class="billing-period" data-monthly="/mo" data-yearly="/yr">/mo</span>
          </p>
        </div>
        <div class="card-content">
          <ul class="space-y-2">
            <li class="flex items-center gap-2">
              <svg class="h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              <span class="text-sm">Unlimited Projects</span>
            </li>
            <li class="flex items-center gap-2">
              <svg class="h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              <span class="text-sm">100GB Storage</span>
            </li>
            <li class="flex items-center gap-2">
              <svg class="h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              <span class="text-sm">Priority Support</span>
            </li>
            <li class="flex items-center gap-2">
              <svg class="h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              <span class="text-sm">Advanced Analytics</span>
            </li>
          </ul>
        </div>
        <div class="card-footer">
          <button class="btn btn-primary w-full">Get Started</button>
        </div>
      </div>
      
      <!-- Enterprise -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Enterprise</h3>
          <p class="card-description">
            <span class="text-3xl font-bold price-display" data-monthly="$99" data-yearly="$990">$99</span>
            <span class="billing-period" data-monthly="/mo" data-yearly="/yr">/mo</span>
          </p>
        </div>
        <div class="card-content">
          <ul class="space-y-2">
            <li class="flex items-center gap-2">
              <svg class="h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              <span class="text-sm">Everything in Pro</span>
            </li>
            <li class="flex items-center gap-2">
              <svg class="h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              <span class="text-sm">Dedicated Account Manager</span>
            </li>
            <li class="flex items-center gap-2">
              <svg class="h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              <span class="text-sm">Custom Integrations</span>
            </li>
            <li class="flex items-center gap-2">
              <svg class="h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              <span class="text-sm">SLA</span>
            </li>
          </ul>
        </div>
        <div class="card-footer">
          <button class="btn btn-outline w-full">Get Started</button>
        </div>
      </div>
    </div>
  </div>
</section>

<script src="https://cdn.jsdelivr.net/npm/basecoat-css@latest/dist/tabs.min.js" defer></script>
<script>
  // Handle billing toggle
  document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.getElementById('billing-tabs');
    tabs.addEventListener('click', function(e) {
      if (e.target.matches('.tabs-trigger')) {
        const billing = e.target.dataset.value;
        
        // Update prices
        document.querySelectorAll('.price-display').forEach(el => {
          el.textContent = el.dataset[billing];
        });
        
        // Update periods
        document.querySelectorAll('.billing-period').forEach(el => {
          el.textContent = el.dataset[billing];
        });
      }
    });
  });
</script>
```
