import React, { FC, useEffect, useState } from 'react';
import styles from './PopularCategories.module.scss';
import ItemCategories from '@/components/Molecules/ItemCategories';
import TitleSection from '@/components/Atoms/TitleSection';
import useScreenSize from '@/utils/useScreenSize';
import { useRequest } from 'ahooks';
import { homeService } from '@/app/services/homeService';
import cs from '@/utils/cs';
import useTransLate from '@/translate';

interface Props {
  isShowShape?: boolean;
}

const PopularCategories: FC<Props> = ({ isShowShape = false }) => {
  const { isMobile, isTablet, isDesktop } = useScreenSize();

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

  let dataResult = [];
  if (isDesktop) dataResult = categories.slice(0, 14);
  if (isTablet) dataResult = categories.slice(0, 8);
  if (isMobile) dataResult = categories.slice(0, 10);

  const trans = useTransLate();

  return (
    <div className='popularTag mb-10 md:mb-[70px] xl:mb-20 relative'>
      {isDesktop && isShowShape && (
        <div
          className={cs([styles.path, 'path-img opacity-0 xl:opacity-100'])}
        />
      )}
      <TitleSection title={trans.home.popCategories} />
      <div className='lg:ml-5 xl:ml-12'>
        <div className={styles.tagList}>
          <ContentPopularCategories games={dataResult} />
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
  return games?.map((game: ItemType) => (
    <ItemCategories key={game?.id} cate={game?.attributes} />
  ));
};
