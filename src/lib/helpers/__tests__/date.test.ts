// Removed incorrect import: import { formatDate } from '../date'
import { formatDisplayDate } from '../date' // Import the correct function

describe('formatDisplayDate', () => { // Update describe block name
  it('should format date correctly', () => {
    const date = '2024-03-15T10:00:00Z' // Use a full ISO string for consistency
    const result = formatDisplayDate(date) // Call the correct function
    expect(result).toBe('15 de marzo de 2024')
  })
})
