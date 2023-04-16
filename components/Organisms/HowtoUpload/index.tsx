import React from "react"
import Aos from "aos"
import Image from "next/image"
import AboutTitleSection from "@/components/Atoms/AboutTitleSection"
import useScreenSize from "@/utils/useScreenSize"
import styles from './HowtoUpload.module.scss'
const HowToUpLoad = () => {
    const { isMobile, isTablet } = useScreenSize()
    const dataBox = [
        { amount: "01.", content: "Sudmit your game to our HUB " },
        {
            amount: "02.", content: "Our team will get intouch with you"
        },
        {
            amount: "03.", content: "Spreading your game to the world"
        },
    ]
    return (
        <div className="">
            <div className={isMobile ? "text-center w-[322px] mt-[-180px] mx-auto col-span-2 mb-[76px]" : isTablet ? "text-center mt-[-180px] w-[322px] mx-auto col-span-2 mb-[76px]" : "text-center w-[341px] mx-auto col-span-2 mb-[76px]"}>
                <AboutTitleSection title="How To Upload Your Game" lineheight="51px" size={isMobile ? "30px" : isTablet ? "30px" : "50px"} fontStyle="italic" />
            </div>
            <div className={isMobile ? "grid grid-cols-1 w-full min-h-[265px] mx-auto gap-3" : isTablet ? "grid grid-cols-3 w-full min-h-[265px] mx-auto" : "grid grid-cols-3 w-[972px] min-h-[265px] mx-auto"}>
                {dataBox.map((item) =>
                    <div className={`relative h-[265px]`}>
                        <h2 className={isMobile ? `${styles.txt1} absolute top-[30%] left-10` : isTablet ? `${styles.txt1} absolute top-[30%] left-0` : `${styles.txt1} absolute top-[30%] left-0`}>{item.amount}</h2>
                        <div className={isMobile ? `${styles.bg_el} absolute right-10 top-0` : isTablet ? `${styles.bg_el} absolute right-0 top-0` : `${styles.bg_el} absolute right-0 top-0`}>
                            <p className={isMobile ? `${styles.txt2} w-[148px] ml-[99px] my-[30%]` : isTablet ? `${styles.txt2} w-[148px] ml-[99px] my-[30%]` : `${styles.txt2} w-[148px] ml-[99px] my-[30%]`}>{item.content}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default HowToUpLoad