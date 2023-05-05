import TitleSection from '@/components/Atoms/TitleSection';
import ListItemRecentPlayedGames from '@/components/Molecules/ListItemRecentPlayedGames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  isShowShape?: boolean;
}
const RecentPlayedGames: FC<Props> = ({ isShowShape = false }) => {
  const { t } = useTranslation();
  return (
    <div className='mb-10 md:mb-[70px] xl:mb-20 relative'>
      <div className='relative z-10'>
        <TitleSection title={t('recommended')} />
      </div>
      <div className='lg:mx-5 xl:mx-12'>
        <ListItemRecentPlayedGames />
      </div>
    </div>
  );
};

export default RecentPlayedGames;
