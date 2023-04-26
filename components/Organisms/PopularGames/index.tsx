import cs from '@/utils/cs';
import React, { FC } from 'react';
import styles from './PopularGames.module.scss';
import useScreenSize from '@/utils/useScreenSize';
import TitleSection from '@/components/Atoms/TitleSection';
import ListItemPopularGame from '@/components/Molecules/ListItemPopularGame';
import useTransLate from '@/translate';

interface Props {
  isShowShape?: boolean;
}
const PopularGames: FC<Props> = ({ isShowShape = false }) => {
  const { isDesktop } = useScreenSize();
  const trans = useTransLate();

  return (
    <div className='mb-10 md:mb-[70px] xl:mb-20 relative'>
      {isDesktop && isShowShape && (
        <div
          className={cs([
            styles.path,
            'relative z-0 path-img opacity-1 xl:opacity-100',
          ])}
        />
      )}
      <div className='relative z-10'>
        <TitleSection title={trans.home.popGame} viewMore='popular-games' />
      </div>
      <div className='lg:mx-5 xl:mx-12'>
        <ListItemPopularGame />
      </div>
    </div>
  );
};

export default PopularGames;
