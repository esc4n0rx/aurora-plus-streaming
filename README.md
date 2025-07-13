# Aurora+ Streaming Platform

Uma plataforma de streaming moderna construída com Next.js 14, TypeScript e Tailwind CSS.

## 🚀 Funcionalidades

- **Hero Carousel Dinâmico**: Integração com API do TMDB para exibir filmes populares
- **Interface Responsiva**: Design adaptável para desktop e mobile
- **Navegação Suave**: Carrossel com controles intuitivos
- **Performance Otimizada**: Cache e revalidação automática

## 📋 Pré-requisitos

- Node.js 18+ 
- pnpm (recomendado) ou npm
- Conta no TMDB (The Movie Database)

## 🔧 Configuração

### 1. Instalar Dependências

```bash
pnpm install
```

### 2. Configurar Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
TMDB_BEARER_TOKEN=seu_token_aqui
```

### 3. Obter Token do TMDB

1. Acesse [https://www.themoviedb.org/settings/api](https://www.themoviedb.org/settings/api)
2. Faça login ou crie uma conta
3. Copie o "API Read Access Token (v4 auth)"
4. Cole no arquivo `.env.local`

### 4. Executar o Projeto

```bash
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## 🏗️ Estrutura do Projeto

```
aurora-plus-streaming/
├── app/
│   ├── api/movies/popular/    # API para filmes populares
│   └── page.tsx               # Página principal
├── components/
│   ├── hero-carousel.tsx      # Carrossel principal
│   └── content-row.tsx        # Linhas de conteúdo
├── lib/
│   └── content.ts             # Funções e tipos da API
└── public/                    # Assets estáticos
```

## 🔌 API Endpoints

### GET /api/movies/popular

Retorna os 5 filmes mais populares do TMDB.

**Resposta:**
```json
{
  "success": true,
  "data": [
    {
      "id": 123,
      "title": "Nome do Filme",
      "description": "Sinopse...",
      "backdrop": "https://image.tmdb.org/t/p/original/...",
      "poster": "https://image.tmdb.org/t/p/w500/...",
      "rating": 8.5,
      "release_date": "2024-01-01",
      "genres": [28, 12]
    }
  ],
  "count": 5
}
```

## 🎨 Componentes Principais

### HeroCarousel

- **Props**: `slides?: HeroSlide[]`
- **Funcionalidade**: Carrossel automático com filmes populares
- **Fallback**: Slides padrão se API falhar

### ContentRow

- **Props**: `title: string`, `items: ContentItem[]`
- **Funcionalidade**: Linha horizontal com scroll suave
- **Navegação**: Botões de seta para navegar

## 🔄 Cache e Performance

- **Revalidação**: 60 segundos para dados do TMDB
- **Fallback**: Imagens placeholder se backdrop não disponível
- **Loading States**: Estados de carregamento para melhor UX

## 🐛 Troubleshooting

### Erro: "TMDB_BEARER_TOKEN não encontrado"
- Verifique se o arquivo `.env.local` existe
- Confirme se a variável está corretamente nomeada
- Reinicie o servidor após adicionar a variável

### Erro: "Erro na API: 401"
- Token do TMDB inválido ou expirado
- Gere um novo token em [TMDB Settings](https://www.themoviedb.org/settings/api)

### Imagens não carregam
- Verifique a conectividade com a internet
- As imagens são servidas diretamente pelo TMDB

## 📝 Próximos Passos

- [ ] Implementar busca de filmes
- [ ] Adicionar páginas de detalhes
- [ ] Implementar sistema de favoritos
- [ ] Adicionar mais categorias (séries, animes)
- [ ] Implementar autenticação de usuários

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. 