import React, { FC } from 'react'
import Image from 'next/image'

interface Props {
  game: string
}
const BannerGame: FC<Props> = (x) => {

  return (
    <div className="bannerGame h-full relative">
      <Image className="h-full" src={`/images/game-${x.game}.png`} alt={x.game} width={1150} height={302} />
    </div>
  )
}

export default BannerGame