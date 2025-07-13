"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { HeroSlide } from "@/lib/content"

interface HeroCarouselProps {
  slides?: HeroSlide[]
}

const defaultSlides: HeroSlide[] = [
  {
    id: 1,
    title: "SHARKS COLLECTION",
    subtitle: "National Geographic",
    image: "/placeholder.svg?height=600&width=1200",
    description: "Dive deep into the world of sharks with this incredible collection.",
  },
  {
    id: 2,
    title: "SPACE ODYSSEY",
    subtitle: "Aurora+ Original",
    image: "/placeholder.svg?height=600&width=1200",
    description: "Journey through the cosmos in this epic space adventure.",
  },
  {
    id: 3,
    title: "MYSTERY MANOR",
    subtitle: "Thriller Series",
    image: "/placeholder.svg?height=600&width=1200",
    description: "Uncover dark secrets in this gripping mystery series.",
  },
]

export default function HeroCarousel({ slides }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [heroSlides, setHeroSlides] = useState<HeroSlide[]>(slides || defaultSlides)
  const [isLoading, setIsLoading] = useState(!slides)

  useEffect(() => {
    if (!slides) {
      fetchHeroSlides()
    }
  }, [slides])

  const fetchHeroSlides = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('/api/movies/popular')
      const data = await response.json()
      
      if (data.success && data.data.length > 0) {
        const movieSlides = data.data.map((movie: any) => ({
          id: movie.id,
          title: movie.title,
          subtitle: `Avaliação: ${movie.rating.toFixed(1)}/10`,
          image: movie.backdrop || '/placeholder.svg?height=600&width=1200',
          description: movie.description || 'Descrição não disponível',
        }))
        setHeroSlides(movieSlides)
      }
    } catch (error) {
      console.error('Erro ao buscar slides do hero:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (heroSlides.length === 0) return
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [heroSlides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  if (isLoading) {
    return (
      <div className="hero-carousel">
        <div className="relative w-full h-[600px] bg-gray-900 animate-pulse">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-lg">Carregando...</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="hero-carousel group">
      <div className="relative w-full h-full">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12 lg:p-16 text-white max-w-2xl">
              <p className="text-sm md:text-base text-yellow-400 font-semibold mb-2">{slide.subtitle}</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-wider">{slide.title}</h1>
              <p className="text-lg md:text-xl mb-6 text-gray-200 line-clamp-3">{slide.description}</p>
              <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                <Play className="mr-2 h-5 w-5" />
                Assistir Agora
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}
