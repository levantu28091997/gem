import React from 'react';
import styles from './LoadingGameThumbnail.module.scss';
import cs from '@/utils/cs';
function LoadingGameThumbnail() {
  return (
    <div className='absolute z-10 left-0 top-0 w-full h-full bg-[#FFF4E8] dark:bg-[#0E101D] opacity-75'>
      <div>
        <div className={styles.loading_dots}>
          <div className={cs([styles.dot,'dark:bg-white'])}></div>
          <div className={cs([styles.dot,'dark:bg-white'])}></div>
          <div className={cs([styles.dot,'dark:bg-white'])}></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingGameThumbnail;
