import { faBackward, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'
import { emptycart, removecartitem } from '../redux/slice/cart.Slice'


function Cart() {
  const [Total ,setTotal]=useState(0)
  const cartArray =useSelector((state)=>state.CartItem)
  console.log(cartArray);
  const dispatch = useDispatch()

  const getTotal =()=>{
    if(cartArray.length>0){
      setTotal(cartArray?.map((item)=>item.price).reduce((n1,n2)=>n1+n2))
    }
      
  }
  const handlecheckout=()=>{
    alert('order places successfully')
    dispatch(emptycart())
    navigate=('/')
  }
  

  
  useEffect(()=>{
    getTotal()
  },[cartArray])


  return (
    <>
      <div className='p-32'>
        <h1 className='text-center text-4xl text-violet-900'>Cart</h1>
       {cartArray?.length>0?
        <div className='md:grid grid-cols-[2fr,1fr] my-10'>
          <div className='md:py-5 md:px-20'>
            <table className='w-full'>
              <thead>
                <tr>
                  <th className='border border-gray-100 p-3 bg-gray-400 text-white'>#</th>
                  <th className='border border-gray-100 p-3 bg-gray-400 text-white'>Title</th>
                  <th className='border border-gray-100 p-3 bg-gray-400 text-white'>image</th>
                  <th className='border border-gray-100 p-3 bg-gray-400 text-white'>price</th>
                  <th className='border border-gray-100 p-3 bg-gray-400 text-white'>action</th>
                </tr>
              </thead>
              <tbody>
                {cartArray?.map((item,index)=>(<tr>
                  <td className='border border-gray-100 p-3'>{index+1}</td>
                  <td className='border border-gray-100 p-3'>{item?.title}</td>
                  <td className='border border-gray-100 p-3 flex justify-center'><img src={item?.image}  alt="no image"  style={{width:'100px',height:'100px'}}/></td>
                  <td className='border border-gray-100 p-3'>$ {item?.price}</td>
                  <td className='border border-gray-100 p-3 text-center'><button onClick={()=>dispatch(removecartitem(item?.id))} className='bg-red-700 p-3 text-white rounded'><FontAwesomeIcon icon={faTrash} /></button></td>
                </tr>))}
              </tbody>
            </table>
          </div>
          <div className='pt-5 px-10'>
            <div className='p-5 shadow-lg'>
              <h1 className='text-center text-3xl'>
                cart summary
              </h1>
                <p className='mt-4 text-x1'>Total number of products : {cartArray.length}</p>
                <p className='mt-2 text-xl'>garandTotal : $ {Total}</p>
                <button onClick={handlecheckout} className='w-full bg-green-600 text-white p-3 mt-4 hover:bg-white hover:border hover:border-green-600 hover:text-green-600'>checkout</button>
              
            </div>
          </div>
        </div>
        :
        <div className='w-full mt-10 md:grid grid-cols-3'>
        <div></div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFgA7NRRmBHloPjJDcnWlRw5Vhph5ZwpbyXQ&s" alt="no image" className='w-full h-80' />
          <p className='text-violet-800 text-3xl'>your cart is empty</p>
         <Link to={'/'}> <button className='bg-green-700 text-white p-3 rounded mt-3'><FontAwesomeIcon icon={faBackward} className='me-2' />Back home</button></Link>
        </div>
        <div></div>
      </div>
    }
      </div>
    </>
  )
}

export default Cart
