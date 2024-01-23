import React, { useContext, useEffect, useRef, useState } from 'react';
import { AlertContext } from '../contexts/AlertContexts/AlertContext';
import Posts from '../components/Posts';
import { BlogSApiBaseUrl } from '../Constants';
import Spinner from '../components/Spinner';

const Blogs = (props) => {
    // States 
    const [blogPosts, setBlogPosts] = useState([]);
    const [nextPageToken, setNextPageToken] = useState(null);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingMore, setIsLoadingMore] = useState(true);
    const [blogCategories, setBlogCategories] = useState([]);
    const [hideSearchbar, sethideSearchbar] = useState(true);
    const [searchInputValue, setSearchInputValue] = useState("");

    // Contexts 
    const { showAlert } = useContext(AlertContext);

    // Getting/Fetching Posts related Functions
    const getBlogPosts = async (url) => {
        try {
            setIsLoadingMore(true);
            let fetchedBlogPosts = await fetch(url);
            fetchedBlogPosts = await fetchedBlogPosts.json();

            setBlogPosts((prevBlogPosts) => {
                return {
                    ...fetchedBlogPosts,
                    items: !!prevBlogPosts?.items ?
                        [...prevBlogPosts?.items, ...fetchedBlogPosts.items] :
                        [...fetchedBlogPosts.items]
                }
            });
            setNextPageToken(fetchedBlogPosts.nextPageToken);
        } catch (error) {
            console.log(error);
            setFetchError(error.message);
        } finally {
            setIsLoading(false);
            setIsLoadingMore(false);
        }
    };

    const handleLoadMore = () => {
        let url = `${BlogSApiBaseUrl}?key=${props.apiKey}&maxResults=${props?.results}&pageToken=${nextPageToken}`;
        getBlogPosts(url);
    }

    // Searchbar Funtionality 
    const didSearchIncludes = (title, publisheDate, category) => {
        return title.toLowerCase().includes(searchInputValue.toLowerCase()) || publisheDate.toLowerCase().includes(searchInputValue.toLowerCase()) || category.toLowerCase().includes(searchInputValue.toLowerCase())
    }

    // SearchBar Handler 
    const handleSearchbar = (e) => {
        !hideSearchbar ? sethideSearchbar(true) : sethideSearchbar(false);
    }

    // Dependent Actions 
    useEffect(() => {
        const fetchData = async () => {
            let url = `https://www.googleapis.com/blogger/v3/blogs/2399953/posts?key=${props?.apiKey}&maxResults=${props?.results}`;
            await getBlogPosts(url);
        };

        fetchData();
    }, []);

    useEffect(() => {
        let displayNames = blogPosts?.items?.map((blogItem) => {
            return blogItem?.author?.displayName;
        });
        displayNames = displayNames && [...new Set([...displayNames])];

        setBlogCategories(displayNames?.sort());
    }, [blogPosts]);

    useEffect(() => {
        if (fetchError) {
            showAlert(fetchError, 'Error');
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    }, [fetchError]);

    if (isLoading) {
        return (
            <Spinner />
        )
    }

    return (
        <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="text-gray-600 focus-within:text-gray-400 flex w-full sm:!h-full sm:!flex-row flex-col justify-between" style={{
                    height: "40vh"
                }}>
                    <h1 className="text-4xl font-medium text-white title-font mb-2">Blogger's Blog</h1>

                    <span className="flex items-center pl-2">
                        <button type="submit" className="p-1 focus:outline-none focus:shadow-outline" onClick={handleSearchbar}>
                            <svg fill="#27c9b8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6">
                                <path d="M21 21l-5.2-5.2"></path>
                                <circle cx="10" cy="10" r="8"></circle>
                            </svg>
                        </button>
                        <input type="zsearch" name="search" placeholder="Search" className="py-2 px-6 ml-1 text-sm text-white bg-gray-800 rounded-md focus:outline-none focus:bg-gray-700 h-10" hidden={hideSearchbar} value={searchInputValue} onChange={(e) => { setSearchInputValue(e.target.value) }} title='You can search through category, date, or heading in this blog template.' />
                    </span>
                </div>
                {
                    blogCategories?.map((category, index) => {
                        return !isLoading &&
                            (
                                <React.Fragment key={index}>
                                    <h2 className="font-bold text-2xl text-white md:mt-20 mt-24 py-2 px-2 rounded-xl w-40 text-center border-y-2 border-y-teal-400 border-x-2 border-x-teal-900 hover:bg-slate-600 cursor-pointer">{category}</h2>
                                    {
                                        blogPosts?.items?.filter((blogItem) => {
                                            return blogItem?.author?.displayName === category && didSearchIncludes(blogItem?.title, new Date(blogItem?.published).toDateString(), category)
                                        }).map((blogItem) => {
                                            return (
                                                <Posts key={Math.random()} blogItem={blogItem} />
                                            )
                                        })
                                    }
                                </React.Fragment>
                            )
                    })
                }

                {
                    !!blogPosts.items.length &&
                    isLoadingMore &&
                    <Spinner />
                }

                {nextPageToken && (
                    <button
                        className="bg-indigo-500 text-white py-2 px-6 rounded-full mt-8 hover:bg-indigo-600 focus:outline-none"
                        onClick={handleLoadMore}
                    >
                        Load More
                    </button>
                )}
            </div>
        </section>
    );
};

export default Blogs;
