import React, { useContext } from 'react'
import { ProductContext } from '../contex/Productcontext'

const Products = () => {

  const { products, addCart } = useContext(ProductContext)
  // {JSON.stringify(products)}


  return (
    <div className='gap-6 flex flex-wrap bg-gray-300 justify-between my-5 mx-20'>
      {
        products.products?.map((item, index) => (

          <div className='w-[350px] p-4 border-gray-600 shadow hover:shadow-lg flex flex-col justify-between gap-y-3' key={item.id}>
            <div className='flex flex-col gap-y-2'>
              <picture className='flex justify-center'>
                <img className=' h-[180px]' src={item.images[2]} alt={item.images} />
              </picture>
              <h1 className='text-2xl'>{item.title}</h1>
              <p>{item.price}$</p>
              <p className=' text-[15px]'>{item.description}</p>
            </div>

            <button className='bg-blue-600 py-2 text-2xl text-center text-white font-bold rounded-2xl cursor-pointer' onClick={()=>addCart(item)} >+ Add to Cart</button>

          </div>
        ))
      }
    </div>

  );
}

export default Products


