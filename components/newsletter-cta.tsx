"use client"

import { useState } from "react"
import { Mail, CheckCircle2 } from "lucide-react"

export function NewsletterCta() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <section
      aria-label="Newsletter signup"
      className="relative overflow-hidden rounded-xl bg-primary px-6 py-10 text-primary-foreground shadow-[0_8px_32px_-8px_rgba(0,0,0,0.2)] md:px-12 md:py-14"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/newsletter/1920/1080)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-primary/95 backdrop-blur-sm"></div>
      <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
        <span className="mb-4 flex items-center gap-2 rounded-full bg-primary-foreground/20 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] backdrop-blur-sm">
          <Mail className="size-3.5" aria-hidden="true" />
          Newsletter
        </span>
        <h2 className="text-balance font-serif text-3xl font-bold tracking-[-0.01em] md:text-4xl">
          Get stories that matter
        </h2>
        <p className="mt-3 text-pretty text-[15px] leading-relaxed text-primary-foreground/90 md:text-base">
          Sharp reporting on education and technology, delivered weekly. No spam, unsubscribe anytime.
        </p>

        {submitted ? (
          <p className="mt-8 flex items-center gap-2 font-semibold">
            <CheckCircle2 className="size-5" aria-hidden="true" />
            Thanks, you&apos;re on the list
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full flex-1 rounded-lg border-0 bg-primary-foreground px-4 py-3 text-sm text-foreground shadow-sm outline-none ring-1 ring-primary-foreground/20 placeholder:text-muted-foreground focus:ring-2 focus:ring-primary-foreground/40"
            />
            <button
              type="submit"
              className="rounded-lg bg-foreground px-6 py-3 text-sm font-bold text-background shadow-md transition-all hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
