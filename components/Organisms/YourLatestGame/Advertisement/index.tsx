import React from 'react'
import styles from './Advertisement.module.scss'
import Image from 'next/image'

function index() {
  return (
    <div className=''>
        <Image src='/images/game-capybara-clicker.png' alt='advertisement' width={600} height={600} className="h-full w-full"/>
    </div>
  )
}

export default index