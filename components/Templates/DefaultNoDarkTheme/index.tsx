import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import Navbar from '@/components/Organisms/Navbar';
import Footer from '@/components/Organisms/Footer';
import { useRouter } from 'next/router';
import useScreenSize from '@/utils/useScreenSize';

type LayoutDefaultProps = React.PropsWithChildren<{}>;
const LayoutDefaultNoDarkTheme = ({ children }: LayoutDefaultProps) => {
  const r = useRouter();

  const { isMobile, isTablet } = useScreenSize();

  const isPlayGameMobile =
    r.asPath.startsWith('/playgame') && (isMobile || isTablet);

  return (
    <Box>
      <CssBaseline />
      <Box className='bg-[#0E101D] relative overflow-hidden'>
        {isPlayGameMobile ? (
          <>{children}</>
        ) : (
          <>
            <Navbar />
            <div className='bg-[#FFF4E8] dark:bg-[#0E101D] pt-12 pb-24'>{children}</div>
            <Footer />
          </>
        )}
      </Box>
    </Box>
  );
};

export default LayoutDefaultNoDarkTheme;
