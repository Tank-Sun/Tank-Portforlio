import React from 'react'
import Image from 'next/image'
import mainPic from '../../public/assets/projects/SharedDocumentEditor/dashboard.png'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons'

const shared_document_editor = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh]'>
        <Image className='w-full h-full object-cover' src={mainPic} alt='mainPic' />
      </div>
      <div className='p-4 w-32'>
        <Link href='/#projects'>
          <p className='text-2xl underline cursor-pointer'><FontAwesomeIcon icon={faAnglesLeft} />Back</p>
        </Link>
      </div>
      <div className='px-12 py-4'>
        <h1 className='text-6xl'>Shared Document Editor</h1>
      </div>
      <div className='px-16 pb-4 pt-2'>
        <Link href='https://github.com/Tank-Sun/Shared_document_editor_2.0' target="_blank" rel="noopener noreferrer">
          <button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm lg:text-lg px-5 py-1.5 text-center mr-2 mb-2'>Github</button>
        </Link>
      </div>
    </div>
  )
}

export default shared_document_editor