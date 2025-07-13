import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Film, Plus, Users } from "lucide-react"
import Image from "next/image"

export default function ContentDetailPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="relative">
        {/* Background Image */}
        <div className="relative h-[80vh] overflow-hidden">
          <Image src="/placeholder.svg?height=800&width=1400" alt="Bob's Burgers Movie" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

          {/* Content Info */}
          <div className="absolute bottom-0 left-0 p-8 md:p-12 lg:p-16 max-w-3xl">
            <div className="mb-6">
              <div className="text-white text-4xl md:text-6xl font-bold mb-4">THE</div>
              <div className="bg-red-600 text-white text-4xl md:text-6xl font-bold px-4 py-2 inline-block mb-2">
                {"BOB'S BURGERS"}
              </div>
              <div className="bg-white text-black text-4xl md:text-6xl font-bold px-4 py-2 inline-block">MOVIE</div>
            </div>

            {/* Metadata */}
            <div className="flex items-center space-x-4 mb-4 text-white">
              <Badge variant="outline" className="text-white border-white">
                AD
              </Badge>
              <Badge variant="outline" className="text-white border-white">
                CC
              </Badge>
              <span>2020</span>
              <span>•</span>
              <span>1h 42m</span>
            </div>

            <div className="text-white mb-6">
              <span>Mystery, Comedy, Animation</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-6">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                <Play className="mr-2 h-5 w-5" />
                PLAY
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent"
              >
                <Film className="mr-2 h-5 w-5" />
                TRAILER
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent"
              >
                <Plus className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent"
              >
                <Users className="h-5 w-5" />
              </Button>
            </div>

            {/* Description */}
            <p className="text-white text-lg leading-relaxed max-w-2xl">
              A ruptured water main creates an enormous sinkhole right in front of Bob's Burgers, blocking the entrance
              and ruining the Belchers' plans for a successful summer. While Bob and Linda struggle to keep the business
              afloat, the kids try to solve a mystery that could save their family's restaurant. As the dangers mount,
              these underdogs help each other and fight to get back behind the counter.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
