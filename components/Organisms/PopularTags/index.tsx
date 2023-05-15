import cs from '@/utils/cs';
import Link from 'next/link';
import { useRequest } from 'ahooks';
import styles from './PopularTags.module.scss';
import React, { useEffect, useState } from 'react';
import { homeService } from '@/app/services/homeService';
import useScreenSize from '@/utils/useScreenSize';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

interface PropTag {
  id: number;
  attributes: {
    createdAt: Date;
    description: string;
    name: string;
    slug: string;
    updatedAt: Date;
  };
}
const PopularTags = ({tags}:any) => {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <div className='popularTag'>
      <div className='mb-10'>
        <h2 className={cs([styles.titleSection, 'text-black dark:text-white'])}>
          {t('popTags')}
        </h2>
      </div>
      <ul className={`${styles.tagList} flex justify-center flex-wrap gap-2`}>
        {
          tags?.map((tag: PropTag) => (
            <li key={tag?.id}>
              <Link
                href={`/tag/${tag?.attributes?.slug}`}
                className={cs([
                  router.asPath === `/tag/${tag?.attributes?.slug}`
                    ? styles.activePopularTag
                    : '',
                  'text-black dark:text-white border-[#0A0A0A] dark:border-[#FFFFFF] truncate',
                ])}
              >
                {tag?.attributes?.name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PopularTags;
