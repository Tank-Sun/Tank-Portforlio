import React, {useState} from 'react'
import Link from 'next/link'
import { HiOutlineMenu } from 'react-icons/hi'
import { MdOutlineClose } from 'react-icons/md'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {setShowMenu(!showMenu)};

  return (
    <div className='fixed w-full h-20 z-[100]'>
      <div className='flex justify-between items-center w-full h-full px-4 md:px-8 2xl:px-16'>
        <div>
          <h1 className='text-2xl font-bold'>Tank Sun</h1>
        </div>
        <div>
          <ul className='hidden md:flex'>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
            </Link>
          </ul>
          <div onClick={handleShowMenu} className='md:hidden'>
            <HiOutlineMenu size={25}/>
          </div>
        </div>
      </div>
      <div className={showMenu ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={showMenu ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gray-900 p-10 ease-in duration-500' : 'hidden'}>
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
                <Link href='/'>
                  <li className='py-4 text-sm'>Home</li>
                </Link>
                <Link href='/'>
                  <li className='py-4 text-sm'>About</li>
                </Link>
                <Link href='/'>
                  <li className='py-4 text-sm'>Skills</li>
                </Link>
                <Link href='/'>
                  <li className='py-4 text-sm'>Projects</li>
                </Link>
                <Link href='/'>
                  <li className='py-4 text-sm'>Contact</li>
                </Link>
              </ul>
              <div className='pt-40'>
                <p className='uppercase tracking-widest text-yellow-200'>Let's connect</p>
                <div className='flex items-center justify-between my-6 w-full sm:w-[80%]'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200'>
                    <FaLinkedinIn />
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200'>
                    <FaGithub />
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200'>
                    <AiOutlineMail />
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200'>
                    <BsFillPersonLinesFill />
                  </div>
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