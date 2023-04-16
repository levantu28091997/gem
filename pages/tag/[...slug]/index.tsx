import { homeService } from '@/app/services/homeService';
import GameThumbnail from '@/components/Molecules/GameThumbnail';
import Description from '@/components/Organisms/Description';
import PopularCategories from '@/components/Organisms/PopularCategories';
import { GameInfo } from '@/utils/propItemGame';
import { useElementWidth } from '@/utils/useElementWidth';
import useScreenSize from '@/utils/useScreenSize';
import { useRequest } from 'ahooks';
import { useEffect, useState } from 'react';
import styles from './index.module.scss';
import {
  LineNumberOnMobile,
  LineNumberOnDesktop,
  largeItemOnMobile,
  largeItemOnDesktop,
  getFirstSectionRowNumberDesktop,
  getFirstSectionRowNumberMobile,
} from '@/utils/useGrid';
import cs from '@/utils/cs';
import RecommendedGames from '@/components/Organisms/RecommendedGames';

export async function getServerSideProps({ query }: any) {
  return { props: { slug: query.slug[0] } };
}

export default function ListGameByTag({ slug }: { slug: string }) {
  const [listGameByTag, setListGameByTag] = useState<any>([]);

  const { run } = useRequest(homeService.getGamesByTag, {
    manual: true,
    onError: (res) => {
      return res;
    },
    onSuccess: (data) => {
      setListGameByTag(data);
    },
  });

  useEffect(() => {
    run(slug);
  }, [slug]);

  return (
    <div className='mx-auto w-full max-w-full relative z-10 main'>
      <div className='lg:mx-5 xl:mx-12 mb-10 md:mb-[70px] xl:mb-20'>
        <ListGames gameList={listGameByTag} />
      </div>
      <RecommendedGames />
      <Description />
    </div>
  );
}

const ListGames = ({ gameList }: any) => {
  const { isMobile } = useScreenSize();

  if (isMobile) return <ListGamesMobile gameList={gameList} />;

  return <ListGamesDesktop gameList={gameList} />;
};

const ListGamesDesktop = ({ gameList }: any) => {
  const [ref, element] = useElementWidth();
  const [itemWidth, setItemWidth] = useState<number>(0);
  const largeItems = largeItemOnDesktop(gameList?.length);
  const lineNumber = LineNumberOnDesktop(gameList?.length);

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
        gridTemplateRows: `repeat(${lineNumber}, ${itemWidth}px)`,
      }}
    >
      {gameList.map((game: any, index: number) => (
        <div
          key={index}
          style={{
            gridColumnEnd: largeItems.includes(index + 1) ? 'span 2' : 'span 1',
            gridRowEnd: largeItems.includes(index + 1) ? 'span 2' : 'span 1',
            minHeight: largeItems.includes(index + 1)
              ? `${itemWidth * 2 + 22}px`
              : `${itemWidth}px`,
          }}
        >
          <GameThumbnail {...GameInfo(game)} isHover />
        </div>
      ))}
    </div>
  );
};

const ListGamesMobile = ({ gameList }: any) => {
  const [ref, element] = useElementWidth();
  const [itemWidth, setItemWidth] = useState<number>(0);
  const largeItems = largeItemOnMobile(gameList?.length);
  const lineNumber = LineNumberOnMobile(gameList?.length);

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
            gridColumnEnd: largeItems.includes(index + 1) ? 'span 2' : 'span 1',
            gridRowEnd: largeItems.includes(index + 1) ? 'span 2' : 'span 1',
            minHeight: largeItems.includes(index + 1)
              ? `${itemWidth * 2 + 20}px`
              : `${itemWidth}px`,
          }}
        >
          <GameThumbnail {...GameInfo(game)} isHover />
        </div>
      ))}
    </div>
  );
};

ListGameByTag.layout = 'defaultNoDarkTheme';
