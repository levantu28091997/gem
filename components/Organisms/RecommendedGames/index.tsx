import React, { FC } from 'react'
import TitleSection from '@/components/Atoms/TitleSection'
import styles from "./RecommendedGames.module.scss"
import cs from '@/utils/cs'
import ListItemRecommended from '@/components/Molecules/ListItemRecommended'

interface Props {
  isShowShape?: boolean
}

const RecommendedGames: FC<Props> = ({ isShowShape = false }) => {
  return (
    <div className="mb-10 md:mb-[70px] xl:mb-20 relative">
      {isShowShape && <div className={cs([styles.path, 'path-img opacity-0 xl:opacity-100'])} />}
      <TitleSection title='Recommended for you' />
      <div className='lg:mx-5 xl:mx-12'>
        <ListItemRecommended />
      </div>
    </div>
  )
}

export default RecommendedGames