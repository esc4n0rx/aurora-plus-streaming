import Header from "@/components/header"
import HeroCarousel from "@/components/hero-carousel"
import CategoryCards from "@/components/category-cards"
import ContentRow from "@/components/content-row"

const mockRows = {
  "New on Aurora+": [
    { id: "1", title: "Aurora: O Início", image: "/placeholder.jpg", type: "movie" as const },
    { id: "2", title: "Luz do Norte", image: "/placeholder.jpg", type: "movie" as const },
    { id: "3", title: "Horizonte Azul", image: "/placeholder.jpg", type: "movie" as const },
    { id: "4", title: "Estrela Cadente", image: "/placeholder.jpg", type: "movie" as const },
    { id: "5", title: "O Retorno", image: "/placeholder.jpg", type: "movie" as const },
  ],
  "Watch Together": [
    { id: "6", title: "Família Unida", image: "/placeholder-user.jpg", type: "series" as const },
    { id: "7", title: "Amigos para Sempre", image: "/placeholder-user.jpg", type: "series" as const },
    { id: "8", title: "Noite do Filme", image: "/placeholder-user.jpg", type: "series" as const },
    { id: "9", title: "Diversão em Grupo", image: "/placeholder-user.jpg", type: "series" as const },
    { id: "10", title: "Sessão Compartilhada", image: "/placeholder-user.jpg", type: "series" as const },
  ],
  "Trending": [
    { id: "11", title: "Onda Viral", image: "/placeholder-logo.png", type: "movie" as const },
    { id: "12", title: "Explosão Pop", image: "/placeholder-logo.png", type: "movie" as const },
    { id: "13", title: "Fama Instantânea", image: "/placeholder-logo.png", type: "movie" as const },
    { id: "14", title: "Top do Momento", image: "/placeholder-logo.png", type: "movie" as const },
    { id: "15", title: "Hit do Ano", image: "/placeholder-logo.png", type: "movie" as const },
  ],
  "Action and Adventure": [
    { id: "16", title: "Missão Extrema", image: "/placeholder.svg", type: "movie" as const },
    { id: "17", title: "Aventura Sem Fim", image: "/placeholder.svg", type: "movie" as const },
    { id: "18", title: "Heróis do Norte", image: "/placeholder.svg", type: "movie" as const },
    { id: "19", title: "Batalha Final", image: "/placeholder.svg", type: "movie" as const },
    { id: "20", title: "Exploradores", image: "/placeholder.svg", type: "movie" as const },
  ],
  "Popular Movies": [
    { id: "21", title: "O Grande Sucesso", image: "/placeholder-logo.svg", type: "movie" as const },
    { id: "22", title: "Blockbuster", image: "/placeholder-logo.svg", type: "movie" as const },
    { id: "23", title: "Favorito do Público", image: "/placeholder-logo.svg", type: "movie" as const },
    { id: "24", title: "Campeão de Bilheteria", image: "/placeholder-logo.svg", type: "movie" as const },
    { id: "25", title: "Recordista", image: "/placeholder-logo.svg", type: "movie" as const },
  ],
  "Anime Collection": [
    { id: "26", title: "Samurai Aurora", image: "/placeholder-user.jpg", type: "anime" as const },
    { id: "27", title: "Estrela Ninja", image: "/placeholder-user.jpg", type: "anime" as const },
    { id: "28", title: "Guerreiros do Sol", image: "/placeholder-user.jpg", type: "anime" as const },
    { id: "29", title: "A Lenda de Kira", image: "/placeholder-user.jpg", type: "anime" as const },
    { id: "30", title: "Destino Final", image: "/placeholder-user.jpg", type: "anime" as const },
  ],
}

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
          <ContentRow title="New on Aurora+" items={mockRows["New on Aurora+"]} />
          <ContentRow title="Watch Together" items={mockRows["Watch Together"]} />
          <ContentRow title="Trending" items={mockRows["Trending"]} />
          <ContentRow title="Action and Adventure" items={mockRows["Action and Adventure"]} />
          <ContentRow title="Popular Movies" items={mockRows["Popular Movies"]} />
          <ContentRow title="Anime Collection" items={mockRows["Anime Collection"]} />
        </section>
      </main>
    </div>
  )
}
