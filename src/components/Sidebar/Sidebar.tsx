import { MostReadRecipes } from '@/components/MostReadRecipes/MostReadRecipes'

type SidebarProps = {
  mostReadRecipesTitle: string;
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
