import Image from 'next/image'
import Link from 'next/link'
import { Article } from '@/types'

interface ArticleImageProps {
  article: Article
}

export function ArticleImage({ article }: ArticleImageProps) {
  const imageUrl = article.promo_items?.basic?.url;

  if (!imageUrl) {
    return null;
  }

  return (
    <Link
      href={`/tema/${article.taxonomy.tags[0]?.slug || ''}`}
      className="figure"
    >
      <picture className="content-pic picture">
        <Image
          src={imageUrl}
          alt={article.headlines.basic}
          className="content-img"
          width={640}
          height={360}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </picture>
    </Link>
  )
}
