"use client"

import { useState } from "react"
import { Search, Menu, X } from "lucide-react"

const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "News", href: "#top" },
  { label: "World", href: "#top" },
  { label: "Education", href: "#article" },
  { label: "Technology", href: "#article" },
  { label: "Opinion", href: "#related" },
]

export function SiteNav() {
  const [open, setOpen] = useState(false)

  return (
    <header
      id="top"
      className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 md:px-6">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="rounded-md p-1.5 text-foreground transition-colors hover:bg-secondary md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
          <a href="#top" className="flex items-baseline gap-1.5 transition-opacity hover:opacity-75">
            <span className="font-serif text-xl font-bold tracking-[-0.01em] text-foreground md:text-2xl">
               The Teamwork Journal 
            </span>
          </a>
        </div>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[13px] font-semibold uppercase tracking-[0.06em] text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <label className="relative hidden items-center sm:flex">
            <Search className="pointer-events-none absolute left-3 size-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search articles"
              className="w-40 rounded-full border border-border bg-card py-1.5 pl-9 pr-3 text-sm text-foreground outline-none transition-all focus:border-primary focus:w-52 lg:w-52"
              aria-label="Search articles"
            />
          </label>
          <button
            type="button"
            className="rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.02] hover:shadow-md active:scale-[0.98]"
          >
            Subscribe
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="border-t border-border bg-background md:hidden"
        >
          <ul className="flex flex-col px-4 py-2">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm font-semibold uppercase tracking-wide text-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
