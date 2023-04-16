import cs from '@/utils/cs';
import React, { useEffect, useState } from 'react';
import styles from './topSection.module.scss';
import useScreenSize from '@/utils/useScreenSize';
import BannerGame from './BannerGame';
import { useRequest } from 'ahooks';
import { homeService } from '@/app/services/homeService';
import moment from 'moment';
import { useElementWidth } from '@/utils/useElementWidth';
import GameThumbnail from '@/components/Molecules/GameThumbnail';

function propsItemGameTop(gameList: any, index: any, status?: any) {
  const isHotGame = gameList && gameList[index]?.is_hot_game;
  // get createAt
  const createAt = gameList && gameList[index]?.createdAt;
  const outputDateString = moment(createAt).format("YYYY-MM-DD");
  const sevenDaysAgo = moment().subtract(7, 'days');
  return {
    gameId: gameList && gameList[index]?.id,
    gameName: gameList && gameList[index]?.name,
    gameImage: gameList[index]?.thumbnail?.url,
    videoUrl: gameList[index]?.video.url,
    slug: `/playgame/${gameList && gameList[index]?.slug}`,
    isNew: moment(outputDateString).isAfter(sevenDaysAgo) ? true : false,
    isHot: isHotGame,
  };
}
function propsGameBanner(bannerGame: any) {
  const randomIndex = Math.floor(Math.random() * bannerGame.length);
  return {
    gameId: bannerGame && bannerGame[randomIndex]?.id,
    gameName: bannerGame && bannerGame[randomIndex]?.name,
    gameImage: bannerGame && bannerGame[randomIndex]?.featured_thumbnail?.url,
    slug: bannerGame && `/playgame/${bannerGame[randomIndex]?.slug}`
  }
}

const TopSection = () => {
  const [gameList, setGameList] = useState<any>([]);
  const [bannerGame, setBannerGame] = useState<any>([])
  const { data, run, loading } = useRequest(homeService.getHotGame, {
    manual: true,
    onError: (res, params) => {
      return res;
    },
    onSuccess: (data) => {
      setGameList(data);
    },
  });
  const { data: bannerGameData, run: runBannerGame, loading: loadingBannerGame } = useRequest(homeService.getBannerHotGame, {
    manual: true,
    onError: (res, params) => {
      return res;
    },
    onSuccess: (data) => {
      setBannerGame(data);
    },
  });
  useEffect(() => {
    run();
    runBannerGame();
  }, []);
  const { isMobile, isSmallMobile, isDesktop } = useScreenSize();

  const [ref, element] = useElementWidth()
  const [itemHeight, setItemHeight] = useState<number>(0)

  useEffect(() => {
    const gap = isDesktop ? 35 : 18
    setItemHeight(((element?.width) * 2) + gap)
  }, [ref, element?.width, isDesktop])

  if (loading) return <div className='text-center text-white'>Loading...</div>;

  if (isSmallMobile) return <TopSectionSmallMobile gameList={gameList} bannerGame={bannerGame} />;

  if (isMobile) return <TopSectionMobile gameList={gameList} bannerGame={bannerGame} />;

  return (
    <div
      className={cs([
        styles.topSection,
        'grid mb-10 md:mb-[70px] xl:mb-20 xl:px-5',
      ])}
    >
      <div ref={ref} className='flex flex-col gap-[18px] xl:gap-[35px]'>
        <GameThumbnail {...propsItemGameTop(gameList, 0)} />
        <GameThumbnail {...propsItemGameTop(gameList, 1)} />
      </div>
      <div style={{ maxHeight: itemHeight ? `${itemHeight}px` : 'unset' }}>
        <BannerGame {...propsGameBanner(bannerGame)} />
      </div>
      <div className='flex flex-col gap-[18px] xl:gap-[35px]'>
        <GameThumbnail {...propsItemGameTop(gameList, 3)} />
        <GameThumbnail {...propsItemGameTop(gameList, 4)} />
      </div>

    </div>
  );
};

export default TopSection;

const TopSectionMobile = ({ gameList, bannerGame }: any) => {
  const [ref, element] = useElementWidth()
  const [itemWidth, setItemWidth] = useState<number>(0)

  useEffect(() => {
    const itemWidth = (element?.width - (18 * 2)) / 3
    setItemWidth(itemWidth)
  }, [ref, element?.width])

  return (
    <div className={cs([styles.topSectionMobile, 'flex flex-col gap-4 mb-10'])}>
      <BannerGame {...propsGameBanner(bannerGame)} />
      <div className={cs([styles.itemGird, 'gird'])} ref={ref}
        style={{ gridTemplateColumns: `repeat(3, ${itemWidth}px)`, gridTemplateRows: `repeat(1, ${itemWidth}px)` }}
      >
        <GameThumbnail {...propsItemGameTop(gameList, 1)} />
        <GameThumbnail {...propsItemGameTop(gameList, 3)} isFavourite />
        <GameThumbnail {...propsItemGameTop(gameList, 4)} />
      </div>
    </div>
  );
};

const TopSectionSmallMobile = ({ gameList, bannerGame }: any) => {
  const [ref, element] = useElementWidth()
  const [itemWidth, setItemWidth] = useState<number>(0)

  useEffect(() => {
    const itemWidth = (element?.width - 18) / 2
    setItemWidth(itemWidth)
  }, [ref, element?.width])

  return (
    <div className={cs([styles.topSectionMobile, 'flex flex-col gap-4 mb-10'])}>
      <BannerGame {...propsGameBanner(bannerGame)} />
      <div className={cs([styles.itemGird, 'gird'])} ref={ref}
        style={{ gridTemplateColumns: `repeat(2, ${itemWidth}px)`, gridTemplateRows: `repeat(1, ${itemWidth}px)` }}
      >
        <GameThumbnail {...propsItemGameTop(gameList, 1)} />
        <GameThumbnail {...propsItemGameTop(gameList, 2)} />
      </div>
    </div>
  );
};
