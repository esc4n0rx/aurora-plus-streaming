import Header from "@/components/header"
import HeroCarousel from "@/components/hero-carousel"
import CategoryCards from "@/components/category-cards"
import ContentRow from "@/components/content-row"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Hero Carousel */}
        <HeroCarousel />

        {/* Category Cards */}
        <section>
          <CategoryCards />
        </section>

        {/* Content Rows */}
        <section className="space-y-12">
          <ContentRow title="New on Aurora+" />
          <ContentRow title="Watch Together" />
          <ContentRow title="Trending" />
          <ContentRow title="Action and Adventure" />
          <ContentRow title="Popular Movies" />
          <ContentRow title="Anime Collection" />
        </section>
      </main>
    </div>
  )
}
