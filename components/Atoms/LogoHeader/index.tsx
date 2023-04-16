import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

const LogoHeader = () => {
    const router = useRouter()

    return (
        <Image
            width={156}
            height={48}
            src="/icons/logo-pc.svg"
            className='w-full ml-[-4px] md:ml-0 md:aspect-video md:max-h-[48px] max-w-[107px] md:max-w-[156px] hover:cursor-pointer'
            alt="Apero GameHub"
            onClick={() => router.push("/")}
        />
    )
}

export default LogoHeader
