import React from 'react';
import monitoring from '../assets/services svgs/monitoring.svg';
import edit from '../assets/services svgs/edit.svg';
import ui from '../assets/services svgs/ui.svg';
import socialMedia from '../assets/services svgs/globe.svg';
import designTag from '../assets/services svgs/design_tag.svg';
import mediaGraph from '../assets/services svgs/media_graph.svg';

const Services = () => {
    const servicesCards = [
        {
            serviceHeading: `Digital Strategy`,
            serviceContent: ``,
            serviveSvg: monitoring
        },
        {
            serviceHeading: `UX Designs`,
            serviceContent: ``,
            serviveSvg: edit
        },
        {
            serviceHeading: `UI Designs`,
            serviceContent: ``,
            serviveSvg: ui
        },
        {
            serviceHeading: `Social Media`,
            serviceContent: ``,
            serviveSvg: socialMedia
        },
        {
            serviceHeading: `Design Concepts`,
            serviceContent: ``,
            serviveSvg: designTag
        },
        {
            serviceHeading: `Media Paring`,
            serviceContent: ``,
            serviveSvg: mediaGraph
        },
    ]
    return (
        <section class="text-gray-400 body-font bg-gray-900">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Services</h1>
                    <p class="lg:w-1/2 w-full leading-relaxed text-opacity-80 font-bold text-teal-500">OUR SERVICES FOR CLIENT</p>
                </div>
                <div class="flex flex-wrap -m-4">
                    {
                        servicesCards.map((serviceCard) => {
                            return (
                                <div class="xl:w-1/3 md:w-1/2 p-4">
                                    <div class="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                                        <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">
                                            <img src={serviceCard.serviveSvg} alt="" />
                                        </div>
                                        <h2 class="text-lg text-white font-medium title-font mb-2">
                                            {serviceCard.serviceHeading}
                                        </h2>
                                        <p class="leading-relaxed text-base ">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
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
