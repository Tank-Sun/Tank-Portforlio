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
      <div className='w-[95%] sm:w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%] m-auto'>
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
          <p>
          Back-end: Ruby, Rails, Bcrypt, Stripe API<br />
          Front-end: Rails, Sass-rails, jQuery-rails, Bootstrap<br />
          Database: PostgreSQL<br />
          Testing: Rspec-rails, Cypress-rails
          </p>
          <h3>Overview</h3>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;Jungle is a mini e-commerce application built with Rails 6.1 for the purpose of learning Rails. This application allows customers to browse and select plants of their choice, add them to their carts, and proceed to checkout using credit cards through the integration of the Stripe API. In addition, the shop owner has the ability to log in as the administrator. The admin pages provide the necessary functionality for the administrator to manage the categories and products displayed on the website. These administrative capabilities empower the shop owner to maintain and update the inventory of the online store easily.
          </p>
          <h3>Main Features</h3>
          <h4>1.	User authentication</h4>
          <p>
          &nbsp;&nbsp;&nbsp;&nbsp;Password-based user authentication is implemented to ensure secure access to user accounts. To enhance information security, passwords are securely hashed using the Bcrypt algorithm. For now, as a practice project, all pages are accessible to everyone. However, as the project progresses, it will be easy to configure different permissions and access levels for visitors and authenticated users. 
          </p>
          <br />
          <Image className='w-[80%] lg:w-[75%] m-auto' src={userAuth} alt='user authentication' />
          <br />
          <h4>2.	Inventory management</h4>
          <p>
          &nbsp;&nbsp;&nbsp;&nbsp;Inventory information is shown on the details page of each product. When a product is sold out, a label will appear and the “Add” button will become disabled. Furthermore, in the admin section of this application, the administrator can easily review and update the inventory information. By providing a seamless way to manage inventory, this app ensures accurate and up-to-date information is displayed to both customers and merchants.
          </p>
          <br />
          <Image className='w-[80%] lg:w-[75%] m-auto' src={inventory} alt='inventory information' />
          <br />
          <h4>3.	Shopping cart</h4>
          <p>
          &nbsp;&nbsp;&nbsp;&nbsp;Customers can add products to their carts and modify the quantities of the items on the “My Cart” page. Once customers have finalized their cart contents, they can proceed to the checkout process. The application integrates with the Stripe API, allowing users to securely complete their purchase with credit cards.
          </p>
          <br />
          <Image className='w-[80%] lg:w-[75%] m-auto' src={checkout} alt='my cart' />
          <br />
          <h4>4.	Admin section</h4>
          <p>
          &nbsp;&nbsp;&nbsp;&nbsp;As mentioned above, there is an admin section in this app, only accessible to the authenticated administrator. Within the admin section, the administrator can perform various actions related to managing the categories and products displayed on the website. This includes the ability to review existing categories and products, add new categories or products to the website's inventory, as well as delete categories or products when necessary. These administrative functions empower the administrator to effectively manage and maintain the content and offerings of the e-commerce website.
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