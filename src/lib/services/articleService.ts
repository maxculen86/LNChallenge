import { Article, ApiResponse } from '@/types'
import { fetchArticles } from '../api/client'

/**
 * Provides methods for fetching and processing article data.
 */
export class ArticleService {
  /**
   * Fetches all articles from the API.
   * @returns {Promise<Article[]>} A promise that resolves to an array of Article objects.
   */
  static async getArticles(): Promise<Article[]> {
    const response: ApiResponse = await fetchArticles()
    return response.articles
  }

  /**
   * Filters articles to get only those with subtype "7" (standard articles)
   * and limits the result.
   * @param {Article[]} articles - The array of articles to filter.
   * @param {number} [limit=30] - The maximum number of articles to return. Defaults to 30.
   * @returns {Article[]} An array of filtered and limited articles.
   */
  static getDisplayArticles(articles: Article[], limit: number = 30): Article[] {
    return articles
      .filter(article => article.subtype === "7")
      .slice(0, limit)
  }

  /**
   * Inserts a null placeholder after every 3rd article in the array.
   * This is used to indicate where a banner should be placed in the grid.
   * @param {Article[]} articles - The array of articles.
   * @returns {(Article | null)[]} A new array with null placeholders inserted.
   */
  static getArticlesWithBanners(articles: Article[]): (Article | null)[] {
    return articles.flatMap((article, index) => {
      const showBanner = (index + 1) % 3 === 0;
      // If showBanner is true, return the article AND null (for the banner)
      // If showBanner is false, just return the article
      return showBanner ? [article, null] : [article];
    });
  }

  /**
   * Gets a specified number of articles from the beginning of the array,
   * typically used for "most read" sections.
   * @param {Article[]} articles - The array of articles.
   * @param {number} [limit=5] - The maximum number of articles to return. Defaults to 5.
   * @returns {Article[]} An array containing the first 'limit' articles.
   */
  static getMostReadArticles(articles: Article[], limit: number = 5): Article[] {
    return articles.slice(0, limit)
  }
}
