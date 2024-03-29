import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import leftArrow from '../assets/leftArrow.svg';
import { BlogSApiBaseUrl } from '../Constants';

const SinglePost = (props) => {
    const [post, setPost] = useState({});
    const [fetchError, setFetchError] = useState("");
    const [isLoading, setIsLoading] = useState(true)

    const { postId } = useParams();

    const getPost = async (url) => {
        try {
            let fetchedPost = await fetch(url);
            fetchedPost = await fetchedPost.json();

            setPost(fetchedPost);
        } catch (error) {
            console.log(error);
            setFetchError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            let url = `${BlogSApiBaseUrl}/${postId}?key=${props.apiKey}`;
            await getPost(url);
        };

        fetchData();
    }, []);
    return (
        <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
            <div className="container px-5 py-16 mx-auto">
                <div className="-my-8 divide-y-2 divide-gray-800">
                    <div className="my-4 divide-y-2 divide-gray-800">
                        <div className="py-6 flex flex-wrap md:flex-nowrap">
                            <div className="md:w-64 md:my-6 my-6 flex-shrink-0 flex flex-col">
                                <span className="font-semibold title-font text-white bg-slate-600 my-2 py-2 rounded-md w-28 text-center cursor-pointer">{post?.author?.displayName}</span>
                                <span className="mt-1 text-gray-500 text-sm text-center w-28">{new Date(post?.published).toDateString()}</span>
                            </div>
                            <div className="md:flex-grow">
                                <h2 className="text-2xl font-medium text-white title-font mb-2">{post?.title}</h2>
                                <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: post?.content }} />
                                <br />
                                <Link to={'/blogs'} className="text-indigo-400 inline-flex items-center mt-2">
                                    <img src={leftArrow} alt="Left Arrow" className='mr-2' />
                                    Back to Blogs
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SinglePost