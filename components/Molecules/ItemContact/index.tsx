import useScreenSize from '@/utils/useScreenSize';
import React, { FC } from 'react'

interface Props{
    title:string;
    text:string
}

const ItemContact:FC<Props> = ({title,text}) => {
  const {isMobile,isTablet} = useScreenSize()
  return (
    <div className={isMobile? "bg-white text-center items-center w-[90%] py-[24px] rounded-md shadow-inner mx-auto":isTablet?"bg-white text-center items-center w-[90%] py-[24px] rounded-md shadow-inner mx-auto hover:scale-[1.1] transition ease-in-out delay-150":"bg-white text-center items-center w-[90%] py-[24px] rounded-md shadow-inner mx-auto hover:scale-[1.1] transition ease-in-out delay-150"}>
        <h1 className="text-[#FEA900] font-[700] text-[24px]">{title}</h1>
        <p className="text-black">{text}</p>
    </div>
  )
}

export default ItemContact