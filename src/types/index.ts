export interface Article {
  _id: string
  headlines: {
    basic: string
  }
  promo_items: {
    basic: {
      url: string
      width: number
      height: number
    }
  }
  display_date: string
  taxonomy: {
    tags: Tag[]
  }
  subtype: string
}

export interface Tag {
  slug: string
  text: string
}

export interface ProcessedTag extends Tag {
  count: number
}

export interface ApiResponse {
  articles: Article[]
} 