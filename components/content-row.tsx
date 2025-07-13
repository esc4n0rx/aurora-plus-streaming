"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ContentItem {
  id: string
  title: string
  image: string
  type: "movie" | "series" | "anime"
}

interface ContentRowProps {
  title: string
  items: ContentItem[]
}

const sampleContent: ContentItem[] = [
  { id: "1", title: "Jessica Jones", image: "/placeholder.svg?height=300&width=200", type: "series" },
  { id: "2", title: "The Mandalorian", image: "/placeholder.svg?height=300&width=200", type: "series" },
  { id: "3", title: "The Orville", image: "/placeholder.svg?height=300&width=200", type: "series" },
  { id: "4", title: "Pistol", image: "/placeholder.svg?height=300&width=200", type: "series" },
  { id: "5", title: "Defenders", image: "/placeholder.svg?height=300&width=200", type: "series" },
  { id: "6", title: "Star Wars: Clone Wars", image: "/placeholder.svg?height=300&width=200", type: "anime" },
  { id: "7", title: "Eternals", image: "/placeholder.svg?height=300&width=200", type: "movie" },
  { id: "8", title: "Modern Family", image: "/placeholder.svg?height=300&width=200", type: "series" },
]

export default function ContentRow({ title, items = sampleContent }: ContentRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl md:text-2xl font-bold text-white">{title}</h2>
        <div className="flex space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scroll("left")}
            className="bg-black/50 hover:bg-black/70 text-white"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scroll("right")}
            className="bg-black/50 hover:bg-black/70 text-white"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div ref={scrollRef} className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4">
        {items.map((item) => (
          <Link key={item.id} href={`/content/${item.id}`} className="flex-shrink-0 w-40 md:w-48 lg:w-56">
            <div className="content-card">
              <div className="relative aspect-[2/3]">
                <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
