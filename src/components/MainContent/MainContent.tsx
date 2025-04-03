import { TagList } from '@/components/TagList/TagList'
import { ArticleGrid } from '@/components/ArticleGrid/ArticleGrid'
import { LoadMoreButton } from '@/components/LoadMoreButton/LoadMoreButton'
import { ProcessedTag, Article } from '@/types'

type MainContentProps = {
  title: string;
  moreArticlesLabel: string;
  processedTags: ProcessedTag[];
  displayArticles: Article[];
}

export function MainContent({ title, moreArticlesLabel, processedTags, displayArticles }: MainContentProps) {
  return (
    <div className="sidebar__main">
      <div className="row">
        <div className="com-titleWithfollow hlp-marginBottom-15">
          <h1 className="com-title-section-xl hlp-marginBottom-40">
            {title}
          </h1>
        </div>
      </div>
      <div className="row">
        <TagList tags={processedTags} />
      </div>
      <section className="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade">
        <ArticleGrid articles={displayArticles} />
        {/* Mobile banners */}
        <div className="banner --small --mobile"></div>
      </section>
      <section className="row">
        <div className="col-12 hlp-text-center hlp-margintop-40">
          <LoadMoreButton label={moreArticlesLabel} />
        </div>
      </section>
    </div>
  )
}
