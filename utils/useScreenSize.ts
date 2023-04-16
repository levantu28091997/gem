import { useMedia } from 'use-media'

const useScreenSize = (): {
    isDesktop: boolean
    isTablet: boolean
    isMobile: boolean
    isSmallMobile: boolean
} => {
    const isDesktop = useMedia({ minWidth: '1280px' })

    const isTablet = useMedia({ minWidth: '768px', maxWidth: '1279px' })

    const isMobile = useMedia({ maxWidth: '767px' })

    const isSmallMobile = useMedia({ maxWidth: '480px' })

    return { isDesktop, isMobile, isTablet, isSmallMobile }
}

export default useScreenSize
