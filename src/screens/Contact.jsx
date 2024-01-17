import React, { useContext, useEffect, useState } from 'react';
import MediaLinks from '../components/MediaLinks';
import { json, useNavigate } from 'react-router-dom';
import { AlertContext } from '../contexts/AlertContexts/AlertContext';

const Contact = () => {
    const navigate = useNavigate();

    const { showAlert } = useContext(AlertContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [credentials, setCredentials] = useState([]);

    const handleCredentialChange = (e) => {
        switch (e.target.name) {
            case "name":
                setName(e.target.value);
                break;
            case "email":
                setEmail(e.target.value);
                break;
            case "message":
                setMessage(e.target.value);
                break;
            default:
                break;
        }
    }

    const clearForm = () => {
        setName("");
        setEmail("");
        setMessage("");
    }

    const handleSubmitClick = (e) => {
        const filteredCredentials = credentials.length !== 0 ? credentials.filter((credential) => {
            const condition1 =
                credential.name !== '' &&
                credential.email !== '' &&
                credential.message !== '';
            const condition2 =
                credential.name.length >= 3 &&
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(credential.email) &&
                credential.message.length >= 10;
            // console.log(condition1, condition2);
            return condition1 && condition2;
        }) : false;
        if (filteredCredentials !== false && !!filteredCredentials.length) {
            localStorage.setItem("credentials", JSON.stringify(...filteredCredentials));
            clearForm();
            navigate("/inquiry-response")
        }
        else {
            showAlert("Invalid or empty credentials", "warning");
            window.scrollTo({
                top: 0,
                behaviour: 'smooth'
            })
        }
    }

    useEffect(() => {
        setCredentials([{ name, email, message }])
    }, [name, email, message])


    const mediaNames = ["facebook", "twitter", 'instagram', "messanger"];
    return (
        <section className="text-gray-400 bg-gray-900 body-font relative">
            <div className="container px-5 py-20 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Contact Us</h1>
                    <p className="mb-4 text-base font-semibold text-teal-500 sm:text-xl dark:text-gray-400">
                        Connect with us for seamless digital solutions. Your success is our priority!</p>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-400">Name</label>
                                <input type="text" id="name" name="name" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={name} onChange={handleCredentialChange} />
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
                                <input type="email" id="email" name="email" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={email} onChange={handleCredentialChange} />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
                                <textarea id="message" name="message" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" value={message} onChange={handleCredentialChange}></textarea>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <button type='button' className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleSubmitClick}>Submit</button>
                        </div>
                        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
                            <a href='https://www.gmail.com/' className="text target='_blank'-indigo-400">faisalmujtaba2005@gmail.com</a>
                            <p className="leading-normal my-4">Nizam Uddin Aolia Road, Block 5 KAECHS,
                                <br /> Karachi, Karachi City, Sindh
                            </p>
                            <span className="inline-flex">
                                <MediaLinks mediaNames={mediaNames} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
