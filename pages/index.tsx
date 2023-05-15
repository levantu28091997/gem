import Description from '@/components/Organisms/Description';
import NewGames from '@/components/Organisms/NewGames';
import PopularCategories from '@/components/Organisms/PopularCategories';
import PopularGames from '@/components/Organisms/PopularGames';
import PopularTags from '@/components/Organisms/PopularTags';
import RecommendedGames from '@/components/Organisms/RecommendedGames';
import TopSection from '@/components/Organisms/TopSection';
import Head from 'next/head';

import { I18nextProvider } from 'react-i18next';
import i18n from './../i18n';
import { getBannerHotGame, getHotGame, getRecommendedGames, getTagsPopular } from '@/app/services/testService';

export async function getServerSideProps() {
  const gamesRes = await getHotGame()
  const bannerRes = await getBannerHotGame()
  const recommendGameRes = await getRecommendedGames()
  const tagPopularRes = await getTagsPopular()

  // Pass data to the page via props
  return {
    props: {
      games: gamesRes?.data,
      banner: bannerRes?.data,
      recommendGame: recommendGameRes?.data?.data,
      tagPopular: tagPopularRes?.data?.data
    }
  };
}

export default function Home({ games, banner, recommendGame, tagPopular }: any) {

  return (
    <>
      <Head>
        <title>Gamehub</title>
      </Head>
      <div className='mx-auto w-full max-w-full relative z-10 main'>
        <TopSection games={games} banner={banner} />
        <RecommendedGames isShowShape games={recommendGame} />
        {/* <NewGames isShowShape />
        <PopularGames isShowShape />
        <PopularCategories isShowShape /> */}
        <I18nextProvider i18n={i18n}>
          <Description />
        </I18nextProvider>
        <PopularTags tags={tagPopular} />
      </div>
    </>
  );
}
