import { homeService } from '@/app/services/homeService';
import ItemCategory from '@/components/Molecules/ItemCategory';
import Description from '@/components/Organisms/Description';
import RecommendedGames from '@/components/Organisms/RecommendedGames';
import { useRequest } from 'ahooks';
import { FC, useEffect, useState } from 'react';
import styles from './categories.module.scss';

export default function Categories() {
  const [categories, setCategories] = useState<any>([]);
 
  const { data, run, loading } = useRequest(homeService.getCategories, {
    manual: true,
    onError: (res, params) => {
      return res;
    },
    onSuccess: (data) => {
      setCategories(data);
    },
  });

  useEffect(() => {
    run();
  }, []);
  console.log("category",categories)
  return (
    <div className='mx-auto w-full max-w-full relative z-10 main'>
      <ContentCategories listCategories={categories} />
      <RecommendedGames />
      <Description />
    </div>
  );
}

interface ItemType {
  id: number;
  attributes: {
    name: string;
  };
}

const ContentCategories: FC<{ listCategories: any }> = ({ listCategories }) => {
  return (
    <>
      <div className='lg:ml-5 xl:ml-12 mb-10 md:mb-[70px] xl:mb-20'>
        <div className={styles.categories}>
          {listCategories?.map((c: ItemType) => (
            <ItemCategory key={c?.id} cate={c?.attributes} />
          ))}
        </div>
      </div>
    </>
  );
};

Categories.layout = 'defaultNoDarkTheme';
