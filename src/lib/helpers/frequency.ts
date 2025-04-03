/**
 * Represents an item that can be counted by its slug.
 * Must have at least a `slug` and `text` property.
 */
type CountableItem = {
  slug: string
  text: string
}

/**
 * Groups an array of items by their slug, counts the frequency of each slug,
 * and returns the top N most frequent items, sorted by count descending.
 *
 * @template T - The type of the items in the array, must extend CountableItem.
 * @param {T[]} items - The array of items to process.
 * @param {number} [limit=10] - The maximum number of top items to return. Defaults to 10.
 * @returns {(T & { count: number })[]} An array of the top N items, each augmented
 *          with a `count` property indicating its frequency, sorted by count descending.
 */
export function groupByFrequency<T extends CountableItem>(
  items: T[],
  limit: number = 10
): (T & { count: number })[] {
  const counts = items.reduce((acc, item) => {
    acc[item.slug] = {
      ...item,
      count: (acc[item.slug]?.count || 0) + 1
    }
    return acc
  }, {} as Record<string, T & { count: number }>)

  return Object.values(counts)
    .sort((a, b) => b.count - a.count)
    .slice(0, limit)
}
