import cs from '@/utils/cs'
import Link from 'next/link'
import React, { FC } from 'react'
import styles from './TitleSection.module.scss'
import { IconArrowRight } from '@/components/Atoms/Icons'

interface Props {
  title: string
  viewMore?: string
}
const TitleSection: FC<Props> = ({ title, viewMore }) => {

  const ViewMoreButton = () => {
    if (!viewMore) return null

    return (
      <Link href={viewMore} className={cs([styles.viewMore, 'flex items-center text-[#FF860A] dark:text-white'])}>
        View more
        <IconArrowRight className="stroke-[#FF860A] dark:stroke-white" />
      </Link>
    )
  }

  return (
    <div className='flex items-center justify-between mb-8 md:mb-[43px] xl:mb-[62px]'>
      <h2 className={cs([styles.titleSection, 'text-black dark:text-white'])}>{title}</h2>
      <ViewMoreButton />
    </div>
  )
}

export default TitleSection