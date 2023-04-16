import React, { useEffect, useRef, useState } from 'react'
import styles from './Navigation.module.scss'
import cs from '@/utils/cs'
import { Box } from '@mui/system'
import Link from 'next/link'
import Image from 'next/image'
import DarkMode from '../DarkMode'
import useScreenSize from '@/utils/useScreenSize'
import { useRouter } from 'next/router'

const Navigation = () => {
    const router = useRouter()
    const { isDesktop } = useScreenSize()
    const [showSubmenu, setShowSubmenu] = useState(false)
    const handleSubmenu = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        setShowSubmenu(!showSubmenu)
    }

    const dropdown = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (!showSubmenu) return
        function handleClick(event: { target: any }) {
            const className = event.target.getAttribute('class')
            const src = event.target.getAttribute('src')
            if ((dropdown.current && !dropdown.current.contains(event.target) && src !== '/icons/menu.svg' && className !== 'sub') || (!className && !src)) {
                setShowSubmenu(false)
            }
        }
        window.addEventListener('click', handleClick)
        return () => window.removeEventListener('click', handleClick)
    }, [showSubmenu])

    return (
        <Box >
            <ul className={cs(['flex', styles.menu])}>
            
                <li className={cs([styles.menuItem, router.asPath === '/my-game' ? styles.active : ''])}>
                    <Link href={'/my-game'}>
                        <Image src="/icons/game-controller.svg" alt="My game" width={21} height={21} />
                    </Link>
                    <p className={cs([styles.tooltip_menu])}>My game</p>
                </li>
                <li className={cs([styles.menuItem, router.asPath === '/categories' ? styles.active : ''])}>
                    <Link href={'/categories'}>
                        <Image src="/icons/categories.svg" alt="Categories" width={21} height={21} />
                    </Link>
                    <p className={cs([styles.tooltip_menu])}>Category </p>
                </li>
                <li className={cs([styles.menuItem, 'relative'])}>
                    <Link href="" onClick={handleSubmenu} className='sub'>
                        <Image src="/icons/menu.svg" alt="Menu" width={21} height={21} />
                    </Link>
                    <p className={cs([styles.tooltip_menu])}>Menu</p>
                    <div ref={dropdown} className={cs([styles.subMenu, showSubmenu && styles.active, 'absolute'])}>
                        <ul className={cs([styles.menu])}>
                            <li>
                                <Link href={'/developers'}>
                                    Game Developers
                                </Link>
                            </li>
                            <li>
                                <Link href={'/about'}>
                                    About Apero Gamehub
                                </Link>
                            </li>
                            <li className='xl:hidden'>
                                <div className={cs([styles.darkmode, '!flex items-center justify-between'])}>
                                    <span>Screen mode</span>
                                    {!isDesktop && <DarkMode />}
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </Box>
    )
}

export default Navigation