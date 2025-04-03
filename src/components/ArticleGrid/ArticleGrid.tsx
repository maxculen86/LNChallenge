import React from 'react' // Add React import
import { Article } from '@/types'
import { ArticleCard } from '../ArticleCard/ArticleCard'

interface ArticleGridProps {
  articles: Article[]
}

export function ArticleGrid({ articles }: ArticleGridProps) {
  return (
    <>
      {articles.map((article, index) => {
        // Add banner after every 3 articles
        const showBanner = (index + 1) % 3 === 0
        return (
          <React.Fragment key={article._id}>
            <ArticleCard
              article={article}
              className={
                index < 3 ? ['lugares', 'ohlala', 'living'][index] : ''
              }
            />
            {showBanner && <div className="banner --small --mobile"></div>}
          </React.Fragment>
        )
      })}
    </>
  )
}
