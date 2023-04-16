import cs from '@/utils/cs'
import Link from 'next/link'
import Image from 'next/image'
import React, { FC } from 'react'
import styles from './ItemCategories.module.scss'

const ItemCategories: FC<any> = ({ cate }) => {
  const loaderImage = ({ src }: any) => {
    return process.env.IMAGE_URL + src
  }

  return (
    <Link href={`/category/${cate?.slug}`}>
      <div className={cs([styles.itemTag, 'flex items-center bg-[#FFFFFF]'])}>
        <Image className='rounded-[10px]' loader={loaderImage} src={cate?.thumbnail.data.attributes.url} alt={cate?.name} width={104} height={104} />
        <span className='grow text-black'>{cate?.name}</span>
      </div>
    </Link>
  )
}

export default ItemCategories