import React, { useEffect, useState } from 'react';
import useScreenSize from '@/utils/useScreenSize';
import { useRequest } from 'ahooks';
import { homeService } from '@/app/services/homeService';
import { ListGameCarouselOnDesktop, ListGameCarouselOnTablet, ListGameCarouselOnMobile } from '../ListGameCarousel';
import { gamesLimit } from "@/utils/useGrid"

const ListItemRecommended = ({ games }: any) => {
  const { isDesktop, isTablet } = useScreenSize();
  // const [gameList, setGameList] = useState<any>([]);

  // const { data, run, loading } = useRequest(homeService.getRecommendedGames, {
  //   manual: false,
  //   onError: (res, params) => {
  //     return res;
  //   },
  //   onSuccess: (data) => {
  //     setGameList(data);
  //   },
  // });

  if (isDesktop) return <ListGameCarouselOnDesktop gameList={games?.slice(0, gamesLimit(games?.length, 12, 36))} />;
  if (isTablet) return <ListGameCarouselOnTablet gameList={games?.slice(0, gamesLimit(games?.length, 10, 30))} />;

  return <ListGameCarouselOnMobile gameList={games?.slice(0, gamesLimit(games?.length, 3, 15))} />;
};

export default ListItemRecommended;
