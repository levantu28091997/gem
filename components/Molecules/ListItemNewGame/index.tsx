import React, { useEffect, useState } from 'react'
import styles from './ListItemNewGame.module.scss'
import useScreenSize from '@/utils/useScreenSize'
import { useElementWidth } from '@/utils/useElementWidth'
import { useRequest } from 'ahooks'
import { homeService } from '@/app/services/homeService'
import { GameInfo } from '@/utils/propItemGame'
import GameThumbnail, { GameThumbnailMobile } from '../GameThumbnail'

const ListItemNewGame = ({newGame}:any) => {
  const { isDesktop, isTablet } = useScreenSize()
  if (isDesktop) return <ContentNewGameDesktop gameList={newGame.slice(0, 12)} />
  if (isTablet) return <ContentNewGameTablet gameList={newGame.slice(0, 10)} />

  return <ContentNewGameMobile gameList={newGame.slice(0, 9)} />
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
            <GameThumbnailMobile {...GameInfo(game)} isHover isLightEffect={index === 3} />
          </div>
        ))
      }
    </div>
  )
}

const ContentNewGameMobile = ({ gameList }: any) => {
  return (
    <div className={styles.itemGirdMobile}
      style={{ gridTemplateColumns: `repeat(3, calc((100vw - 32px - 40px) / 3))`, gridTemplateRows: `repeat(4, calc((100vw - 32px - 40px) / 3))` }}>
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