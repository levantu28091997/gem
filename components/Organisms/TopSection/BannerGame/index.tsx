import React, { FC, useState } from 'react'
import cs from '@/utils/cs'
import Image from 'next/image'
import Link from 'next/link'
import styles from './BannerGame.module.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GamesService from '@/app/services/gameService'
import imageLoader from '@/utils/useImageLoader'
interface Props {
  gameName: string;
  gameId: number;
  gameImage: string;
  slug?: string
}

const BannerGame: FC<Props> = (x) => {
  const [isFavourite, setIsFavourite] = useState(false);

  function toggleFavourite() {
    setIsFavourite(!isFavourite)
    if (GamesService.isGameFavorite(x.gameId)) {
      GamesService.removeFavoriteGame(x.gameId);
    } else {
      GamesService.addFavoriteGame(x.gameId);
    }
  }

  return (
    <div className='bannerGame h-full relative'>
      {x.gameImage && (
        <Image
          loader={imageLoader}
          className='h-full rounded-[10px]'
          src={x.gameImage}
          alt={x.gameName}
          width={1150}
          height={302}
          priority
        />
      )}
      <div
        className={cs([styles.actionBanner, 'absolute flex items-center'])}
      >
        <Link href={x.slug || '/'}>Play now</Link>
      </div>
    </div>
  );
}

export default BannerGame