import React from 'react'
import { useLocation } from 'react-router-dom'

import facebookSvg from '../assets/Media_Links Svgs/facebookSvg.svg'
import instagramSvg from '../assets/Media_Links Svgs/instagramSvg.svg'
import twitterSvg from '../assets/Media_Links Svgs/twitterSvg.svg'
import linkedinSvg from '../assets/Media_Links Svgs/linkedinSvg.svg'
import MediaLinks from './MediaLinks'


const Footer = () => {
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
                linkTarget: `_blank`,
                linkLabel: `03308479616`,
                linkSvg: ``
            },
            {
                linkHref: `mailto:faisalmujtaba2005@gmail.com`,
                linkTarget: `_blank`,
                linkLabel: `faisalmujtaba2005@gmail.com`,
                linkSvg: ``,
            },
            {
                linkHref: `https://maps.app.goo.gl/KnB58TZjAwVdYNuW8`,
                linkTarget: `_blank`,
                linkLabel: `Karachi, Karachi City, Sindh, Pakistan`,
                linkSvg: ``,
            },
            {
                linkHref: location.pathname,
                linkTarget: `_blank`,
                linkLabel: `Monday to Friday`,
                linkSvg: ``,
            },
        ],
        'Our Services': [
            {
                linkHref: `/services`,
                linkTarget: `_self`,
                linkLabel: `Services`,
                linkSvg: ``
            },
            {
                linkHref: `/works`,
                linkTarget: `_self`,
                linkLabel: `Works`,
                linkSvg: ``
            }
        ],
        'About Us': [
            {
                linkHref: `/about`,
                linkTarget: `_self`,
                linkLabel: `About`,
                linkSvg: ``
            },
            {
                linkHref: `/contact`,
                linkTarget: `_self`,
                linkLabel: `Contact Us`,
                linkSvg: ``
            }
        ]

    }

    const mediaNames = ["facebook", "twitter", 'instagram', "linkedin"];
    return (
        <footer className="text-gray-400 bg-gray-900 body-font border-t border-teal-600">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
                    {
                        linksCategories.map((linksCategory, index) => {
                            return (
                                <div key={linksCategory.categoryName} className="lg:w-1/6 md:w-1/2 w-full px-4 mx-24">
                                    <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">{linksCategory.categoryName}</h2>
                                    <nav className="list-none mb-10">
                                        {
                                            categoriesLinks[
                                                Object.keys(categoriesLinks).filter((categoriesLinksKey) => {
                                                    return categoriesLinksKey === linksCategory.categoryName;
                                                })[0]
                                            ].map((categoryLink, index) => {
                                                return (
                                                    <li key={index}>
                                                        <a href={categoryLink.linkHref} target={categoryLink.linkTarget} className="text-gray-400 hover:text-white">{categoryLink.linkLabel}</a>
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
                    <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
                        <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
                            <label htmlFor="footer-field" className="leading-7 text-sm text-gray-400">Your Feedback</label>
                            <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Submit</button>
                        <p className="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 text-center sm:text-left">Bitters chicharrones fanny pack
                            <br className="lg:block hidden" />waistcoat green juice
                        </p>
                    </div>
                    <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
                        <span className="inline-flex">
                            <MediaLinks mediaNames={mediaNames} />
                        </span>
                    </span>
                </div>
            </div>
            <div className="bg-gray-800 bg-opacity-75">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-gray-400 text-sm text-center sm:text-left">© 2020 Tailblocks —
                        <a href="https://twitter.com/knyttneve" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@knyttneve</a>
                    </p>
                    <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-400 text-sm">Enamel pin tousled raclette tacos irony</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer