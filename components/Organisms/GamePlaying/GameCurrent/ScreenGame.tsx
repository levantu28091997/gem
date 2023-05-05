import React, { useEffect, useState } from 'react';
import style from './screenGame.module.scss';
export default function ScreenGame({
  iframeRef,
  gameCurrent,
}: {
  iframeRef: any;
  gameCurrent: any;
}) {
  const [srcIframe, setSrcIframe] = useState('');

  useEffect(() => {
    const iframe = iframeRef.current;

    // Send a message to the iframe to add a background image to the body
    const handleMessage = () => {
      // iframe.contentWindow.document.querySelector(
      //   'body',
      // ).style.backgroundImage =
      //   'http://localhost:3000/_next/static/media/bg_iframe.1b554a18.png';
      //   iframe.contentWindow.postMessage(()
      //     'addBackgroundImage',
      //     'http://localhost:3000/_next/static/media/bg_iframe.1b554a18.png',
      //   );
    };
    iframe.addEventListener('load', handleMessage);

    return () => {
      iframe.removeEventListener('load', handleMessage);
    };
  }, []);

  useEffect(() => {
    if (gameCurrent?.id) {
      setSrcIframe(
        process.env.IFRAME_URL + `games/${gameCurrent?.id}/index.html`,
      );
    }
  }, [gameCurrent]);

  return (
    <iframe
      ref={iframeRef}
      frameBorder='no'
      scrolling='no'
      seamless
      id='iframe_bg'
      className={`${style.bg_iframe} w-full absolute h-[calc(100%_-_83px)] rounded-t-md`}
      src={srcIframe}
    ></iframe>
  );
}
