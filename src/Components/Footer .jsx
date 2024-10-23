import {  faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


function Footer () {
  return (
    <>
      <div className='min-h-80 bg-violet-900 p-10 w-100 md:grid md:grid-cols-[repeat(1,2fr)_repeat(2,1fr)_repeat(1,2fr)] text-white' >
        <div>
          <h4 className='text-3xl'><FontAwesomeIcon icon={faCartShopping} /> E-Cart</h4>
        <p className='mt-5 text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa magni minus ipsum quos obcaecati minima tenetur assumenda id modi officia. Possimus magni eius, quidem neque itaque esse illum corrupti iure? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam obcaecati quibusdam sint ab nihil perferendis veniam. Porro repellat odit accusantium voluptates? Ratione fugit ipsa repellendus sint? Vel nihil veniam quae?</p></div>
        <div className='p-2 flex md:justify-center'>
          <div>
            <h1  className='text-3xl'>LINKS</h1>
            <Link to={'/'}><p className='md:mt-5 mt-2'>Home</p></Link>
            <Link to={'/whishlist'}><p className=' mt-2'>Whishlist</p></Link>
            <Link to={'/cart'}><p className=' mt-2'>Cart</p></Link>
          </div>
        </div>
        <div className='p-2 flex md:justify-center'>
          <div>
            <h1 className='text-3xl'>Guides</h1>
            <p className='md:mt-5 mt-2'><a href="">React</a></p>
            <p className='mt-2'><a href="">React bootstrap</a></p>
            <p className=' mt-2'><a href="">Bootswatch</a></p>
          </div>
        </div>
        <div className='p-2 md:px-16'>
        <h1 className='text-3xl'>contact us</h1>
        <div className='flex md:mt-5 mt-2'>
          <input type="text" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md w-full p-2.5' placeholder='Email Id' />
          <button className='ms-2 p-2.5 rounded-md hover:bg-orange-500 bg-orange-600'>Subscribe</button>
          </div>
          <div className='flex mt-12 text-2xl justify-between'>
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faLinkedinIn} />
          <FontAwesomeIcon icon={faFacebookF} />
          <FontAwesomeIcon icon={faInstagram} />
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Footer 
