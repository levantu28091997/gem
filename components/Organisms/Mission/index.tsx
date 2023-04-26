import AboutTitleBlock from '@/components/Atoms/AboutTitleBlock';
import AboutTitleSection from '@/components/Atoms/AboutTitleSection';
import useScreenSize from '@/utils/useScreenSize';
import Image from 'next/image';
import Aos from 'aos';
import { useEffect } from 'react';
const Fade = require('react-reveal/Fade');

const Mission = () => {
  const { isTablet, isMobile } = useScreenSize();

  return (
    <div
      className={
        isMobile
          ? 'container mx-auto -mt-7 relative'
          : isTablet
          ? 'container -mt-7 mx-auto relative'
          : 'container mx-auto relative'
      }
    >
      <div
        className={
          isMobile
            ? 'w-[140px] h-[276px] absolute top-[-23%] right-[-10px]'
            : isTablet
            ? 'w-[295px] h-[276px] absolute top-[-50px]'
            : 'w-[295px] h-[276px] absolute top-[-10px]'
        }
      >
        <Fade left duration={3000}>
          <AboutTitleBlock
            title1='MISS'
            title2='ION.'
            lineheight='normal'
            size={isMobile ? '50px' : isTablet ? '80px' : '130px'}
          />
        </Fade>
      </div>
      <div className=''>
        <div
          className={
            isMobile
              ? 'w-[195px] mx-auto text-center'
              : 'w-[325px] mx-auto text-center'
          }
        >
          <AboutTitleSection
            className='text-white'
            title='Story of Apero Game Mission'
            size={isMobile ? '30px' : isTablet ? '50px' : '50px'}
            fontStyle='italic'
            lineheight={isMobile ? '31px' : '53.1px'}
          />
        </div>
        <p
          data-aos='fade-up'
          data-aos-duration='2000'
          className={
            isMobile
              ? "text-center text-[14px] mx-auto pt-[9px] text-white font-['Montserrat'] font-[400] w-full"
              : isTablet
              ? "text-center text-[14px] mx-auto pt-[9px] container  text-white  font-['Montserrat'] font-[400] leading-[30px]"
              : "text-center mx-auto pt-[9px]  text-white  font-['Montserrat'] font-[400] w-[632px] text-[18px]"
          }
        >
          Fun, engaging, and satisfying experience for players while promoting
          the growth of the gaming industry.
        </p>
        <Image
          src='/images/mission_Mesa de trabajo 1 copia_Mesa de trabajo 1 copia_Mesa de trabajo 1 copia_Mesa de trabajo 1 copia 1.png'
          alt=''
          width={1150}
          height={824}
          className='mx-auto'
        />
      </div>
    </div>
  );
};

export default Mission;
