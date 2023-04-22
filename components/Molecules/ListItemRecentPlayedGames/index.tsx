import React, { useEffect, useState } from 'react'
import styles from './ListItemRecentPlayedGames.module.scss'
import useScreenSize from '@/utils/useScreenSize'
import { GameInfo } from '@/utils/propItemGame'
import { useElementWidth } from '@/utils/useElementWidth'
import { useRequest } from 'ahooks'
import { homeService } from '@/app/services/homeService'
import GameThumbnail from '../GameThumbnail'

const ListItemRecentPlayedGames = () => {
    const { isDesktop, isTablet } = useScreenSize()
    const [gameList, setGameList] = useState<any>([]);
    const [repeat,setRepeat] = useState(0);
    const [limitItem,setLimitItem] = useState(12);
    const { data, run, loading } = useRequest(homeService.getRecentlyPlayedGames, {
        manual: true,
        onError: (res, params) => {
            return res;
        },
        onSuccess: (data) => {
            if (data !== null) {
                setGameList(data);
                getLimitItem(data)
                setRepeatGrid();
            } else {
                setGameList([]);
            }
        },
    });
    
    function getLimitItem(gameList:any){
        const gameListLength = gameList&&gameList.length;
        if(gameListLength < 24){
            setLimitItem(12)
        }
        if(gameListLength >= 24){
            setLimitItem(24)
        }
    }

    function setRepeatGrid (){
        if(limitItem == 12){
            setRepeat(2)
        }
        if(limitItem == 24){
            setRepeat(4)
        }
    }
    useEffect(() => {
        run();
    }, [limitItem]);

    if (isDesktop) return <ContentPopularGameDesktop gameList={gameList.length > 0 && gameList.slice(0, limitItem)} repeat={repeat}/>
    if (isTablet) return <ContentPopularGameTablet gameList={gameList.length > 0 && gameList.slice(0, 20)} />

    return <ContentPopularGameMobile gameList={gameList.slice(0, 9)} />
}

export default ListItemRecentPlayedGames


const ContentPopularGameDesktop = ({ gameList,repeat }: any) => {
    const [ref, element] = useElementWidth()
    const [itemWidth, setItemWidth] = useState<number>(0)
   
    useEffect(() => {
        const itemWidth = (element?.width - (22 * 8)) / 9
        setItemWidth(itemWidth)
    }, [ref, element?.width,repeat])
    return (
        <div className={gameList&&gameList.length >= 24 ? styles.itemGrid : styles.itemGrid_12} ref={ref}
            style={{ gridTemplateColumns: `repeat(9, ${itemWidth}px)`, gridTemplateRows: `repeat(${repeat}, ${itemWidth}px)` }}
        >
            {
                gameList && gameList.map((game: any, index: number) => (
                    <div key={index} className={styles[`ip${index}`]}>
                        <GameThumbnail {...GameInfo(game)} isHover />
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
        <div className={styles.itemGridTablet} ref={ref}
            style={{ gridTemplateColumns: `repeat(8, ${itemWidth}px)`, gridTemplateRows: `repeat(2, ${itemWidth}px)` }}
        >
            {
                gameList && gameList.map((game: any, index: number) => (
                    <div key={index} className={styles[`tl${index}`]}>
                        <GameThumbnail {...GameInfo(game)} isHover />
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
        <div className={styles.itemGridMobile} ref={ref}
            style={{ gridTemplateColumns: `repeat(3, ${itemWidth}px)`, gridTemplateRows: `repeat(3, ${itemWidth}px)` }}
        >
            {
                gameList.map((game: any, index: number) => (
                    <div key={index} className={styles[`mb${index}`]}>
                        <GameThumbnail {...GameInfo(game)} isHover />
                    </div>
                ))
            }
        </div>
    )
}