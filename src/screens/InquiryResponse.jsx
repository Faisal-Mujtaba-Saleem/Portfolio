import React from 'react';
import leftArrow from '../assets/leftArrow.svg';
import { Link } from 'react-router-dom';

const InquiryResponse = (props) => {
    const userEmail = JSON.parse(
        localStorage.getItem("credentials")
    ).email;
    const userName = JSON.parse(
        localStorage.getItem("credentials")
    ).name;
    function capitalizeFullName(fullName) {
        return fullName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }
    return (
        <section className="text-gray-400 body-font bg-gray-900 w-full">
            <div className="container flex flex-wrap px-5 py-24 mx-auto items-center justify-center">
                <div className="md:w-1/2 md:py-8 md:mb-0 mb-10 pb-10 flex flex-col flex-wrap justify-center items-center border-b border-gray-800">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white text-center">**Thank You for Reaching Out, <span className='font-semibold text-teal-400' >{capitalizeFullName(userName)}</span>!**</h1>
                    <p>
                        We appreciate your interest in our digital services. Your message from the email address <span className='font-semibold text-teal-400' >{userEmail}</span> has been successfully received. Our team is eager to review your inquiry and will get back to you shortly.
                    </p>
                    <br />
                    <p>
                        In the meantime, feel free to explore more about our UI/UX Designing, Graphic Designing, Animation, and other services on our website.
                    </p>
                    <br />
                    <p>
                        Thank you for considering <span className='font-semibold text-teal-400' >{props.appName}</span> for your digital needs!
                    </p>
                    <br />
                    <Link to={'/'} className="text-indigo-400 inline-flex items-center mt-2">
                        <img src={leftArrow} alt="Left Arrow" className='mr-2' />
                        Back to Home
                    </Link>
                </div>
            </div>
        </section >
    )
}

export default InquiryResponse
