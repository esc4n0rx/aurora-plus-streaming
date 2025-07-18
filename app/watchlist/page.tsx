import Header from "@/components/header"
import Image from "next/image"
import Link from "next/link"

const watchlistItems = [
  { id: "1", title: "The Book of Boba Fett", image: "/placeholder.svg?height=300&width=200" },
  { id: "2", title: "Defenders", image: "/placeholder.svg?height=300&width=200" },
  { id: "3", title: "She-Hulk: Attorney at Law", image: "/placeholder.svg?height=300&width=200" },
  { id: "4", title: "The Mandalorian", image: "/placeholder.svg?height=300&width=200" },
  { id: "5", title: "Eternals", image: "/placeholder.svg?height=300&width=200" },
  { id: "6", title: "Grey's Anatomy", image: "/placeholder.svg?height=300&width=200" },
  { id: "7", title: "The Orville", image: "/placeholder.svg?height=300&width=200" },
  { id: "8", title: "The Last Jedi", image: "/placeholder.svg?height=300&width=200" },
  { id: "9", title: "Modern Family", image: "/placeholder.svg?height=300&width=200" },
  { id: "10", title: "Dopesick", image: "/placeholder.svg?height=300&width=200" },
  { id: "11", title: "Family Guy", image: "/placeholder.svg?height=300&width=200" },
  { id: "12", title: "Pistol", image: "/placeholder.svg?height=300&width=200" },
]

export default function WatchlistPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Watchlist</h1>
        <p className="text-xl text-muted-foreground mb-8">My Movies & Series</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {watchlistItems.map((item) => (
            <Link key={item.id} href={`/content/${item.id}`}>
              <div className="rounded-lg overflow-hidden shadow-lg bg-muted/20 transition-transform duration-200 hover:scale-105 hover:shadow-2xl border border-zinc-800">
                <div className="relative w-full aspect-[16/9] min-h-[110px] max-h-[140px]">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                </div>
                {/* Título opcional abaixo da imagem */}
                {/* <div className="p-2 text-xs text-center text-white truncate">{item.title}</div> */}
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
