import { ChevronRight } from "lucide-react"

const CRUMBS = [
  { label: "Home", href: "#top" },
  { label: "Education", href: "#top" },
  { label: "Analysis", href: "#top" },
]

export function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-4 py-4 md:px-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-[13px] font-medium text-muted-foreground">
        {CRUMBS.map((crumb) => (
          <li key={crumb.label} className="flex items-center gap-1.5">
            <a href={crumb.href} className="transition-colors hover:text-foreground">
              {crumb.label}
            </a>
            <ChevronRight className="size-3.5" aria-hidden="true" />
          </li>
        ))}
        <li className="text-foreground" aria-current="page">
          Does AI spark student creativity or limit it?
        </li>
      </ol>
    </nav>
  )
}
