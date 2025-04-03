import Link from 'next/link'
import { Tag } from '@/types'

interface ArticleTagsProps {
  tags: Tag[]
}

export function ArticleTags({ tags }: ArticleTagsProps) {
  if (tags.length === 0) {
    return <div className="article-tags" data-testid="article-tags" />
  }

  return (
    <div className="article-tags" data-testid="article-tags">
      {tags.map((tag, index) => (
        <Link key={tag.slug} href={`/tema/${tag.slug}`} className="tag-link">
          {tag.text}
          {index < tags.length - 1 ? ',' : ''}
        </Link>
      ))}
    </div>
  )
}
