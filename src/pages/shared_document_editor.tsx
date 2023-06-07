import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Carousel from '@/components/Carousel'
import dashboardImage from '../../public/assets/projects/SharedDocumentEditor/dashboard.png'
import loginImage from '../../public/assets/projects/SharedDocumentEditor/login.png'
import editorImage from '../../public/assets/projects/SharedDocumentEditor/editor.png'
import titleSearchImage from '../../public/assets/projects/SharedDocumentEditor/titleSearch.png'
import contentSearchImage from '../../public/assets/projects/SharedDocumentEditor/contentSearch.png'
import overview from '../../public/assets/projects/SharedDocumentEditor/wholeFlow.gif'
import simulEdit from '../../public/assets/projects/SharedDocumentEditor/realtimeEdit.gif'
import login from '../../public/assets/projects/SharedDocumentEditor/multipleLogin.gif'
import search from '../../public/assets/projects/SharedDocumentEditor/search.gif'
import shareLink from '../../public/assets/projects/SharedDocumentEditor/shareLink.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faAnglesLeft } from '@fortawesome/free-solid-svg-icons'


const Shared_document_editor = () => {


  const images = [
    {
      url: loginImage,
      alt: 'login',
    },
    {
      url: dashboardImage,
      alt: 'dashboard',
    },
    {
      url: editorImage,
      alt: 'editor',
    },
    {
      url: titleSearchImage,
      alt: 'titleSearch',
    },
    {
      url: contentSearchImage,
      alt: 'contentSearch',
    },
  ];


  return (
    <div className='w-full'>
      <Carousel images={images} />
      <div className='py-4 pl-2 lg:pl-4 2xl:pl-8 md:w-[90%] 2xl:w-[80%] m-auto'>
        <Link href='/#projects'>
          <p className='md:text-xl lg:text-2xl underline cursor-pointer'><FontAwesomeIcon icon={faAnglesLeft} />Back</p>
        </Link>
      </div>
      <div className='w-[95%] sm:w-[90%] md:w-[80%] lg:w-[60%] m-auto'>
        <div className='py-4'>
          <h1 className='lg:text-6xl'>Shared Document Editor</h1>
        </div>
        <div className='lg:pb-4 pt-2'>
          <Link href='https://github.com/Tank-Sun/Shared_document_editor_2.0' target="_blank" rel="noopener noreferrer">
            <button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm lg:text-lg px-4 py-1.5 text-center mr-2 mb-2'>Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='sm'/></button>
          </Link>
        </div>
        <div className='pb-16'>
          <h3>Tech Stack</h3>
          <p className='w-[95%] m-auto'>
          Back-end: TypeScript, Node.js, Express, Socket.IO, Google APIs, Google-cloud/local-auth, Passport.js<br />
          Front-end: React, React-router-dom, Quill, Axios, Tailwind CSS<br />
          Database: Mongo DB, Mongoose
          </p>
          <h3>Overview</h3>
          <p className='w-[95%] m-auto'>
            &nbsp;&nbsp;&nbsp;&nbsp; The shared document editor is an online text editor that can be edited by multiple people simultaneously. Every change is saved automatically and shown to all users. The creator of documents can share documents with other users by sending the links via Gmail API. They can set different permissions such as editable or only viewable for other users when sharing documents.
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;Shared Document Editor 2.0 is an upgraded version of Shared Document Editor. The code and files are refactored and restructured for better readability. TypeScript is used on the server side for easier further upgrade and maintenance.
          </p>
          <br />
          <Image className='w-[80%] lg:w-[75%] m-auto' src={overview} alt='whole flow' />
          <br />
          <h3>Main Features</h3>
          <h4 className='w-[98%] m-auto'>1. Real-time simultaneous editing</h4>
          <p className='w-[95%] m-auto'>
          &nbsp;&nbsp;&nbsp;&nbsp;Leveraging the power of WebSocket, one document can be edited by multiple users at the same time, and everyone can see the changes in real-time.
          </p>
          <br />
          <Image className='w-[80%] lg:w-[75%] m-auto' src={simulEdit} alt='Real-time simultaneous editing' />
          <br />
          <h4 className='w-[98%] m-auto'>2. Multiple strategies login</h4>
          <p className='w-[95%] m-auto'>
          &nbsp;&nbsp;&nbsp;&nbsp;With passport.js, this app can not only be logged in with local usernames and passwords, but also can get in with Google accounts.
          </p>
          <br />
          <Image className='w-[80%] lg:w-[75%] m-auto' src={login} alt='Multiple strategies login' />
          <br />
          <h4 className='w-[98%] m-auto'>3. Different ways of searching</h4>
          <p className='w-[95%] m-auto'>
          &nbsp;&nbsp;&nbsp;&nbsp;Users can search their documents by titles. If they forget titles, documents can also be searched through the contents in them.
          </p>
          <br />
          <Image className='w-[80%] lg:w-[75%] m-auto' src={search} alt='Different ways of searching' />
          <br />
          <h4 className='w-[98%] m-auto'>4. Link sharing & permission setting</h4>
          <p className='w-[95%] m-auto'>
          &nbsp;&nbsp;&nbsp;&nbsp;The links to documents can be shared with other users by sending emails via Gmail API. When the creators share the documents, they can set different permissions such as editable or only viewable to others.
          </p>
          <br />
          <Image className='w-[80%] lg:w-[75%] m-auto' src={shareLink} alt='Link sharing & permission setting' />
          <br />
        </div>
      </div>
    </div>
  )
}

export default Shared_document_editor