import { ArticleService } from '../articleService'
import { Article } from '@/types'

describe('ArticleService', () => {
  const mockArticles: Article[] = [
    {
      _id: '1',
      headlines: { basic: 'Test Article 1' },
      promo_items: { basic: { url: 'test1.jpg', width: 800, height: 600 } },
      display_date: '2024-03-15',
      taxonomy: { tags: [] },
      subtype: '7'
    },
    {
      _id: '2',
      headlines: { basic: 'Test Article 2' },
      promo_items: { basic: { url: 'test2.jpg', width: 800, height: 600 } },
      display_date: '2024-03-15',
      taxonomy: { tags: [] },
      subtype: '8'
    }
  ]

  it('should filter articles by subtype', () => {
    const result = ArticleService.getDisplayArticles(mockArticles)
    expect(result).toHaveLength(1)
    expect(result[0].subtype).toBe('7')
  })

  it('should respect limit parameter', () => {
    const result = ArticleService.getDisplayArticles(mockArticles, 1)
    expect(result).toHaveLength(1)
  })

  it('should add banners after every 3 articles', () => {
    const articles = Array(5).fill(mockArticles[0]) // Input: 5 articles
    const result = ArticleService.getArticlesWithBanners(articles)

    // Expect 5 articles + 1 banner (after 3rd) = 6 items total
    expect(result).toHaveLength(6)
    // Banner should be after the 3rd article (index 2), so at result index 3
    expect(result[3]).toBeNull()
    // The item at index 5 should be the 5th article, not null
    expect(result[5]).toEqual(articles[4])
  })
})
