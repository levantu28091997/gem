import React, { useEffect, useState } from 'react'
import styles from './ListItemPopularGame.module.scss'
import useScreenSize from '@/utils/useScreenSize'
import { GameInfo } from '@/utils/propItemGame'
import { useElementWidth } from '@/utils/useElementWidth'
import { useRequest } from 'ahooks'
import { homeService } from '@/app/services/homeService'
import GameThumbnail from '../GameThumbnail'

const ListItemPopularGame = () => {
  const { isDesktop, isTablet } = useScreenSize()
  const [gameList, setGameList] = useState<any>([]);

  const { data, run, loading } = useRequest(homeService.getPopularGame, {
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

  if (isDesktop) return <ContentPopularGameDesktop gameList={gameList.slice(0, 36)} />
  if (isTablet) return <ContentPopularGameTablet gameList={gameList.slice(0, 20)} />

  return <ContentPopularGameMobile gameList={gameList.slice(0, 15)} />
}

export default ListItemPopularGame


const ContentPopularGameDesktop = ({ gameList }: any) => {
  const [ref, element] = useElementWidth()
  const [itemWidth, setItemWidth] = useState<number>(0)

  useEffect(() => {
    const itemWidth = (element?.width - (22 * 8)) / 9
    setItemWidth(itemWidth)
  }, [ref, element?.width])

  return (
    <div className={styles.itemGird} ref={ref}
      style={{ gridTemplateColumns: `repeat(9, ${itemWidth}px)`, gridTemplateRows: `repeat(6, ${itemWidth}px)` }}
    >
      {
        gameList.map((game: any, index: number) => (
          <div key={index} className={styles[`ip${index}`]}>
            <GameThumbnail {...GameInfo(game)} isHover isLightEffect={index === 15} />
          </div>
        ))
      }
    </div>
  )
}

const ContentPopularGameTablet = ({ gameList }: any) => {
  const [ref, element] = useElementWidth()
  const [itemWidth, setItemWidth] = useState<number>(0)

  useEffect(() => {
    const itemWidth = (element?.width - (18 * 7)) / 8
    setItemWidth(itemWidth)
  }, [ref, element?.width])

  return (
    <div className={styles.itemGirdTablet} ref={ref}
      style={{ gridTemplateColumns: `repeat(8, ${itemWidth}px)`, gridTemplateRows: `repeat(4, ${itemWidth}px)` }}
    >
      {
        gameList.map((game: any, index: number) => (
          <div key={index} className={styles[`tl${index}`]}>
            <GameThumbnail {...GameInfo(game)} isHover isLightEffect={index === 13} />
          </div>
        ))
      }
    </div>
  )
}

const ContentPopularGameMobile = ({ gameList }: any) => {
  const [ref, element] = useElementWidth()
  const [itemWidth, setItemWidth] = useState<number>(0)

  useEffect(() => {
    const itemWidth = (element?.width - (20 * 2)) / 3
    setItemWidth(itemWidth)
  }, [ref, element?.width])

  return (
    <div className={styles.itemGirdMobile} ref={ref}
      style={{ gridTemplateColumns: `repeat(3, ${itemWidth}px)`, gridTemplateRows: `repeat(7, ${itemWidth}px)` }}
    >
      {
        gameList.map((game: any, index: number) => (
          <div key={index} className={styles[`mb${index}`]}>
            <GameThumbnail {...GameInfo(game)} isHover isLightEffect={index === 0 || index === 10} />
          </div>
        ))
      }
    </div>
  )
}