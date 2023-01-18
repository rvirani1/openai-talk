import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'

export default function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
