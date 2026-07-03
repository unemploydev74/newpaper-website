import Image from "next/image"
import { Clock, Calendar } from "lucide-react"

export function ArticleHero() {
  return (
    <header id="article" className="mx-auto max-w-6xl px-4 md:px-6">
      <div className="mb-4">
        <span className="inline-block bg-primary px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-primary-foreground">
          Education &amp; Technology
        </span>
      </div>

      <h1 className="max-w-4xl text-balance font-serif text-[2.75rem] font-bold leading-[1.05] tracking-[-0.02em] text-foreground md:text-6xl lg:text-[4.5rem]">
        Does AI spark student creativity or limit it?
      </h1>

      <p className="mt-6 max-w-3xl text-pretty text-[1.125rem] font-medium leading-[1.6] text-muted-foreground md:text-xl">
        Artificial Intelligence is reshaping how university students think,
        write and create. But does it inspire deeper thinking, or does it
        gradually replace it?
      </p>

      <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-border py-4 text-sm text-muted-foreground">
        <span className="font-semibold text-foreground">By Từ Linh</span>
        <span className="flex items-center gap-1.5">
          <Calendar className="size-4" aria-hidden="true" />
          July 6, 2026
        </span>
        <span className="flex items-center gap-1.5">
          <Clock className="size-4" aria-hidden="true" />5 min read
        </span>
      </div>

      <figure className="mt-8">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-secondary shadow-[0_4px_24px_-6px_rgba(0,0,0,0.12)]">
          <Image
            src="/hero-ai-student.png"
            alt="A university student sitting alone at night, face lit by a laptop screen, hesitating before a blank document"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
        </div>
        <figcaption className="mt-3 text-[13px] italic leading-relaxed text-muted-foreground">
          Minh Ngoc, a dual major student at DAV. (Photo courtesy of Minh Ngoc) 
        </figcaption>
      </figure>
    </header>
  )
}
