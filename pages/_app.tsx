import WebsocketProvider from '@/app/context/WebsocketProvider';
import LayoutAboutDefault from '@/components/Templates/About/DeafaulThemeAbout';
import LayoutDefault from '@/components/Templates/Default';
import LayoutDefaultNoDarkTheme from '@/components/Templates/DefaultNoDarkTheme';
import '@/styles/globals.scss';
import { theme } from '@/utils/theme';
import { ThemeProvider } from '@mui/material';
import i18next from 'i18next';
import { ThemeProvider as DarkModeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ReactNode, useEffect } from 'react';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './../public/locales/en.json';
import hi from './../public/locales/hi.json';
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
i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'en',
    resources: {
      en: { translation: en },
      hi: { translation: hi },
    },
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    returnNull: false,
    react: {
      useSuspense: false, // If you are not using suspense
      bindI18n: 'languageChanged', // bind to store
      transEmptyNodeValue: '', // missing value will not cause the error
    },
  });
export default function App({ Component, pageProps }: Props) {
  const Layout =
    layouts[Component.layout ?? 'default'] ||
    ((children?: ReactNode) => <>{children}</>);
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
