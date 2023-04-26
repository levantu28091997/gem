import AboutTitleBlock from '@/components/Atoms/AboutTitleBlock';
import AboutTitleSection from '@/components/Atoms/AboutTitleSection';
import useScreenSize from '@/utils/useScreenSize';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Global.module.scss';
const Fade = require('react-reveal/Fade');
const Flip = require('react-reveal/Flip');
const Zoom = require('react-reveal/Zoom');

const Global = () => {
  const { isMobile, isTablet } = useScreenSize();

  return (
    <div className=''>
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
              ? 'w-[78%] pl-5 text-center mt-3'
              : isTablet
              ? 'w-[376px] text-center mt-7'
              : 'w-[376px] text-center mt-7'
          }
        >
          <AboutTitleSection
            className='text-white'
            title='Bring your game to the World'
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
      {isMobile ? (
        <div className='container mx-auto'>
          <div className='p-[47px]'>
            <p className="text-center text-[14px] leading-[30px] text-white font-['Montserrat']">
              We aim to create a marketing strategy to promote the game globally
              includes utilizing social media platforms, creating promotional
              videos provide development support to game developers, such as
              access to specialized technology, technical expertise, and
              guidance on game design., and working with game reviewers to
              increase visibility.
            </p>
          </div>
          <div className='grid justify-items-center'>
            <Zoom duration={3000}>
              <Image
                src='/images/Game LDP-05-05 1.png'
                alt=''
                width={285}
                height={457}
              />
            </Zoom>

            <Link href={'/developers'}>
              <button
                className={`${styles.button_linear} text-white h-[54px] mx-auto mt-5`}
              >
                Let’s Discover
              </button>
            </Link>
          </div>
        </div>
      ) : isTablet ? (
        <div className='container grid grid-cols-2 mx-auto'>
          <div className=''>
            <Zoom duration={3000}>
              <Image
                src='/images/Game LDP-05-05 1.png'
                alt=''
                width={417}
                height={457}
              />
            </Zoom>
          </div>
          <div className='p-[47px]'>
            <p className="pb-[37px] leading-[30px] text-white font-['Montserrat']">
              We aim to create a marketing strategy to promote the game globally
              includes utilizing social media platforms, creating promotional
              videos provide development support to game developers, such as
              access to specialized technology, technical expertise, and
              guidance on game design., and working with game reviewers to
              increase visibility.
            </p>
            <Link href={'/developers'}>
              <button className={`${styles.button_linear} text-white h-[54px]`}>
                Let’s Discover
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className='w-1/2 grid grid-cols-2 mx-auto'>
          <div className=''>
            <Zoom duration={3000}>
              <Image
                src='/images/Game LDP-05-05 1.png'
                alt=''
                width={417}
                height={457}
              />
            </Zoom>
          </div>
          <div className='p-[47px]'>
            <p className="pb-[47px] leading-[30px] text-white font-['Montserrat']">
              We aim to create a marketing strategy to promote the game globally
              includes utilizing social media platforms, creating promotional
              videos provide development support to game developers, such as
              access to specialized technology, technical expertise, and
              guidance on game design., and working with game reviewers to
              increase visibility.
            </p>
            <Link href={'/developers'}>
              <button className={`${styles.button_linear} text-white h-[54px]`}>
                Let’s Discover
              </button>
            </Link>
          </div>
        </div>
      )}
      <div
        className={
          isMobile ? 'hidden' : isTablet ? 'hidden' : 'h-[120px] relative'
        }
      >
        <div className='absolute top-[-140px] right-[180px]'>
          <Flip right>
            <Image src='/images/item-09.png' alt='' width={297} height={295} />
          </Flip>
        </div>
      </div>
    </div>
  );
};
export default Global;
