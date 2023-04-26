import '@/styles/globals.scss';
import { theme } from '@/utils/theme';
import React, { ReactNode, useEffect } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';
import LayoutDefault from '@/components/Templates/Default';
import { ThemeProvider as DarkModeProvider } from 'next-themes';
import WebsocketProvider from '@/app/context/WebsocketProvider';
import LayoutDefaultNoDarkTheme from '@/components/Templates/DefaultNoDarkTheme';
import LayoutAboutDefault from '@/components/Templates/About/DeafaulThemeAbout';
import { useRouter } from 'next/router'

const layouts: any = {
  default: LayoutDefault,
  defaultNoDarkTheme: LayoutDefaultNoDarkTheme,
  defaultAboutTheme: LayoutAboutDefault,
};

type Props = AppProps & {
  Component: {
    layout: string;
  };
};

export default function App({ Component, pageProps }: Props) {
  const Layout = layouts[Component.layout ?? 'default'] || ((children?: ReactNode) => <>{children}</>)
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <DarkModeProvider attribute='class'>
      <WebsocketProvider>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </WebsocketProvider>
    </DarkModeProvider>
  );
}
