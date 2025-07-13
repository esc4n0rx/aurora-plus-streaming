import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const animes = [
  { id: "1", title: "Star Wars: Clone Wars", image: "/placeholder.svg?height=300&width=200" },
  { id: "2", title: "Attack on Titan", image: "/placeholder.svg?height=300&width=200" },
  { id: "3", title: "Demon Slayer", image: "/placeholder.svg?height=300&width=200" },
  { id: "4", title: "One Piece", image: "/placeholder.svg?height=300&width=200" },
  { id: "5", title: "Naruto", image: "/placeholder.svg?height=300&width=200" },
  { id: "6", title: "Dragon Ball Z", image: "/placeholder.svg?height=300&width=200" },
  { id: "7", title: "My Hero Academia", image: "/placeholder.svg?height=300&width=200" },
  { id: "8", title: "Death Note", image: "/placeholder.svg?height=300&width=200" },
  { id: "9", title: "Spirited Away", image: "/placeholder.svg?height=300&width=200" },
  { id: "10", title: "Princess Mononoke", image: "/placeholder.svg?height=300&width=200" },
]

export default function AnimesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Animes</h1>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" className="bg-muted/50">
                Featured
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Featured</DropdownMenuItem>
              <DropdownMenuItem>A-Z</DropdownMenuItem>
              <DropdownMenuItem>Z-A</DropdownMenuItem>
              <DropdownMenuItem>Release Date</DropdownMenuItem>
              <DropdownMenuItem>Most Popular</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {animes.map((anime) => (
            <Link key={anime.id} href={`/content/${anime.id}`}>
              <div className="content-card">
                <div className="relative aspect-[2/3]">
                  <Image src={anime.image || "/placeholder.svg"} alt={anime.title} fill className="object-cover" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
