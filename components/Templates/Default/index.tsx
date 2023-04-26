import React from 'react'
import { CssBaseline } from '@mui/material'
import Navbar from '@/components/Organisms/Navbar'
import Footer from '@/components/Organisms/Footer'

type LayoutDefaultProps = React.PropsWithChildren<{}>;
const LayoutDefault = ({ children }: LayoutDefaultProps) => {
  return (
    <div>
      <CssBaseline />
      <div className={`bg-[#FFF4E8] dark:bg-[#0E101D] relative overflow-hidden theme-dark after:content-[none] dark:after:content-['']`}>
        <Navbar />
        <div className='pt-12 pb-24'>{children}</div>
        <Footer />
      </div>
    </div>
  )
}

export default LayoutDefault