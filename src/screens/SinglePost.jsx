import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const SinglePost = (props) => {
    // https://www.googleapis.com/blogger/v3/blogs/2399953/posts/7706273476706534553?key=AIzaSyAD8e-ItqTkjfYwVKW3CxApv8p43np353U
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
            let url = `https://www.googleapis.com/blogger/v3/blogs/2399953/posts/${postId}?key=${props.apiKey}`;
            await getPost(url);
        };

        fetchData();
    }, []);
    return (
        <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="-my-8 divide-y-2 divide-gray-800">
                    <div className="my-8 divide-y-2 divide-gray-800 border-b-2 border-gray-400">
                        <div className="py-8 flex flex-wrap md:flex-nowrap">
                            <div className="md:w-64 md:my-6 my-6 flex-shrink-0 flex flex-col">
                                <span className="font-semibold title-font text-white bg-slate-600 my-2 py-2 rounded-md w-28 text-center cursor-pointer">{post?.author?.displayName}</span>
                                {/* <span className="mt-1 text-gray-500 text-sm text-center w-28">{new Date(post?.published).toDateString()}</span> */}
                            </div>
                            <div className="md:flex-grow">
                                <h2 className="text-2xl font-medium text-white title-font mb-2">{post?.title}</h2>
                                <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: post?.content }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SinglePost