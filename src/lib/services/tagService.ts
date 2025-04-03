import { Article, ProcessedTag, Tag } from '@/types' // Import Tag type if not already imported
import { groupByFrequency } from '../helpers/frequency'

/**
 * Provides methods for processing tag data from articles.
 */
export class TagService {
  /**
   * Extracts all tags from a list of articles, counts their frequency,
   * and returns the top 10 most frequent tags.
   *
   * @param {Article[]} articles - The array of articles to process.
   * @returns {ProcessedTag[]} An array of the top 10 tags, sorted by frequency,
   *                           each including text, slug, and count.
   */
  static processArticleTags(articles: Article[]): ProcessedTag[] {
    const allTags: Tag[] = articles.flatMap(article => article.taxonomy.tags)
    // Use the generic groupByFrequency helper, which defaults to limit 10
    return groupByFrequency(allTags)
  }
}
