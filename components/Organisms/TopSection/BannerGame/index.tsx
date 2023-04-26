import React, { FC, useState } from 'react';
import cs from '@/utils/cs';
import Image from 'next/image';
import Link from 'next/link';
import styles from './BannerGame.module.scss';
import GamesService from '@/app/services/gameService';
import imageLoader from '@/utils/useImageLoader';
interface Props {
  gameName: string;
  gameId: number;
  gameImage: string;
  slug?: string;
}

const BannerGame: FC<Props> = (x) => {
  const [isFavourite, setIsFavourite] = useState(false);

  function toggleFavourite() {
    setIsFavourite(!isFavourite);
    if (GamesService.isGameFavorite(x.gameId)) {
      GamesService.removeFavoriteGame(x.gameId);
    } else {
      GamesService.addFavoriteGame(x.gameId);
    }
  }

  return (
    <div className='bannerGame h-full relative'>
      {x.gameImage && (
        <Link href={x.slug || '/'}>
          {/* <Image
            loader={imageLoader}
            className='h-full rounded-[10px]'
            src={x.gameImage}
            alt={x.gameName}
            width={1150}
            height={302}
            priority
            sizes='(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw'
            placeholder='blur'
            blurDataURL='/icons/loading.gif'
          /> */}
          <img src="https://placehold.co/1134x638" alt="plahoder" />
        </Link>
      )}
      <div className={cs([styles.actionBanner, 'absolute flex items-center'])}>
        <Link href={x.slug || '/'}>Play now</Link>
      </div>
    </div>
  );
};

export default BannerGame;
