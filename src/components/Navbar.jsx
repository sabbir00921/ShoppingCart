import React from 'react'
import { TiShoppingCart } from 'react-icons/ti'
import { Link, Outlet } from 'react-router'
import { products_categories } from '../data/Products_data'

const Navbar = () => {
    return (
        <div>
            <nav className='flex justify-between w-full px-9 py-3 text-2xl border-b shadow-2xl' >
                {/* logo portion */}
                <div>
                    <Link to={"/"}>BAZAR-GHAT</Link>
                </div>
                <div className='flex justify-center gap-x-4 items-center'>
                    {products_categories.map((category)=>(
                        <Link key={category.value} to={`/`}>{category.label}</Link>
                    ))}
                </div>

                {/* Cart icon */}
                <div>
                    <Link to="/cart" className='text-4xl'><TiShoppingCart /></Link>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}

export default Navbar
