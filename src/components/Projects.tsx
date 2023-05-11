import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import sharedDocumentEditor from '../../public/assets/projects/SharedDocumentEditor/dashboard.png'

const Projects = () => {
  return (
    <div className='flex flex-col w-full h-screen py-16 justify-start'>
      <div className='mt-4 mb-3 underline underline-offset-[12px]'>
        <h1>My Projects</h1>
      </div>
      <div className='grid md:grid-cols-2 gap-8 p-8'>
        <div className='relative flex items-center justify-center h-auto w-full shadow-[0px_7px_10px] shadow-white/50 rounded-xl group'>
          <Image className='rounded-xl group-hover:opacity-10' src={sharedDocumentEditor} alt='Shared Document Editor 2.0'/>
          <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl text-white tracking-wider text-center'>Shared Document Editor 2.0</h3>
            <p className='pb-4 pt-2 text-white text-center'>TypeScript, React</p>
            <Link href='/'>
              <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Projects