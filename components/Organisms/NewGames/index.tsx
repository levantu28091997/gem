import React, { FC } from 'react'
import TitleSection from '@/components/Atoms/TitleSection'
import ListItemNewGame from '@/components/Molecules/ListItemNewGame'
import styles from "./NewGames.module.scss"
import cs from '@/utils/cs'

interface Props {
  isShowShape?: boolean
}

const NewGames: FC<Props> = ({ isShowShape = false }) => {
  return (
    <div className="popularTag mb-10 md:mb-[70px] xl:mb-20 relative">
      {isShowShape && <div className={cs([styles.path, 'path-img opacity-0 xl:opacity-100'])} />}
      <TitleSection title='New games' viewMore="/new-games" />
      <div className='lg:mx-5 xl:mx-12'>
        <ListItemNewGame />
      </div>
    </div>
  )
}

export default NewGames