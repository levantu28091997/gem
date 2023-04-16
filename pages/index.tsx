import Description from '@/components/Organisms/Description'
import PopularTags from '@/components/Organisms/PopularTags'
import TopSection from '@/components/Organisms/TopSection'
import NewGames from '@/components/Organisms/NewGames'
import PopularGames from '@/components/Organisms/PopularGames'
import RecommendedGames from '@/components/Organisms/RecommendedGames'
import PopularCategories from '@/components/Organisms/PopularCategories'

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-full relative z-10 main">
      <TopSection />
      <RecommendedGames isShowShape />
      <NewGames isShowShape />
      <PopularGames isShowShape />
      <PopularCategories isShowShape />
      <Description />
      <PopularTags />
    </div>
  )
}