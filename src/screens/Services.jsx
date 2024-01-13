import React from 'react';
import monitoringGraphSvg from '../assets/services svgs/monitoringGraphSvg.svg';
import editSvg from '../assets/services svgs/editSvg.svg';
import peopleSvg from '../assets/services svgs/peopleSvg.svg';
import globeSvgSvg from '../assets/services svgs/globeSvg.svg';
import tagSvg from '../assets/services svgs/tagSvg.svg';
import mediaGraphSvg from '../assets/services svgs/mediaGraphSvg.svg';

const Services = () => {
    const servicesCards = [
        {
            serviceHeading: `Web Development`,
            serviceContent: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae minima possimus nam.`,
            serviveSvg: monitoringGraphSvg
        },
        {
            serviceHeading: `UX Designs`,
            serviceContent: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae minima possimus nam.`,
            serviveSvg: editSvg
        },
        {
            serviceHeading: `UI Designs`,
            serviceContent: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae minima possimus nam.`,
            serviveSvg: peopleSvg
        },
        {
            serviceHeading: `Graphic Designing`,
            serviceContent: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae minima possimus nam.`,
            serviveSvg: globeSvgSvg
        },
        {
            serviceHeading: `Animation`,
            serviceContent: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae minima possimus nam.`,
            serviveSvg: tagSvg
        },
        {
            serviceHeading: `Digital Marketing`,
            serviceContent: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae minima possimus nam.`,
            serviveSvg: mediaGraphSvg
        },
    ]

    const handleCardsBgOnFocus = (e) => {
        e.target.classList.add('bg-cyan-400')
        e.target.classList.add('text-black')
    }
    const handleCardsBgOnBlur = (e) => {
        e.target.classList.remove('bg-cyan-400')
        e.target.classList.remove('text-black')
    }
    return (
        <section className="text-gray-400 body-font bg-gray-900">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Services</h1>
                    <p className="lg:w-1/2 w-full leading-relaxed text-opacity-80 font-bold text-teal-500">OUR SERVICES FOR CLIENT</p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {
                        servicesCards.map((serviceCard, index) => {
                            return (
                                <div key={index} className="xl:w-1/3 md:w-1/2 p-4">
                                    <div tabIndex={index} className="border border-gray-700 border-opacity-75 p-6 rounded-lg" onFocus={handleCardsBgOnFocus} onBlur={handleCardsBgOnBlur}>
                                        <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">
                                            <img src={serviceCard.serviveSvg} alt="" />
                                        </div>
                                        <h2 className="text-lg text-white font-medium title-font mb-2">
                                            {serviceCard.serviceHeading}
                                        </h2>
                                        <p className="leading-relaxed text-base ">{serviceCard.serviceContent}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Services
