import React from 'react'

const Testimonials = () => {
    const testimonials = [
        {
            name: "John Doe",
            position: "CEO, Company XYZ",
            content: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique consequuntur praesentium facilis harum minus nihil ab, quaerat nobis saepe dolore, voluptate aperiam repellat eveniet ullam et, asperiores explicabo qui! Corrupti repellat voluptas similique dolorem suscipit in ipsum hic, placeat quas.",
            img: ``
        },
        {
            name: "HOLDEN CAULFIELD",
            position: "CEO, Company XYZ",
            content: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique consequuntur praesentium facilis harum minus nihil ab, quaerat nobis saepe dolore, voluptate aperiam repellat eveniet ullam et, asperiores explicabo qui! Corrupti repellat voluptas similique dolorem suscipit in ipsum hic, placeat quas.",
            img: ``
        },
        {
            name: "HENRY LETHAM",
            position: "CEO, Company XYZ",
            content: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique consequuntur praesentium facilis harum minus nihil ab, quaerat nobis saepe dolore, voluptate aperiam repellat eveniet ullam et, asperiores explicabo qui! Corrupti repellat voluptas similique dolorem suscipit in ipsum hic, placeat quas.",
            img: ``
        },
    ]
    return (
        <section className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-24 mx-auto">
                <h1 className="text-3xl font-medium title-font text-white mb-12 text-center">Testimonials</h1>
                <div className="flex flex-wrap -m-4">
                    {
                        testimonials.map((testimonial, index) => {
                            return (
                                <div key={index} className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                                    <div className="h-full text-center">
                                        <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10" src="https://dummyimage.com/302x302" />
                                        <p className="leading-relaxed">{testimonial.content}</p>
                                        <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                        <h2 className="text-white font-medium title-font tracking-wider text-sm">{testimonial.name}</h2>
                                        <p className="text-gray-500">{testimonial.position}</p>
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

export default Testimonials