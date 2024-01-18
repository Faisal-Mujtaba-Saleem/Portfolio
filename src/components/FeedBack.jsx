import React, { useContext, useEffect, useRef, useState } from 'react'
import { AlertContext } from '../contexts/AlertContexts/AlertContext';

const FeedBack = () => {
    const feedbackRef = useRef(null);
    const { showAlert } = useContext(AlertContext);

    const onSubmitFeedback = (e) => {
        if (!!feedbackRef.current.value && feedbackRef.current.value.length >= 4) {
            localStorage.setItem('user_feedback', feedbackRef.current.value);
            showAlert("Feedback Submitted, Thank you for sharing your thoughts with us.", "info");
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // You can use 'auto' or 'smooth' for scrolling behavior
            });
            feedbackRef.current.value = "";
        }
    }

    return (
        <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
            <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
                <label htmlFor="footer-field" className="leading-7 text-sm text-gray-400">Your Feedback</label>
                <input ref={feedbackRef} type="text" id="footer-field" name="footer-field" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" onClick={onSubmitFeedback}>Submit</button>
            <p className="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 sm:text-left">Share your thoughts!
                <br className="lg:block hidden" /> We appreciate your brief feedback to improve our services
            </p>
        </div>
    )
}

export default FeedBack