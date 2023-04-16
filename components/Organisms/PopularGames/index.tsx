import React, { FC } from 'react'
import TitleSection from '@/components/Atoms/TitleSection'
import ListItemPopularGame from '@/components/Molecules/ListItemPopularGame'
import styles from "./PopularGames.module.scss"
import cs from '@/utils/cs'

interface Props {
  isShowShape?: boolean
}
const PopularGames: FC<Props> = ({ isShowShape = false }) => {
  return (
    <div className="mb-10 md:mb-[70px] xl:mb-20 relative">
      {isShowShape && <div className={cs([styles.path, 'relative z-0 path-img opacity-1 xl:opacity-100'])} />}
      <div className='relative z-10'>
        <TitleSection title='Popular games' viewMore='popular-games' />
      </div>
      <div className='lg:mx-5 xl:mx-12'>
        <ListItemPopularGame />
      </div>
    </div>
  )
}

export default PopularGames