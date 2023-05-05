import GamesService from '@/app/services/gameService';
import ProcessBarGame from '@/components/Molecules/ProcessBarGame';
import useScreenSize from '@/utils/useScreenSize';
import React, { useEffect, useState } from 'react';
import ScreenGame from './ScreenGame';

export default function index({ onShare, gameCurrent }: any) {
  const [zoom, setZoom] = useState(false);
  const [isFavour, setIsFavour] = useState(false);
  const iframeRef = React.useRef<any>();
  const [rotate, setRotate] = useState(true);
  const { isMobile } = useScreenSize();

  function checkRotate() {
    setTimeout(() => {
      // Get the iframe element
      const iframe: any = document.querySelector('iframe');
      // Send a message to the iframe
      iframe?.contentWindow.postMessage('getLandscape', '*');

      // Listen for a message from the iframe
      window.addEventListener('message', (event) => {
        //  console.log('Landscape:',event.data);
      });
    }, 4000);
  }

  function handleClickZoom() {
    iframeRef.current.requestFullscreen();
  }
  function toggleFavourite() {
    setIsFavour(!isFavour);
    if (GamesService.isGameFavorite(gameCurrent?.id)) {
      GamesService.removeFavoriteGame(gameCurrent?.id);
    } else {
      GamesService.addFavoriteGame(gameCurrent?.id);
    }
  }
  useEffect(() => {
    if(GamesService.isGameFavorite(gameCurrent?.id)){
      setIsFavour(true)
    }else{
      setIsFavour(false)
    }
  }, [gameCurrent, isFavour]);
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

  useEffect(() => {
    checkRotate();
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
