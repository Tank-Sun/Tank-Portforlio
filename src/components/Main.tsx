import React from 'react'
import Typed from 'typed.js'
import styles from '../styles/Main.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { FiChevronsDown } from 'react-icons/fi'

const Main = () => {

  // Type animation
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i>Full Stack Developer</i>', '<i>Lifelong Learner</i>', '<i>Problem Solver</i>', '<i>Team Player</i>'],
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <section className='flex flex-col items-center justify-around h-screen'>
      <div className='flex flex-col text-center items-center justify-center my-10 py-16 w-full md:flex-row md:justify-around'>
        <div className='text-left w-[95%] sm:w-[60%] lg:w-[40%]'>
          <h1>Hi, I am Tank Sun,</h1>
          <h2 className='pt-8'>a <span className='text-yellow-500 bg-blue-800' ref={el} />.</h2>
        </div>
        <div>
          <Image src='/assets/profile/Avatar.png' alt='/' width={500} height={500} />
        </div>
          
      </div>
      <div>
        <Link href='/'>
          <FiChevronsDown size={50} className="animate-bounce"/>
        </Link>
      </div>
    </section>
  )
}

export default Main