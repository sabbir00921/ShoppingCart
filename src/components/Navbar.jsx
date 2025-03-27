import React, { useContext } from 'react'
import { TiShoppingCart } from 'react-icons/ti'
import { Link, Outlet } from 'react-router'
import { products_categories } from '../data/Products_data'
import { ProductContext } from '../contex/Productcontext'

const Navbar = () => {
    const { invoice, categoryFunc } = useContext(ProductContext);

    return (
        <div className=' h-screen'>
            <nav className='flex justify-between w-full px-9 py-3 text-2xl border-b shadow-2xl' >
                {/* logo portion */}
                <div>
                    <Link to={"/"} className='font-semibold'>BAZAR-GHAT</Link>
                </div>
                <div className='flex justify-center gap-x-4 items-center'>
                    {products_categories.map((category, index) => (
                        <Link key={index} to={`/${category.value}`} onClick={() => {
                            categoryFunc(category.value )
                        }}>{category.label}</Link>
                    ))}
                </div>

                {/* Cart icon */}
                <div className='relative'>
                    <Link to={"/cart"} className='text-4xl'><TiShoppingCart /></Link>
                    {invoice?.count > 0 &&
                        <span className='absolute -top-2 -right-2 w-5 h-5 text-sm bg-blue-500 text-white flex items-center justify-center rounded-full'>{invoice?.count}</span>
                    }
                </div>
            </nav>
            <Outlet />
        </div>
    )
}

export default Navbar
