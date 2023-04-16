import '@/styles/globals.scss'
import { theme } from '@/utils/theme'
import React, { ReactNode } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material'
import LayoutDefault from '@/components/Templates/Default'
import { ThemeProvider as DarkModeProvider } from "next-themes"
import WebsocketProvider from "@/app/context/WebsocketProvider";
import LayoutDefaultNoDarkTheme from '@/components/Templates/DefaultNoDarkTheme'

const layouts: any = {
  default: LayoutDefault,
  defaultNoDarkTheme: LayoutDefaultNoDarkTheme
}

type Props = AppProps & {
  Component: {
    layout: string
  }
}


export default function App({ Component, pageProps }: Props) {
  const Layout = layouts[Component.layout ?? 'default'] || ((children?: ReactNode) => <>{children}</>)

  return (
    <DarkModeProvider attribute="class">
      <WebsocketProvider>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </WebsocketProvider>
    </DarkModeProvider >
  )
}
