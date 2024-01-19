import React from 'react'
import { Link, Route, useLocation, useNavigate } from 'react-router-dom'

import rightArrow from '../assets/rightArrow.svg'
import AppLogo from '../assets/Favicon.png'


const Header = (props) => {
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
        {
            path: `/blogs`,
            label: `BLOGS`
        },
    ];

    return (
        <header className="text-gray-400 bg-gray-900 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link className="flex title-font font-medium items-center text-white mb-4 md:mb-0" to={'/'}>
                    <img src={AppLogo} alt="I-TechStudio" />
                    <span className="ml-3 text-xl">{props.appName}</span>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    {
                        routes.map((route, index) => {
                            return (
                                <Link key={index} className={`hover:text-white ${location.pathname === route.path && `border-b-2 border-b-teal-500`} my-4 py-2 px-4 font-bold cursor-pointer`} to={route.path}>
                                    {route.label}
                                </Link>
                            )
                        })
                    }
                </nav>
                <button className="inline-flex items-center bg-gray-800 border-2 border-teal-600 ml-6 py-3 px-4 focus:outline-none hover:bg-gray-700 rounded text-base font-bold md:mt-0" onClick={e => navigate("/contact")}>CONTACT
                    <img src={rightArrow} alt="Right Arrow" className='ml-1 text-white' />
                </button>
            </div>
        </header>
    )
}

export default Header
