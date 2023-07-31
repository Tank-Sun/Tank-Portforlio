import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Carousel from '@/components/Carousel'
import currentLocation from '../../public/assets/projects/TimeZoneChecker/currentLocation.gif'
import searchLocation from '../../public/assets/projects/TimeZoneChecker/searchLocation.gif'
import deleteLocation from '../../public/assets/projects/TimeZoneChecker/deleteLocation.gif'
import pagination from '../../public/assets/projects/TimeZoneChecker/pagination.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faAnglesLeft } from '@fortawesome/free-solid-svg-icons'


const Time_zone_checker = () => {

  const images = [
    {
      url: currentLocation,
      alt: 'current location',
    },
    {
      url: searchLocation,
      alt: 'search location',
    },
    {
      url: deleteLocation,
      alt: 'delete location',
    },
    {
      url: pagination,
      alt: 'pagination',
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
      <div className='w-[95%] sm:w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%] m-auto'>
        <div className='py-4'>
          <h1 className='lg:text-6xl'>Time Zone Checker</h1>
        </div>
        <div className='lg:pb-4 pt-2'>
          <Link href='https://github.com/Tank-Sun/TimeZoneChecker' target="_blank" rel="noopener noreferrer">
            <button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm lg:text-lg px-4 py-1.5 text-center mr-2 mb-2'>Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='sm'/></button>
          </Link>
        </div>
        <div className='pb-16'>
          <h3>Tech Stack</h3>
          <p>
          Back-end: Node.js, Express, axios<br />
          Front-end: Vue3, Vite, TailwindCSS, Google Maps API, axios<br />
          </p>
          <h3>Overview</h3>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;Food Pick-up Ordering is an application that facilitates food pick-up ordering services for both customers and merchants sides. Customers can browse the menu, select dishes, and place their orders. Once an order is placed, it is instantly displayed on the restaurant side&apos;s dashboard. Additionally, an SMS notification is sent to the restaurant via the Twilio API. Restaurant staff can then review the order, input an estimated preparation time, and start the cooking process. Once the meal is ready, staff members can click the &quot;Finish&quot; button to notify the client that their order is ready for pick-up. SMS messages containing the estimated and actual finish times are sent to customers for their convenience and reference.
          </p>
          <h3>Main Features</h3>
          <h4>1.	Current location</h4>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;Get current location from browser.
          </p>
          <br />
          <Image className='w-[80%] lg:w-[75%] m-auto' src={currentLocation} alt='current location' />
          <br />
          <h4>2.	Search location</h4>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;Search a location inside the search bar, show the map with a marker, put it in the table, and also show the time zone and local time.
          </p>
          <br />
          <Image className='w-[80%] lg:w-[75%] m-auto' src={searchLocation} alt='search location' />
          <br />
          <h4>3.	Delete location</h4>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;Delete the searched location and their markers.
          </p>
          <br />
          <Image className='w-[80%] lg:w-[75%] m-auto' src={deleteLocation} alt='delete location' />
          <br />
          <h4>4.	Pagination</h4>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;Display a maximum of 10 records on each page.
          </p>
          <br />
          <Image className='w-[80%] lg:w-[75%] m-auto' src={pagination} alt='pagination' />
          <br />
        </div>
      </div>
    </div>
  )
}

export default Time_zone_checker