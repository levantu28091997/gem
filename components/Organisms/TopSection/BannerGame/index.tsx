import React, { FC, useState } from 'react'
import cs from '@/utils/cs'
import Image from 'next/image'
import Link from 'next/link'
import styles from './BannerGame.module.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GamesService from '@/app/services/gameService'
interface Props {
    gameName: string;
    gameId: number;
    gameImage: string;
    slug?:string
}
const loaderImage = ({ src }: any) => {
    return process.env.IMAGE_URL + src;
  };
const BannerGame:FC<Props> = (x) => {
  const [isFavourite,setIsFavourite] = useState(false);

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
            loader={loaderImage}
            className='h-full rounded-[10px]'
            src={x.gameImage}
            alt={x.gameName}
            width={1150}
            height={302}
          />
        )}
        <div
          className={cs([styles.actionBanner, 'absolute flex items-center'])}
        >
          <Link href={x.slug || '/'}>Play now</Link>
          <span className='pl-3.5 xl:pl-10'>
            <span className='text-5xl cursor-pointer' onClick={toggleFavourite}>
              {GamesService.isGameFavorite(x.gameId) ? (
                <FavoriteIcon fontSize='inherit' className='text-red-500' />
                ) : (
                <FavoriteBorderIcon fontSize='inherit' className='text-white '/>
              )}
            </span>
          </span>
        </div>
      </div>
    );
}

export default BannerGame