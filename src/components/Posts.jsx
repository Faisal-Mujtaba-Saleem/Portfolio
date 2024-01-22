import React, { useState } from 'react';
import rightArrowBright from '../assets/rightArrowBright.svg';
import { useNavigate } from 'react-router-dom';

const Posts = ({ blogItem }) => {
    const navigate = useNavigate();

    const [contentDisplayPermissionsObject, setContentDisplayPermissionsObject] = useState({});

    const handleShowContent = (postId) => {
        setContentDisplayPermissionsObject(prevState => ({
            ...prevState,
            [postId]: !prevState[postId]
        }));
    };

    const handleViewPost = (postId) => {
        navigate(`/blogPost/${postId}`);
    }

    return (
        <div className="my-8 divide-y-2 divide-gray-800 border-b-2 border-gray-400">
            <div className="py-8 flex flex-wrap md:flex-nowrap flex-col">
                <div className="md:w-64 md:my-6 my-6 flex-shrink-0 flex flex-col">
                    <span className="font-semibold title-font text-white bg-slate-600 my-2 py-2 rounded-md w-28 text-center cursor-pointer">{blogItem?.author?.displayName}</span>
                    <span className="mt-1 text-gray-500 text-sm text-center w-28">{new Date(blogItem?.published).toDateString()}</span>
                </div>
                <div className="md:flex-grow">
                    <h2 className="text-2xl font-medium text-white title-font mb-2">{blogItem?.title}</h2>
                    <p className="leading-relaxed" hidden={!contentDisplayPermissionsObject[blogItem?.id]} dangerouslySetInnerHTML={{ __html: blogItem?.content }} />

                    <a className="text-indigo-400 inline-flex items-center mt-4 cursor-pointer" hidden={!contentDisplayPermissionsObject[blogItem?.id]} onClick={
                        () => {
                            handleViewPost(blogItem.id);
                        }
                    }>View Post
                        <img src={rightArrowBright} alt="Right Arrow" className='mx-2' />
                    </a>

                    <button className="flex mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={() => handleShowContent(blogItem?.id)}>
                        {
                            !contentDisplayPermissionsObject[blogItem?.id] ? `Show Content` : `Hide Content`
                        }
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Posts;
