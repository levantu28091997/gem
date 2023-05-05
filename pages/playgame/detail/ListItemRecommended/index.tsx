
import { homeService } from '@/app/services/homeService';
import GameThumbnail from '@/components/Molecules/GameThumbnail';
import { GameInfo } from '@/utils/propItemGame';
import { useElementWidth } from '@/utils/useElementWidth';
import { useRequest } from 'ahooks';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

export default function ListItemRecommended() {
    const router = useRouter();
    const [gameList, setGameList] = useState<any>([]);
    const [itemWidth, setItemWidth] = useState<number>(0)
    const [ref, element] = useElementWidth()
    const gameUrl = router.query.game;
    const { data, run, loading } = useRequest(homeService.getRandomGames, {
        manual: false,
        onError: (res, params) => {
          return res;
        },
        onSuccess: (data) => {
          setGameList(data);
        },
      });
  useEffect(() => {
    run(String(gameUrl))
    const itemWidth = (element?.width - 8 * 4) / 3;
    setItemWidth(itemWidth)
  }, [ref, element?.width])
  
  return (
    <div className='mb-10 w-full ' ref={ref}>
    <div className='grid gap-4 justify-between'  
    style={{ gridTemplateColumns: `repeat(3, ${itemWidth}px)`, gridTemplateRows: `repeat(3, ${itemWidth}px)` }}
    >
      {gameList && gameList.map((game:any)=>(
        <div className='w-full h-full'>
          <GameThumbnail {...GameInfo(game)}/>
        </div>
      ))}
    </div>
  </div>
  )
}
