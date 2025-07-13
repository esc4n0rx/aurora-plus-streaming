import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const movies = [
  { id: "1", title: "Jessica Jones", image: "/placeholder.svg?height=300&width=200" },
  { id: "2", title: "Star Wars: The Rise of Skywalker", image: "/placeholder.svg?height=300&width=200" },
  { id: "3", title: "The Book of Boba Fett", image: "/placeholder.svg?height=300&width=200" },
  { id: "4", title: "Defenders", image: "/placeholder.svg?height=300&width=200" },
  { id: "5", title: "She-Hulk: Attorney at Law", image: "/placeholder.svg?height=300&width=200" },
  { id: "6", title: "The Mandalorian", image: "/placeholder.svg?height=300&width=200" },
  { id: "7", title: "Eternals", image: "/placeholder.svg?height=300&width=200" },
  { id: "8", title: "Grey's Anatomy", image: "/placeholder.svg?height=300&width=200" },
  { id: "9", title: "The Orville", image: "/placeholder.svg?height=300&width=200" },
  { id: "10", title: "The Last Jedi", image: "/placeholder.svg?height=300&width=200" },
  { id: "11", title: "Modern Family", image: "/placeholder.svg?height=300&width=200" },
  { id: "12", title: "Dopesick", image: "/placeholder.svg?height=300&width=200" },
  { id: "13", title: "Family Guy", image: "/placeholder.svg?height=300&width=200" },
  { id: "14", title: "Pistol", image: "/placeholder.svg?height=300&width=200" },
  { id: "15", title: "How I Met Your Father", image: "/placeholder.svg?height=300&width=200" },
]

export default function MoviesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Movies</h1>
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
          {movies.map((movie) => (
            <Link key={movie.id} href={`/content/${movie.id}`}>
              <div className="content-card">
                <div className="relative aspect-[2/3]">
                  <Image src={movie.image || "/placeholder.svg"} alt={movie.title} fill className="object-cover" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
