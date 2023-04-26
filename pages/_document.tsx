import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>

        <link rel="prefetch" as="font" href="https://fonts.googleapis.com/css2?family=Barlow:wght@500;600;800&display=swap" />
        <link rel="prefetch" as="font" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"></link>
        <link rel="prefetch" as="font" href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600&display=swap"></link>
        <link rel="prefetch" as="font" href="https://fonts.googleapis.com/css2?family=Changa+One&display=swap"></link>
        <link rel="prefetch" as="font" href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"></link>
        <link rel="prefetch" as="font" href="https://fonts.googleapis.com/css2?family=Genos:wght@500&display=swap"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
