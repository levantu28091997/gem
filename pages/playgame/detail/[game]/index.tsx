import { homeService } from '@/app/services/homeService';
import GameDetailThumbnail from '@/components/Molecules/GameDetailThumbnail';
import Description from '@/components/Organisms/Description';
import { useRequest } from 'ahooks';
import Head from 'next/dist/shared/lib/head';
import { useRouter } from 'next/router';
import React,{useEffect,useState} from 'react'
import propsDescription from '@/utils/propsDescription';
import PopularCategories from '@/components/Organisms/PopularCategories';
import useScreenSize from '@/utils/useScreenSize';
import ListItemRecommended from '../ListItemRecommended';

function propsItem(data:any){
  const gameId = data?.attributes?.id;
  const slug = data?.attributes?.slug;
  const gameName = data?.attributes?.name;
  const gameImage = data?.attributes?.thumbnail?.data?.attributes?.url;
  return {gameId,slug,gameName,gameImage}
}

export default function Detail() {
  const router = useRouter();
  const slugCurrent = router.query.game
  const [gameCurrent,setGameCurrent] = useState<any>([]);

  const { isMobile, isTablet } = useScreenSize();


  const { run } = useRequest(homeService.getDetailGameBySlug, {
    manual: true,
    onError: (res, params) => {
      return res;
    },
    onSuccess: (data: any) => {
      setGameCurrent(data[0])
      AutoRedirectToPlayGameIsDesktop()
    },
  });


  useEffect(() => {
    if (slugCurrent !== undefined) {
      run(String(slugCurrent));
    }
  }, [slugCurrent,isMobile]);

  function AutoRedirectToPlayGameIsDesktop(){
    if(!isMobile){
      router.push(`/playgame/${slugCurrent}`)
    }
  }
  return (
    <>
      <Head>
        <title>Gamedetail</title>
      </Head>
      <div className='mx-auto w-full max-w-full relative z-10 main'>
        <GameDetailThumbnail {...propsItem(gameCurrent)}/>
        <ListItemRecommended />
        <Description {...propsDescription(gameCurrent)}/>
        <PopularCategories />
      </div>
    </>
  )
}
