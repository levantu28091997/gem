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
        <div className="">
            <div className="flex justify-end relative">
                <div data-aos="zoom-in" data-aos-duration="3000" className={isMobile ? "hidden" : isTablet ? "hidden" : "absolute top-[-115px] left-[253px]"}>
                    <Image
                        src="/images/gameee-05 2.png"
                        alt=""
                        width={297}
                        height={295}
                    />
                </div>
                <div className={isMobile ? "w-[78%] pl-5 text-center mt-3" : isTablet ? "w-[376px] text-center mt-7" : "w-[376px] text-center mt-7"}>
                    <AboutTitleSection title="Bring your game to the World" size={isMobile ? "30px" : isTablet ? "50px" : "50px"} lineheight={isMobile ? "31px" : isTablet ? "50px" : "50px"} fontStyle="italic" />
                </div>
                <div data-aos="fade-left" data-aos-duration="2000" className={isMobile ? `${styles.bg_linear} w-[160px] pl-[10px]` : isTablet ? `${styles.bg_linear} w-[411px] pl-[65px]` : `${styles.bg_linear} w-[811px] pl-[65px]`}>
                    <div className={isMobile ? "text-right w-[120px]" : isTablet ? "text-right w-[259px]" : "text-right w-[259px]"}>
                        <AboutTitleBlock title1="GLO" title2="BAL." size={isMobile ? "50px" : isTablet ? "80px" : "130px"} lineheight={isMobile ? "50px" : isTablet ? "80px" : "90px"} />
                    </div>
                </div>
            </div>
            {isMobile
                ? <div className="container mx-auto">
                    <div className="p-[47px]">
                        <p className="text-center text-[14px] leading-[30px] text-white font-['Montserrat']">
                            We aim to create a marketing strategy to promote the game globally includes utilizing social media platforms, creating promotional videos provide development support to game developers, such as access to specialized technology, technical expertise, and guidance on game design., and working with game reviewers to increase visibility.
                        </p>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="3000" className="grid justify-items-center">
                        <Image
                            src="/images/Game LDP-05-05 1.png"
                            alt=""
                            width={285}
                            height={457}
                        />
                        <button className={`${styles.button_linear} text-white h-[54px] mx-auto mt-5`}>
                            Let’s Discover
                        </button>
                    </div>

                </div>
                : isTablet
                    ? <div className="container grid grid-cols-2 mx-auto">
                        <div data-aos="zoom-in" data-aos-duration="3000" className="">
                            <Image
                                src="/images/Game LDP-05-05 1.png"
                                alt=""
                                width={417}
                                height={457}
                            />
                        </div>
                        <div className="p-[47px]">
                            <p className="pb-[37px] leading-[30px] text-white font-['Montserrat']">
                                We aim to create a marketing strategy to promote the game globally includes utilizing social media platforms, creating promotional videos provide development support to game developers, such as access to specialized technology, technical expertise, and guidance on game design., and working with game reviewers to increase visibility.
                            </p>
                            <button className={`${styles.button_linear} text-white h-[54px]`}>
                                Let’s Discover
                            </button>
                        </div>
                    </div>
                    : <div className="w-1/2 grid grid-cols-2 mx-auto">
                        <div data-aos="zoom-in" data-aos-duration="3000" className="">
                            <Image
                                src="/images/Game LDP-05-05 1.png"
                                alt=""
                                width={417}
                                height={457}
                            />
                        </div>
                        <div className="p-[47px]">
                            <p className="pb-[47px] leading-[30px] text-white font-['Montserrat']">
                                We aim to create a marketing strategy to promote the game globally includes utilizing social media platforms, creating promotional videos provide development support to game developers, such as access to specialized technology, technical expertise, and guidance on game design., and working with game reviewers to increase visibility.
                            </p>
                            <button className={`${styles.button_linear} text-white h-[54px]`}>
                                Let’s Discover
                            </button>
                        </div>
                    </div>}
            <div className={isMobile ? "hidden" : isTablet ? "hidden" : "h-[120px] relative"}>
                <div data-aos="flip-right" data-aos-duration="3000" className="absolute top-[-140px] right-[180px]">
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