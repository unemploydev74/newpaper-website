const FOOTER_SECTIONS = [
  {
    heading: "Sections",
    links: ["News", "World", "Education", "Technology", "Opinion"],
  },
  {
    heading: "Company",
    links: ["About us", "Editorial team", "Careers", "Advertise", "Contact"],
  },
  {
    heading: "Legal",
    links: ["Privacy policy", "Terms of use", "Cookie policy", "Accessibility"],
  },
]

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-secondary/50">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <span className="font-serif text-xl font-bold tracking-[-0.01em] text-foreground">
              The Campus Review
            </span>
            <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground">
              Independent reporting on the ideas, technology, and people shaping
              higher education.
            </p>
          </div>

          {FOOTER_SECTIONS.map((section) => (
            <nav key={section.heading} aria-label={section.heading}>
              <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.08em] text-foreground">
                {section.heading}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#top"
                      className="text-[14px] text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-8 text-[13px] text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} The Campus Review. All rights reserved.</p>
          <p>Made with editorial care</p>
        </div>
      </div>
    </footer>
  )
}
