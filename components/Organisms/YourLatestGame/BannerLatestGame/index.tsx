import React, { useState, useEffect } from 'react';
import cs from '@/utils/cs';
import Image from 'next/image';
import GamesService from '@/app/services/gameService';
import { myGameService } from '@/app/services/myGameService';
import { useRequest } from 'ahooks';
import ProcessBarGame from '../ProcessBarGame';
import imageLoader from '@/utils/useImageLoader';

const propsProcessBar = (gameDetail: any) => {
  return {
    author: 'Apero',
    gameId: gameDetail?.id,
    slug: gameDetail?.attributes?.slug,
    gameName: gameDetail?.attributes?.name,
  }
}
const BannerLatestGame = () => {
  const [gameDetail, setGameDetail] = useState<any>();
  const { data, run, loading } = useRequest(myGameService.getLatestGame, {
    manual: true,
    onSuccess: (data: any) => {
      setGameDetail(data);
    },
  });
  useEffect(() => {
    run();
  }, []);

  function toggleFavourite() {
    const gameId = gameDetail && gameDetail?.id
    if (GamesService.isGameFavorite(gameId)) {
      GamesService.removeFavoriteGame(gameId);
    } else {
      GamesService.addFavoriteGame(gameId);
    }
  }
  return (
    <div className='relative w-auto'>
      {gameDetail?.data !== null && (
        <div>
          <div className='w-full'>
            <Image
              loader={imageLoader}
              className='rounded-t-[10px] h-full w-full object-cover'
              src={
                gameDetail &&
                gameDetail?.attributes?.thumbnail?.data.attributes.url
              }
              alt={'yourlastestgame'}
              width={1150}
              height={302}
            />
          </div>
          <ProcessBarGame
            {...propsProcessBar(gameDetail)}
            toggleFavourite={toggleFavourite}
          />
        </div>
      )}
    </div>
  );
};

export default BannerLatestGame;
