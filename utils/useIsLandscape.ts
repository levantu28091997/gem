import { useState, useEffect } from 'react'

export default function useIsLandscape() {
  const [isLandscape, setIsLandscape] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(orientation: landscape)')
    const handleOrientationChange = (e:any) => {
      setIsLandscape(e.matches)
    }
    
    setIsLandscape(mediaQuery.matches)
    mediaQuery.addListener(handleOrientationChange)

    return () => {
      mediaQuery.removeListener(handleOrientationChange)
    }
  }, [])

  return isLandscape
}
