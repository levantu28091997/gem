import useScreenSize from '@/utils/useScreenSize';
import React, { FC } from 'react'

interface Props{
    title:string;
    text:string
}

const ItemContact:FC<Props> = ({title,text}) => {
  const {isMobile} = useScreenSize()
  if (isMobile) {
    return (
      <div className="bg-white text-center  items-center w-[306px] h-[103px py-[24px] rounded-md shadow-inner mx-auto mb-[20px]">
          <h1 className="text-[#FEA900] font-[700] text-[24px]">{title}</h1>
          <p className="text-black">{text}</p>
      </div>
    )
  }
  return (
    <div className="bg-white text-center  items-center w-[306px] h-[103px py-[24px] rounded-md shadow-inner mx-auto">
        <h1 className="text-[#FEA900] font-[700] text-[24px]">{title}</h1>
        <p className="text-black">{text}</p>
    </div>
  )
}

export default ItemContact