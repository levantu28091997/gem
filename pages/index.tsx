import Description from '@/components/Organisms/Description';
import NewGames from '@/components/Organisms/NewGames';
import PopularCategories from '@/components/Organisms/PopularCategories';
import PopularGames from '@/components/Organisms/PopularGames';
import PopularTags from '@/components/Organisms/PopularTags';
import RecommendedGames from '@/components/Organisms/RecommendedGames';
import TopSection from '@/components/Organisms/TopSection';
import Head from 'next/head';
import {LRUCache} from 'lru-cache';

import { I18nextProvider } from 'react-i18next';
import i18n from './../i18n';
import { getBannerHotGame, getCategories, getHotGame, getNewGame, getPopularGame, getRecommendedGames, getTagsPopular } from '@/app/services/testService';

const cache = new LRUCache({ max: 100, ttl: 1000 * 60 * 5 });

export async function getStaticProps(context:any) {
  context?.res?.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
  const cacheKey = 'homepage';

  const cachedPage = cache.get(cacheKey);
  console.log('adsa',cachedPage);
  
  if (cachedPage) {
    return {
      props: cachedPage,
    };
  }

  const gamesRes = await getHotGame()
  const bannerRes = await getBannerHotGame()
  const recommendGameRes = await getRecommendedGames()
  const tagPopularRes = await getTagsPopular()
  const categoriesRes = await getCategories()
  const newGameRes = await getNewGame()
  const popularGameRes = await getPopularGame()

  
  const data = {
    games: gamesRes?.data,
    banner: bannerRes?.data,
    recommendGame: recommendGameRes?.data?.data,
    tagPopular: tagPopularRes?.data?.data,
    categories: categoriesRes?.data?.data,
    newGame: newGameRes?.data?.data,
    popularGame: popularGameRes?.data.data
  }
  cache.set(cacheKey, data);


  // Pass data to the page via props
  return {
    props: data
  };
}

export default function Home({ games, banner, recommendGame, tagPopular, categories, newGame, popularGame }: any) {

  return (
    <>
      <Head>
        <title>Gamehub</title>
      </Head>
      <div className='mx-auto w-full max-w-full relative z-10 main'>
        <TopSection games={games} banner={banner} />
        {/* <RecommendedGames isShowShape games={recommendGame} /> */}
        <NewGames isShowShape newGame={newGame}/>
        <PopularGames isShowShape popularGame={popularGame}/>
        <PopularCategories isShowShape categories={categories}/>
        <I18nextProvider i18n={i18n}>
          <Description />
        </I18nextProvider>
        <PopularTags tags={tagPopular} />
      </div>
    </>
  );
}
