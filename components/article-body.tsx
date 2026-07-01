import Image from "next/image"
import { Share2, Bookmark, Printer, LinkIcon } from "lucide-react"

const TAGS = [
  "Artificial Intelligence",
  "Higher Education",
  "ChatGPT",
  "Academic Integrity",
  "Vietnam",
]

function Hyperlink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      className="font-medium text-primary underline decoration-primary/40 underline-offset-2 transition-colors hover:decoration-primary"
    >
      {children}
    </a>
  )
}

export function ArticleBody() {
  return (
    <article className="min-w-0">
      {/* Intro / lede */}
      <div className="space-y-5 text-[1.125rem] leading-[1.7] text-foreground">
        <p>
          <span className="float-left mr-3 mt-1 font-serif text-[4rem] font-bold leading-[0.8] text-primary">
            H
          </span>
          anoi, late at night, a third-year double-major student in English
          Linguistics and International Communication, Minh Ngoc, stared at a
          blank Word document. She had a final project assignment, and{" "}
          <Hyperlink href="#related">ChatGPT</Hyperlink> blinked on her screen,
          seemingly ready to write it in seconds, yet Minh Ngoc hesitated.
        </p>
        <p>
          That moment of hesitation captures a growing question across
          Vietnamese universities: is AI a tool that supports students&apos;
          creativity, or does it gradually weaken their ability?
        </p>
      </div>

      {/* Section 1 */}
      <h2 className="mt-12 scroll-mt-24 font-serif text-[1.75rem] font-bold leading-[1.2] tracking-[-0.01em] text-foreground md:text-3xl">
        AI as a launchpad, stimulating creativity
      </h2>
      <div className="mt-5 space-y-5 text-base leading-[1.7] text-foreground md:text-lg">
        <p>
          For many students, AI has become an indispensable starting point
          especially when facing a blank page before a deadline. &ldquo;I often
          used the AI to suggest new approaches or search for advanced
          specialized vocabulary to give my writing more depth,&rdquo; Ngoc
          shared.
        </p>
        <p>
          For Ngoc, ChatGPT acts as more than just a writing tool. It is a
          companion that suggests fresh perspectives and helps identify{" "}
          <Hyperlink href="#related">specialized vocabulary</Hyperlink> that
          adds depth to her English writing.
        </p>
        <p>
          When used mindfully, AI does not replace human creativity. Instead, it
          strengthens information synthesis, expands creative possibilities, and
          serves as a catalyst for new ideas rather than a substitute for
          original thinking.
        </p>

      </div>

      {/* Pull quote */}
      <blockquote className="my-10 border-l-[3px] border-primary bg-accent/50 px-8 py-6 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.1)]">
        <p className="text-pretty font-serif text-xl font-medium italic leading-[1.4] tracking-[-0.01em] text-foreground md:text-2xl">
          &ldquo;I truly fear that one day, if I turn off ChatGPT, I will no
          longer know how to voice my own opinions and defend them with
          words.&rdquo;
        </p>
        <cite className="mt-4 block text-sm font-semibold not-italic text-muted-foreground">
          — Minh Ngoc
        </cite>
      </blockquote>

      {/* Section 2 */}
      <h2 className="mt-12 scroll-mt-24 font-serif text-[1.75rem] font-bold leading-[1.2] tracking-[-0.01em] text-foreground md:text-3xl">
        The pitfalls of &ldquo;creative laziness&rdquo;
      </h2>
      <div className="mt-5 space-y-5 text-base leading-[1.7] text-foreground md:text-lg">
        <p>
          However, the line between support and over-reliance is a fine one —
          especially under deadline pressure.
        </p>
        <p>
          &ldquo;I must admit that on some nights, exhausted from overlapping
          deadlines, I was tempted by the most convenient option, simply
          copying the AI-generated structure and outline and filling in the
          content. It saved me a lot of time in the short term,&rdquo; Ngoc
          admitted.
        </p>
        <p>
          During one grading session, Ngoc and several classmates received their
          assignments back flagged by{" "}
          <Hyperlink href="#related">Turnitin</Hyperlink> — an AI-checking tool
          for excessive AI-generated content that surpassed the permitted
          limit.
        </p>
        <p>
          &ldquo;Oh well, at least I have a paper to submit to pass the
          course,&rdquo; she shrugged, telling herself it was fine.
        </p>
        <p>
          The incident sparked a wider alarm across her department, but it also
          raised a harder question: if students regularly outsource their
          thinking to AI, what happens to their ability to think independently?
        </p>
      </div>

      {/* Inline captioned image */}
      <figure className="my-10">
        <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg bg-secondary shadow-[0_4px_24px_-6px_rgba(0,0,0,0.12)]">
          <Image
            src="/educator-portrait.png"
            alt="Ambassador Nguyen Thac Dinh, a seasoned educator, photographed in a university hall"
            fill
            sizes="(max-width: 1024px) 100vw, 720px"
            style={{
              objectFit: 'cover',
              objectPosition: 'top' // 💡 Dòng này sẽ đẩy ảnh xuống, lấy từ đỉnh ảnh trở xuống, không lo bị mất phần trên nữa!
            }}
            className="object-cover"
          />
        </div>
        <figcaption className="mt-3 text-[13px] italic leading-relaxed text-muted-foreground">
          Ambassador Nguyen Thac Dinh, seasoned educator at the Diplomatic
          Academy of Vietnam. (Photo: Provided by subject / Tien Phong)
        </figcaption>
      </figure>

      <div className="space-y-5 text-base leading-[1.7] text-foreground md:text-lg">
        <p>
          Minh Ngoc&apos;s fear is not unfounded, as Nguyen Thac Dinh, ambassador
          and seasoned educator with decades of teaching experience, has
          witnessed the same issue spreading through student work. He identifies
          three warning signs of AI over-reliance:
        </p>
      </div>

      <ul className="mt-5 space-y-3 text-base leading-[1.7] text-foreground md:text-lg">
        {[
          "Essays that are well-structured but lack a personal voice.",
          "Arguments that summarize rather than analyze.",
          "Assignments that are highly similar in style and content.",
        ].map((item) => (
          <li key={item} className="flex gap-3">
            <span
              className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 space-y-5 text-base leading-relaxed text-foreground md:text-lg">
        <p>
          The core issue, he argues, is not the tool but the thinking behind it.
          &ldquo;Creativity is not only about producing new ideas but also about
          struggling with questions, testing possibilities, and learning from
          mistakes,&rdquo; he emphasized.
        </p>
      </div>

      {/* Section 3 */}
      <h2 className="mt-12 scroll-mt-24 font-serif text-[1.75rem] font-bold leading-[1.2] tracking-[-0.01em] text-foreground md:text-3xl">
        Transforming the classroom to awaken independent thinking
      </h2>
      <div className="mt-5 space-y-5 text-base leading-[1.7] text-foreground md:text-lg">
        <p>
          If a student simply accepts AI&apos;s output without critical
          engagement or verification, he warns, the machine will simultaneously
          replace the brain. He proposes three shifts educators can make:
        </p>
      </div>

      <ol className="mt-5 space-y-5 text-base leading-[1.7] text-foreground md:text-lg">
        {[
          {
            h: "Redesign assignments",
            b: "so AI cannot simply complete them, requiring students to apply concepts to real-world scenarios or critically analyze AI-generated content.",
          },
          {
            h: "Emphasize human-centric evaluation",
            b: "which reveals how well students actually understand their own arguments.",
          },
          {
            h: "Foster a culture of transparency",
            b: "about AI use, so the technology becomes a declared tool rather than a hidden crutch.",
          },
        ].map((item, i) => (
          <li key={item.h} className="flex gap-4">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary">
            </span>
            <span>
              <strong className="font-semibold text-foreground">
                {item.h}
              </strong>{" "}
              {item.b}
            </span>
          </li>
        ))}
      </ol>

      <div className="mt-5 space-y-5 text-base leading-relaxed text-foreground md:text-lg">
        <p>
          The goal, he stresses, is to help students use AI to learn faster and
          think more deeply not to let machines do the thinking for them.
        </p>
      </div>

      {/* Closing image */}
      <figure className="my-10">
        <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg bg-secondary shadow-[0_4px_24px_-6px_rgba(0,0,0,0.12)]">
          <Image
            src="/student-brainstorm.png"
            alt="Minh Ngoc writing notes by hand beside an open laptop while brainstorming her final assignment"
            fill
            sizes="(max-width: 1024px) 100vw, 720px"
            className="object-cover"
          />
        </div>
        <figcaption className="mt-3 text-[13px] italic leading-relaxed text-muted-foreground">
          Minh Ngoc uses AI to brainstorm her final assignment. (Photo: Truc
          Ngoc)
        </figcaption>
      </figure>

      <div className="mt-5 space-y-5 text-base leading-[1.7] text-foreground md:text-lg">
        <p>
          Back in her room, as the clock crept toward 3 a.m., Minh Ngoc made her
          choice: she closed Gemini AI and started typing in her own words and
          voice.
        </p>
        <p className="leading-[1.4] tracking-[-0.01em] ">
          AI holds up a mirror that reflects what students could produce but
          that mirror cannot think, feel, or brainstorm an idea in their place.
        </p>
      </div>

      {/* Tags */}
      <div className="mt-10 border-t border-border pt-8">
        <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          Topics
        </h3>
        <ul className="flex flex-wrap gap-2">
          {TAGS.map((tag) => (
            <li key={tag}>
              <a
                href="#related"
                className="inline-block rounded-full border border-border bg-card px-3.5 py-1.5 text-[13px] text-foreground transition-all hover:border-primary hover:text-primary hover:scale-[1.02]"
              >
                #{tag}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Share */}
      <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-border pt-8">
        <span className="text-sm font-semibold text-foreground">
          Share this story
        </span>
        <div className="flex items-center gap-2">
          {[
            { Icon: Share2, label: "Share" },
            { Icon: Bookmark, label: "Save article" },
            { Icon: Printer, label: "Print" },
            { Icon: LinkIcon, label: "Copy link" },
          ].map(({ Icon, label }) => (
            <button
              key={label}
              type="button"
              aria-label={label}
              className="flex size-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:border-primary hover:text-primary hover:scale-110 active:scale-95"
            >
              <Icon className="size-4" />
            </button>
          ))}
        </div>
      </div>
    </article>
  )
}
