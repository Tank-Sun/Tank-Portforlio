import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {Dancing_Script} from 'next/font/google'
import logo from '../../public/assets/profile/logo.png'
import { HiOutlineMenu } from 'react-icons/hi'
import { MdOutlineClose } from 'react-icons/md'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing-script',
});

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {setShowMenu(!showMenu)};

  return (
    <div className='fixed w-full h-20 z-[100] bg-gray-950'>
      <div className='flex justify-between items-center w-full h-full px-4 md:px-8 2xl:px-16'>
        <div className='flex items-center'>
          <div>
            <Link href='/#main' scroll={false}>
              <Image src={logo} alt='logo' className='w-12 lg:w-16 cursor-pointer' />
            </Link>
          </div>
          <div className='ml-4 md:ml-5 lg:ml-8'>
            <p className={`${dancingScript.variable} font-name text-xl md:text-2xl lg:text-4xl font-bold`}>Tank Sun</p>
          </div>
        </div>
        <div>
          <ul className='hidden md:flex md:pr-8'>
            <Link href='/#main' scroll={false}>
              <li className='px-1 ml-10 text-sm uppercase hover:border-b'>Home</li>
            </Link>
            <Link href='/#about' scroll={false}>
              <li className='px-1 ml-10 text-sm uppercase hover:border-b'>About</li>
            </Link>
            <Link href='/#projects' scroll={false}>
              <li className='px-1 ml-10 text-sm uppercase hover:border-b'>Projects</li>
            </Link>
            <Link href='/#contact' scroll={false}>
              <li className='px-1 border-b-2 border-green-500 ml-10 text-sm uppercase hover:bg-green-500'>Contact</li>
            </Link>
          </ul>
          <div onClick={handleShowMenu} className='md:hidden pr-8'>
            <HiOutlineMenu size={25}/>
          </div>
        </div>
      </div>
      <div className={showMenu ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={showMenu ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gray-900 p-10 ease-in duration-300' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
          <div>
            <div className='flex w-full items-center justify-between' >
              <div>
                <h1 className='text-2xl font-bold'>Tank Sun</h1>
              </div>
              <div onClick={handleShowMenu} className='shadow hover:shadow-lg hover:rounded-md hover:shadow-gray-500 cursor-pointer'>
                <MdOutlineClose size={25}/>
              </div>
            </div>
            <div className='pt-10 pb-4 flex flex-col'>
              <ul className='uppercase'>
                <Link href='/#main' onClick={handleShowMenu} scroll={false}>
                  <li className='py-4 text-sm'>Home</li>
                </Link>
                <Link href='/#about' onClick={handleShowMenu} scroll={false}>
                  <li className='py-4 text-sm'>About</li>
                </Link>
                <Link href='/#projects' onClick={handleShowMenu} scroll={false}>
                  <li className='py-4 text-sm'>Projects</li>
                </Link>
                <Link href='/#contact' onClick={handleShowMenu} scroll={false}>
                  <li className='py-4 text-sm'>Contact</li>
                </Link>
              </ul>
              <div className='pt-40'>
                <p className='uppercase tracking-widest text-yellow-200'>Let&apos;s connect</p>
                <div className='flex items-center justify-between my-6 w-full sm:w-[80%]'>
                  <Link href='https://www.linkedin.com/in/tank-sun/' target="_blank" rel="noopener noreferrer">
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200'>
                      <FaLinkedinIn />
                    </div>
                  </Link>
                  <Link href='https://github.com/Tank-Sun' target="_blank" rel="noopener noreferrer">
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200'>
                      <FaGithub />
                    </div>
                  </Link>
                  <Link href='/#contact' onClick={handleShowMenu} scroll={false}>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200'>
                      <AiOutlineMail />
                    </div>
                  </Link>
                  <Link href='https://resume.creddle.io/resume/2461c883ivt' target="_blank" rel="noopener noreferrer">
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200'>
                      <BsFillPersonLinesFill />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar