import GamesService from '@/app/services/gameService'
import Description from '@/components/Organisms/Description'
import PopularTags from '@/components/Organisms/PopularTags'
import RecentPlayedGames from '@/components/Organisms/RecentPlayedGames'
import RecommendedGames from '@/components/Organisms/RecommendedGames'
import YourFavouriteGames from '@/components/Organisms/YourFavouriteGames'
import YourLatestGame from '@/components/Organisms/YourLatestGame'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'

export default function MyGame() {
  const [playedGames, setPlayedGames] = useState<any>(0)
  useEffect(() => {
    setPlayedGames(GamesService.getIdPlayedGames())
  }, [])

  return (
    <>
      <Head>
        <title>My Game</title>
      </Head>
      <div className='mx-auto w-full max-w-full relative z-10 main '>
        {/* <YourLatestGame /> */}
        {playedGames.length !== 0 ? <RecentPlayedGames /> : ''}
        <YourFavouriteGames />
        <RecommendedGames games={[]} />
        <Description />
        <PopularTags />
      </div>
    </>
  );
}

MyGame.layout = 'defaultNoDarkTheme';
