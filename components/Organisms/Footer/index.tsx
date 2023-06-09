import cs from '@/utils/cs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './Footer.module.scss';
import SelectLanguage from '@/components/Atoms/SelectLanguage';
import Social from '@/components/Molecules/Social';
import LegalDecktop from '@/components/Molecules/LegalDecktop';
import LegalMobile from '@/components/Molecules/LegalMobile';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div
          className={'flex items-center justify-center gap-10 md:gap-[86px]'}
        >
          <div className={cs([styles.logo])}>
            <Link href={'/'}>
              <Image
                src='/icons/logo.svg'
                alt='Logo'
                width={125}
                height={70}
                className='h-auto mx-auto max-w-[70px] md:max-w-[125px]'
                quality={100}
              />
            </Link>
          </div>
          <div className='socialLegal'>
            <Social />
            <LegalDecktop />
          </div>
        </div>
        <LegalMobile />
        <div className='pt-4 flex items-center justify-center'>
          <SelectLanguage />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
