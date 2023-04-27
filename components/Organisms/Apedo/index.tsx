import AboutTitleSection from '@/components/Atoms/AboutTitleSection';
import useScreenSize from '@/utils/useScreenSize';
import Image from 'next/image';
import { FC } from 'react';
import { animated, useSpring } from 'react-spring';
import styles from './Apedo.module.scss';

const Fade = require('react-reveal/Fade');

interface Props {
  n: number;
}

const Apero = () => {
  const { isMobile, isTablet } = useScreenSize();

  const dataMember = [
    {
      amount: 500,
      member: 'Games',
    },
    {
      amount: 500000,
      member: 'Players',
    },
    {
      amount: 150,
      member: 'Developers',
    },
  ];
  const NumberAnimation: FC<Props> = ({ n }) => {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 200,
      config: { mass: 1, tension: 20, friction: 10 },
    });
    return (
      <animated.div>
        {number.to(
          (n) => `${n.toLocaleString('de-DE', { maximumFractionDigits: 0 })} +`,
        )}
      </animated.div>
    );
  };

  return (
    <div className='relative'>
      <div
        className={
          isMobile
            ? 'relative w-full mx-auto pt-[78px]'
            : isTablet
              ? 'relative w-full mx-auto pt-[5%]'
              : 'relative w-full mx-auto h-auto pt-[5%]'
        }
      >
        {isMobile ? (
          <Fade right duration={3000}>
            <div className='absolute top-[-60px] right-[-50px]'>
              <Image
                src='/images/item-07.png'
                alt=''
                width={117}
                height={226}
              />
            </div>
          </Fade>
        ) : isTablet ? (
          <Fade right duration={3000}>
            <div className='absolute top-[-50px] right-[10px]'>
              <Image
                src='/images/item-07.png'
                alt=''
                width={117}
                height={226}
              />
            </div>
          </Fade>
        ) : (
          <Fade right duration={3000}>
            <div className='absolute top-[-60px] right-[140px]'>
              <Image
                src='/images/item-07.png'
                alt=''
                width={210}
                height={226}
              />
            </div>
          </Fade>
        )}

        <div
          className={
            isMobile
              ? 'absolute mx-auto top-[40px] w-[380px] bottom-0 left-0 right-0 container'
              : isTablet
                ? 'absolute mx-auto top-[-25px] w-[700px] bottom-0 left-0 right-0 container'
                : 'absolute mx-auto top-[0px] w-[910px] bottom-0 left-0 right-0 container'
          }
        >
          <Image
            src='/images/apero.png'
            alt=''
            width={isMobile ? 380 : isTablet ? 700 : 910}
            height={80}
          />
        </div>

        {/* Content */}
        {isMobile ? (
          <div className=''>
            <div className='w-[280px] mx-auto'>
              <AboutTitleSection
                title='Dive Into A World Of Gaming Experiences'
                lineheight='31px'
                size='30px'
                fontStyle='italic'
                className='text-white'
              />
            </div>
            <Fade up duration={3000}>
              <p className="text-center pt-[14px] w-full font-[400] text-white font-['Montserrat']">
                We offer a wide variety of games that cater to all ages and
                interests. Our user-friendly interface makes it easy to browse
                and select your favorite games, while our site is updated
                regularly with new content every hours.
              </p>
            </Fade>
          </div>
        ) : (
          <div className='w-[560px] mx-auto'>
            <AboutTitleSection
              title='Dive Into A World Of Gaming Experiences'
              lineheight='63px'
              size='60px'
              fontStyle='italic'
              className='text-white'
            />
            <Fade up duration={3000}>
              <p className="text-center text-[14px] pt-[19px]  text-white font-['Montserrat']">
                We offer a wide variety of games that cater to all ages and
                interests. Our user-friendly interface makes it easy to browse
                and select your favorite games, while our site is updated
                regularly with new content every hours.
              </p>
            </Fade>
          </div>
        )}
        {/* Contetnt */}

        <div
          className={
            isMobile
              ? `${styles.item_mid} top-[113%]`
              : isTablet
                ? `${styles.item_mid} top-[113%]`
                : `${styles.item_mid} top-[125%]`
          }
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className={
              isMobile
                ? 'w-[45px] h-[45px] font-bold  text-white'
                : isTablet
                  ? 'w-[55px] h-[55px] text-white font-bold'
                  : 'w-[65px] text-white h-[65px] font-bold'
            }
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5'
            />
          </svg>
        </div>
      </div>
      <div
        className={
          isMobile
            ? `${styles.background_img} h-[691px] mt-12 w-full relative`
            : `${styles.background_img} h-[1274px] relative`
        }
      >
        <div className='container mx-auto'>
          <div
            className={
              isMobile
                ? 'absolute top-[14px] left-2'
                : isTablet
                  ? 'absolute top-[10%]'
                  : 'absolute'
            }
          >
            <Fade left duration={3000}>
              <Image
                src='/images/character 1.png'
                alt=''
                width={isMobile ? 167 : isTablet ? 267 : 463}
                height={528}
              />
            </Fade>
          </div>
          <div
            className={
              isMobile ? 'pt-[192px]' : isTablet ? 'pt-[400px]' : 'pt-[20%]'
            }
          >
            {dataMember.map((item, index) => (
              <div
                key={index}
                className={
                  isMobile
                    ? 'text-center mb-6'
                    : isTablet
                      ? 'text-center mb-1'
                      : 'text-center mb-16'
                }
              >
                <AboutTitleSection
                  className='text-white'
                  title={<NumberAnimation n={item.amount} />}
                  size={isMobile ? '60px' : isTablet ? '100px' : '100px '}
                  lineheight={
                    isMobile ? '30.72px' : isTablet ? 'normal' : 'normal'
                  }
                />
                <p className='text-black text-[46px] font-[700]'>
                  {item.member}
                </p>
              </div>
            ))}
          </div>
          <div
            className={
              isMobile
                ? 'absolute bottom-[-1%] left-0'
                : isTablet
                  ? 'absolute top-[25%] right-0'
                  : 'absolute top-[20%] right-0'
            }
          >
            <Fade right duration={3000}>
              <Image
                src='/images/futureee 1.png'
                alt=''
                width={isMobile ? 148 : isTablet ? 260 : 369}
                height={459}
              />
            </Fade>
          </div>
          <div
            className={
              isMobile
                ? 'absolute bottom-[23%] right-[-12%]'
                : isTablet
                  ? 'absolute bottom-[5%]'
                  : 'absolute bottom-[5%] opacity-100'
            }
          >
            <Fade left duration={3000}>
              <Image
                src='/images/gameee-02 2.png'
                alt=''
                width={isMobile ? 148 : isTablet ? 260 : 369}
                height={367}
              />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apero;
