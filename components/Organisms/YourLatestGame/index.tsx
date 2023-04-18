import TitleSection from '@/components/Atoms/TitleSection';
import styles from 'YourLatestGame.module.scss';
import BannerLatestGame from './BannerLatestGame';
import Advertisement from './Advertisement';
const YourLatestGame = () => {
  return (
    <div className=' xl:mx-12 mb-16 md:mb-16 xl:mb-20 relative'>
      <div className='relative z-10'>
        <TitleSection title='Your latest game' />
      </div>
      <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-4 lg:mx-5 xl:mx-12'>
        <div className='lg:col-span-2 sm:col-span-1 md:flex md:flex-grow'>
          <BannerLatestGame />
        </div>
        <div className='lg:col-span-1 hidden sm:block flex flex-grow'>
          <Advertisement />
        </div>
      </div>
    </div>
  );
};

export default YourLatestGame;
