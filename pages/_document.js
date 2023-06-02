import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preload"
          href="/fonts/Terminus(TTF)500.ttf"
          as='font'
          crossOrigin='anonymous'
        >
        </link>
        <link
          rel="preload"
          href="/fonts/Terminus(TTF)700.ttf"
          as='font'
          crossOrigin='anonymous'
        >
        </link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
