import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Carousel from '@/components/Carousel'
import mainPic from '../../public/assets/projects/Jungle/mainPic.png'
import mainPage from '../../public/assets/projects/Jungle/mainPage.png'
import aboutPage from '../../public/assets/projects/Jungle/aboutPage.png'
import eachCategoryPage from '../../public/assets/projects/Jungle/eachCategoryPage.png'
import itemDetail from '../../public/assets/projects/Jungle/itemDetail.png'
import myCart from '../../public/assets/projects/Jungle/myCartImage.png'
import checkoutImage from '../../public/assets/projects/Jungle/payWithStripeImage.png'
import adminDashboard from '../../public/assets/projects/Jungle/adminDashboard.png'
import adminProducts from '../../public/assets/projects/Jungle/adminProducts.png'
import addNewProduct from '../../public/assets/projects/Jungle/addNewProduct.png'
import userAuth from '../../public/assets/projects/Jungle/userAuth.gif'
import inventory from '../../public/assets/projects/Jungle/soldOut.gif'
import checkout from '../../public/assets/projects/Jungle/checkout.gif'
import admin from '../../public/assets/projects/Jungle/admin.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faAnglesLeft } from '@fortawesome/free-solid-svg-icons'


const Jungle = () => {

  const images = [
    {
      url: mainPic,
      alt: 'main pic',
    },
    {
      url: mainPage,
      alt: 'main page',
    },
    {
      url: aboutPage,
      alt: 'about page',
    },
    {
      url: eachCategoryPage,
      alt: 'category page',
    },
    {
      url: itemDetail,
      alt: 'item detail',
    },
    {
      url: myCart,
      alt: 'my cart',
    },
    {
      url: checkoutImage,
      alt: 'checkout',
    },
    {
      url: adminDashboard,
      alt: 'admin dashboard',
    },
    {
      url: adminProducts,
      alt: 'admin products',
    },
    {
      url: addNewProduct,
      alt: 'add new product',
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
          <h1 className='lg:text-6xl'>Jungle</h1>
        </div>
        <div className='lg:pb-4 pt-2'>
          <Link href='https://github.com/Tank-Sun/jungle' target="_blank" rel="noopener noreferrer">
            <button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm lg:text-lg px-4 py-1.5 text-center mr-2 mb-2'>Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='sm'/></button>
          </Link>
        </div>
        <div className='pb-16'>
          <h3>Tech Stack</h3>
          <p className='w-[95%] m-auto'>
          Back-end: Ruby, Rails, Bcrypt, Stripe API<br />
          Front-end: Rails, Sass-rails, jQuery-rails, Bootstrap<br />
          Database: PostgreSQL<br />
          Testing: Rspec-rails, Cypress-rails
          </p>
          <h3>Overview</h3>
          <p className='w-[95%] m-auto'>
            &nbsp;&nbsp;&nbsp;&nbsp; Jungle is a mini e-commerce application built with Rails 6.1 for the purpose of learning Rails. Clients can choose the plants they want, put them in their carts and check out with credit cards by Stripe API. On the other hand, the shop owner can log in as the administrator. On the admin pages, the administrator can check, add, and delete the categories and products showing on the website.
          </p>
          <h3>Main Features</h3>
          <h4 className='w-[98%] m-auto'>1.	User authentication</h4>
          <p className='w-[95%] m-auto'>
          &nbsp;&nbsp;&nbsp;&nbsp;As a common functionality in many apps, password-based user authentication is used in this app. For information security, passwords are hashed by using Bcrypt. For now, as a practice project, access to any pages is allowed to everyone. In the future, different permissions between visitors and users can be set easily.
          </p>
          <br />
          <Image className='w-[80%] lg:w-[75%] m-auto' src={userAuth} alt='user authentication' />
          <br />
          <h4 className='w-[98%] m-auto'>2.	Inventory management</h4>
          <p className='w-[95%] m-auto'>
          &nbsp;&nbsp;&nbsp;&nbsp;Inventory information is shown on the details page of each product. When a product is sold out, a label will appear and the color of the “Add” button will turn lighter. Meanwhile, the administrator can check and change the inventory information easily in the admin section.
          </p>
          <br />
          <Image className='w-[80%] lg:w-[75%] m-auto' src={inventory} alt='inventory information' />
          <br />
          <h4 className='w-[98%] m-auto'>3.	Shopping cart</h4>
          <p className='w-[95%] m-auto'>
          &nbsp;&nbsp;&nbsp;&nbsp;Users can add products to their carts and modify the quantities they want on the “My Cart” page. After that, they can check out with their credit cards through Stripe API.
          </p>
          <br />
          <Image className='w-[80%] lg:w-[75%] m-auto' src={checkout} alt='my cart' />
          <br />
          <h4 className='w-[98%] m-auto'>4.	Admin section</h4>
          <p className='w-[95%] m-auto'>
          &nbsp;&nbsp;&nbsp;&nbsp;As mentioned above, there is an admin section in this app. Only the administrator is allowed to access after passing the authentication. At there, the administrator can check, add, and delete the categories and products showing on the website.
          </p>
          <br />
          <Image className='w-[80%] lg:w-[75%] m-auto' src={admin} alt='admin section' />
          <br />
        </div>
      </div>
    </div>
  )
}

export default Jungle