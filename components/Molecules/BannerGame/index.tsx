import React, { FC } from 'react'
import cs from '@/utils/cs'
import Image from 'next/image'
import Link from 'next/link'
import styles from './BannerGame.module.scss'
import { IconFavouriteLight } from '@/components/Atoms/Icons'

interface Props {
    game: string
}
const BannerGame:FC<Props> = (x) => {
    
    return (
        <div className="bannerGame h-full relative">
            <Image className="h-full" src={`/images/game-${x.game}.png`} alt={x.game} width={1150} height={302} />
            <div className={cs([styles.actionBanner, 'absolute flex items-center'])}>
                <Link href="/playgame/game-current" >Play now</Link>
                <span className='hidden md:block pl-3.5 xl:pl-10'>
                    <IconFavouriteLight />
                </span>
            </div>
        </div>
    )
}

export default BannerGame