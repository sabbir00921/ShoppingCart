import React from 'react'
import { MdOutlineDoneOutline } from 'react-icons/md'

const Success = () => {
  return (
    <div className='flex items-center justify-center text-4xl p-10 h-[90%] gap-3 bg-gray-600 mx-[10%] '>
      <MdOutlineDoneOutline className='text-green-700'/>
      <p className='font-semibold text-white'>Order place successfull.</p>
    </div>
  )
}

export default Success
