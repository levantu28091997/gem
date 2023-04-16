import React from 'react'
import styles from "./Social.module.scss"
import cs from '@/utils/cs'
import {
    IconSocialFacebook,
    IconSocialInsta,
    IconSocialTiktok,
    IconSocialGoogle,
    IconSocialLinkedin
} from "@/components/Atoms/Icons"


const Social = () => {
    return (
        <div className={cs([styles.Social, "flex social sm:mb-5"])}>
            <a className='mr-3 sm:mr-10 w-3.5 sm:w-auto' href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                <IconSocialFacebook />
            </a>
            <a className='mr-3 sm:mr-10 w-3.5 sm:w-auto' href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                <IconSocialInsta />
            </a>
            <a className='mr-3 sm:mr-10 w-3.5 sm:w-auto' href="https://www.tiktok.com/" target="_blank" rel="noreferrer">
                <IconSocialTiktok />
            </a>
            <a className='mr-3 sm:mr-10 w-3.5 sm:w-auto' href="https://www.google.com/" target="_blank" rel="noreferrer">
                <IconSocialGoogle />
            </a>
            <a className='w-3.5 sm:w-auto' href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                <IconSocialLinkedin />
            </a>
        </div>
    )
}

export default Social