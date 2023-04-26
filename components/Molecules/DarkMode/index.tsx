import React, { FC } from 'react';
import cs from '@/utils/cs';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import styles from './DarkMode.module.scss';

interface Props {
  className?: string;
  onClick?: any;
}
const DarkMode: FC<Props> = ({ className }: any) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  const toggleDarkMode = () => {
    if (theme == 'dark') return setTheme('light');
    return setTheme('dark');
  };

  return (
    <div className={cs([styles.darkMode, className])}>
      <input
        type='checkbox'
        className='hidden'
        id='darkMode'
        checked={currentTheme === 'dark' ? true : false}
        onChange={toggleDarkMode}
      />
      <label htmlFor='darkMode' className={styles.label}>
        <Image src='/icons/dark.svg' alt='Dark Mode' width={23} height={27} />
        <Image src='/icons/light.svg' alt='Light Mode' width={23} height={27} />
        <div className={styles.ball} />
      </label>
    </div>
  );
};

export default DarkMode;
