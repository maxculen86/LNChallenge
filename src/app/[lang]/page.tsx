import { ArticleService } from '@/lib/services/articleService'
import { TagService } from '@/lib/services/tagService'
import { getDictionary } from './dictionaries/dictionaries'
import { MainContent } from '@/components/MainContent/MainContent'
import { Sidebar } from '@/components/Sidebar/Sidebar'

export default async function Home({
  params: { lang = 'es' },
}: {
  params: { lang: 'es' | 'en' }
}) {
  const articles = await ArticleService.getArticles()
  const processedTags = TagService.processArticleTags(articles)
  const displayArticles = ArticleService.getDisplayArticles(articles)
  const dict = await getDictionary(lang)

  return (
    <>
      <MainContent
        title={dict.home.title}
        moreArticlesLabel={dict.home.moreArticles}
        processedTags={processedTags}
        displayArticles={displayArticles}
      />

      <Sidebar
        mostReadRecipesTitle={dict.home.mostReadRecipes}
      />
    </>
  )
}
