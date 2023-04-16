import React, { FC, useState } from 'react';
import cs from '@/utils/cs';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Game.module.scss';
import { IconFavourite, IconFavouriteSmall } from '@/components/Atoms/Icons';
import VideoThumbnail from '@/components/Molecules/VideoThumbnail';
import useScreenSize from '@/utils/useScreenSize';
import GamesService from '@/app/services/gameService';
import useElementSize from '@/utils/useElementSize';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
interface Props {
  isHover?: boolean;
  videoUrl?: string;
  gameId: number;
  gameName: string;
  gameImage: string;
  slug?: string;
  isNew?: boolean;
  isHot?: boolean;
  isFavourite?: boolean;
  isLargeItem?: boolean;
  isLightEffect?: boolean
}

const GameThumbnail: FC<Props> = (x) => {
  const { ref, size } = useElementSize();
  const [isHovering, setIsHovering] = useState(false);
  const { isDesktop } = useScreenSize()


  const acreage = size.height * size.width;
  const minSize = 176 * 176;

  const TagShow = () => {
    if (!x.isNew && !x.isHot) return null;

    return (
      // <div className={x.isLargeItem ? styles.tagLarge : styles.tag}>
      <div className={acreage < minSize ? styles.tag : styles.tagLarge}>
        {x.isHot ? 'HOT' : 'NEW'}
      </div>
    );
  };

  const Favourite = () => {
    if (!GamesService.getFavoriteGames()) return null;

    return (
      <div
        className={cs([
          styles.favourite,
          acreage < minSize ?
            styles.favouriteSmall : ''
        ])}
      >
        <IconFavourite />
      </div>
    );
  };

  const ThumbnailHoverDecktop = () => {
    if (isHovering && x.isHover && isDesktop) {
      return (
        <VideoThumbnail
          src={`${process.env.IMAGE_URL}${x.videoUrl}`}
          autoPlay={isHovering}
          gameName={x.gameName}
        />
      )
    }
    return (
      <div className='w-full h-full rounded-[10px] overflow-hidden relative'>
        <Image
          loader={loaderImage}
          src={x.gameImage}
          alt={'recommended-for-you'}
          fill
          priority={true}
          sizes='(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw'
        />
        {
          x.isLightEffect &&
          <Image className={styles.lightEffect} src="icons/light-effect.svg" alt='light effect' width={768} height={768} />}
      </div>
    )
  }

  return (
    <div
      ref={ref}
      className={cs(["relative flex h-full w-full", styles.wrapper])}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Link
        href={x.slug || '/'}
        className={cs([styles.itemGame, 'flex items-center h-full w-full relative'])}
      >
        {GamesService.isGameFavorite(x.gameId) ? <Favourite /> : <TagShow />}
        <ThumbnailHoverDecktop />
      </Link>
      <TitleHoverDecktop {...x} />
    </div>
  );
};

export default GameThumbnail;

const loaderImage = ({ src, width }: any) => {
  return process.env.IMAGE_URL + src;
};

const TitleHoverDecktop = (x: any) => {
  const { isDesktop } = useScreenSize()
  if (!isDesktop) return null

  function toggleFavourite() {
    const listGameFavorite = GamesService.getFavoriteGames();
    if (listGameFavorite.includes(x.gameId)) {
      GamesService.removeFavoriteGame(x.gameId);
    } else {
      GamesService.addFavoriteGame(x.gameId);
    }
  }

  return (
    <Link
      href={x.slug || '/'}
      className={cs(['absolute', styles.title])}
    >
      {x.gameName}

      <span
        className={cs(['absolute', styles.actionFavourite])} onClick={(e) => {
          e?.preventDefault()
        }}
      >
        <span onClick={toggleFavourite} className={cs(["relative bottom-1", styles.favoriteIcon])}>
          {GamesService.isGameFavorite(x.gameId) ?
            <FavoriteIcon className='text-red-500' />
            :
            <FavoriteBorderIcon className='' />
          }
        </span>
      </span>
    </Link>
  )
}