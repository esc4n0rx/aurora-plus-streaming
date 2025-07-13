import { NextResponse } from 'next/server'
import { getPopularMovies } from '@/lib/content'

export async function GET() {
  try {
    const movies = await getPopularMovies()
    
    return NextResponse.json({
      success: true,
      data: movies,
      count: movies.length
    })
  } catch (error) {
    console.error('Erro na rota /api/movies/popular:', error)
    
    return NextResponse.json(
      {
        success: false,
        error: 'Erro interno do servidor',
        message: 'Não foi possível buscar os filmes populares'
      },
      { status: 500 }
    )
  }
} 