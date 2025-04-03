import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { BannerTop } from '@/components/Banner/BannerTop'
import { BannerSticky } from '@/components/Banner/BannerSticky'

export default async function LangLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div id="wrap">
      {/* Included based on commented-out header section in original HTML model */}
      <Header />
      <main>
        {/* Included based on commented-out header section in original HTML model */}
        <BannerTop />
        {/* Included based on commented-out header section in original HTML model */}
        <BannerSticky />
        {/* Wrap children with the sidebar layout class */}
        <div className="lay-sidebar">{children}</div>
      </main>
      {/* Included based on commented-out header section in original HTML model */}
      <Footer />
    </div>
  )
}
