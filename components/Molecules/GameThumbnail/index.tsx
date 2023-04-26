import GamesService from '@/app/services/gameService';
import { IconFavourite } from '@/components/Atoms/Icons';
import VideoThumbnail from '@/components/Molecules/VideoThumbnail';
import cs from '@/utils/cs';
import useElementSize from '@/utils/useElementSize';
import imageLoader from '@/utils/useImageLoader';
import useScreenSize from '@/utils/useScreenSize';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC, useState } from 'react';
import styles from './Game.module.scss';
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
  isLightEffect?: boolean;
}

const GameThumbnail: FC<Props> = (x) => {
  const { ref, size } = useElementSize();
  const [isHovering, setIsHovering] = useState(false);
  const { isDesktop, isMobile } = useScreenSize();
  const isFavourite = React.useMemo(
    () => GamesService.isGameFavorite(x.gameId),
    [x.gameId],
  );

  const acreage = size.height * size.width;
  const minSize = 176 * 176;
  const isTagSmall = React.useMemo(() => acreage < minSize && isDesktop, []);

  const ThumbnailHoverDesktop = React.memo(() => {
    if (isHovering && x.isHover && isDesktop)
      return (
        <VideoThumbnail
          src={`${process.env.IMAGE_URL}${x.videoUrl}`}
          autoPlay={isHovering}
          gameName={x.gameName}
        />
      );

    return (
      <ThumbnailImage src={x?.gameImage} isLightEffect={x.isLightEffect} />
    );
  });

  return (
    <div
      ref={ref}
      className={cs(['relative flex h-full w-full', styles.wrapper])}
      onMouseEnter={() => {
        return isMobile ? null : setIsHovering(true);
      }}
      onMouseLeave={() => {
        return isMobile ? null : setIsHovering(false);
      }}
    >
      <Link
        href={x.slug || '/'}
        className={cs([
          styles.itemGame,
          'flex items-center h-full w-full relative',
        ])}
      >
        <TagShow
          isFavourite={isFavourite}
          isNew={x.isNew}
          isHot={x.isHot}
          isTagSmall={isTagSmall}
        />
        <ThumbnailHoverDesktop />
      </Link>
      <TitleHoverDecktop {...x} />
    </div>
  );
};

export default React.memo(GameThumbnail);

const TitleHoverDecktop = (x: any) => {
  const { isDesktop } = useScreenSize();
  if (!isDesktop) return null;

  function toggleFavourite() {
    const listGameFavorite = GamesService.getFavoriteGames();
    if (listGameFavorite.includes(x.gameId)) {
      GamesService.removeFavoriteGame(x.gameId);
    } else {
      GamesService.addFavoriteGame(x.gameId);
    }
  }

  return (
    <Link href={x.slug || '/'} className={cs(['absolute', styles.title])}>
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
  );
};

export const GameThumbnailMobile: FC<Props> = (x) => {
  const isFavourite = React.useMemo(
    () => GamesService.isGameFavorite(x.gameId),
    [x.gameId],
  );

  return (
    <Link
      href={x.slug || '/'}
      className={cs(['flex items-center h-full w-full relative'])}
    >
      <ThumbnailImage src={x?.gameImage} isLightEffect={x.isLightEffect} />
      <TagShow
        isFavourite={isFavourite}
        isNew={x.isNew}
        isHot={x.isHot}
        isTagSmall={false}
      />
    </Link>
  );
};

const ThumbnailImage = ({ src, isLightEffect }: any) => {
  const ImageMemo = React.memo(Image, (prevProps, nextProps) => {
    return prevProps.src === nextProps.src && prevProps.alt === nextProps.alt;
  });

  return (
    <div className='w-full h-full rounded-[10px] overflow-hidden relative'>
      {/* <ImageMemo
        loader={imageLoader}
        src={src}
        alt={'recommended-for-you'}
        fill
        sizes='(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw'
        placeholder='blur'
        blurDataURL='/icons/loading.gif'
      /> */}
      <img src="https://placehold.co/375x375" alt="plahoder" />
      {isLightEffect && (
        <Image
          className={styles.lightEffect}
          src='icons/light-effect.svg'
          alt='light effect'
          width={768}
          height={768}
        />
      )}
    </div>
  );
};

const TagShow = ({ isFavourite, isNew, isHot, isTagSmall }: any) => {
  if (isFavourite) return <Favourite />;

  return <Tag isNew={isNew} isHot={isHot} isTagSmall={isTagSmall} />;
};

const Favourite = ({ isSmall }: any) => {
  if (!GamesService.getFavoriteGames()) return null;

  return (
    <div
      className={cs([styles.favourite, isSmall ? styles.favouriteSmall : ''])}
    >
      <IconFavourite />
    </div>
  );
};

const Tag = ({ isNew, isHot, isTagSmall }: any) => {
  if (!isNew && !isHot) return null;

  return (
    <div className={isTagSmall ? styles.tag : styles.tagLarge}>
      {isHot ? 'HOT' : 'NEW'}
    </div>
  );
};
