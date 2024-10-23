import { faBars, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


function Header() {
  const [show , setshow]=useState(false)
  const wishlistArray =useSelector((state)=>state.wishlist)
  const cartarray = useSelector((state)=>state.CartItem)
  
  const change =()=>{
    setshow(!show)
  }
  return (
    <div className='w-100 min-h-20 bg-violet-900 p-2 text-white md:flex items-center pt-4 md:pt-0 fixed w-full'>
      <div className='flex w-full px-5'>
      <Link to={'/'}><h1 className='text-3xl'><FontAwesomeIcon icon={faCartShopping} /> E-Cart</h1></Link>
      <button onClick={change} className='border border-white p-2 rounded ms-auto md:hidden'><FontAwesomeIcon icon={faBars} /></button>
      </div>

    { show&& <div className='mt-4 flex md:hidden'>
      <Link to={'/wishlist'}>
        <button  className='flex items-center px-4 py-3 border  border-white rounded me-4 hover:bg-white hover:text-violet-900' ><FontAwesomeIcon icon={faHeart} className='me-2' style={{color:"red"}} /> whishlist <span className='px-2 borde-slate-500 bg-slate-400 rounded ms-2'>{wishlistArray?.length}</span>
        </button>
      </Link>
     <Link to={'/cart'}>
        <button  className='flex items-center px-4 py-3 border  border-white rounded me-4 hover:bg-white hover:text-violet-900' ><FontAwesomeIcon icon={faCartShopping} className='me-2' style={{color:"green"}} /> Cart <span className='px-2 borde-slate-500 bg-slate-400 rounded ms-2'>{cartarray?.length}</span>
        </button>
     </Link>
      
    </div>}


      <div className='md:flex ms-auto hidden'>
        <Link to={'/wishlist'}>
          <button  className='flex items-center px-4 py-3 border  border-white rounded me-4 hover:bg-white hover:text-violet-900' ><FontAwesomeIcon icon={faHeart} className='me-2' style={{color:"red"}} /> whishlist <span className='px-2 borde-slate-500 bg-slate-400 rounded ms-2'>{wishlistArray?.length}</span>
          </button>
        </Link>
        <Link to={'/cart'}>
          <button  className='flex items-center px-4 py-3 border  border-white rounded me-4 hover:bg-white hover:text-violet-900' ><FontAwesomeIcon icon={faCartShopping} className='me-2' style={{color:"green"}} /> Cart <span className='px-2 borde-slate-500 bg-slate-400 rounded ms-2'>{cartarray?.length}</span>
          </button>
        </Link>
        
      </div>
    </div>
  )
}

export default Header
