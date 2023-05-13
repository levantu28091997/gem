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

export async function getServerSideProps() {
  const [hotGameRes, bannerGameRes] = await Promise.all([
    fetch(`https://beta.gamehub.io/api/games/hot?populate=*`),
    fetch(`https://beta.gamehub.io/api/games/featured?populate=*&sort%5B0%5D=createdAt:desc&pagination%5Blimit%5D=1`)
  ]);
  const [hotGame, bannerGame] = await Promise.all([
    hotGameRes.json(),
    bannerGameRes.json()
  ]);

  // Fetch data from external API
  const res = await fetch(`https://beta.gamehub.io/api/games/hot?populate=*`);
  const games = await res.json();

  // Pass data to the page via props
  return {
    props: {
      games: hotGame,
      banner: bannerGame
    }
  };
}

export default function Home({ games, banner }: any) {
  console.log(games);

  return (
    <>
      <Head>
        <title>Gamehub</title>
      </Head>
      <div className='mx-auto w-full max-w-full relative z-10 main'>
        <TopSection games={games} banner={banner} />
        {/* <RecommendedGames isShowShape />
        <NewGames isShowShape />
        <PopularGames isShowShape />
        <PopularCategories isShowShape /> */}
        {/* <I18nextProvider i18n={i18n}>
          <Description />
        </I18nextProvider>
        <PopularTags /> */}
      </div>
    </>
  );
}
