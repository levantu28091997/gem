import AboutTitleBlock from '@/components/Atoms/AboutTitleBlock';
import AboutTitleSection from '@/components/Atoms/AboutTitleSection';
import useScreenSize from '@/utils/useScreenSize';
import Image from 'next/image';
import styles from './Global.module.scss';
const Fade = require('react-reveal/Fade');
const Zoom = require('react-reveal/Zoom');
const Flip = require('react-reveal/Flip');

const Global = () => {
  const { isMobile, isTablet } = useScreenSize();

  return (
    <div
      className={
        isMobile ? 'mt-[71px]' : isTablet ? 'mt-[163px]' : 'mt-[163px]'
      }
    >
      <div className='flex justify-end relative'>
        <div
          className={
            isMobile
              ? 'hidden'
              : isTablet
              ? 'hidden'
              : 'absolute top-[-115px] left-[253px]'
          }
        >
          <Zoom duration={3000}>
            <Image
              src='/images/gameee-05 2.png'
              alt=''
              width={297}
              height={295}
            />
          </Zoom>
        </div>
        <div
          className={
            isMobile
              ? 'w-[78%] pl-8 text-center mt-6'
              : isTablet
              ? 'w-[376px] text-center mt-7'
              : 'w-[376px] text-center mt-7'
          }
        >
          <AboutTitleSection
            className='text-white'
            title='Our Partner'
            size={isMobile ? '30px' : isTablet ? '50px' : '50px'}
            lineheight={isMobile ? '31px' : isTablet ? '50px' : '50px'}
            fontStyle='italic'
          />
        </div>
        <Fade right duration={3000}>
          <div
            className={
              isMobile
                ? `${styles.bg_linear} w-[160px] pl-[10px]`
                : isTablet
                ? `${styles.bg_linear} w-[411px] pl-[65px]`
                : `${styles.bg_linear} w-[811px] pl-[65px]`
            }
          >
            <div
              className={
                isMobile
                  ? 'text-right w-[120px] pb-2'
                  : isTablet
                  ? 'text-right w-[259px] pb-2'
                  : 'text-right w-[259px] pb-2'
              }
            >
              <AboutTitleBlock
                title1='GLO'
                title2='BAL.'
                size={isMobile ? '50px' : isTablet ? '80px' : '130px'}
                lineheight={isMobile ? '50px' : isTablet ? '80px' : '90px'}
              />
            </div>
          </div>
        </Fade>
      </div>
      <div
        className={
          isMobile
            ? 'grid grid-cols-6 justify-items-center container mx-auto mt-[33px]'
            : isTablet
            ? 'grid grid-cols-6 justify-items-center container mx-auto mt-[33px]'
            : 'grid grid-cols-6 justify-items-center container mx-auto mt-[140px]'
        }
      >
        <div className='col-span-3'>
          <Image
            src='/images/Sinerji Software 1.png'
            alt=''
            width={isMobile ? 89 : isTablet ? 120 : 170}
            height={150}
          />
        </div>
        <div className='col-span-3'>
          <Image
            src='/images/Vita game studio 1.png'
            alt=''
            width={isMobile ? 89 : isTablet ? 120 : 170}
            height={150}
          />
        </div>
        <div className='col-span-2'>
          <Image
            src='/images/iCoder Games logo 1.png'
            alt=''
            width={isMobile ? 89 : isTablet ? 120 : 170}
            height={150}
          />
        </div>
        <div className='col-span-2'>
          <Image
            src='/images/Chirag Technozer 1.png'
            alt=''
            width={isMobile ? 89 : isTablet ? 120 : 170}
            height={150}
          />
        </div>
        <div className='col-span-2'>
          <Image
            src='/images/Khatriji Gaming 1.png'
            alt=''
            width={isMobile ? 89 : isTablet ? 120 : 170}
            height={150}
          />
        </div>
      </div>
      <div
        className={
          isMobile ? 'hidden' : isTablet ? 'hidden' : 'h-[120px] relative'
        }
      >
        <div className='absolute top-[-30px] right-[180px]'>
          <Flip right duration={3000}>
            <Image src='/images/item-09.png' alt='' width={297} height={295} />
          </Flip>
        </div>
      </div>
    </div>
  );
};
export default Global;
