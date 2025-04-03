import { Article, ProcessedTag } from '@/types'

/**
 * Processes a list of articles to extract unique tags, count their occurrences,
 * and return the top 10 most frequent tags.
 *
 * @param articles - An array of Article objects to process.
 * @returns An array containing the top 10 ProcessedTag objects,
 *          sorted by frequency (count) in descending order. Each object
 *          includes the tag's text, slug, and its total count across all articles.
 */
export function processArticleTags(articles: Article[]): ProcessedTag[] {
  const tagCounts = articles
    .flatMap(article => article.taxonomy.tags)
    .reduce((acc, tag) => {
      acc[tag.slug] = {
        slug: tag.slug,
        text: tag.text,
        count: (acc[tag.slug]?.count || 0) + 1
      }
      return acc
    }, {} as Record<string, ProcessedTag>)

  return Object.values(tagCounts)
    .sort((a, b) => b.count - a.count)
    .slice(0, 10)
}
