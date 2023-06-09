import { homeService } from '@/app/services/homeService';
import TitleSection from '@/components/Atoms/TitleSection';
import ItemCategories from '@/components/Molecules/ItemCategories';
import cs from '@/utils/cs';
import useScreenSize from '@/utils/useScreenSize';
import { useRequest } from 'ahooks';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './PopularCategories.module.scss';

interface Props {
  isShowShape?: boolean;
  categories: any
}

const PopularCategories: FC<Props> = ({ isShowShape = false, categories }) => {
  const { isMobile, isTablet, isDesktop } = useScreenSize();
  const { t } = useTranslation();

  let dataResult = [];
  if (isDesktop) dataResult = categories.slice(0, 14);
  if (isTablet) dataResult = categories.slice(0, 8);
  if (isMobile) dataResult = categories.slice(0, 10);

  return (
    <div className='popularTag mb-10 md:mb-[70px] xl:mb-20 relative'>
      {isDesktop && isShowShape && (
        <div
          className={cs([styles.path, 'path-img opacity-0 xl:opacity-100'])}
        />
      )}
      <TitleSection title={t('popCategories')} />
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
