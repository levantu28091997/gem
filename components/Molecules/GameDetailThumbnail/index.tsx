import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import imageLoader from '@/utils/useImageLoader';
import ProcessBarGame from './ProcessBarGame';
import { IconPlayGame } from '@/components/Atoms/Icons';
import LoadingGameThumbnail from '../LoadingGameThumbnail';
interface Props {
  slug: string;
  gameImage: string;
  gameName: string;
  gameId: number;
}
const propsProcessBar = (x: any) => {
  return {
    author: 'Apero',
    gameId: x.gameId,
    slug: x.slug,
    gameName: x.gameName,
    gameImage: x.gameImage
  };
};
export default function GameDetailThumbnail(x: Props) {
  return (
    <div className='relative w-auto mt-5 mb-10'>
      {x.gameImage !== null && (
        <div>
          <div className='w-full relative'>
            {x.gameImage ? (
              <>
                <Link href={`/playgame/${x.slug}`}>
                  <span className='absolute top-[50%] left-1/2 bottom-1/4 transform -translate-x-1/2 -translate-y-1/2 z-10'>
                    <IconPlayGame />
                  </span>
                </Link>
                <div className='relative '>
                  <div className='absolute bg-black opacity-25 top-0 left-0 h-full w-full rounded-t-[10px]'></div>
                  <Image
                    loader={imageLoader}
                    className='rounded-t-[10px] h-full w-full object-cover'
                    src={x.gameImage}
                    alt={'yourlastestgame'}
                    width={1150}
                    height={302}
                  />
                </div>
                <ProcessBarGame {...propsProcessBar(x)} />
              </>
            ) : (
              <LoadingGameThumbnail />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
