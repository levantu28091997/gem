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
import propsDescription from '@/utils/propsDescription';

export async function getServerSideProps({ query }: any) {
  return { props: { slug: query.slug[0] } };
}

export default function SingleCategory({ slug }: { slug: string }) {
  const [gameByCategory, setGameByCategory] = useState<any>([]);
  const [category, setCategory] = useState<any>([]);
  const { run } = useRequest(homeService.getGameByCategorySlug, {
    manual: true,
    onError: (res, params) => {
      return res;
    },
    onSuccess: (data) => {
      setGameByCategory(data);
    },
  });

  const { run: runCategory } = useRequest(homeService.getCategoryBySlug, {
    manual: true,
    onError: (res, params) => {
      return res;
    },
    onSuccess: (data) => {
      setCategory(data);
    },
  });

  useEffect(() => {
    run(slug);
    runCategory(slug);
  }, [slug]);

  return (
    <div className='mx-auto w-full max-w-full relative z-10 main'>
      <div className='lg:mx-5 xl:mx-12 mb-10 md:mb-[70px] xl:mb-20'>
        <ListGameCategory
          category={category}
          gameList={gameByCategory.slice(0, 46)}
        />
      </div>
      <PopularCategories />
      <Description {...propsDescription(category[0])} />
    </div>
  );
}

const ListGameCategory = ({ gameList, category }: any) => {
  const { isMobile } = useScreenSize();

  if (isMobile)
    return <ListGameCategoryMobile category={category} gameList={gameList} />;

  return <ListGameCategoryDesktop category={category} gameList={gameList} />;
};

const ListGameCategoryDesktop = ({ gameList, category }: any) => {
  const [ref, element] = useElementWidth();
  const [itemWidth, setItemWidth] = useState<number>(0);

  useEffect(() => {
    const itemWidth = (element?.width - 22 * 8) / 9;
    setItemWidth(itemWidth);
  }, [ref, element?.width]);

  return (
    <>
      <div
        className={styles.itemGird}
        ref={ref}
        style={{
          gridTemplateColumns: `repeat(9, ${itemWidth}px)`,
          gridTemplateRows: `repeat(${getFirstSectionRowNumberDesktop(
            gameList.slice(0, 22).length,
          )}, ${itemWidth}px)`,
        }}
      >
        <div className={styles.ip1}>
          <span className={styles.nameCategory}>
            {category[0]?.attributes?.name}
          </span>
        </div>
        <FirstSectionDecktop gameList={gameList.slice(0, 22)} />
      </div>
      <SecondSectionDecktop
        gameList={gameList.slice(22)}
        itemWidth={itemWidth}
      />
    </>
  );
};

const FirstSectionDecktop = ({ gameList }: any) => {
  return (
    <>
      {gameList.map((game: any, index: number) => (
        <div key={index} className={styles[`ip${index + 2}`]}>
          <GameThumbnail {...GameInfo(game)} isHover />
        </div>
      ))}
    </>
  );
};

const SecondSectionDecktop = ({ gameList, itemWidth }: any) => {
  if (gameList.length < 1) return null;

  const largeItems = largeItemOnDesktop(gameList?.length);
  const lineNumber = LineNumberOnDesktop(gameList?.length);
  return (
    <div
      className={cs([styles.gridTemp, 'gap-[22px] mt-[22px]'])}
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

const ListGameCategoryMobile = ({ gameList, category }: any) => {
  const [ref, element] = useElementWidth();
  const [itemWidth, setItemWidth] = useState<number>(0);

  useEffect(() => {
    const itemWidth = (element?.width - 20 * 2) / 3;
    setItemWidth(itemWidth);
  }, [ref, element?.width]);

  return (
    <>
      <div
        className={styles.itemGirdMobile}
        ref={ref}
        style={{
          gridTemplateColumns: `repeat(3, ${itemWidth}px)`,
          gridTemplateRows: `repeat(${getFirstSectionRowNumberMobile(
            gameList?.slice(0, 10).length,
          )}, ${itemWidth}px)`,
        }}
      >
        <div className={styles.ip1}>
          <span className={styles.nameCategory}>
            {category[0]?.attributes?.name}
          </span>
        </div>
        <FirstSectionMobile gameList={gameList?.slice(0, 10)} />
      </div>
      <SecondSectionMobile
        gameList={gameList?.slice(10)}
        itemWidth={itemWidth}
      />
    </>
  );
};

const FirstSectionMobile = ({ gameList }: any) => {
  return (
    <>
      {gameList.map((game: any, index: number) => (
        <div key={index} className={styles[`ip${index + 2}`]}>
          <GameThumbnail {...GameInfo(game)} isHover />
        </div>
      ))}
    </>
  );
};

const SecondSectionMobile = ({ gameList, itemWidth }: any) => {
  if (gameList.length < 1) return null;

  const largeItems = largeItemOnMobile(gameList?.length);
  const lineNumber = LineNumberOnMobile(gameList?.length);

  return (
    <div
      className={cs([styles.gridTemp, 'gap-[20px] mt-[20px]'])}
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

SingleCategory.layout = 'defaultNoDarkTheme';
