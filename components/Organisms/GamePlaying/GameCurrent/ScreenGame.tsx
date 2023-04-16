import React, { useEffect, useState } from 'react';
export default function ScreenGame({
    iframeRef,
    gameCurrent,
}: {
    iframeRef: any;
    gameCurrent: any;
}) {
    const [srcIframe, setSrcIframe] = useState('');

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
            className='w-full absolute h-[calc(100%_-_64px)]'
            src={srcIframe}
        ></iframe>
    );
}
