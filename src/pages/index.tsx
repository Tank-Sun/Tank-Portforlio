import Image from 'next/image'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Head>
        <title>Tank | Full Stack Developer</title>
        <meta name="description" content="I’m a full-stack web developer specializing in building reliable and enjoyable products." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    </main>
  )
}
