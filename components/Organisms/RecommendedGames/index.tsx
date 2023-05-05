import React, { FC } from 'react';
import TitleSection from '@/components/Atoms/TitleSection';
import styles from './RecommendedGames.module.scss';
import cs from '@/utils/cs';
import ListItemRecommended from '@/components/Molecules/ListItemRecommended';
import useScreenSize from '@/utils/useScreenSize';
import { useTranslation } from 'react-i18next';

interface Props {
  isShowShape?: boolean;
}

const RecommendedGames: FC<Props> = ({ isShowShape = false }) => {
  const { isDesktop } = useScreenSize();
  const { t } = useTranslation();

  return (
    <div className='mb-10 md:mb-[70px] xl:mb-20 relative'>
      {isDesktop && isShowShape && (
        <div
          className={cs([styles.path, 'path-img opacity-0 xl:opacity-100'])}
        />
      )}
      <TitleSection title={t('recommended')} />
      <div className='lg:mx-5 xl:mx-12'>
        <ListItemRecommended />
      </div>
    </div>
  );
};

export default RecommendedGames;
