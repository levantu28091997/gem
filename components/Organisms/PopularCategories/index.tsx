import React, { FC, useEffect, useState } from 'react';
import styles from './PopularCategories.module.scss';
import ItemCategories from '@/components/Molecules/ItemCategories';
import TitleSection from '@/components/Atoms/TitleSection';
import useScreenSize from '@/utils/useScreenSize';
import { useRequest } from 'ahooks';
import { homeService } from '@/app/services/homeService';
import cs from '@/utils/cs';

interface Props {
  isShowShape?: boolean
}

const PopularCategories: FC<Props> = ({ isShowShape = false }) => {
  const [categories, setCategories] = useState<any>([]);
  const { data, run, loading } = useRequest(homeService.getCategories, {
    manual: true,
    onError: (res, params) => {
      return res;
    },
    onSuccess: (data) => {
      setCategories(data);
    },
  });

  useEffect(() => {
    run();
  }, []);

  return (
    <div className='popularTag mb-10 md:mb-[70px] xl:mb-20 relative'>
      {isShowShape && <div className={cs([styles.path, 'path-img opacity-0 xl:opacity-100'])} />}
      <TitleSection title='Popular Categories' />
      <div className='lg:ml-5 xl:ml-12'>
        <div className={styles.tagList}>
          <ContentPopularCategories games={categories} />
        </div>
      </div>
    </div>
  );
};

export default PopularCategories;
interface ItemType {
  id: number;
  attributes: {
    name: string;
  };
}
const ContentPopularCategories: FC<{ games: any }> = ({ games }) => {
  const { isMobile, isTablet, isDesktop } = useScreenSize();
  let dataResult = games;
  if (isDesktop) dataResult = games.slice(0, 14);
  if (isTablet) dataResult = games.slice(0, 8);
  if (isMobile) dataResult = games.slice(0, 10);

  return dataResult?.map((game: ItemType) => (
    <ItemCategories key={game?.id} cate={game?.attributes} />
  ));
};
