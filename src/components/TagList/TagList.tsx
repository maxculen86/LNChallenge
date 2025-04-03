import { ProcessedTag } from '@/types'
import { TagItem } from '../TagItem/TagItem'

interface TagListProps {
  tags: ProcessedTag[]
}

export function TagList({ tags }: TagListProps) {
  return (
      <div
        className="cont-tags com-secondary-tag hlp-marginBottom-20"
        data-testid="tags-container"
      >
        {tags.map(tag => (
          <TagItem key={tag.slug} tag={tag} />
        ))}
      </div>
  )
}
