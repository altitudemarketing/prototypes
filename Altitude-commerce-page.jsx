"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Search,
  ShoppingCart,
  ChevronDown,
  Menu,
  Truck,
  RefreshCcw,
  ShieldCheck,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

const NAV_LINKS = [
  { label: "Women", href: "/women" },
  { label: "Men", href: "/men" },
  { label: "Kids", href: "/kids" },
  { label: "About Us", href: "/about" },
  { label: "Store Locator", href: "/stores" },
]

const CATEGORY_LINKS = [
  { label: "All", href: "#", active: true },
  { label: "T-Shirts", href: "#", active: false },
  { label: "Shirts", href: "#", active: false },
  { label: "Hoodies", href: "#", active: false },
  { label: "Jackets", href: "#", active: false },
  { label: "Sweaters", href: "#", active: false },
]

const FILTER_SECTIONS = [
  {
    id: "brand",
    title: "Brand (2)",
    options: [
      { id: "nike", label: "Nike", checked: true },
      { id: "adidas", label: "Adidas", checked: true },
      { id: "puma", label: "Puma", checked: false },
      { id: "reebok", label: "Reebok", checked: false },
      { id: "new-balance", label: "New Balance", checked: false },
    ],
  },
  {
    id: "material",
    title: "Material (1)",
    options: [
      { id: "cotton", label: "Cotton", checked: true },
      { id: "polyester", label: "Polyester", checked: false },
      { id: "wool", label: "Wool", checked: false },
      { id: "linen", label: "Linen", checked: false },
    ],
  },
  {
    id: "fit",
    title: "Fit (1)",
    options: [
      { id: "regular", label: "Regular Fit", checked: true },
      { id: "slim", label: "Slim Fit", checked: false },
      { id: "relaxed", label: "Relaxed Fit", checked: false },
      { id: "oversized", label: "Oversized", checked: false },
    ],
  },
  {
    id: "price",
    title: "Price Range (1)",
    options: [
      { id: "under-50", label: "Under $50", checked: true },
      { id: "50-100", label: "$50 - $100", checked: false },
      { id: "100-150", label: "$100 - $150", checked: false },
      { id: "over-150", label: "Over $150", checked: false },
    ],
  },
  {
    id: "color",
    title: "Color (1)",
    options: [
      { id: "black", label: "Black", checked: true },
      { id: "white", label: "White", checked: false },
      { id: "red", label: "Red", checked: false },
      { id: "blue", label: "Blue", checked: false },
      { id: "green", label: "Green", checked: false },
      { id: "yellow", label: "Yellow", checked: false },
    ],
  },
  {
    id: "size",
    title: "Size",
    options: [
      { id: "xxs", label: "XXS", checked: false },
      { id: "xs", label: "XS", checked: false },
      { id: "s", label: "S", checked: false },
      { id: "m", label: "M", checked: false },
      { id: "l", label: "L", checked: false },
      { id: "xl", label: "XL", checked: false },
      { id: "xxl", label: "XXL", checked: false },
      { id: "xxxl", label: "XXXL", checked: false },
    ],
  },
]

const PRODUCTS = [
  {
    id: 1,
    category: "Shirts",
    title: "Classic White Shirt",
    description:
      "Crisp cotton poplin featuring a modern slim fit and a reinforced collar.",
    price: "$49.99",
    originalPrice: "$69.99",
    badge: "Best seller",
    image: "https://ui.shadcn.com/placeholder.svg",
  },
  {
    id: 2,
    category: "Resort Wear",
    title: "Resort T-Shirt",
    description:
      "Breathable linen blend with relaxed sleeves and coconut buttons.",
    price: "$84.00",
    originalPrice: "$96.00",
    badge: "New",
    image: "https://ui.shadcn.com/placeholder.svg",
  },
  {
    id: 3,
    category: "Outerwear",
    title: "Black Hoodie",
    description:
      "Structured shoulders, sustainable lining, and tonal horn buttons.",
    price: "$189.00",
    originalPrice: "$219.00",
    image: "https://ui.shadcn.com/placeholder.svg",
  },
  {
    id: 4,
    category: "Skirts",
    title: "Slim Fit Denim Jeans",
    description:
      "Soft satin pleats with an elastic comfort waistband and full lining.",
    price: "$98.00",
    originalPrice: "$128.00",
    image: "https://ui.shadcn.com/placeholder.svg",
  },
  {
    id: 5,
    category: "Essentials",
    title: "Cotton Long-Sleeve Shirt",
    description:
      "Bias-cut silk charmeuse with adjustable straps and a luxe sheen.",
    price: "$59.00",
    originalPrice: "$79.00",
    badge: "Limited",
    image: "https://ui.shadcn.com/placeholder.svg",
  },
  {
    id: 6,
    category: "Outerwear",
    title: "Black Classy Jacket",
    description:
      "Vintage-inspired wash with a raw hem and brushed nickel hardware.",
    price: "$128.00",
    originalPrice: "$148.00",
    image: "https://ui.shadcn.com/placeholder.svg",
  },
  {
    id: 7,
    category: "Knits",
    title: "Pajamas Cute Rabbit",
    description:
      "Ultra-soft viscose knit featuring an open collar and contrast tipping.",
    price: "$74.00",
    originalPrice: "$94.00",
    image: "https://ui.shadcn.com/placeholder.svg",
  },
  {
    id: 8,
    category: "Essentials",
    title: "Sports Bra",
    description:
      "Second-skin modal blend with a high crew neckline and longline hem.",
    price: "$32.00",
    originalPrice: "$42.00",
    image: "https://ui.shadcn.com/placeholder.svg",
  },
  {
    id: 9,
    category: "Lounge",
    title: "Gray Hat",
    description:
      "Loopback French terry with a double-lined hood and tonal drawcords.",
    price: "$88.00",
    originalPrice: "$110.00",
    image: "https://ui.shadcn.com/placeholder.svg",
  },
]

const INCENTIVES = [
  {
    icon: Truck,
    title: "Free 2-day shipping",
    description:
      "Complimentary express shipping on every order over $75, anywhere in the continental US.",
  },
  {
    icon: RefreshCcw,
    title: "30-day free returns",
    description:
      "Send items back within 30 days for a fast refund with no restocking fees.",
  },
  {
    icon: ShieldCheck,
    title: "Secure checkout",
    description:
      "256-bit SSL encryption on every purchase keeps your payment info safe.",
  },
]

const FOOTER_COLUMNS = [
  {
    title: "Shop",
    links: [
      { label: "Women's Collection", href: "#" },
      { label: "Men's Collection", href: "#" },
      { label: "Accessories", href: "#" },
      { label: "New Arrivals", href: "#" },
    ],
  },
  {
    title: "Customer Service",
    links: [
      { label: "Shipping & Returns", href: "#" },
      { label: "Size Guide", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Contact Us", href: "#" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Our Story", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Sustainability", href: "#" },
      { label: "Press", href: "#" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Newsletter", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "Facebook", href: "#" },
      { label: "Twitter", href: "#" },
    ],
  },
]

const BOTTOM_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookies Settings", href: "#" },
]

function FiltersContent() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-foreground">Filters (5)</h2>
          <Button variant="secondary" size="sm">
            Clear all
          </Button>
        </div>
        <InputGroup>
          <InputGroupAddon>
            <Search className="text-muted-foreground" />
          </InputGroupAddon>
          <InputGroupInput placeholder="Search filters" />
        </InputGroup>
        <div className="flex flex-col gap-2">
          {CATEGORY_LINKS.map((link) => (
            <Button
              key={link.label}
              variant="link"
              className={`justify-start px-0 text-base ${
                link.active ? "text-primary" : "text-muted-foreground"
              }`}
              asChild
            >
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </div>
      </div>
      <Separator />
      {FILTER_SECTIONS.map((section) => (
        <Collapsible key={section.id} defaultOpen>
          <CollapsibleTrigger className="flex w-full items-center justify-between pb-6">
            <span className="text-base font-semibold text-foreground">
              {section.title}
            </span>
            <ChevronDown className="size-5 text-muted-foreground transition-transform duration-200 [[data-state=open]>&]:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="flex flex-col gap-3 pb-6">
              {section.options.map((option) => (
                <div key={option.id} className="flex items-center gap-2">
                  <Checkbox
                    id={`${section.id}-${option.id}`}
                    defaultChecked={option.checked}
                  />
                  <Label
                    htmlFor={`${section.id}-${option.id}`}
                    className="text-sm font-medium"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  )
}

interface CategoryPageProps {
  categoryName?: string
  cartCount?: number
}

export default function CategoryPage({
  categoryName = "Women's Wear",
  cartCount = 0,
}: CategoryPageProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header>
        <div className="bg-primary py-3">
          <div className="mx-auto flex max-w-7xl items-center justify-center px-6">
            <p className="text-center text-sm font-medium text-primary-foreground">
              Free shipping on orders over $75
            </p>
          </div>
        </div>
        <div className="border-b bg-background py-4">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
            <div className="flex items-center gap-8">
              <Link href="/" className="shrink-0">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
                  alt="Logo"
                  width={28}
                  height={28}
                  className="dark:invert"
                />
              </Link>
              <nav className="hidden items-center gap-2 lg:flex">
                {NAV_LINKS.map((link) => (
                  <Button key={link.label} variant="ghost" asChild>
                    <Link href={link.href}>{link.label}</Link>
                  </Button>
                ))}
              </nav>
            </div>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" aria-label="Search">
                <Search />
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/cart">
                  <ShoppingCart />
                  <span>{cartCount}</span>
                </Link>
              </Button>
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden"
                    aria-label="Open menu"
                  >
                    <Menu />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="p-4">
                  <nav className="mt-8 flex flex-col gap-2">
                    {NAV_LINKS.map((link) => (
                      <Button
                        key={link.label}
                        variant="ghost"
                        className="justify-start"
                        asChild
                      >
                        <Link href={link.href}>{link.label}</Link>
                      </Button>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 bg-background py-12 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <h1 className="text-3xl font-semibold tracking-tight text-foreground lg:text-5xl">
                {categoryName}
              </h1>
              <div className="flex items-center gap-4">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="lg:hidden">
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-full max-w-xs overflow-y-auto p-4">
                    <FiltersContent />
                  </SheetContent>
                </Sheet>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      Name (A-Z)
                      <ChevronDown />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Name (A-Z)</DropdownMenuItem>
                    <DropdownMenuItem>Name (Z-A)</DropdownMenuItem>
                    <DropdownMenuItem>Price (Low to High)</DropdownMenuItem>
                    <DropdownMenuItem>Price (High to Low)</DropdownMenuItem>
                    <DropdownMenuItem>Newest First</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            <div className="flex gap-10">
              <aside className="hidden w-80 shrink-0 lg:block">
                <FiltersContent />
              </aside>

              <div className="flex-1">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {PRODUCTS.map((product) => (
                    <Link
                      key={product.id}
                      href={`/product/${product.id}`}
                      className="group flex flex-col gap-4"
                    >
                      <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-muted">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        {product.badge && (
                          <Badge className="absolute left-4 top-4">
                            {product.badge}
                          </Badge>
                        )}
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-1">
                          <span className="text-sm text-muted-foreground">
                            {product.category}
                          </span>
                          <h3 className="text-sm font-medium text-card-foreground">
                            {product.title}
                          </h3>
                          <p className="line-clamp-2 text-sm text-muted-foreground">
                            {product.description}
                          </p>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-lg font-medium text-card-foreground">
                            {product.price}
                          </span>
                          <span className="text-lg text-muted-foreground line-through">
                            {product.originalPrice}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="bg-muted py-12 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {INCENTIVES.map((incentive) => (
              <div key={incentive.title} className="flex gap-6">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-card shadow-sm">
                  <incentive.icon className="size-5 text-foreground" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-medium text-card-foreground">
                    {incentive.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {incentive.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t bg-background py-12 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-16">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              <div>
                <Link href="/">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
                    alt="Logo"
                    width={28}
                    height={28}
                    className="dark:invert"
                  />
                </Link>
              </div>
              {FOOTER_COLUMNS.map((column) => (
                <div key={column.title} className="flex flex-col gap-4">
                  <h4 className="font-medium text-foreground">{column.title}</h4>
                  <div className="flex flex-col gap-4">
                    {column.links.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <Separator />
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <p className="text-sm text-muted-foreground">
                Copyright © 2025 shadcndesign.com. All rights reserved.
              </p>
              <div className="flex flex-wrap gap-6 sm:gap-8">
                {BOTTOM_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
