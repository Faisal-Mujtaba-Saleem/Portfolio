import React from 'react'
import Testimonials from '../components/Testimonials'

const About = () => {
  const aboutCards = [
    {
      aboutCardHeading: `Who we are`,
      aboutCardContent: `Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.`
    },
    {
      aboutCardHeading: `Our philosophy`,
      aboutCardContent: `Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.`
    },
    {
      aboutCardHeading: `How we work`,
      aboutCardContent: `Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.`
    }
  ]
  return (
    <>
      <section className="text-gray-400 body-font border-0 border-b-2 border-teal-400 bg-gray-900 h-full">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">About Us</h1>
            <h2 className="text-xs text-teal-500 tracking-widest font-medium title-font mb-1">WE ARE MORE THAN DIGITAL AGENCY</h2>
          </div>
          <div className="flex flex-wrap justify-center">
            {
              aboutCards.map((aboutCard, index) => {
                return (
                  <div key={index} className={`xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-b-2 border-teal-800 ${!!index && `lg:border-l-2 lg:border-teal-800`}`}>
                    <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">{aboutCard.aboutCardHeading}</h2>
                    <p className="leading-relaxed text-base mb-4">{aboutCard.aboutCardContent}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  )
}

export default About
