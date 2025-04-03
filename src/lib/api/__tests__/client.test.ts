import { fetchArticles } from '../client'

describe('fetchArticles', () => {
  it('should fetch and return articles', async () => {
    const mockResponse = {
      articles: [
        {
          _id: '1',
          headlines: { basic: 'Test Article' },
          promo_items: { basic: { url: 'test.jpg' } },
          display_date: '2024-03-15',
          taxonomy: { tags: [] },
          subtype: '7'
        }
      ]
    }

    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve(mockResponse)
    })

    const result = await fetchArticles()
    expect(result).toEqual(mockResponse)
  })

  it('should throw error for invalid response', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve({})
    })

    await expect(fetchArticles()).rejects.toThrow('Invalid response format')
  })
}) 