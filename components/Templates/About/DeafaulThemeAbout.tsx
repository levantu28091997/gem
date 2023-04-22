import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import Navbar from '@/components/Organisms/Navbar';
import Footer from '@/components/Organisms/Footer';

type LayoutDefaultProps = React.PropsWithChildren<{}>;
const LayoutAboutDefault = ({ children }: LayoutDefaultProps) => {
  return (
    <Box>
      <CssBaseline />
      <Box className={`bg-[#0E101D] relative overflow-hidden`}>
        <Navbar />
        <div className='pt-12'>{children}</div>
        <Footer />
      </Box>
    </Box>
  );
};

export default LayoutAboutDefault;
