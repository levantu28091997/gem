import React, { FC } from 'react'
import TitleSection from '@/components/Atoms/TitleSection'
import styles from "./RecommendedGames.module.scss"
import cs from '@/utils/cs'
import ListItemRecommended from '@/components/Molecules/ListItemRecommended'
import ListItemFavouriteGames from '@/components/Molecules/ListItemFavouriteGames'

interface Props {
  isShowShape?: boolean
}

const YourFavouriteGames: FC<Props> = () => {
  return (
    <div className="mb-10 md:mb-[70px] xl:mb-20 relative">
      <TitleSection title='Your favorite games' />
      <div className='lg:mx-5 xl:mx-12'>
        <ListItemFavouriteGames />
      </div>
    </div>
  )
}

export default YourFavouriteGames