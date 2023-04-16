import AboutTitleSection from "@/components/Atoms/AboutTitleSection"
import styles from './Joinus.module.scss'
import AboutTitleBlock from "@/components/Atoms/AboutTitleBlock"
import useScreenSize from "@/utils/useScreenSize"
import Aos from "aos"
import Image from "next/image"
import { useEffect, useState } from "react"
import FaqItem from "@/components/Molecules/FAQItem"
const Faq = () => {
    const { isMobile, isTablet } = useScreenSize()
    useEffect(() => { Aos.init({ duration: 3000 }) })
    const [dataText, setDatatext] = useState([
        {
            status: false,
            t1: "What are your revenue sharing terms?",
            t2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            status: false,
            t1: "What are your revenue sharing terms?",
            t2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            status: false,
            t1: "What are your revenue sharing terms?",
            t2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            status: false,
            t1: "What are your revenue sharing terms?",
            t2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            status: false,
            t1: "What are your revenue sharing terms?",
            t2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            status: false,
            t1: "What are your revenue sharing terms?",
            t2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
    ])
    const Open = (index: number) => {
        setDatatext(dataText.map((item, i) => {
            if (i === index) {
                item.status = !item.status;
            } else {
                item.status = false
            }
            return item
        }))
        console.log(dataText);

    }
    return (
        <div className="w-full">
            {isMobile ?
                <div className="">
                    <div className="w-full mt-[51px] mb-[51px]">
                        <div className="flex justify-between">
                            <div className="w-full mr-[-200px]">
                                <div data-aos="fade-right" data-aos-duration="2000" className={`${styles.bg_linear} h-[124px] grid justify-end blok w-1/2`}>
                                    <div className=" w-1/2 mr-16 text-center py-3">
                                        <AboutTitleBlock title1="Q&" title2="A" size={isMobile ? "50px" : isTablet ? "80px" : "130px"} lineheight="50px" />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-[33px] mt-5 mr-[28%]">
                                <AboutTitleSection title="FAQ" size={isMobile ? "32px" : isTablet ? "32px" : "50px"} />
                            </div>
                        </div>
                        <div className="w-full mt-[31px]">
                            {dataText.map((item, i) =>
                                <FaqItem faq={item} index={i} OpenFaq={Open} />
                            )}
                        </div>
                    </div>
                </div>
                : isTablet ?
                    <div className="">
                        <div className="w-full flex justify-between mt-[51px] mb-[161px] z-[1]">
                            <div className="">
                                <div data-aos="fade-right" data-aos-duration="2000" className={`${styles.bg_linear} grid justify-end blok w-[100%]`}>
                                    <div className=" w-[234px] mr-10 text-center py-2">
                                        <AboutTitleBlock title1="Q&" title2="A" size={isMobile ? "50px" : isTablet ? "80px" : "130px"} lineheight="90px" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-[33px] mt-5">
                                    <AboutTitleSection title="FAQ" size="50px" />
                                </div>
                                {dataText.map((item, i) =>
                                    <FaqItem faq={item} index={i} OpenFaq={Open} />
                                )}
                            </div>
                        </div>
                    </div>
                    : <div className="">
                        <div className="w-full flex justify-between mt-[51px] mb-[161px]">
                            <div className="">
                                <div data-aos="fade-right" data-aos-duration="2000" className={`${styles.bg_linear_desktop} grid justify-end blok w-[811px]`}>
                                    <div className=" w-[234px] mr-10 text-center py-2">
                                        <AboutTitleBlock title1="Q&" title2="A" size={isMobile ? "50px" : isTablet ? "80px" : "130px"} lineheight="90px" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-[33px] -mt-5">
                                    <AboutTitleSection title="FAQ" size={isMobile ? "" : isTablet ? "" : "50px"} />
                                </div>
                                {dataText.map((item, i) =>
                                    <FaqItem faq={item} index={i} OpenFaq={Open} />
                                )}
                            </div>
                        </div>
                    </div>
            }

        </div >
    )
}
export default Faq