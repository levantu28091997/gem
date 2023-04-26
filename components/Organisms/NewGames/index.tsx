import React, { FC } from 'react';
import TitleSection from '@/components/Atoms/TitleSection';
import ListItemNewGame from '@/components/Molecules/ListItemNewGame';
import styles from './NewGames.module.scss';
import cs from '@/utils/cs';
import useScreenSize from '@/utils/useScreenSize';
import useTransLate from '@/translate';

interface Props {
  isShowShape?: boolean;
}

const NewGames: FC<Props> = ({ isShowShape = false }) => {
  const { isDesktop } = useScreenSize();
  const trans = useTransLate();

  return (
    <div className='popularTag mb-10 md:mb-[70px] xl:mb-20 relative'>
      {isDesktop && isShowShape && (
        <div
          className={cs([styles.path, 'path-img opacity-0 xl:opacity-100'])}
        />
      )}
      <TitleSection title={trans.home.newGames} viewMore='/new-games' />
      <div className='lg:mx-5 xl:mx-12'>
        <ListItemNewGame />
      </div>
    </div>
  );
};

export default NewGames;
