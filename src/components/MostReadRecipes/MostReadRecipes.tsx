import { Article } from '@/types'
import { ArticleCard } from '../ArticleCard/ArticleCard'

interface MostReadRecipesProps {
  articles: Article[]
}

export function MostReadRecipes({ articles }: MostReadRecipesProps) {
  return (
    <div className="mod-ranking">
      {articles.map(article => (
        <ArticleCard
          key={article._id}
          article={article}
          className="hlp-marginBottom-20"
        />
      ))}
    </div>
  )
}
