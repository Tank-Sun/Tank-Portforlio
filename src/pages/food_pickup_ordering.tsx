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
      <div className='w-[95%] sm:w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%] m-auto'>
        <div className='py-4'>
          <h1 className='lg:text-6xl'>Food Pick-up Ordering</h1>
        </div>
        <div className='lg:pb-4 pt-2'>
          <Link href='https://github.com/Tank-Sun/midterm-1-Food-Pick-up-Ordering' target="_blank" rel="noopener noreferrer">
            <button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm lg:text-lg px-4 py-1.5 text-center mr-2 mb-2'>Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='sm'/></button>
          </Link>
        </div>
        <div className='pb-16'>
          <h3>Tech Stack</h3>
          <p>
          Back-end: Node.js, Express, EJS, Twilio API<br />
          Front-end: jQuery, Ajax, Sass<br />
          Database: PostgreSQL
          </p>
          <h3>Overview</h3>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;Food Pick-up Ordering is an application that facilitates food pick-up ordering services for both customers and merchants sides. Customers can browse the menu, select dishes, and place their orders. Once an order is placed, it is instantly displayed on the restaurant side&apos;s dashboard. Additionally, an SMS notification is sent to the restaurant via the Twilio API. Restaurant staff can then review the order, input an estimated preparation time, and start the cooking process. Once the meal is ready, staff members can click the &quot;Finish&quot; button to notify the client that their order is ready for pick-up. SMS messages containing the estimated and actual finish times are sent to customers for their convenience and reference.
          </p>
          <h3>Main Features</h3>
          <h4>1.	Add to cart</h4>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;Customers can select various dishes in different quantities and add them to their carts.
          </p>
          <br />
          <Image className='w-[80%] lg:w-[75%] m-auto' src={addToCart} alt='add to cart' />
          <br />
          <h4>2.	Edit the cart</h4>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;Customers can edit the quantities of the dishes they have chosen or remove unwanted items from their orders.
          </p>
          <br />
          <Image className='w-[80%] lg:w-[75%] m-auto' src={editMyCart} alt='edit my cart' />
          <br />
          <h4>3.	Order history</h4>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;Customers can easily access their order histories on the &quot;Order History&quot; page. After an order is placed, a new record will show on the list with the status “Pending”. Besides order status, order ID, start time and end time are also shown to customers.
          </p>
          <br />
          <Image className='w-[80%] lg:w-[75%] m-auto' src={orderHistory} alt='order history' />
          <br />
          <h4>4.	Business side</h4>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;This app has both customers and merchants sides. When a customer places an order, it is automatically displayed on the dashboard of the restaurant side.
          </p>
          <br />
          <Image className='w-[80%] lg:w-[75%] m-auto' src={ownerDashboardChange} alt='change on the restaurant side' />
          <br />
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;Staff at the restaurant side can take the order and input the estimated taken time. After the meal is cooked, the staff can click the &quot;Finish&quot; button to notify the client that their meal is now available for pick-up.
          </p>
          <br />
          <Image className='w-[80%] lg:w-[75%] m-auto' src={changeOrderStatus} alt='change order status' />
          <br />
          <h4>5.	SMS notifications</h4>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;To ensure that important information reaches users even when they are not actively monitoring the app, notifications are sent via additional channels in this app. Using the Twilio API, order details, estimated finish times, and real finish times are sent as SMS messages to the respective sides. This proactive approach allows users to stay informed about their orders and enables seamless communication between the restaurant and the client, ensuring a seamless and efficient pick-up process.
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