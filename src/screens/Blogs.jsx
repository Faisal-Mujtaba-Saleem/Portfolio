import React, { useContext, useEffect, useRef, useState } from 'react';
import { AlertContext } from '../contexts/AlertContexts/AlertContext';
import Posts from '../components/Posts';
import { BlogSApiBaseUrl } from '../Constants';

const Blogs = (props) => {
    // States 
    const [blogPosts, setBlogPosts] = useState([]);
    const [nextPageToken, setNextPageToken] = useState(null);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [blogCategories, setBlogCategories] = useState([]);
    const [hideSearchbar, sethideSearchbar] = useState(true);
    const [searchInputValue, setSearchInputValue] = useState("");

    // Contexts 
    const { showAlert } = useContext(AlertContext);

    // Getting/Fetching Posts related Functions
    const getBlogPosts = async (url) => {
        try {
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
            <div className="text-gray-400 bg-gray-900 text-center pt-4 pb-20">
                <div role="status">
                    <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }

    return (
        <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="relative text-gray-600 focus-within:text-gray-400 float-right">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <button type="submit" className="p-1 focus:outline-none focus:shadow-outline" onClick={handleSearchbar}>
                            <svg fill="#27c9b8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6">
                                <path d="M21 21l-5.2-5.2"></path>
                                <circle cx="10" cy="10" r="8"></circle>
                            </svg>
                        </button>
                    </span>
                    <input type="search" name="search" placeholder="Search" className="py-2 px-6 ml-1 text-sm text-white bg-gray-800 rounded-md pl-10 focus:outline-none focus:bg-gray-700 h-10" hidden={hideSearchbar} value={searchInputValue} onChange={(e) => { setSearchInputValue(e.target.value) }} title='You can search through category, date, or heading in this blog template.' />
                </div>
                <h1 className="text-4xl font-medium text-white title-font mb-2">Blogger's Blog</h1>
                {
                    blogCategories?.map((category, index) => {
                        return !isLoading &&
                            (
                                <React.Fragment key={index}>
                                    <h2 className="font-bold text-2xl text-white md:mt-24 mt-24 py-2 px-2 rounded-xl w-40 text-center border-y-2 border-y-teal-400 border-x-2 border-x-teal-900 hover:bg-slate-600 cursor-pointer">{category}</h2>
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
