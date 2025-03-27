import React from 'react'
import { product_data } from '../data/Products_data'
import { Link } from 'react-router'


const Home = () => {
    return (
        <div>
            <h1 className='text-center text-6xl py-10'>Wellcome to <span className='font-bold'>BAZAR-GHAT</span>.</h1>
            <div className='flex items-center justify-center gap-3 mt-6'>
                {
                    product_data.map((product) => (
                        //images,title,quantity,
                        <div className='flex w-[20%] items-center gap-x-3 shadow-md p-2  mt-3 rounded-md' key={product.id} >
                            <div className='w-[130px] flex justify-center'>
                                <picture>
                                    <img className='h-[130px] ' src={product.image} alt={product.name} />
                                </picture>
                            </div>
                            <div className='flex flex-col gap-2 w-[70%]'>
                                <h1 className='text-2xl font-semibold'>{product.name}</h1>
                                <p className='text-md text-gray-600'>{product.category}</p>
                                <span ><Link to={`${product.path}`} className='text-white font-semibold px-4 py-2 bg-blue-600  inline-block rounded-md'>View more</Link></span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Home
