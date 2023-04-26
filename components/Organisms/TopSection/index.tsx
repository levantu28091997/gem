import cs from '@/utils/cs';
import React, { useEffect, useMemo, useState } from 'react';
import styles from './topSection.module.scss';
import useScreenSize from '@/utils/useScreenSize';
import BannerGame from './BannerGame';
import { useRequest } from 'ahooks';
import { homeService } from '@/app/services/homeService';
import moment from 'moment';
import { useElementWidth } from '@/utils/useElementWidth';
import GameThumbnail, { GameThumbnailMobile } from '@/components/Molecules/GameThumbnail';

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
    isHover: true,
  };
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

  const randomGame = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * bannerGame.length);
    return bannerGame[randomIndex];
  }, [bannerGame]);

  const propsGameBanner = {
    gameId: randomGame?.id,
    gameName: randomGame?.name,
    gameImage: randomGame?.featured_thumbnail?.url,
    slug: `/playgame/${randomGame?.slug}`
  };

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

  if (isSmallMobile) return <TopSectionSmallMobile gameList={gameList} propsGameBanner={propsGameBanner} />;

  if (isMobile) return <TopSectionMobile gameList={gameList} propsGameBanner={propsGameBanner} />;

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
      <div className={styles.banner_game_placeholder}>
        <BannerGame {...propsGameBanner} />
      </div>
      <div className='flex flex-col gap-[18px] xl:gap-[35px]'>
        <GameThumbnail {...propsItemGameTop(gameList, 3)} />
        <GameThumbnail {...propsItemGameTop(gameList, 4)} />
      </div>
    </div>
  );
};

export default TopSection;

const TopSectionMobile = ({ gameList, propsGameBanner }: any) => {
  const [ref, element] = useElementWidth()
  const [itemWidth, setItemWidth] = useState<number>(0)

  useEffect(() => {
    const itemWidth = (element?.width - (18 * 2)) / 3
    setItemWidth(itemWidth)
  }, [ref, element?.width])

  return (
    <div className={cs([styles.topSectionMobile, 'flex flex-col gap-4 mb-10'])}>
      <div className={styles.banner_game_placeholder}>
        <BannerGame {...propsGameBanner} />
      </div>
      <div className={cs([styles.itemGird, 'gird'])} ref={ref}
        style={{ gridTemplateColumns: `repeat(3, ${itemWidth}px)`, gridTemplateRows: `repeat(1, ${itemWidth}px)` }}
      >
        <GameThumbnailMobile {...propsItemGameTop(gameList, 1)} />
        <GameThumbnailMobile {...propsItemGameTop(gameList, 3)} isFavourite />
        <GameThumbnailMobile {...propsItemGameTop(gameList, 4)} />
      </div>
    </div>
  );
};

const TopSectionSmallMobile = ({ gameList, propsGameBanner }: any) => {
  const [ref, element] = useElementWidth()
  const [itemWidth, setItemWidth] = useState<number>(0)

  useEffect(() => {
    const itemWidth = (element?.width - 18) / 2
    setItemWidth(itemWidth)
  }, [ref, element?.width])

  return (
    <div className={cs([styles.topSectionMobile, 'flex flex-col gap-4 mb-10'])}>
      <div className={styles.banner_game_placeholder}>
        <BannerGame {...propsGameBanner} />
      </div>
      <div className={cs([styles.itemGird, 'gird'])} ref={ref}
        style={{ gridTemplateColumns: `repeat(2, ${itemWidth}px)`, gridTemplateRows: `repeat(1, ${itemWidth}px)` }}
      >
        <GameThumbnailMobile {...propsItemGameTop(gameList, 1)} />
        <GameThumbnailMobile {...propsItemGameTop(gameList, 2)} />
      </div>
    </div>
  );
};
