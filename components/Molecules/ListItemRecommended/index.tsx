import React, { useEffect, useState } from 'react';
import useScreenSize from '@/utils/useScreenSize';
import { useRequest } from 'ahooks';
import { homeService } from '@/app/services/homeService';
import { ListGameCarouselOnDesktop, ListGameCarouselOnTablet, ListGameCarouselOnMobile } from '../ListGameCarousel';

const ListItemRecommended = () => {
  const { isDesktop, isTablet } = useScreenSize();
  const [gameList, setGameList] = useState<any>([]);

  const { data, run, loading } = useRequest(homeService.getRecommendedGames, {
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

export default ListItemRecommended;
