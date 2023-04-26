import { homeService } from '@/app/services/homeService';
import { IconSearchDark } from '@/components/Atoms/Icons';
import GameThumbnail from '@/components/Molecules/GameThumbnail';
import cs from '@/utils/cs';
import { GameInfo } from '@/utils/propItemGame';
import { useElementWidth } from '@/utils/useElementWidth';
import useScreenSize from '@/utils/useScreenSize';
import { Box } from '@mui/material';
import { useRequest } from 'ahooks';
import React, { FC, useEffect, useState } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import styles from './ModalSearch.module.scss';

type TProps = {
  modalRef: React.MutableRefObject<any>;
  showTags: boolean;
  searchResults: any;
  handleSearch: (event: any) => Promise<void>;
  value: string;
  removeSearch?: () => JSX.Element;
  changeTag: (event: any) => void;
  dataFill: any;
  isOpen: boolean;
  closeModal: (event: any) => void;
};

const ModalSearch: FC<TProps> = ({
  modalRef,
  showTags,
  searchResults,
  handleSearch,
  value,
  removeSearch,
  changeTag,
  dataFill,
  isOpen,
  closeModal,
}) => {
  const [gameListRecommended, setGameListRecommended] = useState<any>([]);
  const [gameListPopular, setGameListPopular] = useState<any>([]);
  const [listTags, setListTags] = useState<any>([]);
  const [listRecentlyPlayed, setListRecentlyPlayed] = useState<any>([]);
  const { isMobile } = useScreenSize();

  const { run: runRecommended } = useRequest(homeService.getRecommendedGames, {
    manual: true,
    onError: (res) => {
      return res;
    },
    onSuccess: (data) => {
      setGameListRecommended(data);
    },
  });

  const { run: runTags } = useRequest(homeService.getTagsPopular, {
    manual: true,
    onError: (res) => {
      return res;
    },
    onSuccess: (data) => {
      setListTags(data);
    },
  });

  const { run: runPopularWeek } = useRequest(homeService.getPopularGameWeek, {
    manual: true,
    onError: (res) => {
      return res;
    },
    onSuccess: (data) => {
      setGameListPopular(data);
    },
  });

  const { run: runRecentlyPlayed } = useRequest(
    homeService.getRecentlyPlayedGames,
    {
      manual: true,
      onError: (res) => {
        return res;
      },
      onSuccess: (data) => {
        setListRecentlyPlayed(data);
      },
    },
  );
  useEffect(() => {
    runRecommended();
    runPopularWeek();
    runTags();
    runRecentlyPlayed();
  }, []);
  const convertSearchResults2ListGame = (searchResults: any) => {
    const results = searchResults.map((item: any) => {
      return {
        id: Number(item?.objectID),
        attributes: {
          name: item?.name,
          thumbnail: {
            data: {
              attributes: {
                url: item?.thumbnail?.url,
              },
            },
          },
          video: {
            data: {
              attributes: {
                url: item?.video?.url,
              },
            },
          },
          slug: item?.slug,
        },
      };
    });

    return results;
  };

  const checkSearchReults =
    searchResults && searchResults.length > 0 ? true : false;
  return (
    <>
      <div className={styles.polygon}></div>
      <div
        className={cs([
          'absolute top-full left-0 bg-white shadow-[0px_3px_20px_rgba(0,0,0,0.25)] rounded-[10px]',
          'mx-6 xl:mx-0 mt-3.5 max-h-screen overflow-auto w-[87.7%] xl:w-[180%] max-w-[1000px]',
          'scrollbar-hide',
        ])}
        ref={modalRef}
      >
        <div className={styles.wrapContent}>
          <Box className={cs([styles.search, 'block relative xl:hidden mb-4'])}>
            <input
              type='text'
              onFocus={handleSearch}
              onChange={handleSearch}
              className={styles.searchTerm}
              value={value}
              maxLength={50}
              placeholder='What are you playing today?'
            />
            <button type='submit' className={styles.searchButton}>
              {value && removeSearch ? removeSearch() : <IconSearchDark />}
            </button>
          </Box>
          {showTags && (
            <div className='relative'>
              <div className={`${styles.box_shadow} -top-3 -left-8 z-50`}></div>
              <ScrollContainer
                className={cs([
                  styles.wrapCategory,
                  'flex gap-[15px] md:gap-5 overflow-x-scroll relative whitespace-nowrap list-tags scroll-container',
                ])}
              >
                {listTags?.map((item: any) => (
                  <button
                    type='button'
                    onClick={() => changeTag(item?.attributes?.name)}
                    className={
                      item.attributes.name == dataFill
                        ? styles.changeCategory
                        : styles.category
                    }
                    key={item.id}
                  >
                    <span className={styles.nameCategory}>
                      {item?.attributes?.name}
                    </span>
                  </button>
                ))}
              </ScrollContainer>
              <div
                className={`${styles.box_shadow} top-4 -right-[30px] rotate-180`}
              ></div>
            </div>
          )}
          {checkSearchReults && (
            <SectionItem
              gameList={convertSearchResults2ListGame(searchResults)}
              showItem={30}
            />
          )}
          {
          listRecentlyPlayed.length > 0 &&
          <SectionItem
            gameList={listRecentlyPlayed}
            title={'Recently played'}
            showItem={6}
          />
          }
          {!checkSearchReults && (
            <>
              <SectionItem
                gameList={gameListRecommended}
                title={'Recommended for you'}
                showItem={6}
              />
                <SectionItem
                  gameList={gameListPopular}
                  title={'Popular this week'}
                  showItem={6}
                />
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default ModalSearch;

const SectionItem = ({ gameList, title, showItem }: any) => {
  return (
    <div className='mb-[30px] md:mb-10 mt-[30px] md:mt-14 ml-4 md:ml-0'>
      {title && <div className={styles.titleSection}>{title}</div>}
      <div className='mx-4'>
        <GameItem gameList={gameList} showItem={showItem} />
      </div>
    </div>
  );
};

const GameItem = ({ gameList, showItem }: any) => {
  const { isTablet, isMobile } = useScreenSize();
  if (showItem === 30) {
    if (isMobile)
      return <GameList gameList={gameList.slice(0, 9)} numberItem={3} />;

    if (isTablet)
      return <GameList gameList={gameList.slice(0, 10)} numberItem={5} />;

    return <GameList gameList={gameList.slice(0, 30)} numberItem={6} />;
  }

  if (isMobile)
    return <GameList gameList={gameList.slice(0, 3)} numberItem={3} />;

  if (isTablet)
    return <GameList gameList={gameList.slice(0, 5)} numberItem={5} />;

  return <GameList gameList={gameList.slice(0, 6)} numberItem={6} />;
};

const GameList = ({ gameList, numberItem }: any) => {
  const [ref, element] = useElementWidth();
  const [itemWidth, setItemWidth] = useState<number>(0);
  const { isTablet, isMobile } = useScreenSize();

  useEffect(() => {
    const itemWidth = (element?.width - 22 * (numberItem - 1)) / numberItem;
    setItemWidth(itemWidth);
  }, [ref, element?.width]);

  // Divide the "gameList" array into chunks of `numberItem` items per row
  const rows = gameList.reduce(
    (resultArray: any[][], item: any, index: number) => {
      const chunkIndex = Math.floor(+index / numberItem);
      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [];
      }
      resultArray[chunkIndex].push(item);

      return resultArray;
    },
    [],
  );

  const templateLaout = () => {
    if (isMobile) {
      return `"ip1 ip2 ip3"`;
    }
    if (isTablet) {
      return `"ip1 ip2 ip3 ip4 ip5"`;
    }
    return `"ip1 ip2 ip3 ip4 ip5 ip6 ip7"`;
  };
  //Generate the template areas string

  return (
    <div
      className={styles.itemGird}
      ref={ref}
      style={{
        gridTemplateColumns: `repeat(${numberItem}, ${itemWidth}px)`,
        gridTemplateRows: `repeat(${rows.length}, ${itemWidth}px)`,
        gridTemplateAreas: templateLaout(),
      }}
    >
      {gameList.map((game: any, index: number) => {
        return (
          <div key={index} className={`${styles[`ip${index}`]}`}>
            <GameThumbnail {...GameInfo(game)} isHover />
          </div>
        );
      })}
    </div>
  );
};
