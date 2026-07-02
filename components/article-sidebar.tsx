import Image from "next/image"
import { TrendingUp } from "lucide-react"

const RELATED = [
  {
    title: "Mental health care for Vietnam’s young generation needs improvements ",
    category: "HEALTH",
    img: "/growing-pressure.png",
    href:"https://shorturl.at/4uiIP"
  },
  {
    title: "UNICEF hails Vietnam’s public school tuition waiver policy as investment in future",
    category: "SOCIETY",
    img: "/society.png",
    href:"https://shorturl.at/ZkwWO"
  },
  {
    title: "Vietnam’s culture development in digital era",
    category: "CULTURE-SPORTS",
    img: "/cultures.png" ,
    href:"https://shorturl.at/F7A7p"
  },
]

const TRENDING = [
  "AI in higher education",
  "Academic integrity",
  "Prompt literacy",
  "Digital wellbeing",
  "Future of work",
]

export function ArticleSidebar() {
  return (
    <aside
      id="related"
      aria-label="Related content"
      className="flex flex-col gap-8"
    >
      {/* Related articles */}
      <section className="rounded-lg border border-border bg-card p-6 shadow-[0_2px_16px_-4px_rgba(0,0,0,0.08)]">
        <h2 className="mb-5 border-b border-border pb-3 font-serif text-lg font-bold tracking-[-0.01em] text-foreground">
          Related stories
        </h2>
        <ul className="flex flex-col gap-5">
          {RELATED.map((item) => (
            <li key={item.title}>
              <a href={item.href} className="group flex gap-3">
                <div className="relative size-20 shrink-0 overflow-hidden rounded bg-secondary">
                  <Image
                    src={item.img || "/placeholder.svg"}
                    alt=""
                    fill
                    sizes="80px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="min-w-0 flex flex-col justify-center">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-primary">
                    {item.category}
                  </span>
                  <p className="mt-1 text-pretty text-sm font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                    {item.title}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Trending topics */}
      <section className="rounded-lg border border-border bg-card p-6 shadow-[0_2px_16px_-4px_rgba(0,0,0,0.08)]">
        <h2 className="mb-5 flex items-center gap-2 border-b border-border pb-3 font-serif text-lg font-bold tracking-[-0.01em] text-foreground">
          <TrendingUp className="size-4 text-primary" aria-hidden="true" />
          Trending topics
        </h2>
        <ul className="flex flex-wrap gap-2">
          {TRENDING.map((topic) => (
            <li key={topic}>
              <a
                href="#article"
                className="inline-block rounded-full bg-secondary px-3.5 py-1.5 text-[13px] font-medium text-secondary-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:scale-[1.02]"
              >
                #{topic}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  )
}
