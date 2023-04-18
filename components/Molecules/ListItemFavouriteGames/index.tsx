import React, { useEffect, useState } from 'react';
import useScreenSize from '@/utils/useScreenSize';
import { useRequest } from 'ahooks';
import { myGameService } from '@/app/services/myGameService';

import { ListGameCarouselOnDesktop, ListGameCarouselOnTablet, ListGameCarouselOnMobile } from '../ListGameCarousel';

const ListItemFavouriteGames = () => {
  const { isDesktop, isTablet } = useScreenSize();
  const [gameList, setGameList] = useState<any>([]);

  const { data, run, loading } = useRequest(myGameService.getFavouriteGames, {
    manual: true,
    onError: (res, params) => {
      return res;
    },
    onSuccess: (data) => {
      setGameList(data);
    },
  });

  useEffect(() => {
    run();
  }, []);

  if (isDesktop) return <ListGameCarouselOnDesktop gameList={gameList} />;
  if (isTablet) return <ListGameCarouselOnTablet gameList={gameList} />;

  return <ListGameCarouselOnMobile gameList={gameList} />;
};

export default ListItemFavouriteGames;
