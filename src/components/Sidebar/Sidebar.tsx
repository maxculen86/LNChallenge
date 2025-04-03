import { MostReadRecipes } from '@/components/MostReadRecipes/MostReadRecipes'
import { Article } from '@/types' // Assuming MostReadRecipes needs Article type

type SidebarProps = {
  mostReadRecipesTitle: string;
  // Add articles prop if MostReadRecipes actually needs them
  // articles: Article[];
}

export function Sidebar({ mostReadRecipesTitle }: SidebarProps) {
  return (
    <div className="sidebar__aside">
      <div className="banner --desktop --large"></div>
      <div className="com-ranking hlp-none hlp-tablet-none">
        <h2 className="com-title-section-m">{mostReadRecipesTitle}</h2>
        {/* Pass articles - adjust if needed, currently empty as before */}
        <MostReadRecipes articles={[]} />
      </div>
      <div className="banner --desktop --large"></div>
    </div>
  )
}
