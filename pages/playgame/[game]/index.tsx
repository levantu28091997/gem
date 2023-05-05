import { useRequest } from 'ahooks';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useRef, useState } from 'react';

import cs from '@/utils/cs';
import styles from './index.module.scss';
import useScreenSize from '@/utils/useScreenSize';
import { homeService } from '@/app/services/homeService';
import Description from '@/components/Organisms/Description';
import GamePlaying from '@/components/Organisms/GamePlaying';
import { ProcessBarGameMobile } from '@/components/Molecules/ProcessBarGame';
import PopupShareGame from '@/components/Molecules/PopupShareGame/PopupShareGame';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import WebSocketService from '@/app/services/websocketService';
import { useAppContext } from '@/app/context/AppProvider';
import GamesService from '@/app/services/gameService';
import Head from 'next/head';
import propsDescription from '@/utils/propsDescription';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import PopularTags from '@/components/Organisms/PopularTags';
import useIsLandscape from '@/utils/useIsLandscape';
import ZoomOutMap from '@mui/icons-material/ZoomOutMap';
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';
import LoadingGameThumbnail from '@/components/Molecules/LoadingGameThumbnail';
interface Meta {
  image : string,
  gameName : any,
  url: string,
  description: string,
}

interface Props {
  meta: Meta;
}
enum ORIENTATION {
  PORTRAIT = 'Portrait',
  LANDSCAPE = 'Landscape' 
}

export const getServerSideProps: GetServerSideProps<Props> = async (context : any) => {
  const gameSlug = context.params.game
  const currentUrl = context.req.url;
    // Call API to fetch data
    const { data } = await axios.get(`${process.env.BASE_URL}games?populate=*&filters[slug]=${gameSlug}`);
    const description = data.data[0] && data.data[0]?.attributes?.description
    const meta = {
      image : process.env.IMAGE_URL + data.data[0]?.attributes?.thumbnail?.data.attributes.url,
      gameName : data.data[0]?.attributes?.name || null,
      url: process.env.IMAGE_URL + currentUrl,
      description : description && description.replace(/\r?\n|\r/g, '') || 'Share game',
    }

    return {
      props: {
        meta: meta,
      },
    };
};
export default function index({ meta }: Props) {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const router = useRouter();
  const { isMobile, isTablet } = useScreenSize();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [gameCurrent, setGameCurrent] = useState<any>();
  const [listCategories, setListCategories] = useState<any>([]);
  const [listGameRecommended, setListGameRecommended] = useState<any>([]);
  const { webSocketService, setWebSocketService } = useAppContext();
  const [isLandscape,setLandScape] = useState(false);
  const gameUrl = router.query.game;

  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [isDragging, setIsDragging] = useState(false);

  const handleDrag = (
    e: DraggableEvent,
    { x, y }: DraggableData
  ): void => {
    setPosition({
      x: isLandscape ? x : position.x,
      y: isLandscape ? position.y : y,
    });
    setIsDragging(true);
  };
  const handleStopDrag = (
    e: DraggableEvent,
    { x, y }: DraggableData
  ): void => {
    setPosition({
      x: isLandscape ? x : position.x,
      y: isLandscape ? position.y : y,
    });
    setIsDragging(false);
    routerback()
  };
  const routerback = () => {
    if (isDragging==false) {
      router.back();
    }
  };
  const contentShare = {
    url: currentUrl,
    quote: 'play game with me',
    hashtag: '#apero',
  };
  
  function handleCloseModalShare() {
    setIsOpenModal(false);
  }
  function handleOpenModalShare() {
    setIsOpenModal(true);
  }
  const { loading,run } = useRequest(homeService.getDetailGameBySlug, {
    manual: true,
    onError: (res, params) => {
      return res;
    },
    onSuccess: (data: any) => {
      checkRotate(data[0]);
      setGameCurrent(data[0]);
      handlePlayGame(data[0]);
      setListCategories((data[0] as any)?.attributes?.categories?.data);
      addIdGameToLocalStorage(data[0].id);
      addLatestGameIdToLocalStorage(data[0].id);
    },
  });

  const handlePlayGame = async (data: any) => {
    const webSocketService = new WebSocketService();
    setWebSocketService(webSocketService);
    try {
      setTimeout(() => {
        webSocketService.playGame({ game_id: data.id });
        console.log('Game played successfully');
      }, 1000); //
    } catch (error) {
      console.error('Error playing game:', error);
    }
  };

  const addIdGameToLocalStorage = (idGame: number) => {
    GamesService.addIdPlayedGame(idGame);
  };
  
  function checkRotate(gameCurrent:any) {
    if(gameCurrent?.attributes?.orientation == ORIENTATION.LANDSCAPE){
      setLandScape(true)
    }else{
      setLandScape(false)
    }
  }

  function addCategoryIdToLocalStorage() {
    // lấy mảng category từ gameCurrent
    const listCategories = gameCurrent?.attributes?.categories?.data;
    if (Array.isArray(listCategories)) {
      // duyệt mảng, thêm từng phần tử vào localStorage
      listCategories.forEach((categoryId) => {
        if (categoryId !== null && categoryId !== undefined) {
          GamesService.addPlayedCategoryGame(categoryId.id);
        }
      });
    }
  }
  function addLatestGameIdToLocalStorage(gameIdLatest: any) {
    GamesService.addIdLatestGame(gameIdLatest)
  }
  useEffect(() => {
    if (webSocketService) {
      webSocketService.close();
    }

    if (gameUrl !== undefined) {
      run(String(gameUrl));
    }
  }, [gameUrl]);

  const { run: runGameRecommended } = useRequest(
    homeService.getRandomGames,
    {
      manual: true,
      onError: (res, params) => {
        return res;
      },
      onSuccess: (data) => {
        setListGameRecommended(data);
        addCategoryIdToLocalStorage();
      },
    },
  );
  useEffect(() => {
    if (gameUrl !== undefined) {
      runGameRecommended(String(gameUrl));
    }
  }, [gameUrl]);

  const [srcIframe, setSrcIframe] = useState('');

  useEffect(() => {
    if (gameCurrent !== undefined && gameCurrent?.id) {
      setSrcIframe(
        process.env.IFRAME_URL + `games/${gameCurrent.id}/index.html`,
      );
    }
  }, [gameCurrent]);

  const refMobile = useRef<any>(null);

  useEffect(() => {
    const element = refMobile && refMobile.current;

    if (element?.requestFullscreen) {
      element?.requestFullscreen();
    } else if (element?.webkitRequestFullscreen) {
      element?.webkitRequestFullscreen();
    } else if (element?.mozRequestFullScreen) {
      element?.mozRequestFullScreen();
    } else if (element?.msRequestFullscreen) {
      element?.msRequestFullscreen();
    }
  }, [isMobile, refMobile]);

  if (isMobile) {
    return (
      <>
        <Head>
          <>
            <title>{meta?.gameName}</title>
            <meta name='title' content={meta?.gameName} />
            <meta name='description' content={meta?.description} />
            <meta property='og:type' content='website' />
            <meta property='og:url' content={meta?.url} />
            <meta property='og:title' content={meta?.gameName} />
            <meta property='og:description' content={meta?.description} />
            <meta property='og:image' content={meta?.image} />
          </>
        </Head>
        <div className='relative' ref={refMobile}>
          <Draggable
            axis={isLandscape ? 'x' : 'y'}
            position={position}
            onDrag={handleDrag}
            onStop={handleStopDrag}
            bounds={{ left: 0, top: 0, right: window.innerWidth, bottom: window.innerHeight }}
          >
            <div
              className={cs([
                isLandscape && styles.iconBackRotate,
                styles.iconBack,
              ])}
              style={{ left: isLandscape ? `${position.x}px` : `${position.x}px` }}
              onClick={() => router.back()}
            >
              <ArrowBackIosNewRoundedIcon />
            </div>
          </Draggable>
          <iframe
            frameBorder='no'
            scrolling='no'
            seamless
            className={
              isMobile
                ? cs([
                    `w-full h-[calc(100vh_-_58px)]`,
                    isLandscape ? styles.iframeLandscape : '',
                  ])
                : `w-full h-[100vh]`
            }
            src={srcIframe}
          ></iframe>
          {isMobile && !isLandscape && (
            <div className='relative bottom-0'>
              <ProcessBarGameMobile
                onShare={handleOpenModalShare}
                gameCurrent={gameCurrent}
              />
            </div>
          )}
        </div>
      </>
    );
  }

  return (
    <div className='mx-auto w-full max-w-full relative z-10 main'>
      <Head>
        <>
          <title>{meta?.gameName}</title>
          <meta name='title' content={meta?.gameName} />
          <meta name='description' content={meta?.description} />
          <meta property='og:type' content='website' />
          <meta property='og:url' content={meta?.url} />
          <meta property='og:title' content={meta?.gameName} />
          <meta property='og:description' content={meta?.description} />
          <meta property='og:image' content={meta?.image} />
        </>
      </Head>
      <PopupShareGame
        isOpen={isOpenModal}
        onClose={handleCloseModalShare}
        contentShare={contentShare}
      />
      {loading && <LoadingGameThumbnail/>}
     <GamePlaying
        onShare={handleOpenModalShare}
        listGameRecommended={listGameRecommended}
        gameCurrent={gameCurrent}
      />
      <div className='h-20'></div>
      <div className='flex'>
        <Description {...propsDescription(gameCurrent)} />
      </div>
      <PopularTags />
    </div>
  );
}

index.layout = 'defaultNoDarkTheme';
