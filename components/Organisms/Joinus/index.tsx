import AboutTitleSection from '@/components/Atoms/AboutTitleSection';
import styles from './Joinus.module.scss';
import AboutTitleBlock from '@/components/Atoms/AboutTitleBlock';
import useScreenSize from '@/utils/useScreenSize';
import Aos from 'aos';
import { useEffect, useState, useRef } from 'react';
const Joinus = () => {
  const { isMobile, isTablet } = useScreenSize();
  const [index, setIndex] = useState(0);
  const timeRef = useRef<any>(null);

  function resetTimeout() {
    if (timeRef.current) {
      clearTimeout(timeRef.current);
    }
  }

  useEffect(() => {
    Aos.init({ duration: 3000 });
  });
  const dataText = [
    {
      t1: '01.',
      t2: 'Marketing and Promotion',
      t3: 'Expand games to a audience global by various channels of marketing.',
    },
    {
      t1: '02.',
      t2: 'Development Support',
      t3: 'Access to specialized technology, technical expertise, and guidance on game design.',
    },
    {
      t1: '03.',
      t2: 'Licensing and Intellectual Property',
      t3: 'Help game developers obtain intellectual property rights to ensure that the game is compliant with all relevant laws.',
    },
  ];

  useEffect(() => {
    resetTimeout();
    timeRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === dataText.length - 1 ? 0 : prevIndex + 1,
        ),
      3000,
    );
    return () => {
      resetTimeout;
    };
  }, [index]);
  return (
    <div className='w-full'>
      {isMobile ? (
        <div className='mb-[77px]'>
          <div className='flex mt-[51px] mb-[27px]'>
            <div
              data-aos='fade-right'
              data-aos-duration='2000'
              className={`${styles.bg_linear} w-[50%] grid justify-end`}
            >
              <div className='text-center w-[254px]'>
                <AboutTitleBlock
                  title1='JOIN'
                  title2='US.'
                  size={isMobile ? '50px' : isTablet ? '80px' : '130px'}
                  lineheight='normal'
                />
              </div>
            </div>
            <div className='mt-5 text-center w-[40%]'>
              <AboutTitleSection
                className='text-white'
                title='Reason to Join Us'
                size={isMobile ? '30px' : isTablet ? '50px' : '50px'}
                lineheight={
                  isMobile ? '31.86px' : isTablet ? '31.86px' : 'normal'
                }
                fontStyle={
                  isMobile ? '31.86px' : isTablet ? '31.86px' : 'normal'
                }
              />
            </div>
          </div>
          <div className='mx-auto my-0 overflow-hidden max-w-[90%]'>
            <div
              className='whitespace-nowrap transition ease-in-out duration-200'
              style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
              {dataText.map((item) => (
                <div className='whitespace-normal inline-block overflow-visible w-[100%] text-center'>
                  <h2 className={styles.t1}>{item.t1}</h2>
                  <h5 className={`${styles.t2} text-white`}>{item.t2}</h5>
                  <p className={`${styles.t3} text-center text-white`}>
                    {item.t3}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : isTablet ? (
        <div className='mb-[77px]'>
          <div className='flex mt-[51px] mb-[27px]'>
            <div
              data-aos='fade-right'
              data-aos-duration='2000'
              className={`${styles.bg_linear} w-[50%] grid justify-center`}
            >
              <div className='text-center w-[254px] '>
                <AboutTitleBlock
                  title1='JOIN'
                  title2='US.'
                  size={isMobile ? '50px' : isTablet ? '80px' : '130px'}
                  lineheight='normal'
                />
              </div>
            </div>
            <div className='text-center pt-8'>
              <AboutTitleSection
                className='text-white'
                title='Reason to Join Us'
                size={isMobile ? '30px' : isTablet ? '50px' : '50px'}
                lineheight='50px'
                fontStyle='italic'
              />
            </div>
          </div>
          <div className='mx-auto my-0 overflow-hidden max-w-[502px]'>
            <div
              className='whitespace-nowrap transition ease-in-out duration-200'
              style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
              {dataText.map((item) => (
                <div className='whitespace-normal inline-block w-[502px] text-center'>
                  <h2 className={styles.t1}>{item.t1}</h2>
                  <h5 className={`${styles.t2} text-white`}>{item.t2}</h5>
                  <p className={`${styles.t3} text-white`}>{item.t3}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className=''>
          <div className='text-center'>
            <AboutTitleSection
              className='text-white'
              title='Reason to Join Us'
              size='50px'
              fontStyle='italic'
            />
          </div>
          <div className='w-full flex mt-[51px] mb-[161px]'>
            <div className=''>
              <div
                data-aos='fade-right'
                data-aos-duration='2000'
                className={`${styles.bg_linear_desktop} w-[811px] grid justify-end`}
              >
                <div className='text-center w-[50%] mr-20 pb-3'>
                  <AboutTitleBlock
                    title1='JOIN'
                    title2='US.'
                    size={isMobile ? '50px' : isTablet ? '80px' : '130px'}
                    lineheight='90px'
                  />
                </div>
              </div>
            </div>
            <div className='mx-10 -my-5 overflow-hidden max-w-[470px]'>
              <div
                className='whitespace-nowrap transition ease-in-out duration-1000'
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
              >
                {dataText.map((item) => (
                  <div className='whitespace-normal inline-block w-[470px] text-center'>
                    <h2 className={styles.t1}>{item.t1}</h2>
                    <h5 className={`${styles.t2} text-white`}>{item.t2}</h5>
                    <p className={`${styles.t3} block text-white`}>{item.t3}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Joinus;
