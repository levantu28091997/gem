import React from 'react';
import cs from '@/utils/cs';
import styles from './Description.module.scss';
import Link from 'next/link';

interface Iprops {
  gameName?: string;
  description?: string;
}

const Description = (x: Iprops) => {
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
            <h2>Online Games</h2>
          </header>
          <div>
            <p>
              Welcome to our game portal! Here, you'll find a vast array of
              exciting and engaging games to play, all conveniently located in
              one place. Whether you're a fan of action-packed shooters,
              immersive RPGs, challenging puzzle games, or anything in between,
              we've got you covered. With easy-to-use navigation and a
              user-friendly interface, our game portal makes it simple to
              discover and play your favorite games. So what are you waiting
              for? Start exploring today and discover your next gaming
              adventure!
            </p>
            <h3>
              There are many wonderful games to play on mobile, but here are
              some popular ones:
            </h3>
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
