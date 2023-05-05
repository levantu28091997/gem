import React, { useEffect, useState } from 'react';
import useScreenSize from '@/utils/useScreenSize';
import { useRequest } from 'ahooks';
import { homeService } from '@/app/services/homeService';
import { ListGameCarouselOnDesktop, ListGameCarouselOnTablet, ListGameCarouselOnMobile } from '../ListGameCarousel';
import { gamesLimit } from "@/utils/useGrid"

const ListItemRecommended = () => {
  const { isDesktop, isTablet } = useScreenSize();
  const [gameList, setGameList] = useState<any>([]);

  const { data, run, loading } = useRequest(homeService.getRecommendedGames, {
    manual: false,
    onError: (res, params) => {
      return res;
    },
    onSuccess: (data) => {
      setGameList(data);
    },
  });

  if (isDesktop) return <ListGameCarouselOnDesktop gameList={gameList.slice(0, gamesLimit(gameList?.length, 12, 36))} />;
  if (isTablet) return <ListGameCarouselOnTablet gameList={gameList.slice(0, gamesLimit(gameList?.length, 10, 30))} />;

  return <ListGameCarouselOnMobile gameList={gameList.slice(0, gamesLimit(gameList?.length, 3, 15))} />;
};

export default ListItemRecommended;
