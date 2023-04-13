import React from 'react'
import Link from 'next/link'
import { HiOutlineMenu } from 'react-icons/hi'

const Navbar = () => {
  return (
    <div className='fixed w-full h-20 z-[100]'>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
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
          <div className='md:hidden'>
            <HiOutlineMenu size={25}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar