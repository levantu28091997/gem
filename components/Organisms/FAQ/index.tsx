import AboutTitleSection from '@/components/Atoms/AboutTitleSection';
import styles from './Joinus.module.scss';
import AboutTitleBlock from '@/components/Atoms/AboutTitleBlock';
import useScreenSize from '@/utils/useScreenSize';
import Aos from 'aos';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import FaqItem from '@/components/Molecules/FAQItem';
import Link from 'next/link';
const Fade = require('react-reveal/Fade');

const Faq = () => {
  const { isMobile, isTablet } = useScreenSize();
  const [dataText, setDatatext] = useState([
    {
      status: false,
      t1: ' What are your revenue sharing terms? ',
      t2: 'The normal share ratio is 6:4, in addition, special cases can be discussed',
    },
    {
      status: false,
      t1: ' What is your target audience?',
      t2: 'Global gamer, but if we say specific market, we are targeting India',
    },
    {
      status: false,
      t1: ' What kind of marketing and promotion do you provide?',
      t2: 'We focus mainly on 3 tools which are Search, adnetwork and cross traffic',
    },
    {
      status: false,
      t1: ' How can you help me improve my game?',
      t2: 'Optimize ad monitization, optimize game design, support with a simple and convenient SDK, use help of our human resources',
    },
    {
      status: false,
      t1: ' What is your process for game submissions?',
      t2: 'Game upload will be discuss in  the meeting',
    },
  ]);
  const Open = (index: number) => {
    setDatatext(
      dataText.map((item, i) => {
        if (i === index) {
          item.status = !item.status;
        } else {
          item.status = false;
        }
        return item;
      }),
    );
    console.log(dataText);
  };
  return (
    <div className='w-full'>
      {isMobile ? (
        <div className=''>
          <div className='w-full mt-[51px] mb-[51px]'>
            <div className='flex justify-between'>
              <div className='w-full mr-[-200px]'>
                <Fade left duration={3000}>
                  <div
                    className={`${styles.bg_linear} h-[124px] grid justify-end blok w-1/2`}
                  >
                    <div className=' w-1/2 mr-16 text-center py-3'>
                      <AboutTitleBlock
                        title1='Q&'
                        title2='A'
                        size={isMobile ? '50px' : isTablet ? '80px' : '130px'}
                        lineheight='50px'
                      />
                    </div>
                  </div>
                </Fade>
              </div>
              <div className='mb-[33px] mt-5 mr-[28%]'>
                <AboutTitleSection
                  className='text-white'
                  title='FAQ'
                  size={isMobile ? '32px' : isTablet ? '32px' : '50px'}
                />
              </div>
            </div>
            <div className='w-[90%] mx-auto mt-[31px]'>
              {dataText.map((item, i) => (
                <FaqItem faq={item} index={i} OpenFaq={Open} />
              ))}
            </div>
          </div>
        </div>
      ) : isTablet ? (
        <div className=''>
          <div className='w-full flex justify-between mt-[51px] mb-[161px] z-[1]'>
            <div className=''>
              <Fade left duration={3000}>
                <div
                  className={`${styles.bg_linear} grid justify-end blok w-[100%]`}
                >
                  <div className=' w-[234px] mr-10 text-center py-2'>
                    <AboutTitleBlock
                      title1='Q&'
                      title2='A'
                      size={isMobile ? '50px' : isTablet ? '80px' : '130px'}
                      lineheight='90px'
                    />
                  </div>
                </div>
              </Fade>
            </div>
            <div className='w-1/2'>
              <div className='mb-[33px] mt-5'>
                <AboutTitleSection
                  className='text-white'
                  title='FAQ'
                  size='50px'
                />
              </div>
              {dataText.map((item, i) => (
                <FaqItem faq={item} index={i} OpenFaq={Open} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className=''>
          <div className='w-full flex justify-between mt-[51px] mb-[161px]'>
            <div className=''>
              <Fade left duration={3000}>
                <div
                  className={`${styles.bg_linear_desktop} grid justify-end blok w-[811px]`}
                >
                  <div className=' w-[234px] mr-10 text-center py-2'>
                    <AboutTitleBlock
                      title1='Q&'
                      title2='A'
                      size={isMobile ? '50px' : isTablet ? '80px' : '130px'}
                      lineheight='90px'
                    />
                  </div>
                </div>
              </Fade>
            </div>
            <div className='w-1/2'>
              <div className='mb-[33px] -mt-5'>
                <AboutTitleSection
                  className='text-white'
                  title='FAQ'
                  size={isMobile ? '' : isTablet ? '' : '50px'}
                />
              </div>
              {dataText.map((item, i) => (
                <FaqItem faq={item} index={i} OpenFaq={Open} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Faq;
