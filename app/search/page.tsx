"use client"

import { useState } from "react"
import Header from "@/components/header"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const mostSearched = [
  { id: "1", title: "Star Wars: The Rise of Skywalker", image: "/placeholder.svg?height=300&width=200" },
  { id: "2", title: "The Book of Boba Fett", image: "/placeholder.svg?height=300&width=200" },
  { id: "3", title: "Defenders", image: "/placeholder.svg?height=300&width=200" },
  { id: "4", title: "She-Hulk: Attorney at Law", image: "/placeholder.svg?height=300&width=200" },
  { id: "5", title: "The Mandalorian", image: "/placeholder.svg?height=300&width=200" },
  { id: "6", title: "Eternals", image: "/placeholder.svg?height=300&width=200" },
  { id: "7", title: "Grey's Anatomy", image: "/placeholder.svg?height=300&width=200" },
  { id: "8", title: "The Orville", image: "/placeholder.svg?height=300&width=200" },
  { id: "9", title: "The Last Jedi", image: "/placeholder.svg?height=300&width=200" },
  { id: "10", title: "Modern Family", image: "/placeholder.svg?height=300&width=200" },
]

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Search Input */}
        <div className="relative max-w-2xl mx-auto mb-12">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search by title, character, or genre"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 h-16 text-lg bg-muted/50 border-0 rounded-2xl focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Explore Section */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Explore</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {mostSearched.map((item) => (
              <Link key={item.id} href={`/content/${item.id}`}>
                <div className="content-card">
                  <div className="relative aspect-[2/3]">
                    <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
