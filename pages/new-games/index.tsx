import { homeService } from '@/app/services/homeService';
import GameThumbnail from '@/components/Molecules/GameThumbnail';
import Description from '@/components/Organisms/Description';
import { GameInfo } from '@/utils/propItemGame';
import { useElementWidth } from '@/utils/useElementWidth';
import useScreenSize from '@/utils/useScreenSize';
import { useRequest } from 'ahooks';
import { useEffect, useState } from 'react';
import styles from './newGames.module.scss';
import RecommendedGames from '@/components/Organisms/RecommendedGames';
import TitleSection from '@/components/Atoms/TitleSection';
import { largeItemOnMobile, largeItemOnDesktop, LineNumberOnMobile, LineNumberOnDesktop } from '@/utils/useGrid';

export default function NewGames() {
  const [gameList, setGameList] = useState<any>([]);

  const { data, run, loading } = useRequest(homeService.getNewGame, {
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

  return (
    <div className='mx-auto w-full max-w-full relative z-10 main'>
      <TitleSection title='New games' />
      <div className='lg:mx-5 xl:mx-12 mb-10 md:mb-[70px] xl:mb-20'>
        <ListNewGames gameList={gameList} />
      </div>
      <RecommendedGames />
      <Description />
    </div>
  );
}

const ListNewGames = ({ gameList }: any) => {
  const { isMobile } = useScreenSize();

  if (isMobile) return <ListNewGamesMobile gameList={gameList} />;

  return <ListNewGamesDesktop gameList={gameList} />;
};

const ListNewGamesDesktop = ({ gameList }: any) => {
  const [ref, element] = useElementWidth();
  const [itemWidth, setItemWidth] = useState<number>(0);
  const largeItems = largeItemOnDesktop(gameList?.length)
  const lineNumber = LineNumberOnDesktop(gameList?.length)

  useEffect(() => {
    const itemWidth = (element?.width - 22 * 8) / 9;
    setItemWidth(itemWidth);
  }, [ref, element?.width]);

  return (
    <div
      ref={ref}
      className={styles.itemGird}
      style={{
        gridTemplateColumns: `repeat(9, ${itemWidth}px)`,
        gridTemplateRows: `repeat(${lineNumber}, ${itemWidth}px)`
      }}
    >
      {gameList.map((game: any, index: number) => (
        <div
          key={index}
          style={{
            gridColumnEnd: largeItems.includes(index + 1) ? "span 2" : "span 1",
            gridRowEnd: largeItems.includes(index + 1) ? "span 2" : "span 1",
            minHeight: largeItems.includes(index + 1) ? `${(itemWidth * 2) + 22}px` : `${itemWidth}px`
          }}
        >
          <GameThumbnail {...GameInfo(game)} isHover />
        </div>
      ))
      }
    </div >
  );
};

const ListNewGamesMobile = ({ gameList }: any) => {
  const [ref, element] = useElementWidth();
  const [itemWidth, setItemWidth] = useState<number>(0);
  const largeItems = largeItemOnMobile(gameList?.length)
  const lineNumber = LineNumberOnMobile(gameList?.length)

  useEffect(() => {
    const itemWidth = (element?.width - 20 * 2) / 3;
    setItemWidth(itemWidth);
  }, [ref, element?.width]);

  return (
    <div
      className={styles.itemGirdMobile}
      ref={ref}
      style={{
        gridTemplateColumns: `repeat(3, ${itemWidth}px)`,
        gridTemplateRows: `repeat(${lineNumber}, ${itemWidth}px)`,
      }}
    >
      {gameList.map((game: any, index: number) => (
        <div
          key={index}
          style={{
            gridColumnEnd: largeItems.includes(index + 1) ? "span 2" : "span 1",
            gridRowEnd: largeItems.includes(index + 1) ? "span 2" : "span 1",
            minHeight: largeItems.includes(index + 1) ? `${(itemWidth * 2) + 20}px` : `${itemWidth}px`
          }}
        >
          <GameThumbnail {...GameInfo(game)} isHover />
        </div>
      ))}
    </div>
  );
};

NewGames.layout = 'defaultNoDarkTheme';
