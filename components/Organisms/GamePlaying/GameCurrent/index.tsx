import React, { useCallback, useEffect, useState } from 'react';
import ProcessBarGame from '@/components/Molecules/ProcessBarGame';
import ScreenGame from './ScreenGame';
import GamesService from '@/app/services/gameService';
import { useRouter } from 'next/router';

export default function index({ onShare, gameCurrent }: any) {
  const [zoom, setZoom] = useState(false);
  const [isFavour,setIsFavour] = useState(false);
  const iframeRef = React.useRef<any>();

  function handleClickZoom() {
    iframeRef.current.requestFullscreen();
  }
  function toggleFavourite(){
    setIsFavour(!isFavour)
    if (GamesService.isGameFavorite(gameCurrent?.id)) {
      GamesService.removeFavoriteGame(gameCurrent?.id);
    } else {
      GamesService.addFavoriteGame(gameCurrent?.id);
    }
  }
  useEffect(()=>{
    GamesService.isGameFavorite(gameCurrent?.id) && setIsFavour(true)
  },[gameCurrent,isFavour])
  useEffect(() => {
    const handleEsc = (event: { keyCode: number }) => {
      if (event.keyCode === 27) {
        setZoom(false);
      }
    };

    document.addEventListener('keydown', handleEsc, false);

    return () => {
      document.removeEventListener('keydown', handleEsc, false);
    };
  }, []);

  return (
    <div
      className={
        zoom
          ? `fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-75`
          : `flex relative`
      }
    >
      <ScreenGame iframeRef={iframeRef} gameCurrent={gameCurrent} />
      <ProcessBarGame
        onShare={onShare}
        onZoom={handleClickZoom}
        gameCurrent={gameCurrent}
        isFavourite={isFavour}
        toggleFavourite={toggleFavourite}
      />
    </div>
  );
}
