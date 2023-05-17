import React, { useEffect, useState } from 'react'
import styles from './ListItemPopularGame.module.scss'
import useScreenSize from '@/utils/useScreenSize'
import { GameInfo } from '@/utils/propItemGame'
import { useElementWidth } from '@/utils/useElementWidth'
import { useRequest } from 'ahooks'
import { homeService } from '@/app/services/homeService'
import GameThumbnail, { GameThumbnailMobile } from '../GameThumbnail'

const ListItemPopularGame = ({popularGame}:any) => {
  const { isDesktop, isTablet } = useScreenSize()
  const [gameList, setGameList] = useState<any>([]);
  const [repeat,setRepeat] = useState(2);
  const { data, run, loading } = useRequest(homeService.getPopularGame, {
    manual: true,
    onError: (res, params) => {
      return res;
    },
    onSuccess: (data) => {
      setGameList(data);
      getRepeat(data)
    },
  });

  function getRepeat(gameList:any){
    if(gameList.length <= 12){
      setRepeat(2)
    }
    else if(gameList.length >= 24) {
      setRepeat(4)
    }
  }

  useEffect(() => {
    run();
  }, []);

  if (isDesktop) return <ContentPopularGameDesktop gameList={gameList.slice(0, 36)} repeat={repeat}/>
  if (isTablet) return <ContentPopularGameTablet gameList={gameList.slice(0, 20)} repeat={repeat} />

  return <ContentPopularGameMobile gameList={gameList.slice(0, 15)} repeat={repeat} />
}

export default ListItemPopularGame


const ContentPopularGameDesktop = ({ gameList,repeat }: any) => {
  const [ref, element] = useElementWidth()
  const [itemWidth, setItemWidth] = useState<number>(0)

  useEffect(() => {
    const itemWidth = (element?.width - (22 * 8)) / 9
    setItemWidth(itemWidth)
  }, [ref, element?.width])

  return (
    <div className={styles.itemGird} ref={ref}
      style={{ gridTemplateColumns: `repeat(9, ${itemWidth}px)`, gridTemplateRows: `repeat(${repeat}, ${itemWidth}px)` }}
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

const ContentPopularGameTablet = ({ gameList,repeat }: any) => {
  const [ref, element] = useElementWidth()
  const [itemWidth, setItemWidth] = useState<number>(0)

  useEffect(() => {
    const itemWidth = (element?.width - (18 * 7)) / 8
    setItemWidth(itemWidth)
  }, [ref, element?.width])

  return (
    <div className={styles.itemGirdTablet} ref={ref}
      style={{ gridTemplateColumns: `repeat(8, ${itemWidth}px)`, gridTemplateRows: `repeat(${repeat}, ${itemWidth}px)` }}
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

const ContentPopularGameMobile = ({ gameList,repeat }: any) => {
  return (
    <div className={styles.itemGirdMobile}
    style={{
      gridTemplateColumns: `repeat(3, calc((100vw - 32px - 40px) / 3))`,
      gridTemplateRows: `repeat(${repeat + 3}, calc((100vw - 40px - 36px) / 3))`,
    }}
    // calc((100vw - 32px - 40px) / 3) = screenWidth - padding*2 - space *2 = width of 1 item
    >
      {
        gameList.map((game: any, index: number) => (
          <div key={index} className={styles[`mb${index}`]}>
            <GameThumbnailMobile {...GameInfo(game)} isHover isLightEffect={index === 0 || index === 10} />
          </div>
        ))
      }
    </div>
  )
}