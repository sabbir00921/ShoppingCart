import React, { useContext } from 'react'
import { ProductContext } from '../contex/Productcontext';
import { Link, Links, useNavigate } from 'react-router';
import { TiShoppingCart } from 'react-icons/ti';
import { IoIosRemoveCircleOutline } from 'react-icons/io';

const Cart = () => {

  const { cart, invoice, removeCart, setCart, setInvoice } = useContext(ProductContext);
  const navigate = useNavigate();

  const placeOrder = () => {
    setInvoice({ count: 0, subtotal: 0 });
    setCart([])
    navigate("/success")
  }
  return (

    <div className=' my-5 mx-50'>
      {
        cart?.length > 0 ?
          <div className=''>
            {
              cart.map((product) => (
                //images,title,quantity,
                
                  <div className='flex items-center shadow-md p-8 mt-3 rounded-md' key={product.id} >
                    <div className='w-[130px] flex justify-center'>
                      <picture>
                        <img className='h-[130px] ' src={product.images[1]} alt={product.title} />
                      </picture>
                    </div>
                    <div className='flex flex-col gap-2 w-[70%]'>
                      <h1 className='text-2xl font-semibold'>{product.title}</h1>
                      <p className='text-md text-gray-600'>{product.description}</p>
                      <h2>Qty: {product.quantity}</h2>
                    </div>
                    <p className='px-10 w-[150px]  text-2xl'>${product.price}</p>
                    <IoIosRemoveCircleOutline className='text-red-600 text-2xl w-[60px] ' onClick={() => removeCart(product)} />
                  </div>
              ))
            }
            <div className='flex flex-col gap-3 mt-5  items-end'>
              <p className='text-2xl font-semibold'>Subtotal ({invoice.count} {invoice.count > 1 ? "items" : "item"}): ${(invoice.subtotal).toFixed(2)}</p>
              <button className='px-[90px] py-2 text-2xl text-white bg-blue-400 rounded-md cursor-pointer' onClick={placeOrder}>Place Order</button>
            </div>
          </div>
          :
          <div className=' flex flex-col justify-center items-center m-auto'>
            <p>No products are addet yet!!</p>
            <span className='flex items-center text-xl'>
              <TiShoppingCart />
              <Link to={"/"} className='hover:text-blue-600 font-medium'> Add Products Now</Link>
            </span>
          </div>
      }
    </div >
  )

}

export default Cart
