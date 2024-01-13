import React from 'react'
import { Link, Route, useLocation, useNavigate } from 'react-router-dom'

import rightArrow from '../assets/rightArrow.svg'


const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const routes = [
        {
            path: `/`,
            label: `HOME`
        },
        {
            path: `/services`,
            label: `SERVICES`
        },
        {
            path: `/works`,
            label: `WORKS`
        },
        {
            path: `/about`,
            label: `ABOUT`
        },
    ];

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
                    {
                        routes.map((route, index) => {
                            return (
                                <Link key={index} className={`mr-5 hover:text-white border-0 ${location.pathname === route.path && `border-b-2 border-b-teal-500`} py-2 px-4 font-bold cursor-pointer`} to={route.path}>
                                    {route.label}
                                </Link>
                            )
                        })
                    }
                </nav>
                <button className="inline-flex items-center bg-gray-800 border-2 border-teal-600 py-3 px-4 focus:outline-none hover:bg-gray-700 rounded text-base font-bold mt-4 md:mt-0" onClick={e => navigate("/contact")}>CONTACT
                    <img src={rightArrow} alt="Right Arrow" className='ml-1 text-white' />
                </button>
            </div>
        </header>
    )
}

export default Header
