import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Carousel from '@/components/Carousel'
import mainMenuImage from '../../public/assets/projects/FoodPickUpOrder/mainMenuImage.png'
import addToCartImage from '../../public/assets/projects/FoodPickUpOrder/addToCartImage.png'
import myCartImage from '../../public/assets/projects/FoodPickUpOrder/myCartImage.png'
import orderHistoryImage from '../../public/assets/projects/FoodPickUpOrder/orderHistoryImage.png'
import ownerDashboardImage from '../../public/assets/projects/FoodPickUpOrder/ownerDashboardImage.png'
import changeOrderStatusImage from '../../public/assets/projects/FoodPickUpOrder/changeOrderStatusImage.png'
import overview from '../../public/assets/projects/FoodPickUpOrder/wholeFlow.gif'
import addToCart from '../../public/assets/projects/FoodPickUpOrder/addToCart.gif'
import editMyCart from '../../public/assets/projects/FoodPickUpOrder/editMyCart.gif'
import orderHistory from '../../public/assets/projects/FoodPickUpOrder/orderHistory.gif'
import ownerDashboardChange from '../../public/assets/projects/FoodPickUpOrder/twoSidesChange.gif'
import changeOrderStatus from '../../public/assets/projects/FoodPickUpOrder/changeOrderStatus.gif'
import sendMessage from '../../public/assets/projects/FoodPickUpOrder/sendSMS.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faAnglesLeft } from '@fortawesome/free-solid-svg-icons'


const Food_pickup_ordering = () => {

  const images = [
    {
      url: mainMenuImage,
      alt: 'main menu',
    },
    {
      url: addToCartImage,
      alt: 'add to cart',
    },
    {
      url: myCartImage,
      alt: 'my cart',
    },
    {
      url: orderHistoryImage,
      alt: 'order history',
    },
    {
      url: ownerDashboardImage,
      alt: 'owner dashboard',
    },
    {
      url: changeOrderStatusImage,
      alt: 'change order status',
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
          <h1 className='lg:text-6xl'>Food Pick-up Ordering</h1>
        </div>
        <div className='lg:pb-4 pt-2'>
          <Link href='https://github.com/Tank-Sun/Shared_document_editor_2.0' target="_blank" rel="noopener noreferrer">
            <button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm lg:text-lg px-4 py-1.5 text-center mr-2 mb-2'>Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='sm'/></button>
          </Link>
        </div>
        <div className='pb-16'>
          <h3>Tech Stack</h3>
          <p className='w-[95%] m-auto'>
          Back-end: Node.js, Express, EJS, Twilio API<br />
          Front-end: jQuery, Ajax, Sass<br />
          Database: PostgreSQL
          </p>
          <h3>Overview</h3>
          <p className='w-[95%] m-auto'>
            &nbsp;&nbsp;&nbsp;&nbsp; Food Pick-up Ordering is an app providing food pick-up ordering service for both client and business sides. Clients can select one or more dishes from the menu and place orders. When an order is placed, it will show on the dashboard of the restaurant side. At the same time, an SMS notification will also be sent to the restaurant side via Twilio API. Staff at the restaurant side can take the order and input the estimated taken time. After cooking the meal, he can click the “Finish” button to tell the client that his meal is ready to pick up. The estimated finish time and the real finish time are also sent to clients as SMS messages.
          </p>
          <br />
          <Image className='w-[80%] lg:w-[75%] m-auto' src={overview} alt='whole flow' />
          <br />
          <h3>Main Features</h3>
          <h4 className='w-[98%] m-auto'>1.	Add to cart</h4>
          <p className='w-[95%] m-auto'>
            &nbsp;&nbsp;&nbsp;&nbsp;Clients can choose different dishes in different quantities and add them to their carts.
          </p>
          <br />
          <Image className='w-[80%] lg:w-[75%] m-auto' src={addToCart} alt='add to cart' />
          <br />
          <h4 className='w-[98%] m-auto'>2.	Edit the cart</h4>
          <p className='w-[95%] m-auto'>
            &nbsp;&nbsp;&nbsp;&nbsp;Clients can edit the quantities they chose, or delete the dishes they don't want.
          </p>
          <br />
          <Image className='w-[80%] lg:w-[75%] m-auto' src={editMyCart} alt='edit my cart' />
          <br />
          <h4 className='w-[98%] m-auto'>3.	Order history</h4>
          <p className='w-[95%] m-auto'>
            &nbsp;&nbsp;&nbsp;&nbsp;Clients can view their order histories on the Order History page. After an order is placed, a new record will show on the list with the status “Pending”. Besides order status, order ID, start time and end time are also shown for the clients.
          </p>
          <br />
          <Image className='w-[80%] lg:w-[75%] m-auto' src={orderHistory} alt='order history' />
          <br />
          <h4 className='w-[98%] m-auto'>4.	Business side</h4>
          <p className='w-[95%] m-auto'>
            &nbsp;&nbsp;&nbsp;&nbsp;This app has both client and business sides. When an order is placed, it will also show on the dashboard of the restaurant side.
          </p>
          <br />
          <Image className='w-[80%] lg:w-[75%] m-auto' src={ownerDashboardChange} alt='change on the restaurant side' />
          <br />
          <p className='w-[95%] m-auto'>
            &nbsp;&nbsp;&nbsp;&nbsp;Staff at the restaurant side can take the order and input the estimated taken time. After cooking the meal, he can click the “Finish” button to tell the client that his meal is ready to pick up.
          </p>
          <br />
          <Image className='w-[80%] lg:w-[75%] m-auto' src={changeOrderStatus} alt='change order status' />
          <br />
          <h4 className='w-[98%] m-auto'>5.	SMS notifications</h4>
          <p className='w-[95%] m-auto'>
            &nbsp;&nbsp;&nbsp;&nbsp;People cannot always stay in front of the computer and watch for the information on this page. Some notices of important information are needed to be sent in extra ways. In this app, the order information, the estimated finish time and the real finish time are sent to respective sides as SMS messages by using Twilio API.
          </p>
          <br />
          <Image className='w-[80%] lg:w-[75%] m-auto' src={sendMessage} alt='send SMS notification' />
          <br />
        </div>
      </div>
    </div>
  )
}

export default Food_pickup_ordering