import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Contact = () => {
  return (
    <div className='w-full lg:h-screen'>
      <div className='flex flex-col w-[85%] 2xl:w-[75%] m-auto py-16 justify-start items-center'>
        <div className='mt-4 mb-3 underline underline-offset-[12px] self-start'>
          <h1>Contact Me</h1>
        </div>
        <div className='mt-20'>
          <div>
            <h2>Let's Get In Touch</h2>
          </div>
          <div className='p-4'>
            <form className='text-black'>
              <div>
                <input type='text' placeholder='Name' className='w-full border-2 border-gray-300 rounded-lg p-3 my-4 focus:outline-none focus:border-blue-500'/>
              </div>
              <div>
                <input type='email' placeholder='Email' className='w-full border-2 border-gray-300 rounded-lg p-3 my-4 focus:outline-none focus:border-blue-500'/>
              </div>
              <div>
                <input type='text' placeholder='Phone Number' className='w-full border-2 border-gray-300 rounded-lg p-3 my-4 focus:outline-none focus:border-blue-500'/>
              </div>
              <div>
                <input type='text' placeholder='Subject' className='w-full border-2 border-gray-300 rounded-lg p-3 my-4 focus:outline-none focus:border-blue-500'/>
              </div>
              <div>
                <textarea placeholder='Message' rows={6} className='w-full border-2 border-gray-300 rounded-lg p-3 my-4 focus:outline-none focus:border-blue-500'/>
              </div>
              <button className='w-full p-3 rounded-xl uppercase bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 text-gray-100 font-semibold text-lg mt-4'>
                Send Message
              </button>
            </form>
          </div>
          <div className='flex items-center justify-evenly mt-12 mb-4 mx-auto md:w-[60%]'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-150'>
              <FaLinkedinIn size={25}/>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-150'>
              <FaGithub size={25}/>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Contact