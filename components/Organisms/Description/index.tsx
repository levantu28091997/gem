import React from 'react';
import cs from '@/utils/cs';
import styles from './Description.module.scss';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
interface Iprops {
  gameName?: string;
  description?: string;
}

const Description = (x: Iprops) => {
  const { t } = useTranslation();

  return (
    <div
      className={cs([
        styles.desSection,
        'mb-10 md:mb-[70px] xl:mb-20 text-black dark:text-white bg-[#ffffffcc] dark:bg-[#ffffff40] w-full shadow-light dark:shadow-dark border border-[#ffffff17] dark:border-0',
      ])}
    >
      {x.gameName && x.description ? (
        <div className={styles.wrapper} style={{ whiteSpace: 'pre-line' }}>
          <header>
            <h2>{x.gameName}</h2>
          </header>
          <p>{x.description}</p>
        </div>
      ) : (
        <div className={styles.wrapper}>
          <header>
            <h2>{t('playOn')}</h2>
          </header>
          <div>
            <p>{t('contentDesc')}</p>
            <h3>{t('wonderful')}</h3>
            <ol>
              <li>
                <Link href={'/playgame/herocraft'}>Hero Craft</Link>
              </li>
              <li>
                <Link href={'/playgame/stickfight'}>Stickman fight</Link>
              </li>
              <li>
                <Link href={'/playgame/puzzledefense'}>Puzzle TD</Link>
              </li>
              <li>
                <Link href={'/playgame/mathtd'}>Math TD</Link>
              </li>
              <li>
                <Link href={'/playgame/coloring'}>Color alpha</Link>
              </li>
              <li>
                <Link href={'/playgame/lonedefenders'}>Lone Defenders</Link>
              </li>
              <li>
                <Link href={'/playgame/makeup'}>Make Up</Link>
              </li>
              <li>
                <Link href={'/playgame/banana'}>Banana Flights</Link>
              </li>
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};

export default Description;
