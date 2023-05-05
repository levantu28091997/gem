import TitleSection from '@/components/Atoms/TitleSection';
import ListItemPopularGame from '@/components/Molecules/ListItemPopularGame';
import cs from '@/utils/cs';
import useScreenSize from '@/utils/useScreenSize';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './PopularGames.module.scss';

interface Props {
  isShowShape?: boolean;
}
const PopularGames: FC<Props> = ({ isShowShape = false }) => {
  const { isDesktop } = useScreenSize();
  const { t } = useTranslation();

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
        <TitleSection title={t('popGame')} viewMore='popular-games' />
      </div>
      <div className='lg:mx-5 xl:mx-12'>
        <ListItemPopularGame />
      </div>
    </div>
  );
};

export default PopularGames;
