export interface Movie {
  id: number
  title: string
  description: string
  backdrop: string | null
  poster: string | null
  rating: number
  release_date: string
  genres: number[]
}

export interface HeroSlide {
  id: number
  title: string
  subtitle: string
  image: string
  description: string
}

export async function getPopularMovies(): Promise<Movie[]> {
  const bearerToken = process.env.TMDB_BEARER_TOKEN
  
  if (!bearerToken) {
    console.error('TMDB_BEARER_TOKEN não encontrado')
    return []
  }

  try {
    const url = `https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1`
    const response = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${bearerToken}`,
      },
      next: { revalidate: 60 },
    })

    if (!response.ok) {
      throw new Error(`Erro na API: ${response.status}`)
    }

    const data = await response.json()
    const movies = (data.results || []).slice(0, 5).map((movie: any) => ({
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      backdrop: movie.backdrop_path ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}` : null,
      poster: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : null,
      rating: movie.vote_average,
      release_date: movie.release_date,
      genres: movie.genre_ids,
    }))

    return movies
  } catch (error) {
    console.error('Erro ao buscar filmes populares:', error)
    return []
  }
}

export function convertMoviesToHeroSlides(movies: Movie[]): HeroSlide[] {
  return movies.map((movie, index) => ({
    id: movie.id,
    title: movie.title,
    subtitle: `Avaliação: ${movie.rating.toFixed(1)}/10`,
    image: movie.backdrop || '/placeholder.svg?height=600&width=1200',
    description: movie.description || 'Descrição não disponível',
  }))
} 