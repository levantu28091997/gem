import AboutTitleSection from "@/components/Atoms/AboutTitleSection"
import styles from './Joinus.module.scss'
import AboutTitleBlock from "@/components/Atoms/AboutTitleBlock"
import useScreenSize from "@/utils/useScreenSize"
import Aos from "aos"
import { useEffect } from "react"
const Joinus = () => {
    const { isMobile, isTablet } = useScreenSize()
    useEffect(() => { Aos.init({ duration: 3000 }) })
    const dataText = [
        { t1: "01.", t2: "Marketing and Promotion", t3: "We have the resources to market and promote the game to a wider audience include advertising, social media campaigns, and other forms of marketing." },
        { t1: "02.", t2: "Development Support", t3: "We have the resources to market and promote the game to a wider audience include advertising, social media campaigns, and other forms of marketing." }
    ]
    return (
        <div className="w-full">
            {isMobile ?
                <div className="mb-[77px]">
                    <div className="flex mt-[51px] mb-[27px]">
                        <div data-aos="fade-right" data-aos-duration="2000" className={`${styles.bg_linear} w-[50%] grid justify-end`}>
                            <div className="text-center w-[254px]">
                                <AboutTitleBlock title1="JOIN" title2="US." size={isMobile ? "50px" : isTablet ? "80px" : "130px"} lineheight="normal" />
                            </div>
                        </div>
                        <div className="mt-5 text-center w-[40%]">
                            <AboutTitleSection title="Reason to Join Us" size={isMobile ? "30px" : isTablet ? "50px" : "50px"} lineheight={isMobile ? "31.86px" : isTablet ? "31.86px" : "normal"} fontStyle={isMobile ? "31.86px" : isTablet ? "31.86px" : "normal"} />
                        </div>
                    </div>
                    {dataText.map((item) =>
                        <div className="w-full text-center">
                            <h2 className={styles.t1}>{item.t1}</h2>
                            <h5 className={styles.t2}>{item.t2}</h5>
                            <p className={styles.t3}>{item.t3}</p>
                        </div>
                    )}

                </div>
                : isTablet ?
                    <div className="mb-[77px]">
                        <div className="flex mt-[51px] mb-[27px]">
                            <div data-aos="fade-right" data-aos-duration="2000" className={`${styles.bg_linear} w-[50%] grid justify-center`}>
                                <div className="text-center w-[254px] ">
                                    <AboutTitleBlock title1="JOIN" title2="US." size={isMobile ? "50px" : isTablet ? "80px" : "130px"} lineheight="normal" />
                                </div>
                            </div>
                            <div className="text-center pt-8">
                                <AboutTitleSection title="Reason to Join Us" size={isMobile ? "30px" : isTablet ? "50px" : "50px"} lineheight="50px" fontStyle="italic" />
                            </div>
                        </div>
                        {dataText.map((item) =>
                            <div className="w-full text-center">
                                <h2 className={styles.t1}>{item.t1}</h2>
                                <h5 className={styles.t2}>{item.t2}</h5>
                                <p className={styles.t3}>{item.t3}</p>
                            </div>
                        )}

                    </div>
                    : <div className="">
                        <div className="text-center">
                            <AboutTitleSection title="Reason to Join Us" size="50px" fontStyle="italic" />
                        </div>
                        <div className="w-full flex justify-between mt-[51px] mb-[161px]">
                            <div data-aos="fade-right" data-aos-duration="2000" className={`${styles.bg_linear_desktop} w-[811px] grid justify-end`}>
                                <div className="text-center w-[254px] mr-16 pt-2">
                                    <AboutTitleBlock title1="JOIN" title2="US." size={isMobile ? "50px" : isTablet ? "80px" : "130px"} lineheight="90px" />
                                </div>
                            </div>
                            {dataText.map((item) =>
                                <div className="w-[502px] text-center">
                                    <h2 className={styles.t1}>{item.t1}</h2>
                                    <h5 className={styles.t2}>{item.t2}</h5>
                                    <p className={styles.t3}>{item.t3}</p>
                                </div>
                            )}

                        </div>
                    </div>
            }

        </div>
    )
}
export default Joinus