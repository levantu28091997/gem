// import Description from '@/components/Organisms/Description';
import NewGames from '@/components/Organisms/NewGames';
import PopularCategories from '@/components/Organisms/PopularCategories';
import PopularGames from '@/components/Organisms/PopularGames';
// import PopularTags from '@/components/Organisms/PopularTags';
import RecommendedGames from '@/components/Organisms/RecommendedGames';
// import TopSection from '@/components/Organisms/TopSection';
import Head from 'next/head';
import dynamic from 'next/dynamic'

const TopSection = dynamic(() => import('@/components/Organisms/TopSection'), {
  loading: () => <p>Loading...</p>,
  ssr: false
})

const Description = dynamic(() => import('@/components/Organisms/Description'), {
  loading: () => <p>Loading...</p>,
  ssr: false
})

const PopularTags = dynamic(() => import('@/components/Organisms/PopularTags'), {
  loading: () => <p>Loading...</p>,
  ssr: false
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Gamehub</title>
      </Head>
      <div className='mx-auto w-full max-w-full relative z-10 main'>
        <TopSection />
        <RecommendedGames isShowShape />
        <NewGames isShowShape />
        <PopularGames isShowShape />
        <PopularCategories isShowShape />
        <Description />
        <PopularTags />
      </div>
    </>
  );
}
