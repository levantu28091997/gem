import React, { FC } from 'react';
import styles from './Joinus.module.scss';
import Image from 'next/image';
import useScreenSize from '@/utils/useScreenSize';
interface Props {
  faq: any;
  index: number;
  OpenFaq: any;
}
const FaqItem: FC<Props> = ({ faq, OpenFaq, index }) => {
  const { isMobile, isTablet } = useScreenSize();
  return (
    <div
      className={
        isMobile
          ? `${styles.faq} faq ${
              faq.status ? `${styles.open}` : ''
            } w-full mx-auto h-auto bg-white text-black text-center mb-[19px] cursor-pointer`
          : isTablet
          ? `${styles.faq} faq ${
              faq.status ? `${styles.open}` : ''
            } w-[374px] h-auto bg-white text-black text-center mb-[19px] cursor-pointer`
          : `${styles.faq} faq ${
              faq.status ? `${styles.open}` : ''
            } w-[65%] h-auto bg-white text-black text-center mb-[19px] cursor-pointer`
      }
      key={index}
      onClick={() => OpenFaq(index)}
    >
      <div className={`${styles.faq_question} relative`}>
        <h2
          className={
            isMobile
              ? `${styles.t1} text-[14px] pt-[15px] w-[90%]`
              : isTablet
              ? `${styles.t1} text-[14px] pt-[15px] w-[90%]`
              : `${styles.t1} text-[18px] pt-[14px] w-[90%]`
          }
        >
          {faq.t1}
        </h2>
        <div className='mr-5 mt-[15px] relative top-[-3px] bg-[] right-[-6px]'>
          <Image
            src={faq.status ? '/images/Subtract-.png' : '/images/Subtract.png'}
            alt=''
            width={24}
            height={24}
          />
        </div>
      </div>
      <div
        className={
          isMobile
            ? `${styles.t3} ${styles.faq_answer} p-2 text-justify text-[14px]`
            : isTablet
            ? `${styles.t3} ${styles.faq_answer} p-2 text-justify text-[14px]`
            : `${styles.t3} ${styles.faq_answer} p-2 text-justify text-[16px]`
        }
      >
        {faq.t2}
      </div>
    </div>
  );
};
export default FaqItem;
