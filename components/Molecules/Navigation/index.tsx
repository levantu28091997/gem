import React, { useEffect, useRef, useState } from 'react';
import styles from './Navigation.module.scss';
import cs from '@/utils/cs';
import { Box } from '@mui/system';
import Link from 'next/link';
import Image from 'next/image';
import DarkMode from '../DarkMode';
import useScreenSize from '@/utils/useScreenSize';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

const Navigation = () => {
  const router = useRouter();
  const { isDesktop } = useScreenSize();
  const [showSubmenu, setShowSubmenu] = useState(false);
  const handleSubmenu = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setShowSubmenu(!showSubmenu);
  };
  const { t } = useTranslation();

  const dropdown = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!showSubmenu) return;
    function handleClick(event: { target: any }) {
      const className = event.target.getAttribute('class');
      const src = event.target.getAttribute('src');
      if (
        (dropdown.current &&
          !dropdown.current.contains(event.target) &&
          src !== '/icons/menu.svg' &&
          className !== 'sub') ||
        (!className && !src)
      ) {
        setShowSubmenu(false);
      }
    }
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [showSubmenu]);

  return (
    <Box>
      <ul className={cs(['flex', styles.menu])}>
        <li
          className={cs([
            styles.menuItem,
            router.asPath === '/my-game' ? styles.active : '',
          ])}
        >
          <Link href={'/my-game'} prefetch={false}>
            <Image
              src='/icons/game-controller.svg'
              alt='My game'
              width={21}
              height={21}
              quality={100}
            />
          </Link>
          <p
            className={cs([styles.tooltip_menu, 'text-black dark:text-white'])}
          >
            {t('myGame')}
          </p>
        </li>
        <li
          className={cs([
            styles.menuItem,
            router.asPath === '/categories' ? styles.active : '',
          ])}
        >
          <Link href={'/categories'} prefetch={false}>
            <Image
              src='/icons/categories.svg'
              alt='Categories'
              width={21}
              height={21}
              quality={100}
            />
          </Link>
          <p
            className={cs([styles.tooltip_menu, 'text-black dark:text-white'])}
          >
            {t('categories')}
          </p>
        </li>
        <li
          className={cs([
            styles.menuItem,
            'relative',
            router.asPath === '/developers' || router.asPath === '/about'
              ? styles.active
              : '',
            showSubmenu && styles.active,
          ])}
        >
          <Link href='' onClick={handleSubmenu} className='sub' prefetch={false}>
            <Image
              src='/icons/menu.svg'
              alt='Menu'
              width={21}
              height={21}
              quality={100}
            />
          </Link>
          <p
            className={cs([
              styles.tooltip_menu,
              'text-black dark:text-white w-[90px] text-right right-0',
            ])}
          >
            {t('info')}
          </p>
          <div
            ref={dropdown}
            className={cs([
              styles.subMenu,
              showSubmenu && styles.active,
              'absolute',
            ])}
          >
            <ul className={cs([styles.menu])}>
              <li>
                <Link href={'/developers'} prefetch={false}>Game Developers</Link>
              </li>
              <li>
                <Link href={'/about'} prefetch={false}>About Apero Gamehub</Link>
              </li>
              <li className='xl:hidden'>
                <div
                  className={cs([
                    styles.darkmode,
                    '!flex items-center justify-between',
                  ])}
                >
                  <span>Screen mode</span>
                  {!isDesktop && <DarkMode />}
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </Box>
  );
};

export default Navigation;
