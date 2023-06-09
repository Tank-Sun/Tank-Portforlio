import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import BackToTop from '@/components/BackToTop'
import Head from 'next/head'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Tank Sun | Full Stack Developer</title>
        <meta name="description" content="I am a full-stack web developer specializing in building reliable and enjoyable products." />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Component {...pageProps} />
      <BackToTop />
    </>
)}
