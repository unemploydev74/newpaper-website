import { SiteNav } from "@/components/site-nav"
import { Breadcrumb } from "@/components/breadcrumb"
import { ArticleHero } from "@/components/article-hero"
import { ArticleBody } from "@/components/article-body"
import { ArticleSidebar } from "@/components/article-sidebar"
import { NewsletterCta } from "@/components/newsletter-cta"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-dvh bg-background">
      <SiteNav />
      <Breadcrumb />

      <main>
        <ArticleHero />

        <div className="mx-auto mt-12 max-w-6xl px-4 md:px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,680px)_minmax(0,1fr)] lg:gap-16">
            <ArticleBody />
            <ArticleSidebar />
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-6xl px-4 md:px-6">
          <NewsletterCta />
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
