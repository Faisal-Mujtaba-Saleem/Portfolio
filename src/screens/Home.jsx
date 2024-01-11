import React from 'react';
import future_plain from '../assets/Home svgs/future_plain.svg';
import brain from '../assets/Home svgs/brain.svg';
import idea_bulb from '../assets/Home svgs/idea_bulb.svg';

const Home = () => {
    const featuresCards = [
        {
            featureHeading: `Future Concept`,
            featureContent: ``,
            featureSvg: future_plain
        },
        {
            featureHeading: `The Big Ideas`,
            featureContent: ``,
            featureSvg: brain
        },
        {
            featureHeading: `Creative Solutions`,
            featureContent: ``,
            featureSvg: idea_bulb
        }
    ]
    return (
        <>
            <section className="text-gray-400 bg-gray-900 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <p className="mb-8 leading-relaxed text-teal-500 font-bold">CREATIVE MIND, CREATIVE WORKS.</p>
                        <h1 className="title-font sm:text-5xl text-4xl mb-10 font-bold text-white">Welcome to I-Tech
                            <br className="hidden lg:inline-block" />Studio.
                        </h1>
                        <div className="flex justify-start">
                            <button className="ml-0 inline-flex text-gray-400 bg-gray-800 border-2 border-teal-800 py-4 px-6 focus:outline-none hover:bg-gray-700 hover:text-white font-bold rounded text-lg">GETTING STARTED</button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                    </div>
                </div>
            </section>

            <section className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="flex flex-wrap -m-4">
                        {
                            featuresCards.map((featuresCard, index) => {
                                return <div key={index} className="p-4 md:w-1/3">
                                    <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
                                        <div className="flex items-center mb-3">
                                            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                                <img src={featuresCard.featureSvg} alt={featuresCard.featureHeading} />
                                            </div>
                                            <h2 className="text-white text-lg title-font font-medium">
                                                {featuresCard.featureHeading}
                                            </h2>
                                        </div>
                                        <div className="flex-grow">
                                            <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                                        </div>
                                    </div>
                                </div>
                            })
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
