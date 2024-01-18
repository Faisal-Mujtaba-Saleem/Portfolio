import React from 'react'
import rightArrow from '../assets/rightArrowBright.svg'
import { Link } from 'react-router-dom'

const Works = () => {
  const worksCards = [
    {
      companyName: "Alphabet Inc.",
      workTitle: "Official website",
      description: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam ad repudiandae saepe ea veritatis, veniam unde.",
      caseStudyLink: {
        text: "View case study",
        href: "#",
      },
    },
    {
      companyName: "Microsoft Corp.",
      workTitle: "Management system",
      description: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam ad repudiandae saepe ea veritatis, veniam unde.",
      caseStudyLink: {
        text: "View case study",
        href: "#",
      },
    },
    {
      companyName: "Adobe Inc.",
      workTitle: "Logo design",
      description: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam ad repudiandae saepe ea veritatis, veniam unde.",
      caseStudyLink: {
        text: "View case study",
        href: "#",
      },
    },
  ]
  return (
    <section className=" bg-gray-900 dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl dark:text-white">
            Our Work
          </h2>
          <p className="mt-4 text-base font-normal text-teal-500 sm:text-xl dark:text-gray-400">
            Crafted with skill and care to help our clients grow their business!
          </p>
        </div>

        <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">

          {
            worksCards.map((worksCard, index) => {
              return (
                <div key={index} className="space-y-4">
                  <span
                    className="bg-gray-700 text-white text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                    {worksCard.companyName}
                  </span>
                  <h3 className="text-2xl font-bold leading-tight text-white dark:text-white">
                    {worksCard.workTitle}
                  </h3>
                  <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                    {worksCard.description}
                  </p>
                  <Link href={worksCard.caseStudyLink.href} title=""
                    className="text-white bg-blue-600 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 hover:bg-blue-700 dark:focus:ring-primary-800"
                    role="button">
                    {worksCard.caseStudyLink.text}
                    <img className='ml-2' src={rightArrow} alt="Right Arrow" />
                  </Link>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Works
