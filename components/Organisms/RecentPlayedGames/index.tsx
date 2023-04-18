import React, { FC } from 'react'
import TitleSection from '@/components/Atoms/TitleSection'
import styles from "./RecentPlayedGames.module.scss"
import cs from '@/utils/cs'
import ListItemRecentPlayedGames from '@/components/Molecules/ListItemRecentPlayedGames'

interface Props {
  isShowShape?: boolean
}
const RecentPlayedGames: FC<Props> = ({ isShowShape = false }) => {
  return (
    <div className="mb-10 md:mb-[70px] xl:mb-20 relative">
      <div className='relative z-10'>
        <TitleSection title='Recent Played games'/>
      </div>
      <div className='lg:mx-5 xl:mx-12'>
        <ListItemRecentPlayedGames />
      </div>
    </div>
  )
}

export default RecentPlayedGames