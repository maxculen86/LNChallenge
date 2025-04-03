import { render, screen } from '@testing-library/react'
import { TagList } from './TagList'
import { ProcessedTag } from '@/types'

describe('TagList', () => {
  const mockTags: ProcessedTag[] = [
    { slug: 'tag1', text: 'Tag 1', count: 5 },
    { slug: 'tag2', text: 'Tag 2', count: 3 },
  ]

  it('renders all tags', () => {
    render(<TagList tags={mockTags} />)
    mockTags.forEach(tag => {
      expect(screen.getByText(`${tag.text} (${tag.count})`)).toBeInTheDocument()
    })
  })

  it('applies correct CSS classes', () => {
    render(<TagList tags={mockTags} />)
    expect(screen.getByTestId('tags-container')).toHaveClass(
      'cont-tags',
      'com-secondary-tag',
      'hlp-marginBottom-20'
    )
  })
})
