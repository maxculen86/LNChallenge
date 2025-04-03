import { TagService } from '../tagService'
import { Article } from '@/types'

describe('TagService', () => {
  const mockArticles: Article[] = [
    {
      _id: '1',
      headlines: { basic: 'Test Article 1' },
      promo_items: { basic: { url: 'test1.jpg', width: 800, height: 600 } },
      display_date: '2024-03-15',
      taxonomy: {
        tags: [
          { slug: 'tag1', text: 'Tag 1' },
          { slug: 'tag2', text: 'Tag 2' }
        ]
      },
      subtype: '7'
    },
    {
      _id: '2',
      headlines: { basic: 'Test Article 2' },
      promo_items: { basic: { url: 'test2.jpg', width: 800, height: 600 } },
      display_date: '2024-03-15',
      taxonomy: {
        tags: [
          { slug: 'tag1', text: 'Tag 1' },
          { slug: 'tag3', text: 'Tag 3' }
        ]
      },
      subtype: '7'
    }
  ]

  it('should process article tags correctly', () => {
    const result = TagService.processArticleTags(mockArticles)

    expect(result).toHaveLength(3)
    expect(result[0]).toEqual({ slug: 'tag1', text: 'Tag 1', count: 2 })
    expect(result[1]).toEqual({ slug: 'tag2', text: 'Tag 2', count: 1 })
    expect(result[2]).toEqual({ slug: 'tag3', text: 'Tag 3', count: 1 })
  })
}) 