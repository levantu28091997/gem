import GamesService from '@/app/services/gameService';
import cs from '@/utils/cs';
import getSlug from '@/utils/getSlug';
import imageLoader from '@/utils/useImageLoader';
import useScreenSize from '@/utils/useScreenSize';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './BannerGame.module.scss';
interface Props {
  gameName: string;
  gameId: number;
  gameImage: string;
  slug?: string;
}

const BannerGame: FC<Props> = (x) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const { isMobile, isTablet } = useScreenSize();

  function toggleFavourite() {
    setIsFavourite(!isFavourite);
    if (GamesService.isGameFavorite(x.gameId)) {
      GamesService.removeFavoriteGame(x.gameId);
    } else {
      GamesService.addFavoriteGame(x.gameId);
    }
  }
  const { t } = useTranslation();

  return (
    <div className='bannerGame h-full relative'>
      {x.gameImage && (
        <Link href={isMobile ? `/playgame/detail/${getSlug(x.slug)}`:`${x.slug}` }>
          <Image
            loader={imageLoader}
            className='h-full rounded-[10px]'
            src={x.gameImage}
            alt={x.gameName}
            width={1150}
            height={302}
            priority
          />
        </Link>
      )}
      <div className={cs([styles.actionBanner, 'absolute flex items-center'])}>
        <Link href={isMobile ? `/playgame/detail/${getSlug(x.slug)}`:`${x.slug}` } >{t('playNow')}</Link>
      </div>
    </div>
  );
};

export default BannerGame;
