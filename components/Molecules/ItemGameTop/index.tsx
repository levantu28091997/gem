import React, { FC, useState } from 'react';
import cs from '@/utils/cs';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ItemGameTop.module.scss';
import { IconFavourite } from '@/components/Atoms/Icons';
import VideoThumbnail from '@/components/Molecules/VideoThumbnail';
interface Props {
  videoUrl?: string;
  gameName: string;
  gameImage: string;
  isNew?: boolean;
  isHot?: boolean;
  isFavourite?: boolean;
  className?: string;
  slug?: string;
}
const loaderImage = ({ src }: any) => {
  return process.env.IMAGE_URL + src;
};
const ItemGameTop: FC<Props> = (x) => {
  const [isHovering, setIsHovering] = useState(false);

  const TagShow = () => {
    if (!x.isNew && !x.isHot) return null;

    return <div className={styles.tag}>{x.isHot ? 'HOT' : 'NEW'}</div>;
  };

  const Favourite = () => {
    if (!x.isFavourite) return null;

    return (
      <div className={styles.favourite}>
        <IconFavourite />
      </div>
    );
  };
  return (
    <Link
      href={x.slug || '/'}
      className={cs(['relative', x?.className])}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <TagShow />
      <Favourite />
      <div className={cs([styles.itemGame, 'flex items-center'])}>
        {x.gameImage&& (
          <Image
            loader={loaderImage}
            className='w-full object-contain'
            src={x.gameImage}
            alt={'game'}
            width={302}
            height={302}
          />
        )}
      </div>
    </Link>
  );
};

export default ItemGameTop;
