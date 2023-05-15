import cs from '@/utils/cs';
import React, { useLayoutEffect, useMemo, useState } from 'react';
import styles from './topSection.module.scss';
import useScreenSize from '@/utils/useScreenSize';
import BannerGame from './BannerGame';
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
    videoUrl: gameList[index]?.video?.url,
    slug: `/playgame/${gameList && gameList[index]?.slug}`,
    isNew: moment(outputDateString).isAfter(sevenDaysAgo) ? true : false,
    isHot: isHotGame,
    isHover: true,
  };
}

const TopSection = ({ games, banner }: any) => {
  const { isSmallMobile, isDesktop, isTablet } = useScreenSize();
  const randomGame = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * banner.length);
    return banner[randomIndex];
  }, [banner]);

  const propsGameBanner = {
    gameId: randomGame?.id,
    gameName: randomGame?.name,
    gameImage: randomGame?.featured_thumbnail?.url,
    slug: `/playgame/${randomGame?.slug}`
  };

  if (isSmallMobile) return <TopSectionSmallMobile gameList={games} propsGameBanner={propsGameBanner} />;

  if (isDesktop || isTablet) return <TopSectionDesktop games={games} propsGameBanner={propsGameBanner}/>

  return <TopSectionMobile gameList={games} propsGameBanner={propsGameBanner} />;
};

export default TopSection;

const TopSectionDesktop = ({ games, propsGameBanner }: any) => {

  return (
    <div
      className={cs([
        styles.topSection,
        'grid mb-10 md:mb-[70px] xl:mb-20 xl:px-5',
      ])}
    >
      <div className='flex flex-col gap-[18px] xl:gap-[35px]'>
        <GameThumbnail {...propsItemGameTop(games, 0)} />
        <GameThumbnail {...propsItemGameTop(games, 1)} />
      </div>
      <div className={styles.banner_game_placeholder}>
        <BannerGame {...propsGameBanner} />
      </div>
      <div className='flex flex-col gap-[18px] xl:gap-[35px]'>
        <GameThumbnail {...propsItemGameTop(games, 3)} />
        <GameThumbnail {...propsItemGameTop(games, 4)} />
      </div>
    </div>
  );
};

const TopSectionMobile = ({ gameList, propsGameBanner }: any) => {
  const [ref, element] = useElementWidth()
  const [itemWidth, setItemWidth] = useState<number>(0)

  useLayoutEffect(() => {
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

  return (
    <div className={cs([styles.topSectionMobile, 'flex flex-col gap-4 mb-10'])}>
      <div className={styles.banner_game_placeholder}>
        <BannerGame {...propsGameBanner} />
      </div>
      <div className={cs([styles.itemGird, 'gird'])}
        style={{ gridTemplateColumns: `repeat(2, calc(50vw - 25px))`, gridTemplateRows: `repeat(1, calc(50vw - 25px))` }}
      >
        {
          !gameList ? <>
            <div className={styles.cardImg} />
            <div className={styles.cardImg} />
          </> : <>
            <GameThumbnailMobile {...propsItemGameTop(gameList, 1)} />
            <GameThumbnailMobile {...propsItemGameTop(gameList, 2)} />
          </>
        }
        
        {/* <GameThumbnailMobile {...propsItemGameTop(gameList, 1)} />
        <GameThumbnailMobile {...propsItemGameTop(gameList, 2)} /> */}
      </div>
    </div>
  );
};
