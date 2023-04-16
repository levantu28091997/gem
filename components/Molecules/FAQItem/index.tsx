import React, { FC } from "react"
import styles from './Joinus.module.scss'
import Image from "next/image";
import useScreenSize from "@/utils/useScreenSize";
interface Props {
    faq: any;
    index: number;
    OpenFaq: any
}
const FaqItem: FC<Props> = ({ faq, OpenFaq, index }) => {
    const { isMobile, isTablet } = useScreenSize()
    return (
        <div className={isMobile ? `${styles.faq} faq ${faq.status ? `${styles.open}` : ''} w-full mx-auto h-auto bg-white text-black text-center mb-[19px]` : isTablet ? `${styles.faq} faq ${faq.status ? `${styles.open}` : ''} w-[374px] h-auto bg-white text-black text-center mb-[19px]` : `${styles.faq} faq ${faq.status ? `${styles.open}` : ''} w-[474px] h-auto bg-white text-black text-center mb-[19px]`} key={index} onClick={() => OpenFaq(index)}>
            <div className={`${styles.faq_question}`}>
                <h2 className={isMobile ? `${styles.t1} text-[14px] pt-[15px]` : isTablet ? `${styles.t1} text-[14px] pt-[15px]` : `${styles.t1} text-[18px] pt-[14px]`}>{faq.t1}</h2>
                <div className="mx-5 mt-[11px]">
                    <Image
                        src="/images/Subtract.png"
                        alt=""
                        width={24}
                        height={24}
                    />
                </div>
            </div>
            <div className={isMobile ? `${styles.t3} ${styles.faq_answer} p-2 text-justify text-[14px]` : isTablet ? `${styles.t3} ${styles.faq_answer} p-2 text-justify text-[14px]` : `${styles.t3} ${styles.faq_answer} p-2 text-justify text-[16px]`}>{faq.t2}</div>
        </div >

    )
}
export default FaqItem