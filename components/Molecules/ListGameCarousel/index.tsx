import 'swiper/css';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GameInfo } from '@/utils/propItemGame';
import GameThumbnail from '../GameThumbnail';
import { useElementWidth } from '@/utils/useElementWidth';
import styles from './ListGameCarousel.module.scss'
import { IconArrowRight, IconArrowRightOnMobile } from '@/components/Atoms/Icons';
import cs from '@/utils/cs';

// TODO: Need to optimize the logic better

export function ListGameCarouselOnDesktop({ gameList }: any) {
  const [ref, element] = useElementWidth()
  const [itemWidth, setItemWidth] = useState<number>(0)
  const ITEM_NUMBER_OF_SCREEN = 12
  const gamesFilter = chunkArray(gameList, ITEM_NUMBER_OF_SCREEN);
  const swiperRef = React.useRef<any>(null);

  useEffect(() => {
    const itemWidth = (element?.width - (22 * 8)) / 9
    setItemWidth(itemWidth)
  }, [ref, element?.width])

  const handleNextSlide = () => {
    return swiperRef?.current?.swiper.slideNext()
  }

  return (
    <div ref={ref} className='relative'>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        ref={swiperRef}
        className={styles.swiperCarousel}
      >
        {
          gamesFilter?.map((slides: any, indSlide: number) => {
            return (
              <SwiperSlide key={`slide_${indSlide}`}>
                <div className={styles.wrapper}
                  style={{ gridTemplateColumns: `repeat(9, ${itemWidth}px)`, gridTemplateRows: `repeat(2, ${itemWidth}px)` }}
                >
                  <GameList slides={slides} />
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
      <div className={cs(['bg-[#ffb2ce33] dark:bg-[#5D5A7A]', styles.carouselAction])} onClick={handleNextSlide}>
        <IconArrowRight className="stroke-[#000000] dark:stroke-white" />
      </div>
    </div >
  );
}

export function ListGameCarouselOnTablet({ gameList }: any) {
  const [ref, element] = useElementWidth()
  const [itemWidth, setItemWidth] = useState<number>(0)
  const ITEM_NUMBER_OF_SCREEN = 10
  const gamesFilter = chunkArray(gameList, ITEM_NUMBER_OF_SCREEN);
  const swiperRef = React.useRef<any>(null);

  useEffect(() => {
    const itemWidth = (element?.width - 18 * 7) / 8;
    setItemWidth(itemWidth);
  }, [ref, element?.width]);

  const handleNextSlide = () => {
    return swiperRef?.current?.swiper.slideNext()
  }

  return (
    <div ref={ref} className='relative'>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        ref={swiperRef}
      >
        {
          gamesFilter?.map((slides: any, indSlide: number) => {
            return (
              <SwiperSlide key={`slide_${indSlide}`}>
                <div className={styles.wrapperTablet}
                  style={{ gridTemplateColumns: `repeat(8, ${itemWidth}px)`, gridTemplateRows: `repeat(2, ${itemWidth}px)` }}
                >
                  <GameList slides={slides} />
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
      <div className={cs(['bg-[#ffb2ce33] dark:bg-[#5D5A7A]', styles.carouselActionTablet])} onClick={handleNextSlide}>
        <IconArrowRight className="stroke-[#000000] dark:stroke-white" />
      </div>
    </div >
  );
}

export function ListGameCarouselOnMobile({ gameList }: any) {
  const [ref, element] = useElementWidth()
  const [itemWidth, setItemWidth] = useState<number>(0)
  const ITEM_NUMBER_OF_SCREEN = 3
  const gamesFilter = chunkArray(gameList, ITEM_NUMBER_OF_SCREEN);
  const swiperRef = React.useRef<any>(null);

  useEffect(() => {
    const itemWidth = (element?.width - 20 * 2) / 3;
    setItemWidth(itemWidth);
  }, [ref, element?.width]);

  const handleNextSlide = () => {
    return swiperRef?.current?.swiper.slideNext()
  }

  return (
    <div ref={ref} className='relative'>
      <Swiper
        spaceBetween={22}
        slidesPerView={1}
        ref={swiperRef}
        className='tutu'
      >
        {
          gamesFilter?.map((slides: any, indSlide: number) => {
            return (
              <SwiperSlide key={`slide_${indSlide}`}>
                <div className={styles.wrapperMobile}
                  style={{ gridTemplateColumns: `repeat(3, ${itemWidth}px)`, gridTemplateRows: `repeat(2, ${itemWidth}px)` }}
                >
                  <GameList slides={slides} />
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
      <div className={cs(['bg-[#ffb2ce33] dark:bg-[#5D5A7A]', styles.carouselActionMobile])} onClick={handleNextSlide}>
        <IconArrowRightOnMobile className="stroke-[#000000] dark:stroke-white mr-[4px]" />
      </div>
    </div >
  );
}

const GameList = ({ slides }: any) => {
  return (
    <>
      {
        slides?.map((game: any, indGame: number) => {
          return (
            <div key={indGame} className={styles[`ip${indGame}`]}>
              <GameThumbnail {...GameInfo(game)} isHover isLightEffect={indGame === 0} />
            </div>
          )
        })
      }
    </>
  )
}

function chunkArray(arr: Array<any>, size: number) {
  return arr.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / size);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);
}
