import Image from "next/image"

const categories = [
  { name: "Action", image: "/placeholder.svg?height=200&width=300", color: "from-red-600 to-red-800" },
  { name: "Comedy", image: "/placeholder.svg?height=200&width=300", color: "from-yellow-600 to-yellow-800" },
  { name: "Romance", image: "/placeholder.svg?height=200&width=300", color: "from-pink-600 to-pink-800" },
  { name: "Horror", image: "/placeholder.svg?height=200&width=300", color: "from-purple-600 to-purple-800" },
  { name: "Adventure", image: "/placeholder.svg?height=200&width=300", color: "from-green-600 to-green-800" },
  { name: "Documentaries", image: "/placeholder.svg?height=200&width=300", color: "from-blue-600 to-blue-800" },
]

export default function CategoryCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
      {categories.map((category) => (
        <div key={category.name} className="category-card group">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={category.image || "/placeholder.svg"}
              alt={category.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-80`} />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-lg md:text-xl font-bold text-center px-2">{category.name}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
