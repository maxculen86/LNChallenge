import { ApiResponse } from "@/types"

/**
 * The endpoint URL for the articles API.
 * Reads from the NEXT_PUBLIC_API_ENDPOINT environment variable.
 */
const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT as string

// Ensure the API endpoint is configured at build time/runtime start
if (!API_ENDPOINT) {
  throw new Error("API_ENDPOINT environment variable is not defined")
}

/**
 * Fetches the list of articles from the configured API endpoint.
 *
 * @returns A promise that resolves to the ApiResponse object containing the articles.
 * @throws {Error} If the API endpoint environment variable is not set.
 * @throws {Error} If the fetch request fails or the response format is invalid.
 */
export async function fetchArticles(): Promise<ApiResponse> {
  const response = await fetch(API_ENDPOINT)
  const data = await response.json()

  if (!data || !data.articles) {
    throw new Error("Invalid response format")
  }

  return data
}
