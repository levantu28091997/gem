import React, { useEffect, useState } from 'react'
import styles from './ListItemNewGame.module.scss'
import useScreenSize from '@/utils/useScreenSize'
import { useElementWidth } from '@/utils/useElementWidth'
import { useRequest } from 'ahooks'
import { homeService } from '@/app/services/homeService'
import { GameInfo } from '@/utils/propItemGame'
import GameThumbnail from '../GameThumbnail'

const ListItemNewGame = () => {
  const { isDesktop, isTablet } = useScreenSize()
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

  if (isDesktop) return <ContentNewGameDesktop gameList={gameList.slice(0, 12)} />
  if (isTablet) return <ContentNewGameTablet gameList={gameList.slice(0, 10)} />

  return <ContentNewGameMobile gameList={gameList.slice(0, 9)} />
}

export default ListItemNewGame

const ContentNewGameDesktop = ({ gameList }: any) => {
  const [ref, element] = useElementWidth()
  const [itemWidth, setItemWidth] = useState<number>(0)

  useEffect(() => {
    const itemWidth = (element?.width - (22 * 8)) / 9
    setItemWidth(itemWidth)
  }, [ref, element?.width])

  return (
    <div className={styles.itemGird} ref={ref}
      style={{ gridTemplateColumns: `repeat(9, ${itemWidth}px)`, gridTemplateRows: `repeat(2, ${itemWidth}px)` }}
    >
      {
        gameList.map((game: any, index: number) => (
          <div key={index} className={styles[`ip${index}`]}>
            <GameThumbnail {...GameInfo(game)} isHover isLightEffect={index === 3} />
          </div>
        ))
      }
    </div>
  )
}

const ContentNewGameTablet = ({ gameList }: any) => {
  const [ref, element] = useElementWidth()
  const [itemWidth, setItemWidth] = useState<number>(0)

  useEffect(() => {
    const itemWidth = (element?.width - (18 * 7)) / 8
    setItemWidth(itemWidth)
  }, [ref, element?.width])

  return (
    <div className={styles.itemGirdTablet} ref={ref}
      style={{ gridTemplateColumns: `repeat(8, ${itemWidth}px)`, gridTemplateRows: `repeat(2, ${itemWidth}px)` }}
    >
      {
        gameList.map((game: any, index: number) => (
          <div key={index} className={styles[`ip${index}`]}>
            <GameThumbnail {...GameInfo(game)} isHover isLightEffect={index === 3} />
          </div>
        ))
      }
    </div>
  )
}

const ContentNewGameMobile = ({ gameList }: any) => {
  const [ref, element] = useElementWidth()
  const [itemWidth, setItemWidth] = useState<number>(0)

  useEffect(() => {
    const itemWidth = (element?.width - (20 * 2)) / 3
    setItemWidth(itemWidth)
  }, [ref, element?.width])

  return (
    <div className={styles.itemGirdMobile} ref={ref}
      style={{ gridTemplateColumns: `repeat(3, ${itemWidth}px)`, gridTemplateRows: `repeat(4, ${itemWidth}px)` }}>
      {
        gameList.map((game: any, index: number) => (
          <div key={index} className={styles[`ip${index}`]}>
            <GameThumbnail {...GameInfo(game)} isHover isLightEffect={index === 1} />
          </div>
        ))
      }
    </div>
  )
}