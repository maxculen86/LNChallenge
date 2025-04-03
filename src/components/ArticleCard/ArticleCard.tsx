import { Article } from '@/types'
import { formatDisplayDate } from '@/lib/helpers/date'
import { ArticleImage } from './ArticleImage'
import Link from 'next/link'

interface ArticleCardProps {
  article: Article
  className?: string
}

export function ArticleCard({ article, className = '' }: ArticleCardProps) {
  const cardClassName = `mod-caja-nota ${className} w-100-mobile`.trim()

  return (
    <article className={cardClassName} data-testid="article-card">
      <section className="cont-figure">
        <ArticleImage article={article} />
      </section>
      <div className="mod-caja-nota__descrip">
        <h2 className="com-title-acu">
          <Link href={`/tema/${article.taxonomy.tags[0]?.slug || ''}`}>
            <b>{article.headlines.basic.split('.')[0]}.</b>
            {article.headlines.basic.split('.')[1]}
          </Link>
        </h2>
        <h4 className="com-date">{formatDisplayDate(article.display_date)}</h4>
      </div>
    </article>
  )
}
