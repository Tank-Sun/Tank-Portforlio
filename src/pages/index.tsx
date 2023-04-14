import Image from 'next/image'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import { Inter } from 'next/font/google'
import Main from '@/components/Main';
import About from '@/components/About';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='mx-auto px-4'>
      <Main />
      <About />
    </main>
  )
}
