import React, { useEffect } from 'react'
import AboutTitleSection from "@/components/Atoms/AboutTitleSection"
import styles from './Global.module.scss'
import AboutTitleBlock from "@/components/Atoms/AboutTitleBlock"
import Image from "next/image"
import useScreenSize from "@/utils/useScreenSize"
import Aos from "aos"

const Global = () => {
    const { isMobile, isTablet } = useScreenSize()
    useEffect(() => { Aos.init({ duration: 3000 }) })
    return (
        <div className={isMobile ? "mt-[71px]" : isTablet ? "mt-[163px]" : "mt-[163px]"}>
            <div className="flex justify-end relative">
                <div data-aos="zoom-in" data-aos-duration="3000" className={isMobile ? "hidden" : isTablet ? "hidden" : "absolute top-[-115px] left-[253px]"}>
                    <Image
                        src="/images/gameee-05 2.png"
                        alt=""
                        width={297}
                        height={295}
                    />
                </div>
                <div className={isMobile ? "w-[78%] pl-8 text-center mt-6" : isTablet ? "w-[376px] text-center mt-7" : "w-[376px] text-center mt-7"}>
                    <AboutTitleSection title="Our Partner" size={isMobile ? "30px" : isTablet ? "50px" : "50px"} lineheight={isMobile ? "31px" : isTablet ? "50px" : "50px"} fontStyle="italic" />
                </div>
                <div data-aos="fade-left" data-aos-duration="2000" className={isMobile ? `${styles.bg_linear} w-[160px] pl-[10px]` : isTablet ? `${styles.bg_linear} w-[411px] pl-[65px]` : `${styles.bg_linear} w-[811px] pl-[65px]`}>
                    <div className={isMobile ? "text-right w-[120px]" : isTablet ? "text-right w-[259px]" : "text-right w-[259px]"}>
                        <AboutTitleBlock title1="GLO" title2="BAL." size={isMobile ? "50px" : isTablet ? "80px" : "130px"} lineheight={isMobile ? "50px" : isTablet ? "80px" : "90px"} />
                    </div>
                </div>
            </div>
            <div className={isMobile ? "grid grid-cols-6 justify-items-center container mx-auto mt-[33px]" : isTablet ? "grid grid-cols-6 justify-items-center container mx-auto mt-[33px]" : "grid grid-cols-6 justify-items-center container mx-auto mt-[140px]"}>
                <div className="col-span-3">
                    <Image
                        src="/images/Sinerji Software 1.png"
                        alt=''
                        width={170}
                        height={150}
                    />
                </div>
                <div className="col-span-3">
                    <Image
                        src="/images/Vita game studio 1.png"
                        alt=''
                        width={170}
                        height={150}
                    />
                </div>
                <div className="col-span-2">
                    <Image
                        src="/images/iCoder Games logo 1.png"
                        alt=''
                        width={170}
                        height={150}
                    />
                </div>
                <div className="col-span-2">
                    <Image
                        src="/images/Chirag Technozer 1.png"
                        alt=''
                        width={170}
                        height={150}
                    />
                </div>
                <div className="col-span-2">
                    <Image
                        src="/images/Khatriji Gaming 1.png"
                        alt=''
                        width={170}
                        height={150}
                    />
                </div>

            </div>
            <div className={isMobile ? "hidden" : isTablet ? "hidden" : "h-[120px] relative"}>
                <div data-aos="flip-right" data-aos-duration="3000" className="absolute top-[-30px] right-[180px]">
                    <Image
                        src="/images/gameee-03 2.png"
                        alt=""
                        width={297}
                        height={295}
                    />
                </div>
            </div>
        </div>
    )
}
export default Global