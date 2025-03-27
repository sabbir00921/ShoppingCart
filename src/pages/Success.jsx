import React from 'react'
import { MdOutlineDoneOutline } from 'react-icons/md'
import { TiShoppingCart } from 'react-icons/ti'
import { Link } from 'react-router'

const Success = () => {
  return (
    <div className='flex flex-col items-center justify-center text-4xl p-10 h-[90%] gap-y-4 text-white bg-gray-600 mx-[10%] '>
      <div className='flex items-center text-4xl gap-3 bg-gray-600 mx-[10%] '>
        <MdOutlineDoneOutline className='text-green-700' />
        <p className='font-semibold '>Order place successfull.</p>
      </div>
      <span className='flex  gap-x-3 items-center  text-4xl'>
        <TiShoppingCart />
        <Link to={"/"} className='font-semibold hover:text-blue-600 '>Shopping again</Link>
      </span>
    </div>
  )
}

export default Success
