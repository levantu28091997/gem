import { useRequest } from 'ahooks';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';

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
export default function index() {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const router = useRouter();
  const { isMobile, isTablet } = useScreenSize();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [gameCurrent, setGameCurrent] = useState<any>();
  const [listCategories, setListCategories] = useState<any>([]);
  const [listGameRecommended, setListGameRecommended] = useState<any>([]);
  const [metaContent, setMetaContent] = useState<any>([]);
  const { webSocketService, setWebSocketService } = useAppContext();
  const gameUrl = router.query.game;

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

  const { run } = useRequest(homeService.getDetailGameBySlug, {
    manual: true,
    onError: (res, params) => {
      return res;
    },
    onSuccess: (data: any) => {
      setGameCurrent(data[0]);
      handlePlayGame(data[0]);
      setListCategories((data[0] as any)?.attributes?.categories?.data);
      addIdGameToLocalStorage(data[0].id);
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

  function getMetaContent(data: any) {
    const image =
      process.env.IMAGE_URL +
      data[0]?.attributes?.thumbnail?.data.attributes.url;
    const name = data[0]?.attributes?.name;
    const description = 'Share the game with your friends and family';
    setMetaContent({ image, name, description });
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
    homeService.getRecommendedGames,
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
    if (listCategories.length) {
      runGameRecommended();
    }
  }, [listCategories]);

  const [srcIframe, setSrcIframe] = useState('');

  useEffect(() => {
    if (gameCurrent !== undefined && gameCurrent?.id) {
      setSrcIframe(
        process.env.IFRAME_URL + `games/${gameCurrent.id}/index.html`,
      );
    }
  }, [gameCurrent]);

  if (isMobile || isTablet) {
    return (
      <div className='relative'>
        <div
          className={cs(['absolute', styles.iconBack])}
          onClick={() => router.back()}
        >
          <ArrowBackIosNewRoundedIcon />
        </div>
        <iframe
          frameBorder='no'
          scrolling='no'
          seamless
          className={
            isMobile ? `w-full h-[calc(100vh_-_58px)]` : `w-full h-[100vh]`
          }
          src={srcIframe}
        ></iframe>
        {isMobile && (
          <ProcessBarGameMobile
            onShare={handleOpenModalShare}
            gameCurrent={gameCurrent}
          />
        )}
      </div>
    );
  }

  return (
    <div className='mx-auto w-full max-w-full relative z-10 main'>
      <Head>
        <>
          <title>{metaContent?.name}</title>
          <meta name='title' content={metaContent?.name} />
          <meta name='description' content={metaContent?.description} />
          <meta property='og:type' content='website' />
          <meta property='og:url' content={currentUrl} />
          <meta property='og:title' content={metaContent?.name} />
          <meta property='og:description' content={metaContent?.description} />
          <meta property='og:image' content={metaContent?.image} />
        </>
      </Head>
      <PopupShareGame
        isOpen={isOpenModal}
        onClose={handleCloseModalShare}
        contentShare={contentShare}
      />
      <GamePlaying
        onShare={handleOpenModalShare}
        listGameRecommended={listGameRecommended}
        gameCurrent={gameCurrent}
      />
      <div className='h-20'></div>
      <Description {...propsDescription(gameCurrent)} />
    </div>
  );
}

index.layout = 'defaultNoDarkTheme';
