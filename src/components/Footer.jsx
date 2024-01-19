import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import MediaLinks from './MediaLinks'
import FeedBack from './FeedBack'


const Footer = (props) => {
    const location = useLocation();
    const linksCategories = [
        {
            categoryName: `Contact Us`,
        },
        {
            categoryName: `Our Services`,
        },
        {
            categoryName: `About Us`,
        },
    ]

    const categoriesLinks = {
        'Contact Us': [
            {
                linkHref: location.pathname,
                linkTarget: `_self`,
                linkLabel: `03308479616`
            },
            {
                linkHref: `mailto:faisalmujtaba2005@gmail.com`,
                linkTarget: `_blank`,
                linkLabel: `faisalmujtaba2005@gmail.com`,
            },
            {
                linkHref: `https://maps.app.goo.gl/KnB58TZjAwVdYNuW8`,
                linkTarget: `_blank`,
                linkLabel: `Karachi, Karachi City, Sindh, Pakistan`,
            },
            {
                linkHref: `/contact`,
                linkTarget: `_self`,
                linkLabel: `Monday to Friday`,
            },
        ],
        'Our Services': [
            {
                linkHref: `/services`,
                linkTarget: `_self`,
                linkLabel: `Services`
            },
            {
                linkHref: `/works`,
                linkTarget: `_self`,
                linkLabel: `Works`
            }
        ],
        'About Us': [
            {
                linkHref: `/about`,
                linkTarget: `_self`,
                linkLabel: `About`
            },
            {
                linkHref: `/contact`,
                linkTarget: `_self`,
                linkLabel: `Contact Us`
            }
        ]

    }
    const mediaNames = ["facebook", "twitter", 'instagram', "linkedin"];
    return (
        <footer className="text-gray-400 bg-gray-900 body-font border-t border-teal-600">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap md:text-left -mb-10 -mx-4">
                    {
                        linksCategories.map((linksCategory, index) => {
                            return (
                                <div key={linksCategory.categoryName} className="lg:w-1/6 md:w-1/2 w-full px-4 sm:mx-24">
                                    <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3 text-center lg:!text-left">{linksCategory.categoryName}</h2>
                                    <nav className="list-none mb-10">
                                        {
                                            categoriesLinks[
                                                Object.keys(categoriesLinks).filter((categoriesLinksKey) => {
                                                    return categoriesLinksKey === linksCategory.categoryName;
                                                })[0]
                                            ].map((categoryLink, index) => {
                                                return (
                                                    <li key={index} className=' text-center lg:!text-left break-words py-1'>
                                                        <Link to={categoryLink.linkHref} target={categoryLink.linkTarget} className="text-gray-400 hover:text-white">{categoryLink.linkLabel}</Link>
                                                    </li>
                                                )
                                            })
                                        }
                                    </nav>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            <div className="border-t border-teal-600">
                <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
                    {<FeedBack />}
                    <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto ">
                        <span className="inline-flex">
                            <MediaLinks mediaNames={mediaNames} />
                        </span>
                    </span>
                </div>
            </div>
            <div className="bg-gray-800 bg-opacity-75">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-gray-400 text-sm text-center sm:text-left">© {new Date().getFullYear()} {props.appName} —
                        <a href="https://twitter.com/knyttneve" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">All Rights Reserved</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer