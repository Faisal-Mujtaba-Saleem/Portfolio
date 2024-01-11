import React from 'react'
import { Link, useLocation } from 'react-router-dom'


const Header = () => {
    const location = useLocation();
    return (
        <header className="text-gray-400 bg-gray-900 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link className="flex title-font font-medium items-center text-white mb-4 md:mb-0" to={'/'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl">I-Tech Studio</span>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link className={`mr-5 hover:text-white border-0 ${location.pathname === `/` && `border-b-2 border-b-emerald-400`} py-2 px-4 font-bold cursor-pointer`} to={'/'}>HOME</Link>
                    <Link className={`mr-5 hover:text-white border-0 ${location.pathname === `/services` && `border-b-2 border-b-emerald-400`} py-2 px-4 font-bold cursor-pointer`} to={'/services'}>SERVICES</Link>
                    <Link className={`mr-5 hover:text-white border-0 ${location.pathname === `/works` && `border-b-2 border-b-emerald-400`} py-2 px-4 font-bold cursor-pointer`} to={'/works'}>WORKS</Link>
                    <Link className={`mr-5 hover:text-white border-0 ${location.pathname === `/about` && `border-b-2 border-b-emerald-400`} py-2 px-4 font-bold cursor-pointer`} to={'/about'}>ABOUT</Link>
                </nav>
                <button className="inline-flex items-center bg-gray-800 border-2 border-emerald-800 py-3 px-4 focus:outline-none hover:bg-gray-700 rounded text-base font-bold mt-4 md:mt-0">CONTACT
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </header>
    )
}

export default Header
