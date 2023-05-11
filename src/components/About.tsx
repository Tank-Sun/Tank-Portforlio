import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  return (
    <div id='about' className='flex flex-col w-full 2xl:w-[90%] 2xl:h-screen py-16 m-auto justify-start items-center'>
      <div className='flex flex-col p-4 space-y-6 items-stretch lg:flex-row lg:justify-around lg:p-4 lg:space-y-0'>
        <div className='lg:w-[35%]'>
          <div className='mt-4 mb-3 underline underline-offset-4'>
            <h1>About Me</h1>
          </div>
          <div className='py-5'>
            <p>
            I am a full-stack developer with a background in electronic engineering and technical support. Through the experience of the Bootcamp Lighthouse Labs, I got my first step into the world of software development and found that I <span className='text-green-500 text-xl font-bold'>enjoy coding</span>. I love the feeling of fulfilling the tasks automatically leveraging the power of digitalization, and enjoy the “Aha” moments when I solve some bugs or build features successfully. My goal is to build applications that are <span className='text-blue-500 text-xl font-bold'>reliable</span> and <span className='text-yellow-500 text-xl font-bold'>enjoyable</span> for users.    
            </p>
            <br/>
            <p>
            I am also a person who <span className='text-red-500 text-xl font-bold'>loves to help others</span>. As a technical support specialist, I solved 100+ customer issues. The smiles of customers are the best rewards to me. Upon joining tech communities, I was pleasantly surprised by the friendly and supportive atmosphere in them. As I continue to receive care and assistance from fellow developers, I am motivated to give back and help others in return.
            </p>
            <br/>
            <p>
            I believe <span className='text-purple-500 text-xl font-bold'>diversity</span> and <span className='text-orange-500 text-xl font-bold'>collaboration</span> are the most important things in a team. Born and raised in China, I spent over 7 years studying and living in Japan before relocating to Canada 5 years ago. I have witnessed how individuals from diverse cultural and educational backgrounds can work together harmoniously, generating brilliant ideas from the intersection of various perspectives. I hope I can act as a “Buff” in a team, making others better, and increasing the whole team’s efficiency and capability.
            </p>
          </div>
        </div>
        <div className='lg:w-[35%]'>
          <div className='mt-4 mb-3 underline underline-offset-[12px]'>
            <h1>My Skills</h1>
          </div>
          <div className='flex flex-wrap py-5'>
            <div className='flex items-center justify-around px-4 py-2 mr-2 mb-4 rounded-md bg-slate-50 shadow-xl shadow-gray-400/50'>
              <div className='pr-3'>
                <Image src='/assets/skills/javascript.png' width={40} height={40} alt='JavaScript' />
              </div>
              <div>
                <p className='text-black md:text-lg font-semibold'>JavaScript</p>
              </div>
            </div>
            <div className='flex items-center justify-around px-4 py-2 mr-2 mb-4 rounded-md bg-slate-50 shadow-xl shadow-gray-400/50'>
              <div className='pr-3'>
                <Image src='/assets/skills/TypeScript.png' width={60} height={40} alt='TypeScript' />
              </div>
              <div>
                <p className='text-black md:text-lg font-semibold'>TypeScript</p>
              </div>
            </div>
            <div className='flex items-center justify-around px-4 py-2 mr-2 mb-4 rounded-md bg-slate-50 shadow-xl shadow-gray-400/50'>
              <div className='pr-3'>
                <Image src='/assets/skills/html.png' width={40} height={40} alt='HTML' />
              </div>
              <div>
                <p className='text-black md:text-lg font-semibold'>HTML</p>
              </div>
            </div>
            <div className='flex items-center justify-around px-4 py-2 mr-2 mb-4 rounded-md bg-slate-50 shadow-xl shadow-gray-400/50'>
              <div className='pr-3'>
                <Image src='/assets/skills/css.png' width={40} height={40} alt='CSS' />
              </div>
              <div>
                <p className='text-black md:text-lg font-semibold'>CSS</p>
              </div>
            </div>
            <div className='flex items-center justify-around px-4 py-2 mr-2 mb-4 rounded-md bg-slate-50 shadow-xl shadow-gray-400/50'>
              <div className='pr-3'>
                <Image src='/assets/skills/node.png' width={40} height={40} alt='Node' />
              </div>
              <div>
                <p className='text-black md:text-lg font-semibold'>Node.js</p>
              </div>
            </div>
            <div className='flex items-center justify-around px-4 py-2 mr-2 mb-4 rounded-md bg-slate-50 shadow-xl shadow-gray-400/50'>
              <div className='pr-3'>
                <Image src='/assets/skills/react.png' width={40} height={40} alt='React' />
              </div>
              <div>
                <p className='text-black md:text-lg font-semibold'>React</p>
              </div>
            </div>
            <div className='flex items-center justify-around px-4 py-2 mr-2 mb-4 rounded-md bg-slate-50 shadow-xl shadow-gray-400/50'>
              <div className='pr-3'>
                <Image src='/assets/skills/nextjs.png' width={40} height={40} alt='Next.js' />
              </div>
              <div>
                <p className='text-black md:text-lg font-semibold'>Next.js</p>
              </div>
            </div>
            <div className='flex items-center justify-around px-4 py-2 mr-2 mb-4 rounded-md bg-slate-50 shadow-xl shadow-gray-400/50'>
              <div className='pr-3'>
                <Image src='/assets/skills/PostgreSQL.png' width={40} height={40} alt='PostgreSQL' />
              </div>
              <div>
                <p className='text-black md:text-lg font-semibold'>PostgreSQL</p>
              </div>
            </div>
            <div className='flex items-center justify-around px-4 py-2 mr-2 mb-4 rounded-md bg-slate-50 shadow-xl shadow-gray-400/50'>
              <div className='pr-3'>
                <Image src='/assets/skills/mongo.png' width={40} height={40} alt='MongoDB' />
              </div>
              <div>
                <p className='text-black md:text-lg font-semibold'>MongoDB</p>
              </div>
            </div>
            <div className='flex items-center justify-around px-4 py-2 mr-2 mb-4 rounded-md bg-slate-50 shadow-xl shadow-gray-400/50'>
              <div className='pr-3'>
                <Image src='/assets/skills/tailwind.png' width={40} height={40} alt='Tailwind CSS' />
              </div>
              <div>
                <p className='text-black md:text-lg font-semibold'>Tailwind CSS</p>
              </div>
            </div>
            <div className='flex items-center justify-around px-4 py-2 mr-2 mb-4 rounded-md bg-slate-50 shadow-xl shadow-gray-400/50'>
              <div className='pr-3'>
                <Image src='/assets/skills/SocketIO.png' width={40} height={40} alt='Socket.IO' />
              </div>
              <div>
                <p className='text-black md:text-lg font-semibold'>Socket.IO</p>
              </div>
            </div>
            <div className='flex items-center justify-around px-4 py-2 mr-2 mb-4 rounded-md bg-slate-50 shadow-xl shadow-gray-400/50'>
              <div className='pr-3'>
                <Image src='/assets/skills/ruby.png' width={40} height={40} alt='Ruby' />
              </div>
              <div>
                <p className='text-black md:text-lg font-semibold'>Ruby</p>
              </div>
            </div>
            <div className='flex items-center justify-around px-4 py-2 mr-2 mb-4 rounded-md bg-slate-50 shadow-xl shadow-gray-400/50'>
              <div className='pr-3'>
                <Image src='/assets/skills/RubyonRails.png' width={60} height={40} alt='Ruby on Rails' />
              </div>
              <div>
                <p className='text-black md:text-lg font-semibold'>Ruby on Rails</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='md:mt-10 px-4 md:w-[80%]'>
        <p className='indent-6 text-lg md:indent-8 md:text-2xl md:leading-loose'>If you share the same values with me or find my background intriguing, please feel free to <Link href='/#contact' className='underline underline-offset-4'>reach out</Link>! For more information about my work and experience, take a look at my <Link href='/#projects' className='underline underline-offset-4'>projects</Link> and <Link href='https://resume.creddle.io/resume/2461c883ivt' target="_blank" rel="noopener noreferrer" className='underline underline-offset-4'>resume <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='xs'/></Link>. &#128516;</p>
      </div>
    </div>
  )


}

export default About