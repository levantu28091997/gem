import React, { FC } from 'react'
import style from './AboutTitleSection.module.scss'
// import { Changa_One } from '@next/font/google';


interface Props {
  title: any;
  size?: string;
  lineheight?: string;
  fontStyle?: string;
  className?:string;
}

const AboutTitleSection: FC<Props> = ({ title, size, lineheight, fontStyle,className }) => {
  
  return (
    <div style={{ fontSize: `${size}`, lineHeight: `${lineheight}`, fontStyle: `${fontStyle}` }} className={`${style.titleSection} ${className}`}>
      {title}
    </div>
  )
}

export default AboutTitleSection