import React, { useEffect, useState } from 'react';

function index({ src, autoPlay, gameName }: any) {
    const [play, setPlay] = useState(autoPlay)

    useEffect(() => {
        setTimeout(() => {
            setPlay(autoPlay)
        }, 700)
    }, [autoPlay])

    return (
        <div className='video absolute w-full h-full overflow-hidden rounded-[10px]'>
            <video
                src={src}
                autoPlay={play}
                loop
                muted
                className='absolute w-full h-full'
            />
        </div>
    );
}

export default index;
