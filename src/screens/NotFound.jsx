import React from 'react'

const NotFound = () => {
    return (
        <section className="text-gray-400 bg-gray-900 body-font">
            <div className="container mx-auto flex px-5 py-24 flex-col items-center">
                <h1 className='text-white text-4xl font-semibold py-4 h-full'>Not Found</h1>
                <p> We're sorry, but the page you're looking for is missing. Please double-check the URL or return to our homepage. We apologize for any inconvenience.</p>
            </div>
        </section>
    )
}

export default NotFound;