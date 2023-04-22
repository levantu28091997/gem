import { FC, useEffect, useRef, useState } from 'react';
import React from 'react';
import styles from './ModalSearch.module.scss';
import GameThumbnail from '@/components/Molecules/GameThumbnail';
import { GameInfo } from '@/utils/propItemGame';
import { homeService } from '@/app/services/homeService';
import { useRequest } from 'ahooks';
import { useElementWidth } from '@/utils/useElementWidth';
import useScreenSize from '@/utils/useScreenSize';
import cs from '@/utils/cs';
import { Box } from '@mui/material';
import { IconSearchDark } from '@/components/Atoms/Icons';

type TProps = {
  modalRef: React.MutableRefObject<any>;
  showTags: boolean;
  searchResults: any;
  handleSearch: (event: any) => Promise<void>;
  value: string;
  removeSearch?: () => JSX.Element;
  changeTag: (event: any, classTag: any) => void;
  dataFill: any;
  isOpen: boolean;
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

  useEffect(() => {
    const slidemoue = document.querySelector('.scroll_slide');
    let scrolldow = false;
    let startX: number;
    let scrollLeft: number;

    slidemoue?.addEventListener('mousedown', function (e: any) {
      let offsetSlide = (slidemoue as HTMLElement).offsetLeft;
      console.log(offsetSlide);
      scrolldow = true;
      startX = e.pageX - offsetSlide;
      scrollLeft = offsetSlide;
      console.log(scrollLeft);
    });
    slidemoue?.addEventListener('mouseleave', function () {
      scrolldow = false;
    });
    slidemoue?.addEventListener('mouseup', function () {
      scrolldow = false;
    });
    slidemoue?.addEventListener('mousemove', function (e: any) {
      if (!scrolldow) return;
      let offsetSlide = (slidemoue as HTMLElement).offsetLeft;
      e.preventDefault();
      const x = e.pageX - offsetSlide;
      const walk = x - startX;
      slidemoue.scrollLeft = scrollLeft - walk;
    });
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

  const getTagClass = (tagName: any) => {
    if (dataFill.some((tag: any) => tag == tagName)) {
      return {
        className: `${styles.changeCategory}`,
        changeTagClass: `enable`,
      };
    }

    if (dataFill.length >= 5 && dataFill.some((tag: any) => tag != tagName)) {
      return {
        className: `${styles.disabledTags}`,
        changeTagClass: `disabled`,
      };
    }

    return {
      className: `${isMobile ? `${styles.unChangeTag}` : styles.category}`,
      changeTagClass: `unchange`,
    };
  };

  const checkSearchReults =
    searchResults && searchResults.length > 0 ? true : false;
  return (
    <>
      <div className={styles.polygon}></div>
      <div
        className={cs([
          'absolute top-full left-0 bg-white shadow-[0px_3px_20px_rgba(0,0,0,0.25)] rounded-[10px]',
          'mx-6 xl:mx-0 mt-3.5 max-h-screen overflow-auto w-[87.7%] xl:w-[136%]',
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
              <div
                className={cs([
                  styles.wrapCategory,
                  'flex gap-[15px] md:gap-5 overflow-x-scroll relative whitespace-nowrap list-tags scroll_slide',
                ])}
              >
                {listTags?.map((item: any) => (
                  <button
                    type='button'
                    onClick={() =>
                      changeTag(
                        item?.attributes?.name,
                        getTagClass(item.attributes.name).changeTagClass,
                      )
                    }
                    className={getTagClass(item.attributes.name).className}
                    key={item.id}
                  >
                    <span className={styles.nameCategory}>
                      {item?.attributes?.name}
                    </span>
                  </button>
                ))}
              </div>
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
          <SectionItem
            gameList={gameListRecommended}
            title={'Recommended for you'}
            showItem={6}
          />
          {!checkSearchReults && (
            <>
              <SectionItem
                gameList={gameListPopular}
                title={'Popular this week'}
                showItem={6}
              />
              {listRecentlyPlayed.length > 0 && (
                <SectionItem
                  gameList={listRecentlyPlayed}
                  title={'Recently played'}
                  showItem={6}
                />
              )}
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
