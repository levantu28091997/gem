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
import imageLoader from '@/utils/useImageLoader';
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


  const ImageMemo = React.memo(Image, (prevProps, nextProps) => {
    return prevProps.src === nextProps.src && prevProps.alt === nextProps.alt;
  });

  return (
    <div
      className={cs(["relative flex h-full w-full", styles.wrapper])}
    >
      <Link
        href={x.slug || '/'}
        className={cs([styles.itemGame, 'flex items-center h-full w-full relative'])}
      >
        <div className='w-full h-full rounded-[10px] overflow-hidden relative'>
          <ImageMemo
            loader={imageLoader}
            src={x.gameImage}
            alt={'recommended-for-you'}
            fill
            sizes='(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw'
            priority
            placeholder="blur"
            blurDataURL="/icons/loading.gif"
          />
        </div>
      </Link>
    </div>
  );

  // const { ref, size } = useElementSize();
  // const [isHovering, setIsHovering] = useState(false);
  // const { isDesktop, isTablet, isMobile } = useScreenSize()


  // const acreage = size.height * size.width;
  // const minSize = 176 * 176;

  // const TagShow = () => {
  //   if (!x.isNew && !x.isHot) return null;

  //   return (
  //     <div className={acreage < minSize && isDesktop ? styles.tag : styles.tagLarge}>
  //       {x.isHot ? 'HOT' : 'NEW'}
  //     </div>
  //   );
  // };

  // const Favourite = () => {
  //   if (!GamesService.getFavoriteGames()) return null;

  //   return (
  //     <div
  //       className={cs([
  //         styles.favourite,
  //         acreage < minSize ?
  //           styles.favouriteSmall : ''
  //       ])}
  //     >
  //       <IconFavourite />
  //     </div>
  //   );
  // };

  // const ThumbnailHoverDesktop = () => {
  //   if (isHovering && x.isHover && isDesktop) {
  //     return (
  //       <VideoThumbnail
  //         src={`${process.env.IMAGE_URL}${x.videoUrl}`}
  //         autoPlay={isHovering}
  //         gameName={x.gameName}
  //       />
  //     )
  //   }
  //   return (
  //     <div className='w-full h-full rounded-[10px] overflow-hidden relative'>
  //       <Image
  //         loader={imageLoader}
  //         src={x.gameImage}
  //         alt={'recommended-for-you'}
  //         fill
  //         sizes='(max-width: 768px) 100vw,
  //         (max-width: 1200px) 50vw,
  //         33vw'
  //         priority
  //         placeholder="blur"
  //         blurDataURL="/icons/loading.gif"
  //       />
  //       {
  //         x.isLightEffect &&
  //         <Image className={styles.lightEffect} src="icons/light-effect.svg" alt='light effect' width={768} height={768} />}
  //     </div>
  //   )
  // }

  // return (
  //   <div
  //     ref={ref}
  //     className={cs(["relative flex h-full w-full", styles.wrapper])}
  //     onMouseEnter={() => { return isMobile ? null : setIsHovering(true) }}
  //     onMouseLeave={() => { return isMobile ? null : setIsHovering(false) }}
  //   >
  //     <Link
  //       href={x.slug || '/'}
  //       className={cs([styles.itemGame, 'flex items-center h-full w-full relative'])}
  //     >
  //       {GamesService.isGameFavorite(x.gameId) ? <Favourite /> : <TagShow />}
  //       <ThumbnailHoverDesktop />
  //     </Link>
  //     <TitleHoverDecktop {...x} />
  //   </div>
  // );
};

export default React.memo(GameThumbnail);

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

      {/* <span
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
      </span> */}
    </Link>
  )
}