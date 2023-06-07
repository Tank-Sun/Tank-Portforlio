import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Carousel from '@/components/Carousel'
import dashboardImage from '../../public/assets/projects/InterviewScheduler/dashboard.png'
import addScheduleImage from '../../public/assets/projects/InterviewScheduler/addScheduleImage.png'
import savingImage from '../../public/assets/projects/InterviewScheduler/saving.png'
import deleteConfirmationImage from '../../public/assets/projects/InterviewScheduler/deleteConfirmation.png'
import overview from '../../public/assets/projects/InterviewScheduler/wholeFlow.gif'
import addSchedule from '../../public/assets/projects/InterviewScheduler/addSchedule.gif'
import deleteSchedule from '../../public/assets/projects/InterviewScheduler/deleteSchedule.gif'
import modifySchedule from '../../public/assets/projects/InterviewScheduler/modifySchedule.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faAnglesLeft } from '@fortawesome/free-solid-svg-icons'

const Interview_scheduler = () => {

  const images = [
    {
      url: dashboardImage,
      alt: 'dashboard',
    },
    {
      url: addScheduleImage,
      alt: 'add schedule',
    },
    {
      url: savingImage,
      alt: 'saving animation',
    },
    {
      url: deleteConfirmationImage,
      alt: 'delete confirmation',
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
          <h1 className='lg:text-6xl'>Interview Scheduler</h1>
        </div>
        <div className='lg:pb-4 pt-2'>
          <Link href='https://github.com/Tank-Sun/scheduler' target="_blank" rel="noopener noreferrer">
            <button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm lg:text-lg px-4 py-1.5 text-center mr-2 mb-2'>Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='sm'/></button>
          </Link>
        </div>
        <div className='pb-16'>
          <h3>Tech Stack</h3>
          <p className='w-[95%] m-auto'>
          Back-end: Node.js, Express<br />
          Front-end: React, Sass<br />
          Database: PostgreSQL<br />
          Testing: Storybook, Jest, Cypress
          </p>
          <h3>Overview</h3>
          <p className='w-[95%] m-auto'>
            &nbsp;&nbsp;&nbsp;&nbsp; Interview Scheduler is a client-side, single-page app made by React that users can easily check, create, modify, and delete their interview schedules.
          </p>
          <br />
          <Image className='w-[80%] lg:w-[75%] m-auto' src={overview} alt='whole flow' />
          <br />
          <h3>Main Features</h3>
          <h4 className='w-[98%] m-auto'>1.	Add schedules</h4>
          <p className='w-[95%] m-auto'>
          &nbsp;&nbsp;&nbsp;&nbsp;Users can add their schedules on an empty spot by inputting their names and selecting the interviewer's avatar.
          </p>
          <br />
          <Image className='w-[80%] lg:w-[75%] m-auto' src={addSchedule} alt='add schedule' />
          <br />
          <h4 className='w-[98%] m-auto'>2.	Modify schedules</h4>
          <p className='w-[95%] m-auto'>
          &nbsp;&nbsp;&nbsp;&nbsp;Users can change their names and the interviewer they choose.
          </p>
          <br />
          <Image className='w-[80%] lg:w-[75%] m-auto' src={modifySchedule} alt='modify schedule' />
          <br />
          <h4 className='w-[98%] m-auto'>3.	Delete schedules</h4>
          <p className='w-[95%] m-auto'>
          &nbsp;&nbsp;&nbsp;&nbsp;Users can delete their schedules. As a destructive action, a confirmation dialogue is added.
          </p>
          <br />
          <Image className='w-[80%] lg:w-[75%] m-auto' src={deleteSchedule} alt='delete schedule' />
          <br />
        </div>
      </div>
    </div>
  )
}

export default Interview_scheduler