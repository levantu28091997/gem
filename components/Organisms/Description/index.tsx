import React from 'react';
import cs from '@/utils/cs';
import styles from './Description.module.scss';

interface Iprops {
  gameName?: string;
  description?: string;
}

const Description = (x: Iprops) => {
  return (
    <div
      className={cs([styles.desSection, 'mb-10 md:mb-[70px] xl:mb-20 text-black dark:text-white bg-[#ffffffcc] dark:bg-[#ffffff40] shadow-light dark:shadow-dark border border-[#ffffff17] dark:border-0'])}
    >
      {x.gameName && x.description ? (
        <div className={styles.wrapper}>
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
              Play our addictive online multiplayer games for free on Poki! Play
              3D multiplayer shooting games such as Venge.io and Battle Forces.
              Show your friends who the boss is in Rabbids Wild Race and House
              of Hazards. Or work together to solve puzzles in ZOOM-BE and Duo
              Survival. You can even create virtual chaos together in
              Schoolbreak.io! Enjoy our collection of free online games with no
              installing required!
            </p>
            <h3>What are the best free Online Games online?</h3>
            <ol>
              <li>
                <a href=''>Subway Surfers</a>
              </li>
              <li>
                <a href=''>Smash Karts</a>
              </li>
              <li>
                <a href=''>Blockpost</a>
              </li>
              <li>
                <a href=''>Snake.is MLG Edition</a>
              </li>
              <li>
                <a href=''>Stickman Hook</a>
              </li>
              <li>
                <a href=''>2048</a>
              </li>
              <li>
                <a href=''>Tribals.io</a>
              </li>
              <li>
                <a href=''>Sushi Party</a>
              </li>
              <li>
                <a href=''>Moto X3M</a>
              </li>
              <li>
                <a href=''>Like a King</a>
              </li>
            </ol>

            <h3>
              What are the most popular Online Games for the mobile phone or
              tablet?
            </h3>
            <ol>
              <li>
                <a href=''>Subway Surfers</a>
              </li>
              <li>
                <a href=''>Stickman Hook</a>
              </li>
              <li>
                <a href=''>2048</a>
              </li>
              <li>
                <a href=''>Tribals.io</a>
              </li>
              <li>
                <a href=''>Sushi Party</a>
              </li>
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};

export default Description;