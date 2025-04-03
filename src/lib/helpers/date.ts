/**
 * Formats an ISO date string into a human-readable Spanish date format.
 * Example: "2024-03-20T12:00:00Z" becomes "20 de marzo de 2024".
 *
 * @param dateString - The ISO date string to format.
 * @returns The formatted date string in Spanish (e.g., "D de MMMM de YYYY").
 */
export function formatDisplayDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
