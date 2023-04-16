import { useRef, useEffect, useState } from 'react'

interface ElementWidth {
  width: number;
}

export function useElementWidth(): [React.RefObject<HTMLDivElement>, ElementWidth] {
    const ref = useRef<HTMLDivElement>(null)
    const [width, setWidth] = useState<ElementWidth>({ width: 0 })

    useEffect(() => {
        const handleResize = () => {
            if (ref.current) {
                setWidth({ width: ref.current.offsetWidth })
            }
        }

        handleResize()

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return [ref, width]
}