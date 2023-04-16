import React from 'react'
import { Box, CssBaseline } from '@mui/material'
import Navbar from '@/components/Organisms/Navbar'
import Footer from '@/components/Organisms/Footer'

type LayoutDefaultProps = React.PropsWithChildren<{}>;
const LayoutDefault = ({ children }: LayoutDefaultProps) => {
  return (
    <Box>
      <CssBaseline />
      <Box className={`bg-[#FFF4E8] dark:bg-[#0E101D] relative overflow-hidden theme-dark`}>
        <Navbar />
        <div className='pt-12 pb-24'>{children}</div>
        <Footer />
      </Box>

    </Box>
  )
}

export default LayoutDefault